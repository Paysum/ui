export function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="min-w-0 p-4 text-left">
      <p className="text-xs font-medium text-ink-400">{label}</p>
      <p className="mt-1.5 text-[22px] leading-7 font-medium text-fg tabular-nums">{value}</p>
      {hint ? <p className="mt-1 text-xs text-ink-500">{hint}</p> : null}
    </div>
  )
}
