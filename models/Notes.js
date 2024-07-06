import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps }
);

const Notes = mongoose.models.Notes || mongoose.model("Notes", NotesSchema);

export default Notes;
