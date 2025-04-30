"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Instructions = {
  signature: string
  amount: number
  fromAddress: string
  isDust: boolean
  isAddrPoisoned: boolean
}

export const columns: ColumnDef<Instructions>[] = [
  {
    accessorKey: "signature",
    header: "Signature",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "fromAddress",
    header: "By",
  },
  {
    accessorKey: "isDust",
    header: "Dust",
  },
  {
    accessorKey: "isAddrPoisoned",
    header: "Poisoned",
  },
]
