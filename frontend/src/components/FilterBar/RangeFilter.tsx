import { useEffect, useRef, useState } from 'react'

interface RangeFilterProps {
  placeholder?: string
  min?: number
  max?: number
  step?: number
  initialMin?: number
  initialMax?: number
  onApply?: (min: number, max: number) => void
  onClear?: () => void
}

const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b)

const createPresets = (min = 0, max = 10000, step = 5) => {
  const presets: number[] = []
  const count = Math.min(20, Math.ceil((max - min) / step))
  const range = max - min
  for (let i = 0; i <= count; i++) {
    presets.push(Math.round(min + (range * i) / count))
  }
  return presets
}

const formatNumber = (n: number) => n.toLocaleString()

const RangeFilter = ({ placeholder, min = 0, max = 1000, step = 1, initialMin, initialMax, onApply, onClear }: RangeFilterProps) => {
  const [open, setOpen] = useState(false)
  const [localMin, setLocalMin] = useState<number>(initialMin ?? min)
  const [localMax, setLocalMax] = useState<number>(initialMax ?? max)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (open && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open])

  useEffect(() => {
    // keep local bounds consistent if parent changes
    setLocalMin(initialMin ?? min)
    setLocalMax(initialMax ?? max)
  }, [initialMin, initialMax, min, max])

  const presets = createPresets(min, max, Math.max(1, Math.round((max - min) / 12)))

  const apply = () => {
    const a = clamp(Math.min(localMin, localMax), min, max)
    const b = clamp(Math.max(localMin, localMax), min, max)
    setLocalMin(a)
    setLocalMax(b)
    onApply?.(a, b)
    setOpen(false)
  }

  const clear = () => {
    setLocalMin(min)
    setLocalMax(max)
    onClear?.()
    setOpen(false)
  }

  // Styles use tailwind classes used in project -- tweak as needed.
  return (
    <div className="relative" ref={wrapperRef}>
      {!open ? (
        <div
          className="w-full px-3 py-2 flex items-center justify-between cursor-pointer"
          onClick={() => setOpen(true)}
          role="button"
        >
          <span className="text-sm truncate">{formatNumber(localMin)} - {formatNumber(localMax)} {placeholder ? ` ${placeholder}` : ''}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-500 ml-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
          </svg>
        </div>
      ) : (
        <div className="absolute z-50 left-0 w-[320px] bg-white shadow-md rounded p-3">
          <div className="mb-2 flex gap-2">
            <div className="flex-1">
              <label className="text-xs text-gray-500">Min</label>
              <input
                type="number"
                value={localMin}
                onChange={(e) => setLocalMin(clamp(Number(e.target.value || 0), min, max))}
                className="w-full border px-2 py-1 rounded mt-1"
                aria-label="Minimum value"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-500">Max</label>
              <input
                type="number"
                value={localMax}
                onChange={(e) => setLocalMax(clamp(Number(e.target.value || 0), min, max))}
                className="w-full border px-2 py-1 rounded mt-1"
                aria-label="Maximum value"
              />
            </div>
          </div>

          <div className="mb-2">
            {/* Overlaid sliders: two range inputs visually create two thumbs */}
            <div className="relative h-8">
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={localMin}
                onChange={(e) => setLocalMin(clamp(Number(e.target.value), min, localMax))}
                className="absolute inset-0 w-full appearance-none pointer-events-auto"
                aria-label="Minimum slider"
              />
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={localMax}
                onChange={(e) => setLocalMax(clamp(Number(e.target.value), localMin, max))}
                className="absolute inset-0 w-full appearance-none pointer-events-auto"
                aria-label="Maximum slider"
              />
              {/* visual track and thumbs can be improved with custom CSS; simple fallback here */}
            </div>
          </div>

          <div className="mb-3">
            <div className="flex gap-2 overflow-x-auto py-1">
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    // choose nearest: if click is left half, set min, else set max. Simpler: set min if p closer to min
                    const distToMin = Math.abs(p - localMin)
                    const distToMax = Math.abs(p - localMax)
                    if (distToMin <= distToMax) setLocalMin(p)
                    else setLocalMax(p)
                  }}
                  className="whitespace-nowrap px-3 py-1 text-sm border rounded bg-gray-100 flex-shrink-0"
                >
                  {formatNumber(p)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button onClick={clear} className="px-3 py-1 rounded border text-sm">Clear</button>
            <button onClick={apply} className="px-3 py-1 rounded bg-blue-600 text-white text-sm">Apply</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RangeFilter
