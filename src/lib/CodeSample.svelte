<script lang="ts">
  let { svelte, react }: { svelte: string; react: string } = $props()
  let lang = $state<'svelte' | 'react'>('svelte')
  let copied = $state(false)
  const code = $derived(lang === 'svelte' ? svelte : react)

  async function copy() {
    await navigator.clipboard.writeText(code)
    copied = true
    setTimeout(() => (copied = false), 1200)
  }
</script>

<div class="overflow-hidden rounded-xl border border-line bg-card">
  <div class="flex items-center justify-between border-b border-line px-3 py-2">
    <div class="flex gap-1" role="tablist" aria-label="Component source">
      {#each ['svelte', 'react'] as item (item)}
        <button
          type="button"
          role="tab"
          aria-selected={lang === item}
          class="h-7 rounded-md px-2.5 text-[13px] font-medium text-muted-foreground aria-selected:bg-muted aria-selected:text-fg"
          onclick={() => (lang = item as 'svelte' | 'react')}
        >
          {item === 'svelte' ? 'Svelte' : 'React'}
        </button>
      {/each}
    </div>
    <button type="button" class="text-[13px] text-muted-foreground hover:text-fg" onclick={copy}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  </div>
  <pre class="overflow-x-auto p-4 text-[12.5px] leading-5 text-fg"><code>{code}</code></pre>
</div>
