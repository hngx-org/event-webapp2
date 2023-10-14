import React from "react";
import {
  ActiveCalendarIcon,
  ActivePeopleIcon,
  ActiveSettingsIcon,
  ActiveTimelineIcon,
  CalendarIcon,
  PeopleIcon,
  SettingsIcon,
  TimelineIcon,
} from "assets/icon/sideBarIcons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    href: "/timeline",
    name: "Timeline",
    icon: TimelineIcon,
    activeIcon: ActiveTimelineIcon,
  },
  {
    href: "/groups",
    name: "Groups",
    icon: PeopleIcon,
    activeIcon: ActivePeopleIcon,
  },
  {
    href: "/calendar",
    name: "Calendar",
    icon: CalendarIcon,
    activeIcon: ActiveCalendarIcon,
  },
  {
    href: "/settings",
    name: "Settings",
    icon: SettingsIcon,
    activeIcon: ActiveSettingsIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="space-y-9 p-7 w-full">
      <ul>
        {links.map((link) => {
          let isActive = pathname.startsWith(link.href);

          const Icon = link.icon;
          const ActiveIcon = link.activeIcon;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  !isActive
                    ? "flex gap-3 items-center text-white/50 font-medium px-6 py-4"
                    : "flex gap-3 items-center text-primary stroke-primary font-semibold px-6 py-4 bg-brand-gray-600 rounded-2xl"
                }
              >
                {isActive ? <ActiveIcon /> : <Icon />}

                <span className="whitespace-nowrap">{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
