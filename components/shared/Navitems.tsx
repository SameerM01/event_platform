"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navitems = () => {
  const pathname = usePathname();
  
  return (
    <ul className="flex w-full flex-col items-start gap-5 md:flex-row md:justify-between">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`flex-center p-medium-16 whitespace-nowrap ${
              isActive ? "text-primary-500" : ""
            }`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navitems;
