import "./App.css"
import { sistema, servers, avvisi } from "./dati"
import { contaPerStato, cpuMedia, piuLento, trovaServer } from "./calcoli"
import Intestazione from "./Intestazione"
import Riepilogo from "./Riepilogo"
import GrigliaServer from "./GrigliaServer"
import ServerInEvidenza from "./ServerInEvidenza"
import Avvisi from "./Avvisi"

export default function App() {
  const online = servers.filter(s => s.online).length
  const nomeCercato = "db-01"
  const serverCercato = trovaServer(servers, nomeCercato)

  return (
    <div className="pannello">
      <Intestazione
        nome={sistema.nome}
        aggiornato={sistema.aggiornato}
        online={online}
        totale={servers.length}
      />

      <Riepilogo
        ok={contaPerStato(servers, "ok")}
        attenzione={contaPerStato(servers, "attenzione")}
        critici={contaPerStato(servers, "critico")}
        offline={contaPerStato(servers, "offline")}
        mediaCpu={cpuMedia(servers)}
        lento={piuLento(servers)}
      />

      <GrigliaServer servers={servers} />

      <ServerInEvidenza nomeCercato={nomeCercato} server={serverCercato} />

      <Avvisi avvisi={avvisi} />
    </div>
  )
}


/* Risposte alle Domande:

  1. Perché in React le props e i dati vanno trattati come immutabili:
  modificare direttamente un oggetto aggiorna il valore in memoria ma non avvisa React,
  che quindi non riesegue il render della pagina. Per aggiornare l'interfaccia alla modifica di un dato serve useState.
  
  2. Un solo file, src/calcoli.js, perché lo stato di ogni server è un dato derivato
  calcolato dinamicamente da statoServer leggendo SOGLIE,
  quindi tutti i componenti si aggiornano di conseguenza in automatico.

  3. Passare solo la prop stato mantiene il componente semplice, riutilizzabile anche altrove e indipendente
  dalla struttura interna dell'oggetto server, lasciando al padre il compito di calcolare lo stato.
