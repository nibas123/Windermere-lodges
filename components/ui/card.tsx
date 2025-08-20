<<<<<<< HEAD
import * as React from "react"

import { cn } from "@/lib/utils"
=======
import * as React from "react";

import { cn } from "@/lib/utils";
>>>>>>> prisma

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "rounded-lg border bg-card text-card-foreground shadow-sm",
=======
      "rounded-lg bg-card text-card-foreground", //border shadow-sm
>>>>>>> prisma
      className
    )}
    {...props}
  />
<<<<<<< HEAD
))
Card.displayName = "Card"
=======
));
Card.displayName = "Card";
>>>>>>> prisma

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"
=======
    className={cn("flex flex-col items-center space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";
>>>>>>> prisma

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "text-2xl font-semibold leading-none tracking-tight",
=======
      "text-sm font-semibold leading-none tracking-tight align-middle text-wrap text-center",
>>>>>>> prisma
      className
    )}
    {...props}
  />
<<<<<<< HEAD
))
CardTitle.displayName = "CardTitle"
=======
));
CardTitle.displayName = "CardTitle";
>>>>>>> prisma

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
<<<<<<< HEAD
))
CardDescription.displayName = "CardDescription"
=======
));
CardDescription.displayName = "CardDescription";
>>>>>>> prisma

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
<<<<<<< HEAD
))
CardContent.displayName = "CardContent"
=======
));
CardContent.displayName = "CardContent";
>>>>>>> prisma

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
<<<<<<< HEAD
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
=======
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
>>>>>>> prisma
