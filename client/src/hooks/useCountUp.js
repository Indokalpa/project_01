import { useEffect, useRef, useState } from 'react'

/**
 * Reproduces the original count-up-on-scroll-into-view behavior for the
 * "Trusted by" stat numbers (data-to / data-suf in the original HTML).
 */
export default function useCountUp(to, suffix = '') {
  const ref = useRef(null)
  const [value, setValue] = useState('0')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          let start = null
          const tick = (now) => {
            if (start === null) start = now
            const k = Math.min((now - start) / 1500, 1)
            const eased = 1 - Math.pow(1 - k, 3)
            setValue(Math.round(to * eased).toLocaleString('en-IN') + suffix)
            if (k < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [to, suffix])

  return { ref, value }
}
