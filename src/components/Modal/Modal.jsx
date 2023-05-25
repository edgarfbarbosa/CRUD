import styles from './Modal.module.css'

export function Modal({ isOpen }) {
  if (!isOpen) return null

  return (
    <div>
      <form>
        <h2>Agende sua mensagem</h2>

        <fieldset>
          <div>
            <label for="name"></label>
            <input id="name" type="text" placeholder="Nome" />
          </div>
          <div>
            <label for="surname"></label>
            <input id="surname" type="text" placeholder="Sobrenome" />
          </div>
        </fieldset>

        <div>
          <label for="number"></label>
          <input id="number" type="tel" placeholder="Número do seu WhatsApp" />
        </div>

        <div>
          <label for="date"></label>
          <input id="date" type="date" />
        </div>

        <div>
          <textarea placeholder="Escreva sua mensagem..." />
        </div>

        <button>Agendar mensagem</button>
      </form>
    </div>
  )
}