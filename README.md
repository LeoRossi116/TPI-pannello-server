# Pannello Server

Dashboard React per il monitoraggio dello stato, delle prestazioni e degli avvisi dei server della **Piattaforma Ordini**.

## Funzionalità

- **Intestazione di sistema**: mostra nome della piattaforma, data e ora dell'ultimo aggiornamento e rapporto tra server online e totali.
- **Riepilogo metriche**: conteggio dei server per stato (`OK`, `Attenzione`, `Critici`, `Offline`), CPU media dei server online e server online con latenza più alta.
- **Griglia server**: visualizzazione a schede con badge di stato, ruolo, sede, indirizzo IP, CPU, latenza, servizi attivi ed eventuale manutenzione programmata.
- **Server in evidenza**: ricerca rapida per nome server con visualizzazione dedicata o messaggio di assenza.
- **Sezione avvisi**: elenco degli avvisi attivi oppure conferma visiva quando non ci sono segnalazioni.

## Soglie di stato

- **Offline**: `online === false`
- **Critico**: CPU $\ge 90\%$
- **Attenzione**: CPU $\ge 70\%$ (e $< 90\%$)
- **OK**: CPU $< 70\%$

## Struttura del progetto

```text
src/
├── App.jsx              # Componente principale di composizione del pannello
├── App.css              # Stili layout, schede, badge e sezioni
├── main.jsx             # Punto d'ingresso React
├── index.css            # Foglio di stile globale
├── dati.js              # Dati di sistema, elenco server e avvisi
├── calcoli.js           # Funzioni pure per stati, medie, ricerca e latenza
├── Intestazione.jsx     # Header con stato generale e aggiornamento
├── Riepilogo.jsx        # Card riepilogative di stato e prestazioni
├── GrigliaServer.jsx    # Griglia delle schede server
├── SchedaServer.jsx     # Dettaglio singolo server e manutenzione
├── BadgeStato.jsx       # Badge colorato per lo stato del server
├── ServerInEvidenza.jsx # Box del server ricercato
└── Avvisi.jsx           # Lista avvisi o stato senza avvisi
