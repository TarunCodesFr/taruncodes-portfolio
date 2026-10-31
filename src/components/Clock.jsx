import { useEffect, useState } from 'react'

const formatTime = () =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date())

export default function Clock() {
  const [time, setTime] = useState(formatTime)

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return <span className="clock">{time} IST</span>
}
