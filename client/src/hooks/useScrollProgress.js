import { useEffect, useState } from 'react'

/**
 * Reproduces the original scroll-progress bar + "stuck" nav background,
 * throttled with requestAnimationFrame exactly like the original script.
 */
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const h = document.body.scrollHeight - window.innerHeight
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0)
      setStuck(window.scrollY > 60)
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { progress, stuck }
}
