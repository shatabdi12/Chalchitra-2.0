import { useState } from 'react'

const useForm = initialvalue => {
  const [values, setValue] = useState(initialvalue)
  return [
    values,
    e => {
      setValue({
        ...values,
        [e.target.name]: e.target.value,
      })
    },
  ]
}

export default useForm
