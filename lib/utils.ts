import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCreditCardNumber(value: string): string {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
  const matches = v.match(/\d{4,16}/g)
  const match = (matches && matches[0]) || ""
  const parts = []

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4))
  }

  if (parts.length) {
    return parts.join(" ")
  }
  return value
}

export function formatExpiryDate(value: string): string {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
  
  if (v.length >= 2) {
    const month = v.slice(0, 2)
    const year = v.slice(2)
    if (parseInt(month) > 12) {
      return "12" + (year ? "/" + year : "")
    }
    return month + (year ? "/" + year : "")
  }
  return v
}

export function formatCVC(value: string): string {
  return value.replace(/\s+/g, "").replace(/[^0-9]/gi, "").slice(0, 3)
}

export function getErrorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

// export const apiErrorHandler = (error: any) => {
//   try {
//     const err = error instanceof Error;
//     const errorMessage = err.response?.data || "An unexpected error occurred.";
//     if (err.response) {
//       return { error: errorMessage, data:null, status: err.response.status };
//     }
//   } catch (err) {
//     console.log(err, "serious problem");
//     throw new Error("An unexpected error occurred.");
//   }
// };