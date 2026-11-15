import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md border font-medium leading-none',
  {
    variants: {
      variant: {
        neutral: 'border-line bg-surface-overlay text-ink-300',
        primary: 'border-transparent bg-primary-subtle text-primary-text',
        success: 'border-line bg-transparent text-success',
        warning: 'border-line bg-transparent text-warning',
        danger: 'border-line bg-transparent text-danger',
        info: 'border-line bg-transparent text-info',
        outline: 'border-line-strong bg-transparent text-ink-300',
      },
      size: {
        sm: 'h-[18px] px-1.5 text-[11px]',
        default: 'h-5 px-1.5 text-xs',
      },
    },
    defaultVariants: { variant: 'neutral', size: 'default' },
  },
)

export type BadgeVariant = VariantProps<typeof badgeVariants>['variant']
