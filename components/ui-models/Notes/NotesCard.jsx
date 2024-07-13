import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { EllipsisVertical } from "lucide-react"

export default function NotesCard() {
   

    return(
        <>
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                <CardTitle>Notes ka title</CardTitle>
                <Popover>
                    <PopoverTrigger asChild>
                <Button variant="ghost">
                <EllipsisVertical strokeWidth={1.5} className="w-4 h-4" />
                </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-32">
                        <Button variant="ghost" className="w-full flex items-center justify-start">Edit</Button>
                        <Button variant="ghost" className="w-full flex items-center justify-start">Pin</Button>
                        <Button variant="ghost" className="w-full flex items-center justify-start">Archive</Button>
                        <Button variant="destructive" className="w-full flex items-center justify-start">Delete</Button>
                    </PopoverContent>
                </Popover>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-balance ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus aliquid ratione aliquam assumenda velit odio quo dolor! Odit molestiae autem id voluptatibus earum beatae dolore sint in! Accusantium, cumque.
                </p>
            </CardContent>
        </Card>
        </>
    )
}

