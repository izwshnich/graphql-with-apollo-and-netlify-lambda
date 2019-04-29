import React from 'react'

const Dogs = ({ loading, data }) => {
  if (loading) return 'loading...'

  return (
    <ul>
      {data.akita.map((akita, i) => <li key={`akita-${i}`}><img src={akita} alt={`akita-${i}`} /></li>)}
    </ul>
  )
}

export default Dogs