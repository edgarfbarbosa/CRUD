import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>auto-message</h1>
      </div>
      <div>
        <label for="name"></label>
        <input id="name" type="text" placeholder="Buscar" />
      </div>
      <div>
        <button>Buscar</button>
      </div>
    </header >
  )
}