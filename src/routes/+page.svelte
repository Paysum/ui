<script lang="ts">
  import DollarSign from '@lucide/svelte/icons/dollar-sign'
  import ShoppingBag from '@lucide/svelte/icons/shopping-bag'
  import Users from '@lucide/svelte/icons/users'
  import Badge from '$lib/components/badge.svelte'
  import Button from '$lib/components/button.svelte'
  import Card from '$lib/components/card.svelte'
  import Input from '$lib/components/input.svelte'
  import Stat from '$lib/components/stat.svelte'

  let email = $state('')
</script>

<svelte:head>
  <title>Paysum UI</title>
</svelte:head>

<section class="mx-auto max-w-3xl px-6 pt-16 pb-8">
  <h1 class="text-[32px] font-medium tracking-tight text-fg">The interface behind Paysum</h1>
  <p class="mt-3 max-w-xl text-[15px] leading-6 text-ink-500">
    The same button, field, card, badge, and stat used on the dashboard and at checkout.
  </p>
  <div class="mt-6 flex flex-wrap gap-2">
    <Button href="/docs/components">View components</Button>
    <Button variant="outline" href="/docs">Get started</Button>
  </div>
</section>

<section class="mx-auto grid max-w-5xl gap-3 px-6 pb-20 lg:grid-cols-3">
  <Card><Stat icon={DollarSign} label="Revenue" value="$12,480" hint="Last 30 days" delta={6.4} /></Card>
  <Card><Stat icon={ShoppingBag} label="Orders" value="186" hint="Paid" delta={4.2} /></Card>
  <Card><Stat icon={Users} label="Customers" value="94" hint="With an order" /></Card>

  <Card class="p-4 lg:col-span-2">
    <div class="flex items-center justify-between gap-3">
      <div>
        <p class="text-sm font-medium">Recent order</p>
        <p class="mt-1 text-[13px] text-ink-500">ada@studio.dev · Creative toolkit</p>
      </div>
      <Badge variant="success">Paid</Badge>
    </div>
    <div class="mt-4 flex flex-wrap items-center gap-2">
      <Button>Pay now</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  </Card>

  <Card class="p-4">
    <p class="text-sm font-medium">Checkout</p>
    <p class="mt-1 text-[13px] text-ink-500">Email on the pay screen.</p>
    <Input class="mt-4" type="email" placeholder="you@example.com" aria-label="Email" bind:value={email} />
    <Button class="mt-3 w-full">Buy · $29.00</Button>
  </Card>
</section>
