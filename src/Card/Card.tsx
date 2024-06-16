import { useEffect, useRef } from 'react'
import './Card.css'

export const Card = () => {
  const cardInputRef = useRef<HTMLInputElement[]>([])

  const pushReference = (input: HTMLInputElement) => {
    if (input && !cardInputRef.current.includes(input)) {
      cardInputRef.current.push(input!)
    }
  }

  console.log(cardInputRef)

  useEffect(() => {
    cardInputRef.current[0].focus()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.id)
    const cardInputString = cardInputRef.current[index].value
    const regex = /^[0-9]+$/

    if (cardInputString.match(regex) === null) {
      alert('Zadej číslo!')
      e.target.value = ''
    }

    if (
      index < 3 &&
      cardInputString.length === 4 &&
      cardInputString.match(regex)
    ) {
      cardInputRef.current[index + 1].focus()
    }
  }

  return (
    <form className="card__form">
      <label className="card__label">
        <input
          type="text"
          className="card__input"
          id="0"
          name="card-1"
          required
          maxLength={4}
          ref={pushReference}
          onChange={handleChange}
        />
      </label>
      <label className="card__label">
        <input
          type="text"
          className="card__input"
          id="1"
          name="card-2"
          required
          maxLength={4}
          ref={pushReference}
          onChange={handleChange}
        />
      </label>
      <label className="card__label">
        <input
          type="text"
          className="card__input"
          id="2"
          name="card-3"
          required
          maxLength={4}
          ref={pushReference}
          onChange={handleChange}
        />
      </label>
      <label className="card__label">
        <input
          type="text"
          className="card__input"
          id="3"
          name="card-4"
          required
          maxLength={4}
          ref={pushReference}
          onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default Card
