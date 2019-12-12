import { useEffect, useState } from 'react'

const callFakeAPI = (delay) => (
  new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
)

const useProgressBar = (delay = 3000) => {
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    (async () => {
      await callFakeAPI(delay)
      setIsLoading(false)
    })()
  }, [ isLoading, delay ])

  return isLoading
}

export default useProgressBar
