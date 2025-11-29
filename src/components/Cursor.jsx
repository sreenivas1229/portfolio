import React from 'react'

export default function Cursor() {
  React.useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const down = () => cursor.classList.add('cursor-active')
    const up = () => cursor.classList.remove('cursor-active')

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    // highlight interactive elements
    const overHandler = (e) => {
      const target = e.target
      if (target.closest('a') || target.closest('button') || target.closest('[role="button"]')) {
        cursor.classList.add('cursor-active')
      } else {
        cursor.classList.remove('cursor-active')
      }
    }
    window.addEventListener('mouseover', overHandler)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mouseover', overHandler)
      cursor.remove()
    }
  }, [])

  return null
}
