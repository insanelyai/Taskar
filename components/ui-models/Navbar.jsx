"use client";
import { Button } from "../ui/button";
import {
  CalendarFold,
  LayoutDashboard,
  Menu,
  SquareCheckBig,
  StickyNote,
  User,
  X,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import LoginDialog from "./sx/LoginDialog";
import NavMenu from "./sx/NavMenu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import UserDeck from "./sx/UserDeck";
import { UseUserContext } from "@/app/providers/UserContext";

const routes = [
  {
    key: "Home",
    label: "Home",
    path: "/",
    protected: false,
  },
  {
    key: "What's New",
    label: "What's New",
    path: "/updates",
    protected: false,
  },
  {
    key: "Blog",
    label: "Blog",
    path: "/blog",
    protected: false,
  },
  {
    key: "Dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard strokeWidth={1.25} className='w-4 h-4' />,
    protected: true,
  },
  {
    key: "Notes",
    label: "Notes",
    path: "/notes",
    icon: <StickyNote strokeWidth={1.25} className='w-4 h-4' />,
    protected: true,
  },
  {
    key: "Events",
    label: "Events",
    path: "/events",
    icon: <CalendarFold strokeWidth={1.25} className='w-4 h-4' />,
    protected: true,
  },
  {
    key: "Tasks",
    label: "Tasks",
    path: "/tasks",
    icon: <SquareCheckBig strokeWidth={1.25} className='w-4 h-4' />,
    protected: true,
  },
];

export default function Navbar() {
  const [toggleMenu, setMenuState] = useState(false);
  const { user } = UseUserContext();

  const handleMenuToggle = () => {
    setMenuState((prev) => !prev);
  };

  // const fetchUser = async () => {
  //   try {
  //     const res = await axios.get("/api/users/fetchUser");

  //     if (res.status === 200) {
  //       setUser(res.data.user);
  //       setStatus(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <>
      <div className='sticky w-full   bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border/40 border-b'>
        <div className='container max-w-screen-2xl lg:mx-auto h-11 flex items-center justify-between lg:justify-between'>
          <div className='w-1/4 flex items-center justify-start lg:justify-start'>
            {/* Mobile Navigation and Toggle */}
            <Button
              className='text-xs transition lg:hidden'
              variant='ghost'
              size='icon'
              onClick={handleMenuToggle}>
              {toggleMenu ? (
                <X strokeWidth={1.5} className='w-4 h-4' />
              ) : (
                <Menu strokeWidth={1.5} className='w-4 h-4' />
              )}
            </Button>
            {toggleMenu && (
              <div
                className='w-full h-[100vh] md:w-1/4 
               border-r border-border/40 lg:border-0
                fixed top-11 left-0 
                bg-background animate 
                space-y-2 py-4'>
                <div className='container flex flex-col items-start justify-start'>
                  {routes.map(
                    (route) =>
                      !route.protected && (
                        <Link
                          href={route.path}
                          key={route.key}
                          className='w-full'>
                          <Button
                            className='w-full text-xs flex items-start justify-start'
                            variant='ghost'
                            onClick={handleMenuToggle}>
                            {route.label}
                          </Button>
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}

            {/* Navigation for larger displays */}
            <NavMenu rotues={routes} />
          </div>
          <div className='w-1/2 flex justify-center '>
            {/* Logo  */}
            <Link href='/'>
              <span className='font-medium text-md'>Taskar</span>
            </Link>
          </div>
          <div className='w-1/4 flex items-center justify-end flex-1'>
            {/* Login Form Dialog that with replace Avatar for new users */}

            {user ? (
              <Popover>
                <PopoverTrigger>
                  <div className='flex items-center gap-3 h-full px-3 rounded transition hover:bg-secondary'>
                    <span className='hidden md:block text-sm'>
                      {user.username}
                    </span>
                    <Avatar>
                      <AvatarImage src='' alt='@shadcn' />
                      {/* https://github.com/shadcn.png */}
                      <AvatarFallback>
                        <User strokeWidth={1.25} className='w-4 h-4' />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='w-auto'>
                  <UserDeck routes={routes} />
                </PopoverContent>
              </Popover>
            ) : (
              <LoginDialog />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
