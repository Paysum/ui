<script lang="ts">
  import Badge from '$lib/components/badge.svelte'
  import Button from '$lib/components/button.svelte'
  import Card from '$lib/components/card.svelte'
  import Input from '$lib/components/input.svelte'
  import Stat from '$lib/components/stat.svelte'

  let email = $state('')
  let note = $state('')
</script>

<svelte:head>
  <title>Paysum UI</title>
</svelte:head>

<section class="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center sm:pt-28">
  <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
    The interface behind Paysum
  </h1>
  <p class="mx-auto mt-4 max-w-xl text-base leading-7 text-pretty text-muted-foreground sm:text-lg">
    Buttons, fields, cards, and numbers from checkout, store themes, and the dashboard. Copy the
    Svelte file or the React file and change it.
  </p>
  <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
    <Button href="/docs">Get started</Button>
    <Button variant="secondary" href="/docs/components">View components</Button>
  </div>
</section>

<section class="mx-auto grid max-w-5xl gap-4 px-6 pb-24 md:grid-cols-[1.15fr_0.85fr]">
  <div class="rounded-2xl border border-line bg-background p-6">
    <div class="flex flex-wrap gap-2">
      <Button>Pay now</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
    <div class="mt-4 space-y-3">
      <Input placeholder="Name" aria-label="Name" bind:value={email} />
      <textarea
        bind:value={note}
        placeholder="Message"
        aria-label="Message"
        class="h-24 w-full resize-none rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-fg"
      ></textarea>
    </div>
    <div class="mt-4 flex flex-wrap items-center gap-2">
      <Badge>Paid</Badge>
      <Badge tone="success">Delivered</Badge>
      <Badge tone="warning">Pending</Badge>
    </div>
  </div>

  <Card class="flex flex-col justify-between rounded-2xl p-6">
    <div>
      <p class="text-sm text-muted-foreground">Creative toolkit</p>
      <p class="mt-3 text-3xl font-semibold tracking-tight tabular-nums">$29.00</p>
      <p class="mt-2 text-sm leading-6 text-muted-foreground">One file. Delivered after payment.</p>
    </div>
    <Button class="mt-8 w-full">Buy</Button>
  </Card>

  <div class="grid gap-4 sm:grid-cols-3 md:col-span-2">
    <Stat label="Revenue" value="$12,480" hint="Last 30 days" />
    <Stat label="Orders" value="186" hint="Paid" />
    <Stat label="Checkout" value="3.2%" hint="Visit to order" />
  </div>
</section>
