import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LogIn } from "lucide-react";
import LoginForm from "../Auth/LoginForm";

export default function LoginDialog({ sx }) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <Button
              className={`text-xs transition lg:hidden ${sx}`}
              variant='ghost'
              size='icon'>
              <LogIn strokeWidth={1.5} className='w-4 h-4' />
            </Button>
            <Button className={`hidden lg:block text-xs transition  h-8 ${sx}`}>
              Login
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription className='text-xs lg:text-sm'>
            One-step away to organize your account
          </DialogDescription>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
