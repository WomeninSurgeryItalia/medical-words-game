import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { SocialFollow } from '../social/SocialFollow'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Medical Words" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Indovina ogni giorno termini ed acronimi medici di 5 lettere in 6 tentativi.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       Condividi la soluzione con gli amici e sui nostri canali social...
        <SocialFollow />
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">Seguici per aggiornamenti quotidiani</p>


      <p className="mt-3 italic text-sm text-gray-500 dark:text-gray-300">
        Medical Words è una versione customizzata per  <a href="https://womeninsurgeryitalia.it/" className="underline font-bold">Women in Surgery Italia</a> ed open source (<a href="https://github.com/par-le/react-wordle" target="_blank" rel="noopener noreferrer" className="underline">qui il codice</a>)
        del gioco in inglese <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank" rel="noopener noreferrer" className="underline font-bold">Wordle</a>
      </p>
    <h1 className="mt-6 t dark:text-gray-300 dark:text-gray-300">Come Giocare:</h1>
      <p className="text-sm text-gray-500 dark:text-gray-300 ">
        Dopo ogni tentativo, i colori delle tessere cambiano
        per mostrarti quanto ci sei andato vicino."
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" status="correct" />
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="B" />
        <Cell value="o" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera F è nella parola ed è nel posto giusto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="I" />
        <Cell value="N" status="present" />
        <Cell value="F" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera N è nella parola ma nel posto sbagliato
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="H" status="absent" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettera H non è nella parola.
      </p>
      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        Ogni giorno c'è una nuova parola da indovinare, la stessa per tutti.
      </p>
        

    </BaseModal>
  )
}


