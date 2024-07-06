import Link from "next/link";
import { Button } from "../../ui/button";
import { LogOut } from "lucide-react";

export default function UserDeck({ routes }) {
  return (
    <div className='flex flex-col items-center justify-start'>
      {routes.map(
        (route) =>
          route.protected && (
            <Link href={route.path} key={route.key} className='w-full'>
              <Button
                className='h-8 w-full flex items-start justify-start gap-2'
                variant='ghost'>
                {route.icon}
                {route.label}
              </Button>
            </Link>
          )
      )}
      <Button className='h-8 w-full flex items-start justify-start gap-2 my-2'>
        <LogOut strokeWidth={1.5} className='w-4 h-4' />
        Logout
      </Button>
    </div>
  );
}
