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
        'inline-flex h-5 items-center rounded-md px-1.5 text-[11px] font-medium',
        styles[tone],
        className,
      )}
      {...props}
    />
  )
}
