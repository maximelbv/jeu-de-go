import React from 'react'
import Board from './Board'

export default function TsumegoPage() {
  return (
    <div class="tsumego"> 
      <Board />
      <div className='text-white'>
        <h2 className="text-2xl">TsumeGo</h2>
        <p>C'est au tour du joueur blanc, ou doit-il poser sa pierre afin d'effectuer le meilleur coup ?</p>
        <p>(veuillez cliquer directement sur le plateau)</p>
      </div>
    </div>
  )
}
