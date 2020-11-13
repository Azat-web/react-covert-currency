import React from 'react'

function ContentDate() {
  const [date, setDate] = React.useState(null);

  React.useEffect(() =>
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then(data => {
        return data.json()
      })
      .then(data =>
        setDate(data.date)), [])

  return (
    <div className="date">Дата: {date}</div>
  )
}

export default ContentDate
