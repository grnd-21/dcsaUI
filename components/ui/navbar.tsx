"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white px-4 py-2 md:px-8 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 group cursor-pointer hover:no-underline"
        >
          <Avatar className="w-15 h-15">
            <AvatarImage
              src="/logo.png"
              alt="Datamex College of Saint Adeline Logo"
            />
          </Avatar>
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-[#B85450] group-hover:no-underline">
              DATAMEX
            </h1>
            <p className="text-sm md:text-sm text-xs text-[#B85450] uppercase tracking-wide">
              COLLEGE OF SAINT ADELINE
            </p>
          </div>
        </a>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center space-x-0">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`font-medium px-4 py-2 transition-colors ${
                  isActive("/")
                    ? "text-[#B85450] bg-[#B85450]/10"
                    : "text-[#4C4B7A] hover:text-[#B85450]"
                }`}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/academics"
                className={`font-medium px-4 py-2 transition-colors ${
                  isActive("/academics")
                    ? "text-[#B85450] bg-[#B85450]/10"
                    : "text-[#4C4B7A] hover:text-[#B85450]"
                }`}
              >
                Academics
              </NavigationMenuLink>
            </NavigationMenuItem>
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`font-medium px-4 py-2 transition-colors flex items-center gap-1 h-auto ${
                      isActive("/branches")
                        ? "text-[#B85450] bg-[#B85450]/10"
                        : "text-[#4C4B7A] hover:text-[#B85450]"
                    }`}
                  >
                    Branches
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem>
                    <a
                      href="/branches/fairview"
                      className="w-full text-[#4C4B7A] hover:text-[#B85450]"
                    >
                      Fairview
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a
                      href="/branches/caloocan"
                      className="w-full text-[#4C4B7A] hover:text-[#B85450]"
                    >
                      Caloocan
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a
                      href="/branches/valenzuela"
                      className="w-full text-[#4C4B7A] hover:text-[#B85450]"
                    >
                      Valenzuela
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a
                      href="/branches/meycauayan"
                      className="w-full text-[#4C4B7A] hover:text-[#B85450]"
                    >
                      Meycauayan
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/enroll"
                className={`font-medium px-4 py-2 transition-colors ${
                  isActive("/enroll")
                    ? "text-[#B85450] bg-[#B85450]/10"
                    : "text-[#4C4B7A] hover:text-[#B85450]"
                }`}
              >
                Enroll
              </NavigationMenuLink>
            </NavigationMenuItem>
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={`font-medium px-4 py-2 transition-colors ${
                  isActive("/contact")
                    ? "text-[#B85450] bg-[#B85450]/10"
                    : "text-[#4C4B7A] hover:text-[#B85450]"
                }`}
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#4C4B7A] hover:text-[#B85450]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
          ) : (
            <Menu className="h-6 w-6 transition-transform duration-300" />
          )}
        </Button>
      </div>

      <div
        className={`md:hidden mt-4 pb-0 border-t border-gray-200 overflow-hidden transition-all duration-500  ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ willChange: "max-height, opacity, transform" }}
      >
        <nav className="flex flex-col space-y-2 pt-4">
          <a
            href="/"
            className={`font-medium px-4 py-2 rounded-md transition-colors ${
              isActive("/")
                ? "text-[#B85450] bg-[#B85450]/10"
                : "text-[#4C4B7A] hover:text-[#B85450] hover:bg-[#B85450]/5"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/academics"
            className={`font-medium px-4 py-2 rounded-md transition-colors ${
              isActive("/academics")
                ? "text-[#B85450] bg-[#B85450]/10"
                : "text-[#4C4B7A] hover:text-[#B85450] hover:bg-[#B85450]/5"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Academics
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`font-medium px-4 py-2 rounded-md transition-colors text-left justify-start h-auto  text-base ${
                  isActive("/branches")
                    ? "text-[#B85450] bg-[#B85450]/10"
                    : "text-[#4C4B7A] hover:text-[#B85450] hover:bg-[#B85450]/5"
                }`}
              >
                Branches
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-screen left-0 rounded !border-1 !shadow-md m-2 text-center"
              style={{ maxWidth: "100vw" }}
            >
              <DropdownMenuItem>
                <a
                  href="/branches/fairview"
                  className="w-full text-[#4C4B7A] hover:text-[#B85450]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Fairview
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="/branches/caloocan"
                  className="w-full text-[#4C4B7A] hover:text-[#B85450]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Caloocan
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="/branches/valenzuela"
                  className="w-full text-[#4C4B7A] hover:text-[#B85450]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Valenzuela
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a
                  href="/branches/meycauayan"
                  className="w-full text-[#4C4B7A] hover:text-[#B85450]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Meycauyan
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="/enroll"
            className={`font-medium px-4 py-2 rounded-md transition-colors ${
              isActive("/enroll")
                ? "text-[#B85450] bg-[#B85450]/10"
                : "text-[#4C4B7A] hover:text-[#B85450] hover:bg-[#B85450]/5"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Enroll
          </a>
          <a
            href="/contact"
            className={`font-medium px-4 py-2 rounded-md transition-colors ${
              isActive("/contact")
                ? "text-[#B85450] bg-[#B85450]/10"
                : "text-[#4C4B7A] hover:text-[#B85450] hover:bg-[#B85450]/5"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
