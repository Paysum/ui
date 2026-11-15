import type { HTMLAttributes } from 'react'
import { cn } from './utils'

type Tone = 'neutral' | 'success' | 'warning'

const styles: Record<Tone, string> = {
  neutral: 'bg-muted text-muted-foreground',
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-amber-50 text-amber-800',
}

export function Badge({
  tone = 'neutral',
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        'inline-flex h-6 items-center rounded-full px-2.5 text-xs font-medium',
        styles[tone],
        className,
      )}
      {...props}
    />
  )
}
