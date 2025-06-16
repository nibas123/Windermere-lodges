'use client';

import * as React from 'react';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface Lodge {
  id: string;
  name: string;
  description: string;
  maxGuests: number;
  pricePerNight: number;
}

const SAMPLE_LODGES: Lodge[] = [
  {
    id: '1',
    name: 'Lakeside Villa',
    description: 'Luxurious villa with lake view',
    maxGuests: 6,
    pricePerNight: 350,
  },
  {
    id: '2',
    name: 'Forest Cabin',
    description: 'Cozy cabin in the woods',
    maxGuests: 4,
    pricePerNight: 250,
  },
  {
    id: '3',
    name: 'Mountain Lodge',
    description: 'Spacious lodge with mountain views',
    maxGuests: 8,
    pricePerNight: 450,
  },
];

interface LodgeSelectorProps {
  onChange?: (lodge: Lodge | undefined) => void;
}

export function LodgeSelector({ onChange }: LodgeSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedLodge, setSelectedLodge] = React.useState<Lodge>();

  const handleSelect = (lodge: Lodge) => {
    setSelectedLodge(lodge);
    setOpen(false);
    onChange?.(lodge);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-start"
        >
          <Home className="mr-2 h-4 w-4" />
          {selectedLodge ? selectedLodge.name : 'Select a lodge...'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search lodges..." />
          <CommandEmpty>No lodge found.</CommandEmpty>
          <CommandGroup>
            {SAMPLE_LODGES.map((lodge) => (
              <CommandItem
                key={lodge.id}
                value={lodge.name}
                onSelect={() => handleSelect(lodge)}
              >
                <Home className="mr-2 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{lodge.name}</span>
                  <span className="text-sm text-muted-foreground">
                    Up to {lodge.maxGuests} guests • £{lodge.pricePerNight}/night
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
} 