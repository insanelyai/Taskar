"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Palette } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string(),
  content: z.string(),
});

const CardColors = [
  { red: "#fca5a5" },
  { orange: "#fdba74" },
  { yellow: "#fde047" },
  { green: "#86efac" },
  { blue: "#7dd3fc" },
  { purple: "#d8b4fe" },
  { pink: "#fb7185" },
  { gray: "#d9d9d9" },
  { none: "#fffeee" },
];

export default function NotesForm({ setColor }) {
  const [colorView, toggleColorView] = useState(true);
  const [colorValue, setColorValue] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      color: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      values.color = colorValue;

      const res = await axios.post("/api/notes/add", values);
      if (res.status === 200) {
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleColorChange = (color) => {
    setColor(color);
    setColorValue(color);
  };

  return (
    <>
      <Form {...form}>
        <form
          className="overflow-hidden"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Give a title to your note..."
                    className="border-none focus-visible:ring-0 font-semibold"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write here..."
                    className="min-h-[300px] resize-none my-2 border-none focus-visible:ring-0 "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full h-18 flex items-center gap-3 mt-4 mb-3 overflow-x-auto">
            <div
              className={cn(
                "p-2 rounded-full border drop-shadow-lg flex items-center justify-center transition ease-in-out",
                colorView ? "bg-foreground text-background" : ""
              )}
              onClick={() => toggleColorView((prev) => !prev)}
            >
              <Palette strokeWidth={1.5} className="w-5 h-5" />
            </div>

            <div
              className={
                colorView
                  ? "w-full flex items-center gap-3 transition ease-in-out"
                  : "hidden"
              }
            >
              {CardColors.map((colors, index) => {
                const colorKey = Object.keys(colors)[0];
                const colorValue = colors[colorKey];

                return (
                  <div
                    className="w-6 h-6 rounded-full border border-foreground hover:scale-105 transition-all"
                    onClick={() => handleColorChange(colorValue)}
                    style={{ backgroundColor: colorValue }}
                    key={colorValue}
                  ></div>
                );
              })}
            </div>
          </div>
          <Button className="w-full h-10 my-3">Save</Button>
        </form>
      </Form>
    </>
  );
}
