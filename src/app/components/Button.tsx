import { cn } from "@/configs/cn";


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const Button = ({children , className , ...rest}:Props) => {
  return (
    <button className={cn("bg-blue-400 text-white rounded-md p-2 min-w-fit w-20 h-12 flex items-center justify-center cursor-pointer", className)} {...rest}>
        {children}
    </button>
  )
}

export default Button