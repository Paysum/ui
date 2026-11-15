import type { InputHTMLAttributes } from 'react'
import { cn } from './utils'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-[36px] w-full rounded-lg border border-line-strong bg-input px-3 text-sm text-fg outline-none placeholder:text-ink-500 hover:border-line-hover',
        className,
      )}
      {...props}
    />
  )
}
