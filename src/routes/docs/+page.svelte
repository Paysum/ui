<script lang="ts">
  import CodeSample from '$lib/CodeSample.svelte'

  const copy = {
    svelte: `src/lib/components/button.svelte
src/lib/utils.ts`,
    react: `registry/react/button.tsx
registry/react/utils.ts`,
  }
</script>

<svelte:head>
  <title>Introduction · Paysum UI</title>
</svelte:head>

<article class="max-w-3xl">
  <h1 class="text-4xl font-semibold tracking-tight">Introduction</h1>
  <p class="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
    Paysum UI is the interface used on checkout, store themes, and the dashboard. The components
    are source files. Copy one into your app.
  </p>

  <h2 class="mt-12 text-2xl font-semibold tracking-tight">Installation</h2>
  <p class="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
    There is no package to install. Copy the component and <code class="text-fg">utils.ts</code>.
    Svelte files live in <code class="text-fg">src/lib/components</code>. React copies live in
    <code class="text-fg">registry/react</code>.
  </p>
  <div class="mt-4 overflow-hidden rounded-xl border border-line">
    <CodeSample svelte={copy.svelte} react={copy.react} />
  </div>

  <h2 class="mt-12 text-2xl font-semibold tracking-tight">Next</h2>
  <ul class="mt-4 divide-y divide-line border-y border-line text-sm">
    <li><a class="flex items-center justify-between py-3 hover:underline" href="/docs/components">Components <span class="text-muted-foreground">Button, input, card, badge, stat</span></a></li>
    <li><a class="flex items-center justify-between py-3 hover:underline" href="/checkout">Checkout <span class="text-muted-foreground">The embed a buyer opens</span></a></li>
    <li><a class="flex items-center justify-between py-3 hover:underline" href="/themes">Themes <span class="text-muted-foreground">Prism, Aurum, Studio</span></a></li>
    <li><a class="flex items-center justify-between py-3 hover:underline" href="/dashboard">Dashboard <span class="text-muted-foreground">Numbers and recent orders</span></a></li>
  </ul>
</article>
