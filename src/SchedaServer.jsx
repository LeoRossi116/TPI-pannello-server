import { statoServer } from "./calcoli"
import BadgeStato from "./BadgeStato"

export default function SchedaServer({ server }) {
  const stato = statoServer(server)
  const { nome, ruolo, sede, ip, online, cpu, latenza, servizi, manutenzione } = server

  return (
    <div className={`scheda scheda-${stato}`}>
      <h3>
        {nome} <BadgeStato stato={stato} />
      </h3>
      <p className="ruolo">
        {ruolo} · {sede} · {ip}
      </p>
      <p>CPU: {online ? `${cpu}%` : "—"}</p>
      <p>Latenza: {online ? `${latenza} ms` : "—"}</p>
      <p>Servizi: {servizi.length > 0 ? servizi.join(", ") : "nessuno"}</p>
      <p>
        Manutenzione:{" "}
        {manutenzione
          ? `${manutenzione.data}, ${manutenzione.motivo}`
          : "nessuna in programma"}
      </p>
    </div>
  )
}