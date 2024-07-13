"use client";

import NotesCard from "@/components/ui-models/Notes/NotesCard";
import NotesDialog from "@/components/ui-models/Notes/NotesDialog";

export default function Page() {
  return (
    <>
      <div className='w-full'>
        <div className='flex items-center justify-between container my-5'>
          <span className='text-xl sm:text-3xl font-semibold p-5'>Notes</span>
          <NotesDialog />
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <NotesCard/>
        </div>
      </div>
    </>
  );
}
