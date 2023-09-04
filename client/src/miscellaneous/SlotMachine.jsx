import React, { useState } from 'react'

const SlotMachine = ({ player }) => {
  
    const [coins, setCoins] = useState(20)
  
    return (
    <div>
        <h3>{player}</h3>
        <strong>coins: {coins}</strong>
    </div>
  )
}

export default SlotMachine