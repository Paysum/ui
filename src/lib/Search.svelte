<script lang="ts">
  import { docs, products } from './docs'

  let open = $state(false)
  let query = $state('')
  let field = $state<HTMLInputElement | null>(null)

  const pages = [
    { href: '/docs', title: 'Introduction', group: 'Docs' },
    { href: '/docs/components', title: 'Components', group: 'Docs' },
    ...docs.map((item) => ({ href: `/docs/${item.slug}`, title: item.title, group: 'Components' })),
    ...products.map((item) => ({ href: item.href, title: item.title, group: 'Product' })),
  ]

  const results = $derived(
    pages.filter((item) => item.title.toLowerCase().includes(query.trim().toLowerCase())),
  )

  $effect(() => {
    if (open) queueMicrotask(() => field?.focus())
  })

  function onKey(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault()
      open = true
    }
  }
</script>

<svelte:window onkeydown={onKey} />

<button
  type="button"
  class="hidden h-8 items-center gap-2 rounded-full bg-muted px-3 text-sm text-muted-foreground md:inline-flex"
  onclick={() => (open = true)}
>
  Search
  <kbd class="rounded border border-line bg-background px-1.5 font-sans text-[11px] text-muted-foreground">⌘K</kbd>
</button>

{#if open}
  <div class="fixed inset-0 z-30 flex items-start justify-center bg-fg/20 px-4 pt-[12vh]">
    <button type="button" class="absolute inset-0 z-0 cursor-default" aria-label="Close search" onclick={() => (open = false)}></button>
    <div
      class="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-line bg-background shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
      role="dialog"
      aria-modal="true"
      aria-label="Search documentation"
    >
      <input
        bind:this={field}
        bind:value={query}
        class="h-12 w-full border-b border-line bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
        placeholder="Search components"
        onkeydown={(event) => {
          if (event.key === 'Escape') open = false
        }}
      />
      <ul class="max-h-80 overflow-auto p-2">
        {#each results as item (item.href)}
          <li>
            <a
              href={item.href}
              class="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-muted"
              onclick={() => (open = false)}
            >
              {item.title}
              <span class="text-xs text-muted-foreground">{item.group}</span>
            </a>
          </li>
        {:else}
          <li class="px-3 py-6 text-center text-sm text-muted-foreground">No matches.</li>
        {/each}
      </ul>
    </div>
  </div>
{/if}
