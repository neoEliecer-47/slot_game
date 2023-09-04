import React from 'react'
import { useGameContext } from '../../context/GameContext'

const ButtonSlotGame = () => {

    const { setModalSlot, modalSlot } = useGameContext()
  
return (
    <button onClick={() => setModalSlot(!modalSlot)} className='bg-white p-2'>modal</button>
  )
}

export default ButtonSlotGame