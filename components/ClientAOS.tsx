'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ClientAOS() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })

    const handleRouteChange = () => {
      AOS.refresh()
    }

    window.addEventListener('load', handleRouteChange)
    return () => {
      window.removeEventListener('load', handleRouteChange)
    }
  }, [])

  return null
}
