import SchedaServer from "./SchedaServer"

export default function GrigliaServer({ servers }) {
  return (
    <section className="griglia">
      {servers.map(server => (
        <SchedaServer key={server.nome} server={server} />
      ))}
    </section>
  )
}