<script lang="ts">
  let {
    svelte,
    react,
    onclose,
  }: { svelte: string; react: string; onclose?: () => void } = $props()
  let lang = $state<'svelte' | 'react'>('svelte')
  let copied = $state(false)
  const code = $derived(lang === 'svelte' ? svelte : react)

  async function copy() {
    await navigator.clipboard.writeText(code)
    copied = true
    setTimeout(() => (copied = false), 1200)
  }
</script>

<div>
  <div class="flex items-center gap-1 border-b border-line px-3 py-2">
    <div class="flex gap-1" role="tablist" aria-label="Source language">
      {#each ['svelte', 'react'] as item (item)}
        <button
          type="button"
          role="tab"
          aria-selected={lang === item}
          class="h-8 rounded-md px-2.5 text-sm text-muted-foreground aria-selected:bg-background aria-selected:text-fg aria-selected:shadow-sm"
          onclick={() => (lang = item as 'svelte' | 'react')}
        >
          {item === 'svelte' ? 'Svelte' : 'React'}
        </button>
      {/each}
    </div>
    <button type="button" class="ml-auto h-8 rounded-md px-2.5 text-sm text-muted-foreground hover:text-fg" onclick={copy}>
      {copied ? 'Copied' : 'Copy'}
    </button>
    {#if onclose}
      <button type="button" class="h-8 rounded-md px-2.5 text-sm text-muted-foreground hover:text-fg" onclick={onclose}>
        Hide
      </button>
    {/if}
  </div>
  <pre class="max-h-96 overflow-auto p-4 font-mono text-[13px] leading-6 text-fg"><code>{code}</code></pre>
</div>
