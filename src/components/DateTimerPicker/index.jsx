import { useState } from "react"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker"

import pt from "date-fns/locale/pt"

registerLocale('pt', pt)

export function DateTimerPicker() {

  const [selectedDate, setNewDate] = useState(new Date())

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => { setNewDate(date) }}
      locale="pt"
      dateFormat="dd/MM/yyyy HH:mm"
      showTimeSelect
    />
  )
}