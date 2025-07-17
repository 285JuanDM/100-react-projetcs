import { useEffect, useState } from 'react'

export function useLocalStorageState (key, initialValue) {
  const [state, setState] = useState(() => {
    const stored = window.localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
