import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  User2,
  History,
  FolderKanban,
  Settings2,
  Users,
  Image as ImageIcon,
  Mail,
  Download
} from "lucide-react";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <User2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#about",
    },
    {
      title: "Changelog",
      icon: (
        <History className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#changelog",
    },
    {
      title: "Project",
      icon: (
        <FolderKanban className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#projects",
    },
    {
      title: "Services",
      icon: (
        <Settings2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#services",
    },
    {
      title: "Testimonials",
      icon: (
        <Users className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#testimonials",
    },
    {
      title: "Gallery",
      icon: (
        <ImageIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#gallery",
    },
    {
      title: "Contact",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#contact",
    },
    {
      title: "Download",
      icon: (
        <Download className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://akirabox.com/2WVGr6gPBGkx/file",
    },
  ];

  return (
    <div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
