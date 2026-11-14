export type Doc = {
  slug: string
  title: string
  description: string
  svelte: string
  react: string
}

const svelteFiles = import.meta.glob('./components/*.svelte', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const reactFiles = import.meta.glob('../../registry/react/*.tsx', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function source(files: Record<string, string>, name: string) {
  const match = Object.entries(files).find(([path]) => path.endsWith(`/${name}.svelte`) || path.endsWith(`/${name}.tsx`))
  return match?.[1] ?? ''
}

export const docs: Doc[] = [
  {
    slug: 'button',
    title: 'Button',
    description: 'The action used on checkout, the dashboard, and store themes.',
    svelte: source(svelteFiles, 'button'),
    react: source(reactFiles, 'button'),
  },
  {
    slug: 'input',
    title: 'Input',
    description: 'A text field with the same height as the button.',
    svelte: source(svelteFiles, 'input'),
    react: source(reactFiles, 'input'),
  },
  {
    slug: 'card',
    title: 'Card',
    description: 'Hairline surface for dashboard panels and theme previews.',
    svelte: source(svelteFiles, 'card'),
    react: source(reactFiles, 'card'),
  },
  {
    slug: 'badge',
    title: 'Badge',
    description: 'A short status, such as paid or draft.',
    svelte: source(svelteFiles, 'badge'),
    react: source(reactFiles, 'badge'),
  },
  {
    slug: 'stat',
    title: 'Stat',
    description: 'A labeled number for the dashboard overview.',
    svelte: source(svelteFiles, 'stat'),
    react: source(reactFiles, 'stat'),
  },
]

export const products = [
  {
    href: '/checkout',
    title: 'Checkout',
    description: 'The embed buyers open from a store button.',
    live: 'https://docs.paysum.io/embed',
  },
  {
    href: '/themes',
    title: 'Store themes',
    description: 'Cards and type used on a storefront.',
    live: 'https://paysum.io',
  },
  {
    href: '/dashboard',
    title: 'Dashboard',
    description: 'Overview numbers, orders, and quiet panels.',
    live: 'https://dashboard.paysum.io',
  },
]
