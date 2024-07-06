import Link from "next/link";
import { Button } from "../../ui/button";

export default function NavMenu({ rotues }) {
  return (
    <div className='hidden lg:flex items-center justify-start'>
      {rotues.map(
        (route) =>
          !route.protected && (
            <Link href={route.path} key={route.key}>
              <Button
                className='h-8 w-full flex items-start justify-start'
                variant='ghost'>
                {route.label}
              </Button>
            </Link>
          )
      )}
    </div>
  );
}
