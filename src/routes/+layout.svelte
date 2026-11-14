<script lang="ts">
  import '../app.css'
  import { page } from '$app/state'
  import { docs, products } from '$lib/docs'

  let { children } = $props()
  const path = $derived(page.url.pathname)
  const wide = $derived(path === '/')
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="min-h-screen">
  <header class="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur">
    <div class="mx-auto flex h-14 max-w-6xl items-center gap-6 px-5">
      <a href="/" class="text-sm font-medium tracking-tight">Paysum UI</a>
      <nav class="flex items-center gap-4 text-[13px] text-muted-foreground">
        <a href="/docs/button" class={path.startsWith('/docs') ? 'text-fg' : 'hover:text-fg'}>Components</a>
        {#each products as item (item.href)}
          <a href={item.href} class={path === item.href ? 'text-fg' : 'hover:text-fg'}>{item.title}</a>
        {/each}
      </nav>
      <a
        href="https://github.com/Paysum/ui"
        class="ml-auto text-[13px] text-muted-foreground hover:text-fg"
      >
        GitHub
      </a>
    </div>
  </header>

  {#if wide}
    {@render children()}
  {:else}
    <div class="mx-auto grid max-w-6xl gap-10 px-5 py-8 md:grid-cols-[180px_minmax(0,1fr)]">
      <aside class="hidden md:block">
        <p class="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">Components</p>
        <ul class="mt-2 space-y-1">
          {#each docs as item (item.slug)}
            <li>
              <a
                href="/docs/{item.slug}"
                class="block rounded-md px-2 py-1 text-[13px] {path === `/docs/${item.slug}`
                  ? 'bg-muted text-fg'
                  : 'text-muted-foreground hover:text-fg'}"
              >
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
        <p class="mt-6 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">Product</p>
        <ul class="mt-2 space-y-1">
          {#each products as item (item.href)}
            <li>
              <a
                href={item.href}
                class="block rounded-md px-2 py-1 text-[13px] {path === item.href
                  ? 'bg-muted text-fg'
                  : 'text-muted-foreground hover:text-fg'}"
              >
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
      </aside>
      <main class="min-w-0">{@render children()}</main>
    </div>
  {/if}
</div>
