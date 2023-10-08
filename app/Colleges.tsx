"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { College } from "./types"

interface CollegesProps {
    colleges: College[];
    value: string;
    onSelect: (last: string, college: string) => void;
}
export function Colleges({ colleges, value, onSelect }: CollegesProps) {
  const [open, setOpen] = React.useState(false)
  // const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={value == "" ? "default": "outline"}
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? colleges.find((college) => college.value === value)?.label
            : "Add college..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search college..." />
          <CommandEmpty>No college found.</CommandEmpty>
          <CommandGroup>
            {colleges.map((college) => (
              <CommandItem
                key={college.value}
                onSelect={(currentValue) => {
                    setOpen(false);
                    onSelect(value, currentValue);
                  // setValue(currentValue === value ? "" : currentValue)
                  // setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === college.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {college.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

