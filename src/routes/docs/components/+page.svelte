<script lang="ts">
  import Demo from '$lib/Demo.svelte'
  import { docs } from '$lib/docs'
</script>

<svelte:head>
  <title>Components · Paysum UI</title>
</svelte:head>

<article class="max-w-4xl">
  <h1 class="text-4xl font-semibold tracking-tight">Components</h1>
  <p class="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
    The pieces in the library. Open one to see it full size, then copy the source.
  </p>

  <div class="mt-10 grid gap-4 sm:grid-cols-2">
    {#each docs as item (item.slug)}
      <a href="/docs/{item.slug}" class="overflow-hidden rounded-xl border border-line transition-colors hover:bg-muted/40">
        <div class="flex h-44 items-center justify-center border-b border-line bg-background px-6" inert>
          <Demo slug={item.slug} />
        </div>
        <div class="px-4 py-3">
          <p class="text-sm font-medium">{item.title}</p>
          <p class="mt-1 text-sm text-muted-foreground">{item.description}</p>
        </div>
      </a>
    {/each}
  </div>
</article>
