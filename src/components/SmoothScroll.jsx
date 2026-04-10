import { useSyncExternalStore } from 'react'
import { ReactLenis } from 'lenis/react'

function subscribeReducedMotion (callback) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getReducedMotionSnapshot () {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot () {
  return false
}

const LENIS_OPTIONS = {
  autoRaf: true,
  lerp: 0.09,
  smoothWheel: true,
}

/**
 * Lenis smooth scroll; dinonaktifkan jika user meminta reduced motion.
 */
export default function SmoothScroll ({ children }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  )

  if (prefersReducedMotion) {
    return children
  }

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  )
}
