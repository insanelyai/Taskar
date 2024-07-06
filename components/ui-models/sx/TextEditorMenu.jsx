import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  ListTodo,
  Underline,
} from "lucide-react";
import EditorButton from "./EditorButton";

export default function TextEditorMenu({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div className='w-full lg:max-w-lg grid grid-cols-6 md:grid-cols-6 lg:flex gap-3 mx-auto'>
      <EditorButton
        editor={editor}
        action='toggleBold'
        isActive={editor.isActive("bold")}
        icon={Bold}
      />
      <EditorButton
        editor={editor}
        action='toggleItalic'
        isActive={editor.isActive("italic")}
        icon={Italic}
      />
      <EditorButton
        editor={editor}
        action='toggleUnderline'
        isActive={editor.isActive("underline")}
        icon={Underline}
      />
      <EditorButton
        editor={editor}
        action='toggleHeading'
        isActive={editor.isActive("heading", { level: 1 })}
        icon={Heading1}
        options={{ level: 1 }}
      />
      <EditorButton
        editor={editor}
        action='toggleHeading'
        isActive={editor.isActive("heading", { level: 2 })}
        icon={Heading2}
        options={{ level: 2 }}
      />
      <EditorButton
        editor={editor}
        action='toggleHeading'
        isActive={editor.isActive("heading", { level: 3 })}
        icon={Heading3}
        options={{ level: 3 }}
      />
      <EditorButton
        editor={editor}
        action='toggleBulletList'
        isActive={editor.isActive("bulletList")}
        icon={List}
      />
      <EditorButton
        editor={editor}
        action='toggleOrderedList'
        isActive={editor.isActive("orderedList")}
        icon={ListOrdered}
      />
      <EditorButton
        editor={editor}
        action='setTextAlign'
        isActive={editor.isActive({ textAlign: "left" })}
        icon={AlignLeft}
        options='left'
      />
      <EditorButton
        editor={editor}
        action='setTextAlign'
        isActive={editor.isActive({ textAlign: "center" })}
        icon={AlignCenter}
        options='center'
      />
      <EditorButton
        editor={editor}
        action='setTextAlign'
        isActive={editor.isActive({ textAlign: "right" })}
        icon={AlignRight}
        options='right'
      />
    </div>
  );
}
