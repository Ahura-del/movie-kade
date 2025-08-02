import { twMerge } from "tailwind-merge"

export const cn = ( className?: string, newClassName?: string)=>{
    return twMerge(className , newClassName)
}