"use client";

import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import TextEditorMenu from "./sx/TextEditorMenu";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import { Button } from "../ui/button";
import axios from "axios";

export default function Tiptap() {
  const [content, setContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      BulletList,
      ListItem,
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setContent(editor.getJSON());
    },
  });

  if (!editor) {
    return null;
  }

  const saveContent = async (content) => {
    try {
      const res = await axios.post("/api/notes/add", content);
      if (res.status === 201) {
        console.log("Content saved successfully");
      } else {
        console.error("Failed to save content");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center mx-auto'>
      <EditorContent
        editor={editor}
        className='border border-border m-5 w-full h-[300px]'
      />
      <TextEditorMenu editor={editor} />

      <Button className='w-full h-10 mt-5' onClick={() => saveContent(content)}>
        Save
      </Button>
    </div>
  );
}
