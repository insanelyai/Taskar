import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import SignupForm from "../Auth/SignupForm";

export default function SignupDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='w-full' variant='outline'>
            Signup
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Signup</DialogTitle>
          <DialogDescription className='text-xs lg:text-sm'>
            One-step away to organize your account
          </DialogDescription>
          <SignupForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
