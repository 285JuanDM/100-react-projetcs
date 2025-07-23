import { useTime } from './hooks/useTime'

export function App () {
  const [time] = useTime()

  return (
    <>
      <h1>{time}</h1>
    </>
  )
}
