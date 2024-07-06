import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import Tiptap from "../TipTap";

export default function NotesDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='h-10 flex items-center justify-between gap-2'>
            <PlusIcon /> Add Note
          </Button>
        </DialogTrigger>
        <DialogContent className='max-w-sm lg:max-w-xl'>
          <DialogTitle>Add Note</DialogTitle>
          <Tiptap />
        </DialogContent>
      </Dialog>
    </>
  );
}
