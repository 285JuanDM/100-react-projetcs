import { DecreaseIcon, IncreaseIcon, ReloadIcon, UndoIcon } from '../assets/Icons'
import { showNotification } from '../utils/showNotification'

export function Counter ({ counter, updateCounter, addLog, undoAction }) {
  const { id, step: currentStep, count: currentCount, history: currentHistory } = counter

  const withHistory = (updates) => {
    updateCounter(id, {
      history: [...currentHistory, { count: currentCount, step: currentStep }],
      ...updates
    })
  }

  const handleInputOnChange = (event) => {
    withHistory({})
    const newStep = Math.max(1, parseInt(event.target.value) || 1)
    if (newStep > 100) return
    if (newStep === 100) {
      showNotification({ message: 'Felicidades!, llegaste al número máximo' })
    }
    updateCounter(id, { step: newStep })
  }

  const handleClickIncrease = () => {
    addLog({ idCounter: id, data: currentStep, action: 'INCREASE' })
    withHistory({ count: currentCount + currentStep })
  }

  const handleClickDecrease = () => {
    addLog({ idCounter: id, data: currentStep, action: 'DECREASE' })
    withHistory({ count: currentCount - currentStep })
  }

  const handleClickReload = () => {
    window.localStorage.clear()
    addLog({ idCounter: id, action: 'RESET' })
    withHistory({ count: 0, step: 1 })
  }

  const handleClickUndoAction = () => {
    undoAction(id)
  }

  return (
    <section className='counter'>
      <small style={{ textAlign: 'center' }}>Counter número {id}</small>
      <article className='count'>
        <button title='Incrementar' onClick={handleClickIncrease}>
          <IncreaseIcon />
        </button>

        <h1>{currentCount}</h1>

        <button title='Decrementar' onClick={handleClickDecrease}>
          <DecreaseIcon />
        </button>
      </article>

      <article className='configuration'>
        <div className='config-step'>
          <input title='Configurar step' min={1} max={100} onChange={handleInputOnChange} value={currentStep} type='number' />
        </div>

        <div className='actions-counter'>
          <button title='Resetear contador' onClick={handleClickReload}>
            <ReloadIcon />
          </button>

          <button title='Retroceder una acción' onClick={handleClickUndoAction}>
            <UndoIcon />
          </button>
        </div>
      </article>
    </section>
  )
}
