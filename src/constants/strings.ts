export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const SHARE_DESCRIPTION =  'La mia partita di oggi:'
export const WORD_NUMBER = 'Parola numero'
export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const GAME_COPIED_MESSAGE = 'Copiata la partita negli appunti'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Non ci sono abbastanza lettere'
export const WORD_NOT_FOUND_MESSAGE = 'Parola non presente nel dizionario'
export const HARD_MODE_ALERT_MESSAGE =
  'La modalità difficile può essere impostata solo all\'inizio!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La parola era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Devi usare la ${guess} nella posizione ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Il tentativo deve contenere la ${letter}`
export const ENTER_TEXT = 'Invia'
export const DELETE_TEXT = 'Cancella'
export const STATISTICS_TITLE = 'Statistiche'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuzione dei tentativi'
export const NEW_WORD_TEXT = 'Nuova parola in'
export const SHARE_TEXT = 'Condividi'
export const TOTAL_TRIES_TEXT = 'Partite'
export const SUCCESS_RATE_TEXT = '% Vittorie'
export const CURRENT_STREAK_TEXT = 'Vinte di fila'
export const BEST_STREAK_TEXT = 'Record vinte di fila'
