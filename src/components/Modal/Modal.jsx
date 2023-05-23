import styles from './Modal.module.css'

export function Modal({ isOpen }) {
  if (isOpen) {
    return <form></form>
  } else {
    return null
  }
}