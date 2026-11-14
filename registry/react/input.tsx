import type { InputHTMLAttributes } from 'react'
import { cn } from './utils'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-9 w-full rounded-md border border-line bg-card px-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/30',
        className,
      )}
      {...props}
    />
  )
}
