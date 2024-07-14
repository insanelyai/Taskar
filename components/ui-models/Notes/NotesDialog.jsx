'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import NotesForm from "./NotesForm";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function NotesDialog() {
  const [cardColor, setCardColor] = useState("#ffaba")
  
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className='p-6'>
            <Button
              variant='outline'
              className='h-10 md:flex items-center justify-between gap-2 hidden'>
              <PlusIcon strokeWidth={1.5} className='w-4 h-4' /> Add Note
            </Button>
            <Button variant='outline' size='icon' className='h-10 md:hidden'>
              <PlusIcon strokeWidth={1.5} className='w-4 h-4' />
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className='max-w-sm lg:max-w-xl' style={{backgroundColor: cardColor}}>
          <DialogTitle>Add a note</DialogTitle>
          <DialogDescription/>
          <NotesForm setColor={setCardColor} />
        </DialogContent>
      </Dialog>
    </>
  );
}
