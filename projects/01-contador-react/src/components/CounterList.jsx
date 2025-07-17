import { Counter } from './Counter'

export function CounterList ({ counters, updateCounter, addLog, undoAction }) {
  return (
    <section className='main-app'>
      {
        counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            updateCounter={updateCounter}
            addLog={addLog}
            undoAction={undoAction}
          />
        ))
      }
    </section>
  )
}
