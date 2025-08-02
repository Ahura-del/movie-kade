'use client'
import { useTheme } from "next-themes";
import Button from "./Button";
import { Moon, Sun } from "./Icons";
import Link from "next/link";


const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="py-2 fixed top-0 right-0 left-0 z-50 px-2 lg:px-0">
      <div className=" container mx-auto flex justify-between items-center p-4 dark:bg-black/20 bg-white/10 backdrop-blur-sm rounded-xl">
        <div>
          <Link href='/' className="text-2xl font-bold text-white ">Movie Kade</Link>
        </div>
        <div>
          <Button className="size-13 p-2 rounded-xl bg-zinc-500 dark:bg-zinc-800">
            {theme === "dark" ? (
              <span className="text-white" onClick={() => setTheme("light")}>
                <Moon />
               
              </span>
            ) : (
              <span className="text-white" onClick={() => setTheme("dark")}>
                <Sun />

              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
