<script lang="ts">
  import '../app.css'
  import { page } from '$app/state'
  import { docs, products } from '$lib/docs'
  import Search from '$lib/Search.svelte'

  let { children } = $props()
  const path = $derived(page.url.pathname)
  const home = $derived(path === '/')
  let menu = $state(false)

  const sections = $derived([
    {
      title: 'Sections',
      items: [
        { href: '/docs', title: 'Introduction' },
        { href: '/docs/components', title: 'Components' },
        ...products.map((item) => ({ href: item.href, title: item.title })),
      ],
    },
    {
      title: 'Components',
      items: docs.map((item) => ({ href: `/docs/${item.slug}`, title: item.title })),
    },
  ])

  const links = [
    { href: '/docs', title: 'Docs' },
    { href: '/docs/components', title: 'Components' },
    ...products,
  ]

  function current(href: string) {
    return path === href
  }

  function navCurrent(href: string) {
    if (href === '/docs/components') return path.startsWith('/docs/')
    return path === href
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-background text-fg">
  <header class="sticky top-0 z-20 border-b border-line bg-background">
    <div class="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4 sm:px-6">
      <a href="/" class="text-sm font-medium tracking-tight">Paysum UI</a>
      <nav class="hidden items-center gap-5 text-sm md:flex">
        {#each links as item (item.href)}
          <a href={item.href} class={navCurrent(item.href) ? 'text-fg' : 'text-muted-foreground hover:text-fg'}>
            {item.title}
          </a>
        {/each}
      </nav>
      <div class="ml-auto flex items-center gap-2">
        <Search />
        <a
          href="https://github.com/Paysum/ui"
          class="inline-flex h-8 items-center rounded-full px-3 text-sm text-muted-foreground hover:bg-muted hover:text-fg"
        >
          GitHub
        </a>
        <button
          type="button"
          class="inline-flex h-8 items-center rounded-full px-3 text-sm md:hidden"
          aria-expanded={menu}
          onclick={() => (menu = !menu)}
        >
          Menu
        </button>
      </div>
    </div>
    {#if menu}
      <nav class="border-t border-line px-4 py-3 md:hidden">
        {#each links as item (item.href)}
          <a href={item.href} class="block py-2 text-sm" onclick={() => (menu = false)}>{item.title}</a>
        {/each}
      </nav>
    {/if}
  </header>

  {#if home}
    {@render children()}
  {:else}
    <div class="mx-auto grid max-w-7xl md:grid-cols-[220px_minmax(0,1fr)]">
      <aside class="sticky top-14 hidden h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-line px-4 py-6 md:block">
        {#each sections as section (section.title)}
          <p class="mt-6 px-2 text-xs text-muted-foreground first:mt-0">{section.title}</p>
          <ul class="mt-2 space-y-0.5">
            {#each section.items as item (item.href)}
              <li>
                <a
                  href={item.href}
                  class="block rounded-md px-2 py-1.5 text-sm {current(item.href)
                    ? 'bg-muted font-medium text-fg'
                    : 'text-muted-foreground hover:bg-muted/70 hover:text-fg'}"
                >
                  {item.title}
                </a>
              </li>
            {/each}
          </ul>
        {/each}
      </aside>
      <main class="min-w-0 px-5 py-10 sm:px-8 lg:px-12">{@render children()}</main>
    </div>
  {/if}
</div>
