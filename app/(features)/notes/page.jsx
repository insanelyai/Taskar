"use client";

import NotesCard from "@/components/ui-models/Notes/NotesCard";
import NotesDialog from "@/components/ui-models/Notes/NotesDialog";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchNotes = async () => {
      // TODO: Fetch notes from server
      const response = await axios.get('/api/notes/fetch')
      if(response.status === 200) {
        setNotes(response.data.content)
      }
    }
    fetchNotes()
  }, [])

  return (
    <>
      <div className='w-full'>
        <div className='flex items-center justify-between container my-5'>
          <span className='text-xl sm:text-3xl font-semibold p-5'>Notes</span>
          <NotesDialog />
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {notes.map((note) => {
            return <NotesCard key={note.id} title={note.content.title} content={note.content.content} color={note.content.color} />
          })}
        </div>
      </div>
    </>
  );
}
