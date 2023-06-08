import { useState } from 'react'

import styles from './Modal.module.css'

import { DateTimerPicker } from "../DateTimerPicker"

export function Modal({ isOpen }) {
  if (!isOpen) return null

  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    number: 0
  })

  function coletarDados(event, atributoQueEstouColetando) {
    setNewUser({
      ...newUser,
      [atributoQueEstouColetando]: event.target.value
    })
  }

  function enviarDados(event) {
    event.preventDefault()
    console.log(newUser)
  }

  return (
    <div className={styles.modal__container}>
      <form className={styles.form__container} onSubmit={enviarDados}>
        <h2>Agende sua mensagem</h2>

        <div>
          <div>
            <label htmlFor="name"></label>
            <input
              id="name"
              type="text"
              placeholder="Nome"
              value={newUser.name}
              onChange={(event) => coletarDados(event, "name")}
            />
          </div>
          <div>
            <label htmlFor="lastName"></label>
            <input
              id="lastName"
              type="text"
              placeholder="Sobrenome"
              value={newUser.lastName}
              onChange={(event) => coletarDados(event, "lastName")}
            />
          </div>
        </div>

        <div>
          <label htmlFor="number"></label>
          <input
            id="number"
            type="tel"
            placeholder="Número do seu WhatsApp"
            value={newUser.number}
            onChange={(event) => coletarDados(event, "number")}
          />
        </div>

        <DateTimerPicker />

        <div>
          <textarea placeholder="Escreva sua mensagem..." />
        </div>

        <button type="submit">Agendar mensagem</button>
      </form>
    </div>
  )
}