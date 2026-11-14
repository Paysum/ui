<script lang="ts">
  import Badge from '$lib/components/badge.svelte'
  import Button from '$lib/components/button.svelte'
  import Card from '$lib/components/card.svelte'
  import Stat from '$lib/components/stat.svelte'
  import Table from '$lib/components/table.svelte'

  const orders = [
    { email: 'ada@studio.dev', item: 'Creative toolkit', amount: '$29.00', status: 'Paid' },
    { email: 'lin@north.io', item: 'Brand kit', amount: '$18.00', status: 'Pending' },
    { email: 'sam@field.co', item: 'Icon set', amount: '$12.00', status: 'Paid' },
  ]
</script>

<svelte:head>
  <title>Dashboard · Paysum UI</title>
</svelte:head>

<div class="flex flex-wrap items-end justify-between gap-3">
  <div>
    <p class="text-[13px] text-muted-foreground">Product</p>
    <h1 class="mt-1 text-2xl font-medium tracking-tight">Dashboard</h1>
    <p class="mt-2 max-w-xl text-[15px] leading-6 text-muted-foreground">
      Overview numbers and a short order list. The live dashboard uses these surfaces.
    </p>
  </div>
  <Button variant="outline" href="https://dashboard.paysum.io">Open dashboard</Button>
</div>

<div class="mt-6 grid gap-3 sm:grid-cols-3">
  <Stat label="Revenue" value="$12,480" hint="Last 30 days" />
  <Stat label="Orders" value="186" hint="Paid" />
  <Stat label="Customers" value="94" hint="With an order" />
</div>

<Card class="mt-4 overflow-hidden">
  <div class="flex items-center justify-between border-b border-line px-4 py-3">
    <p class="text-sm font-medium">Recent orders</p>
    <Button variant="ghost" href="https://dashboard.paysum.io">View all</Button>
  </div>
  <Table>
    <thead class="text-[13px] text-muted-foreground">
      <tr class="border-b border-line">
        <th class="px-4 py-2 font-medium">Customer</th>
        <th class="px-4 py-2 font-medium">Status</th>
        <th class="px-4 py-2 text-right font-medium">Amount</th>
      </tr>
    </thead>
    <tbody>
      {#each orders as order (order.email)}
        <tr class="border-b border-line last:border-0">
          <td class="px-4 py-2.5">
            <div>{order.email}</div>
            <div class="text-xs text-muted-foreground">{order.item}</div>
          </td>
          <td class="px-4 py-2.5">
            <Badge tone={order.status === 'Paid' ? 'success' : 'warning'}>{order.status}</Badge>
          </td>
          <td class="px-4 py-2.5 text-right tabular-nums">{order.amount}</td>
        </tr>
      {/each}
    </tbody>
  </Table>
</Card>
