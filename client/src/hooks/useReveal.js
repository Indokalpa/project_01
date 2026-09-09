import { useEffect, useRef, useState } from 'react'

/**
 * Replaces the original site's global IntersectionObserver over `.rv` elements.
 * Attach the returned ref to any element that should fade/slide in on scroll.
 * `delay` (seconds) maps to the original --dl custom property used for staggering.
 */
export default function useReveal(delay = 0) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.13, rootMargin: '0px 0px -6% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return {
    ref,
    className: `rv${visible ? ' in' : ''}`,
    style: delay ? { '--dl': `${delay}s` } : undefined,
  }
}
