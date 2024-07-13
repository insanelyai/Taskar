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
import { Palette } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string(),
  content: z.string(),
});

const CardColors = [
  { red: "#ffb3ba" },
  { orange: "#ffdfba" },
  { yellow: "#fffeee" },
  { green: "#baffc9" },
  { blue: "#baebff" },
  { purple: "#e8b8ff" },
  { pink: "#ffc9ba" },
  { gray: "#d9d9d9" },
];

export default function NotesForm({setColor}) {
  const [color, toggleColor] = useState(true);
  const [cardColor, setCardColor] = useState("#ffaba");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form className="" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Give a title to your note..."
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
                    className="min-h-[300px] resize-none my-2"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full h-10 flex items-center gap-2 mt-4 mb-3">
            <div
              className={cn(
                "w-10 h-10 rounded-full border drop-shadow-lg flex items-center justify-center transition ease-in-out",
                color ? "bg-foreground text-background" : ""
              )}
              onClick={() => toggleColor((prev) => !prev)}
            >
              <Palette strokeWidth={1.5} className="w-5 h-5 bg" />
            </div>

            <div
              className={
                color
                  ? "flex items-center gap-3 transition ease-in-out"
                  : "hidden"
                }
            >
              {CardColors.map((colors, index) => {
                const colorKey = Object.keys(colors)[0];
                const colorValue = colors[colorKey];
               
                return (
                  <div
                  className="w-6 h-6 rounded-full border border-foreground hover:scale-105 transition-all"
                  onClick={() => setColor(colorValue)}
                    style={{backgroundColor: colorValue}}
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
