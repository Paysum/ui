<script lang="ts">
  import type { Snippet } from 'svelte'
  import CodeSample from './CodeSample.svelte'

  let {
    svelte,
    react,
    peek = '',
    children,
  }: { svelte: string; react: string; peek?: string; children: Snippet } = $props()
  let open = $state(false)
  const closeScript = '</' + 'script>'
  const firstLine = $derived(
    (peek || svelte)
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line && !line.startsWith('<script') && !line.startsWith('import ') && line !== closeScript) ?? '',
  )
</script>

<div class="overflow-hidden rounded-xl border border-line bg-background">
  <div class="flex min-h-80 items-center justify-center p-8 sm:p-12">
    {@render children()}
  </div>
  <div class="relative border-t border-line bg-muted/50">
    {#if open}
      <CodeSample {svelte} {react} onclose={() => (open = false)} />
    {:else}
      <pre class="max-h-14 overflow-hidden px-4 py-3 font-mono text-[13px] leading-6 text-muted-foreground"><code>{firstLine}</code></pre>
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-muted to-transparent"></div>
      <button
        type="button"
        class="absolute right-3 bottom-3 h-8 rounded-full border border-line bg-background px-3 text-sm font-medium"
        onclick={() => (open = true)}
      >
        View code
      </button>
    {/if}
  </div>
</div>
