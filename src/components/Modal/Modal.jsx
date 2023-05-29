import styles from './Modal.module.css'

import { DateTimerPicker } from '../DateTimerPicker'

export function Modal({ isOpen }) {
  if (!isOpen) return null

  return (
    <div className={styles.modal__container}>
      <form className={styles.form__container}>
        <h2>Agende sua mensagem</h2>

        <fieldset>
          <div>
            <label htmlFor="name"></label>
            <input id="name" type="text" placeholder="Nome" />
          </div>
          <div>
            <label htmlFor="surname"></label>
            <input id="surname" type="text" placeholder="Sobrenome" />
          </div>
        </fieldset>

        <div>
          <label htmlFor="number"></label>
          <input id="number" type="tel" placeholder="Número do seu WhatsApp" />
        </div>

        <div>
          <label htmlFor="date"></label>
          <DateTimerPicker />
        </div>

        <div>
          <textarea placeholder="Escreva sua mensagem..." />
        </div>

        <button>Agendar mensagem</button>
      </form>
    </div>
  )
}