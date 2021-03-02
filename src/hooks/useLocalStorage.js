import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } else {
      return null
    }
  })

  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  return [storedValue, setValue]
}
