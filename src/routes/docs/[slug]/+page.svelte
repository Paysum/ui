<script lang="ts">
  import Badge from '$lib/components/badge.svelte'
  import Button from '$lib/components/button.svelte'
  import Card from '$lib/components/card.svelte'
  import Input from '$lib/components/input.svelte'
  import Stat from '$lib/components/stat.svelte'
  import CodeSample from '$lib/CodeSample.svelte'

  let { data } = $props()
  const doc = $derived(data.doc)
  let email = $state('you@example.com')
</script>

<svelte:head>
  <title>{doc.title} · Paysum UI</title>
</svelte:head>

<p class="text-[13px] text-muted-foreground">Component</p>
<h1 class="mt-1 text-2xl font-medium tracking-tight">{doc.title}</h1>
<p class="mt-2 max-w-xl text-[15px] leading-6 text-muted-foreground">{doc.description}</p>

<div class="mt-6 rounded-xl border border-line bg-card p-6">
  {#if doc.slug === 'button'}
    <div class="flex flex-wrap gap-2">
      <Button>Pay now</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  {:else if doc.slug === 'input'}
    <Input bind:value={email} type="email" aria-label="Email" />
  {:else if doc.slug === 'card'}
    <Card class="max-w-sm p-4">
      <p class="text-sm font-medium">Creative toolkit</p>
      <p class="mt-1 text-[13px] text-muted-foreground">$29.00 · One file</p>
    </Card>
  {:else if doc.slug === 'badge'}
    <div class="flex gap-2">
      <Badge tone="success">Paid</Badge>
      <Badge tone="warning">Pending</Badge>
      <Badge>Draft</Badge>
    </div>
  {:else if doc.slug === 'stat'}
    <div class="max-w-xs">
      <Stat label="Orders" value="186" hint="Last 30 days" />
    </div>
  {/if}
</div>

<div class="mt-6">
  <CodeSample svelte={doc.svelte} react={doc.react} />
</div>
<p class="mt-3 text-[13px] text-muted-foreground">
  Copy <code>src/lib/utils.ts</code> with the component. Tokens live in <code>src/app.css</code>.
</p>
