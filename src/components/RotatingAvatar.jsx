import { useEffect, useState } from 'react'
import pfpMain from '../assets/taruncodes-avatar.webp'
import pfpSquare from '../assets/taruncodes-square.webp'
import pfpOld from '../assets/taruncodes-old.webp'

const FADE = 420
const ROTATION = [
  { src: pfpMain, ms: 8000 },
  { src: pfpSquare, ms: 3500 },
  { src: pfpOld, ms: 3500 },
]

export default function RotatingAvatar() {
  const [index, setIndex] = useState(0)
  const [swapping, setSwapping] = useState(false)

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fade = calm ? 0 : FADE
    let outer
    let inner
    let cancelled = false
    let current = 0

    ROTATION.forEach(({ src }) => {
      const img = new Image()
      img.src = src
    })

    const advance = () => {
      const next = (current + 1) % ROTATION.length
      if (fade) setSwapping(true)
      inner = setTimeout(() => {
        if (cancelled) return
        current = next
        setIndex(next)
        setSwapping(false)
        outer = setTimeout(advance, ROTATION[current].ms)
      }, fade)
    }

    outer = setTimeout(advance, ROTATION[0].ms)

    return () => {
      cancelled = true
      clearTimeout(outer)
      clearTimeout(inner)
    }
  }, [])

  return (
    <span className="avatar-frame">
      <img
        className={swapping ? 'avatar is-swapping' : 'avatar'}
        src={ROTATION[index].src}
        alt="Tarun Srivastava"
        width="76"
        height="76"
      />
    </span>
  )
}
