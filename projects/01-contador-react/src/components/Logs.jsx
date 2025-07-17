export function Logs ({ logs }) {
  return (
    <aside className='action-logs'>
      <h2>Últimas acciones:</h2>
      {
        logs.map((log, index) => (
          <p className='log' key={index}>{log}</p>
        ))
      }
    </aside>
  )
}
