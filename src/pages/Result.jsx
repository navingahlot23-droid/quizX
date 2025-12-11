import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'

export default function Result(){
  const { history } = useContext(QuizContext)
  const navigate = useNavigate()
  const last = history[0] || null

  if(!last) return (
    <div className="min-h-screen flex items-center justify-center"><div className="text-white">No results yet. Go take a quiz!</div></div>
  )

  const percentage = Math.round((last.score / last.totalPossible)*100)

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-[#0a0f19] to-black text-white relative overflow-hidden">
      <Confetti numberOfPieces={200} recycle={false} />

      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/10 p-12 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.5)] text-center max-w-lg w-[90%]">
        <h1 className=" text-2xl md:text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">Quiz Completed 🎉</h1>

        <div className="mt-8 mb-6">
          <div className={`mx-auto w-40 h-40 rounded-full flex items-center justify-center text-5xl font-bold ${percentage >= 75 ? 'bg-green-500/40 border border-green-400 shadow-[0_0_25px_rgba(34,197,94,0.8)]' : percentage >= 40 ? 'bg-yellow-500/40 border border-yellow-400 shadow-[0_0_25px_rgba(234,179,8,0.8)]' : 'bg-red-500/40 border border-red-400 shadow-[0_0_25px_rgba(239,68,68,0.8)]'}`}>{percentage}%</div>
        </div>

        <p className="text-xl text-gray-300 mb-8">You scored <span className="font-bold text-white">{last.score}</span> out of <span className="font-bold text-white">{last.totalPossible}</span></p>

        <div className="flex flex-col gap-4">
          <button onClick={()=>{ navigate('/'); }} className="cursor-pointer py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all">Play Again</button>
          <button onClick={()=>{ navigate('/'); }} className="cursor-pointer py-3 rounded-lg font-semibold text-lg bg-white/10 border border-white/20">Back to Home</button>
        </div>
      </div>
    </div>
  )
}