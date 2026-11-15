import { cva, type VariantProps } from 'class-variance-authority'
import { controlHeight, controlSquare } from './sizing'

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md font-medium transition-[color,background-color,border-color,box-shadow,scale] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background aria-invalid:border-destructive active:scale-[0.96] motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        default: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        secondary: 'border border-line-strong bg-surface text-fg hover:border-line-hover hover:bg-accent',
        outline: 'border border-line-strong bg-transparent text-fg hover:border-line-hover hover:bg-surface-overlay',
        ghost: 'text-ink-300 hover:bg-surface-overlay hover:text-fg',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        link: 'h-auto px-0 text-primary-text underline-offset-4 hover:underline active:scale-100',
      },
      size: {
        sm: `${controlHeight} px-3 text-[13px]`,
        md: `${controlHeight} px-3 text-[13px]`,
        default: `${controlHeight} px-3 text-[13px]`,
        lg: `${controlHeight} px-3 text-[13px]`,
        icon: controlSquare,
        auth: 'h-[48px] rounded-lg px-4 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
export type ButtonSize = VariantProps<typeof buttonVariants>['size']
