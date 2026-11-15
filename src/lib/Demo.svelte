<script lang="ts">
  import Badge from './components/badge.svelte'
  import Button from './components/button.svelte'
  import Card from './components/card.svelte'
  import Input from './components/input.svelte'
  import Stat from './components/stat.svelte'

  let { slug }: { slug: string } = $props()
  let email = $state('')
</script>

{#if slug === 'button'}
  <div class="flex flex-wrap items-center justify-center gap-2">
    <Button>Pay now</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
{:else if slug === 'input'}
  <div class="w-full max-w-sm">
    <Input type="email" placeholder="you@example.com" aria-label="Email" bind:value={email} />
  </div>
{:else if slug === 'card'}
  <Card class="w-full max-w-sm p-4">
    <p class="text-sm font-medium">Creative toolkit</p>
    <p class="mt-1 text-sm text-muted-foreground">$29.00 · One file</p>
    <Button class="mt-4">Buy</Button>
  </Card>
{:else if slug === 'badge'}
  <div class="flex flex-wrap items-center justify-center gap-2">
    <Badge tone="success">Paid</Badge>
    <Badge tone="warning">Pending</Badge>
    <Badge>Draft</Badge>
  </div>
{:else if slug === 'stat'}
  <div class="w-full max-w-xs">
    <Stat label="Orders" value="186" hint="Last 30 days" />
  </div>
{/if}
