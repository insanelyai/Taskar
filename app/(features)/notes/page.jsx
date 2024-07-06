import NotesDialog from "@/components/ui-models/sx/NotesDialog";
import Tiptap from "@/components/ui-models/TipTap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

export default function page() {
  return (
    <>
      <div className='w-full'>
        <div className='container max-w-screen-2xl'>
          <div className='flex items-center justify-between py-10 md:px-9'>
            <span className='text-3xl font-semibold'>Notes</span>
            <NotesDialog />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
            <Card></Card>
          </div>
        </div>
      </div>
    </>
  );
}
