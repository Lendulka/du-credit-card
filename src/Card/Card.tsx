import { useEffect, useRef } from 'react'

export const Card = () => {
  const cardInputRef = useRef<HTMLInputElement[]>([])

  const pushReference = (input: HTMLInputElement) => {
    cardInputRef.current.push(input!)
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
      alert('Zadej číslo')
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
    <div>
      <label className="card__label">
        Zadej 4 čísla
        <input
          type="text"
          className="card__input"
          id="0"
          name="card-1"
          required
          maxLength={4}
          placeholder="XXXX"
          ref={pushReference}
          onChange={handleChange}
        />
      </label>
      <label className="card__label">
        Zadej 4 čísla
        <input
          type="text"
          className="card__input"
          id="1"
          name="card-2"
          required
          maxLength={4}
          placeholder="XXXX"
          ref={pushReference}
          onChange={handleChange}
        />
      </label>
      <label className="card__label">
        Zadej 4 čísla
        <input
          type="text"
          className="card__input"
          id="2"
          name="card-3"
          required
          maxLength={4}
          placeholder="XXXX"
          ref={pushReference}
          onChange={handleChange}
        />
      </label>
      <label className="card__label">
        Zadej 4 čísla
        <input
          type="text"
          className="card__input"
          id="3"
          name="card-4"
          required
          maxLength={4}
          placeholder="XXXX"
          ref={pushReference}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default Card
