<script lang="ts">
  import CodeSample from '$lib/CodeSample.svelte'
  import Demo from '$lib/Demo.svelte'
  import Preview from '$lib/Preview.svelte'
  import { docs } from '$lib/docs'

  let { data } = $props()
  const doc = $derived(data.doc)
  const index = $derived(docs.findIndex((item) => item.slug === doc.slug))
  const previous = $derived(index > 0 ? docs[index - 1] : null)
  const next = $derived(index >= 0 && index < docs.length - 1 ? docs[index + 1] : null)
</script>

<svelte:head>
  <title>{doc.title} · Paysum UI</title>
</svelte:head>

<div class="grid gap-12 xl:grid-cols-[minmax(0,48rem)_160px]">
  <article class="min-w-0">
    <h1 class="text-4xl font-semibold tracking-tight">{doc.title}</h1>
    <p class="mt-3 max-w-xl text-base leading-7 text-muted-foreground">{doc.description}</p>

    <div class="mt-8" id="preview">
      <Preview svelte={doc.svelte} react={doc.react} peek={doc.usage.svelte}>
        <Demo slug={doc.slug} />
      </Preview>
    </div>

    <h2 id="installation" class="mt-14 scroll-mt-24 text-2xl font-semibold tracking-tight">Installation</h2>
    <p class="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
      Copy these files. Import the component from the path you copied it to.
    </p>
    <div class="mt-4 overflow-hidden rounded-xl border border-line">
      <CodeSample
        svelte={'src/lib/components/' + doc.slug + '.svelte\nsrc/lib/utils.ts'}
        react={'registry/react/' + doc.slug + '.tsx\nregistry/react/utils.ts'}
      />
    </div>

    <h2 id="usage" class="mt-14 scroll-mt-24 text-2xl font-semibold tracking-tight">Usage</h2>
    <div class="mt-4 overflow-hidden rounded-xl border border-line">
      <CodeSample svelte={doc.usage.svelte} react={doc.usage.react} />
    </div>

    <div class="mt-16 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
      {#if previous}
        <a href="/docs/{previous.slug}" class="rounded-xl border border-line px-4 py-3 text-sm hover:bg-muted">
          <span class="text-muted-foreground">Previous</span>
          <span class="mt-1 block font-medium">{previous.title}</span>
        </a>
      {/if}
      {#if next}
        <a href="/docs/{next.slug}" class="rounded-xl border border-line px-4 py-3 text-right text-sm hover:bg-muted sm:col-start-2">
          <span class="text-muted-foreground">Next</span>
          <span class="mt-1 block font-medium">{next.title}</span>
        </a>
      {/if}
    </div>
  </article>

  <aside class="hidden xl:block">
    <p class="text-sm font-medium">On this page</p>
    <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
      <li><a class="hover:text-fg" href="#preview">Preview</a></li>
      <li><a class="hover:text-fg" href="#installation">Installation</a></li>
      <li><a class="hover:text-fg" href="#usage">Usage</a></li>
    </ul>
  </aside>
</div>
