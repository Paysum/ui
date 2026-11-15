import type { ButtonHTMLAttributes } from 'react'
import { cn } from './utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

const styles: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
  secondary: 'border border-line-strong bg-surface text-fg hover:border-line-hover hover:bg-accent',
  outline: 'border border-line-strong bg-transparent text-fg hover:border-line-hover hover:bg-surface-overlay',
  ghost: 'text-ink-300 hover:bg-surface-overlay hover:text-fg',
}

export function Button({
  variant = 'primary',
  className,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex h-[36px] items-center justify-center gap-1.5 rounded-md px-3 text-[13px] font-medium transition-[color,background-color,border-color,scale] duration-150 active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50',
        styles[variant],
        className,
      )}
      {...props}
    />
  )
}
