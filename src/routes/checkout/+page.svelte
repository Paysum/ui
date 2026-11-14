<script lang="ts">
  import Badge from '$lib/components/badge.svelte'
  import Button from '$lib/components/button.svelte'
  import Card from '$lib/components/card.svelte'
  import Input from '$lib/components/input.svelte'

  let email = $state('')
  let method = $state('card')
</script>

<svelte:head>
  <title>Checkout · Paysum UI</title>
</svelte:head>

<div class="flex flex-wrap items-end justify-between gap-3">
  <div>
    <p class="text-[13px] text-muted-foreground">Product</p>
    <h1 class="mt-1 text-2xl font-medium tracking-tight">Checkout</h1>
    <p class="mt-2 max-w-xl text-[15px] leading-6 text-muted-foreground">
      The compact checkout opened by an embed button. Built from Button, Input, and Card.
    </p>
  </div>
  <Button variant="outline" href="https://docs.paysum.io/embed">Live embed</Button>
</div>

<Card class="mt-6 max-w-md overflow-hidden">
  <div class="flex items-center justify-between border-b border-line px-4 py-3">
    <p class="text-sm font-medium">Studio supply</p>
    <span class="rounded-full border border-line px-2.5 py-0.5 text-[13px] tabular-nums">$29.00</span>
  </div>
  <form class="space-y-4 p-4" onsubmit={(event) => event.preventDefault()}>
    <h2 class="text-sm font-medium">Confirm and pay</h2>
    <label class="block text-[13px] font-medium">
      Email
      <Input class="mt-1.5" type="email" placeholder="you@example.com" bind:value={email} />
    </label>
    <fieldset class="space-y-2">
      <legend class="text-[13px] font-medium">Payment method</legend>
      {#each [{ id: 'card', label: 'Card' }, { id: 'crypto', label: 'Crypto' }] as item (item.id)}
        <label
          class="flex items-center justify-between rounded-lg border px-3 py-2.5 text-sm {method === item.id
            ? 'border-primary bg-primary/5'
            : 'border-line'}"
        >
          <span>{item.label}</span>
          <input type="radio" name="method" value={item.id} bind:group={method} />
        </label>
      {/each}
    </fieldset>
    <Button class="w-full">Pay $29.00</Button>
    <p class="text-center text-xs text-muted-foreground">Preview only. Nothing is charged.</p>
  </form>
</Card>

<p class="mt-4 text-[13px] text-muted-foreground">
  <Badge>Svelte</Badge>
  <Badge class="ml-1">React</Badge>
  <span class="ml-2">Same pieces as <a class="underline" href="/docs/button">Button</a>.</span>
</p>
