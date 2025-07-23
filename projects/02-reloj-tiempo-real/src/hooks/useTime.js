import { useEffect, useState } from 'react'

export function useTime () {
  const [time, setTime] = useState()

  useEffect(() => {
    const construirHora = () => {
      const ahora = new Date()
      const horas = String(ahora.getHours()).padStart(2, '0')
      const minutos = String(ahora.getMinutes()).padStart(2, '0')
      const segundos = String(ahora.getSeconds()).padStart(2, '0')

      setTime(`${horas}:${minutos}:${segundos}`)
    }

    construirHora()
    const id = setInterval(construirHora, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return [time]
}
