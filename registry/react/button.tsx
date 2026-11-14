import type { ButtonHTMLAttributes } from 'react'
import { cn } from './utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

const styles: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'border border-line bg-card text-fg hover:bg-muted',
  outline: 'border border-line bg-transparent text-fg hover:bg-muted',
  ghost: 'text-muted-foreground hover:bg-muted hover:text-fg',
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
        'inline-flex h-9 items-center justify-center gap-1.5 rounded-md px-3 text-[13px] font-medium transition-[background-color,color,scale] duration-150 active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50',
        styles[variant],
        className,
      )}
      {...props}
    />
  )
}
