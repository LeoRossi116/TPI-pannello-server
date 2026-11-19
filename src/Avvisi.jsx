export default function Avvisi({ avvisi }) {
  const vuoto = avvisi.length === 0

  return (
    <section className={vuoto ? "avvisi avvisi-vuoto" : "avvisi"}>
      <h2>Avvisi ({avvisi.length})</h2>
      {vuoto ? (
        <p>Nessun avviso attivo.</p>
      ) : (
        <ul>
          {avvisi.map((testo, i) => (
            <li key={i}>{testo}</li>
          ))}
        </ul>
      )}
    </section>
  )
}