import React from "react";

export default function QuestionCard({ questionObj, selected, onSelect, showAnswer}){
  return (
    <div className="bg-card p-6 rounded-xl shadow-lg w-full">
      <h3 className="text-lg md:text-xl font-semibold mb-4">{questionObj.question}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {questionObj.options.map((opt, idx)=>{
          const isSelected = selected === opt
          const isCorrect = showAnswer && opt === questionObj.answer
          const wrongSelected = showAnswer && isSelected && opt !== questionObj.answer

          let base = 'p-4 rounded-lg border cursor-pointer text-sm md:text-base transition-all shadow-lg'
          if (isCorrect) base += ' border-green-400 bg-green-600/30 sparkle scale-[1.03]'
          else if (wrongSelected) base += ' border-red-400 bg-red-600/30 animate-shake'
          else if (isSelected) base += ' border-accent bg-white/5'
          else base += ' border-white/6 bg-white/3 hover:scale-[1.02]'

          return (
            <button key={idx} className={base} onClick={()=>onSelect(opt)} disabled={showAnswer}>
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
