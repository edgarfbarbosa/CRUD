import { useState } from "react"
import { ListPlus, MagnifyingGlass } from "@phosphor-icons/react"
import { Modal } from "../Modal"
import styles from "./Header.module.css"

export function Header() {
  const [openModal, setOpenModal] = useState(false)

  function sairDoModal(informaçãoDoFilho) {
    setOpenModal(informaçãoDoFilho)
  }

  return (
    <header className={styles.header__container}>
      <div>
        <h1 className={styles.header__title}>SendNote</h1>
      </div>

      <div>
        <label htmlFor="name"></label>
        <input className={styles.header__input} id="name" type="text" placeholder="Buscar..." />
        <button className={styles.header__btn} title="Buscar...">
          <MagnifyingGlass size={24} />
        </button>
      </div>

      <div>
        <button className={styles.header__btn} title="Realizar agendamento..." onClick={() => setOpenModal(true)}>
          <ListPlus size={24} />
        </button>
      </div>

      <Modal isOpen={openModal} sairDoModal={sairDoModal} />
    </header >
  )
}