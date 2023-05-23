import styles from './Header.module.css'

import { ListPlus, MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react"

import { Modal } from "../Modal/Modal"

export function Header() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <header className={styles.header}>
      <div>
        <h1>auto-message</h1>
      </div>

      <div>
        <label for="name"></label>
        <input id="name" type="text" placeholder="Buscar" />
        <button className={styles.button} title="Buscar...">
          <MagnifyingGlass size={24} />
        </button>
      </div>

      <div>
        <button className={styles.button} title="Realizar agendamento..." onClick={() => setOpenModal(true)}>
          <ListPlus size={24} />
        </button>
      </div>

      <Modal isOpen={openModal} />
    </header >
  )
}