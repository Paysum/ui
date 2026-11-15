export type Doc = {
  slug: string
  title: string
  description: string
  svelte: string
  react: string
  usage: { svelte: string; react: string }
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
    description: 'Dashboard and checkout action. Primary, secondary, outline, ghost.',
    svelte: source(svelteFiles, 'button'),
    react: source(reactFiles, 'button'),
    usage: {
      svelte: `<script>
  import Button from './button.svelte'
</script>

<Button>Pay now</Button>
<Button variant="secondary">Cancel</Button>`,
      react: `import { Button } from './button'

export function Pay() {
  return (
    <>
      <Button>Pay now</Button>
      <Button variant="secondary">Cancel</Button>
    </>
  )
}`,
    },
  },
  {
    slug: 'input',
    title: 'Input',
    description: 'A text field at the same height as the button.',
    svelte: source(svelteFiles, 'input'),
    react: source(reactFiles, 'input'),
    usage: {
      svelte: `<script>
  import Input from './input.svelte'

  let email = $state('')
</script>

<Input type="email" placeholder="you@example.com" bind:value={email} />`,
      react: `import { useState } from 'react'
import { Input } from './input'

export function Email() {
  const [email, setEmail] = useState('')
  return <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
}`,
    },
  },
  {
    slug: 'card',
    title: 'Card',
    description: 'A hairline surface for a panel, a product, or a preview.',
    svelte: source(svelteFiles, 'card'),
    react: source(reactFiles, 'card'),
    usage: {
      svelte: `<script>
  import Card from './card.svelte'
</script>

<Card class="p-4">
  <p>Creative toolkit</p>
</Card>`,
      react: `import { Card } from './card'

export function Product() {
  return (
    <Card className="p-4">
      <p>Creative toolkit</p>
    </Card>
  )
}`,
    },
  },
  {
    slug: 'badge',
    title: 'Badge',
    description: 'Status on an order, a product, or a table row.',
    svelte: source(svelteFiles, 'badge'),
    react: source(reactFiles, 'badge'),
    usage: {
      svelte: `<script>
  import Badge from './badge.svelte'
</script>

<Badge variant="success">Paid</Badge>`,
      react: `import { Badge } from './badge'

export function Status() {
  return <Badge variant="success">Paid</Badge>
}`,
    },
  },
  {
    slug: 'stat',
    title: 'Stat',
    description: 'A labeled number for the dashboard overview.',
    svelte: source(svelteFiles, 'stat'),
    react: source(reactFiles, 'stat'),
    usage: {
      svelte: `<script>
  import ShoppingBag from '@lucide/svelte/icons/shopping-bag'
  import Stat from './stat.svelte'
</script>

<Stat icon={ShoppingBag} label="Orders" value="186" hint="Last 30 days" />`,
      react: `import { Stat } from './stat'

export function Orders() {
  return <Stat label="Orders" value="186" hint="Last 30 days" />
}`,
    },
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
