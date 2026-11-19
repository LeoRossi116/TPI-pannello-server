import SchedaServer from "./SchedaServer"

export default function ServerInEvidenza({ nomeCercato, server }) {
  return (
    <section className="evidenza">
      <h2>Server cercato: {nomeCercato}</h2>
      {server ? (
        <SchedaServer server={server} />
      ) : (
        <p className="non-trovato">Nessun server trovato con questo nome.</p>
      )}
    </section>
  )
}