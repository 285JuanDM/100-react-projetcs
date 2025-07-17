import { SnackbarProvider } from 'notistack'
import './app.css'
import { Logs } from './components/Logs'
import { CounterList } from './components/CounterList'
import { DecreaseIcon, IncreaseIcon } from './assets/Icons'
import { useLocalStorageState } from './hooks/useLocalStorageState'

export function App () {
  const [counters, setCounter] = useLocalStorageState('counters', [])
  const [logs, setLogs] = useLocalStorageState('logs', [])

  const addLog = ({ idCounter, data, action }) => {
    let message = ''

    if (action === 'INCREASE') {
      message = `${idCounter}, Has incrementado +${data}`
    } else if (action === 'DECREASE') {
      message = `${idCounter}, Has decrementado -${data}`
    } else if (action === 'RESET') {
      message = `${idCounter}, Has reiniciado el contador`
    }

    setLogs(prevState => [...prevState, message])
  }

  const updateCounter = (id, newState) => {
    setCounter(prevState => (
      prevState.map(counter => counter.id === id ? { ...counter, ...newState } : counter)
    ))
  }

  const undoAction = (id) => {
    const counterIndex = counters.findIndex(counter => counter.id === id)
    const newCounters = structuredClone(counters)

    if (counterIndex >= 0) {
      const elementToUndo = newCounters[counterIndex].history.at(-1)
      const deleteLastElemetUnded = newCounters[counterIndex].history.slice(0, -1)

      updateCounter(id, { ...elementToUndo, history: deleteLastElemetUnded })
    }
  }

  const addNewCounter = () => {
    setCounter(prevState => {
      const lastIdElement = prevState.at(-1)?.id ?? 0
      return [...prevState,
        {
          id: lastIdElement + 1,
          count: 0,
          step: 1,
          history: []
        }
      ]
    })
  }

  const deleteLastCounter = () => {
    setCounter(prevState => prevState.slice(0, -1))
  }

  return (
    <main className='app'>
      <SnackbarProvider maxSnack={3} />
      <Logs logs={logs} />
      <CounterList counters={counters} updateCounter={updateCounter} addLog={addLog} undoAction={undoAction} />

      <div className='buttons-add-counters'>
        <button title='Añadir contador' onClick={addNewCounter}>
          <IncreaseIcon />
        </button>

        <button title='Eliminar último contador' onClick={deleteLastCounter}>
          <DecreaseIcon />
        </button>
      </div>
    </main>
  )
}
