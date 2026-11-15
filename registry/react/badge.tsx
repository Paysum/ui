import type { HTMLAttributes } from 'react'
import { cn } from './utils'

type Variant = 'neutral' | 'success' | 'warning'

const styles: Record<Variant, string> = {
  neutral: 'border-line bg-surface-overlay text-ink-300',
  success: 'border-line bg-transparent text-success',
  warning: 'border-line bg-transparent text-warning',
}

export function Badge({
  variant = 'neutral',
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        'inline-flex h-5 items-center rounded-md border px-1.5 text-xs font-medium leading-none',
        styles[variant],
        className,
      )}
      {...props}
    />
  )
}
