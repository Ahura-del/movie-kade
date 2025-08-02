import Button from "./Button"
import { Sun } from "./Icons"


const Navbar = () => {
  return (
    <nav className="py-2 fixed top-0 right-0 left-0 z-50 px-2 lg:px-0">
    <div className=" container mx-auto flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
        <div>
            <p className="text-2xl font-bold text-white">Movie Kade</p>
        </div>
        <div>
            <Button className="size-13 p-2 rounded-xl bg-zinc-500 dark:bg-zinc-800">
                <Sun />
            </Button>
        </div>
    </div>
    </nav>
  )
}

export default Navbar