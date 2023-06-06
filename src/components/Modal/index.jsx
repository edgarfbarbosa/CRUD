import styles from './Modal.module.css'

import { DateTimerPicker } from "../DateTimerPicker"

export function Modal({ isOpen }) {
  if (!isOpen) return null

  return (
    <div className={styles.modal__container}>
      <form className={styles.form__container}>
        <h2>Agende sua mensagem</h2>

        <div>
          <div>
            <label htmlFor="name"></label>
            <input id="name" type="text" placeholder="Nome" />
          </div>
          <div>
            <label htmlFor="surname"></label>
            <input id="surname" type="text" placeholder="Sobrenome" />
          </div>
        </div>

        <div>
          <label htmlFor="number"></label>
          <input id="number" type="tel" placeholder="Número do seu WhatsApp" />
        </div>

        <DateTimerPicker />

        <div>
          <textarea placeholder="Escreva sua mensagem..." />
        </div>

        <button>Agendar mensagem</button>
      </form>
    </div>
  )
}