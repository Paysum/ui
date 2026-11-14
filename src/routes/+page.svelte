<script lang="ts">
  import Button from '$lib/components/button.svelte'
  import Card from '$lib/components/card.svelte'
  import Stat from '$lib/components/stat.svelte'
  import { products } from '$lib/docs'
</script>

<svelte:head>
  <title>Paysum UI</title>
</svelte:head>

<main class="mx-auto max-w-6xl px-5 py-16">
  <p class="text-[13px] text-muted-foreground">Open source · Svelte and React</p>
  <h1 class="mt-3 max-w-xl text-4xl font-medium tracking-tight text-balance">
    The interface behind Paysum.
  </h1>
  <p class="mt-4 max-w-lg text-[15px] leading-6 text-pretty text-muted-foreground">
    Buttons, cards, and numbers used on checkout, store themes, and the dashboard. Copy the Svelte
    file or the React file.
  </p>
  <div class="mt-6 flex flex-wrap gap-2">
    <Button href="/docs/button">Browse components</Button>
    <Button variant="outline" href="/dashboard">Dashboard</Button>
  </div>

  <div class="mt-14 grid gap-3 sm:grid-cols-3">
    {#each products as item (item.href)}
      <a href={item.href} class="rounded-xl border border-line bg-card p-4 hover:bg-muted/60">
        <p class="text-sm font-medium">{item.title}</p>
        <p class="mt-1 text-[13px] leading-5 text-muted-foreground">{item.description}</p>
      </a>
    {/each}
  </div>

  <Card class="mt-8 p-4">
    <div class="grid gap-3 sm:grid-cols-3">
      <Stat label="Revenue" value="$12,480" hint="Last 30 days" />
      <Stat label="Orders" value="186" hint="Paid" />
      <Stat label="Checkout" value="3.2%" hint="Visit to order" />
    </div>
  </Card>
</main>
