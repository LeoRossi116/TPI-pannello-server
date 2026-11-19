const ETICHETTE = {
  ok: "OK",
  attenzione: "Attenzione",
  critico: "Critico",
  offline: "Offline"
}

export default function BadgeStato({ stato }) {
  return (
    <span className={`badge badge-${stato}`}>
      {ETICHETTE[stato]}
    </span>
  )
}