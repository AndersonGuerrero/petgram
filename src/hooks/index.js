import { useState, useEffect, useRef } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storeValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [storeValue, setLocalStorage]
}

export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}

export const useInputValue = (initialValues = {}) => {
  const [inp, setInp] = useState(initialValues)

  const onChange = (e) => {
    const { name, value } = e.target
    setInp({
      ...inp,
      [name]: value
    })
  }
  return [inp, onChange]
}
