import type { InputHTMLAttributes } from 'react'
import { cn } from './utils'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-9 w-full rounded-lg border border-line bg-background px-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:border-fg',
        className,
      )}
      {...props}
    />
  )
}
