import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../context/QuizContext'
import QuestionCard from '../components/QuestionCard'
import { motion } from 'framer-motion'

export default function Quiz({ setStartQuiz }){
  const { questionList, currentQuestionIndex, setCurrentQuestionIndex, score, setScore, saveResultToHistory, category, difficulty } = useContext(QuizContext)
  const navigate = useNavigate()

  const [selected, setSelected] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [running, setRunning] = useState(true)

  useEffect(()=>{
    if(!category || !difficulty) { navigate('/') }
  }, [])

  useEffect(()=>{ setTimeLeft(15); setSelected(null); setShowAnswer(false); setRunning(true) }, [currentQuestionIndex])

  useEffect(()=>{
    if(!running) return
    if(timeLeft<=0){ handleTimeUp(); return }
    const t = setTimeout(()=> setTimeLeft(t=>t-1), 1000)
    return ()=> clearTimeout(t)
  }, [timeLeft, running])

  if(!questionList || questionList.length===0) return (
    <div className="min-h-screen flex items-center justify-center"><div className="bg-card p-8 rounded-xl">No questions found. Go back to home.</div></div>
  )

  const total = questionList.length
  const currentQ = questionList[currentQuestionIndex]

  const handleSelect = (opt)=>{
    if(showAnswer) return
    setSelected(opt)
    setShowAnswer(true)
    setRunning(false)

    if(opt === currentQ.answer){ setScore(s=>s+10);}
    

    // vibration
    try{ if(navigator.vibrate){ if(opt===currentQ.answer) navigator.vibrate(20); else navigator.vibrate(80) } }catch{}
  }

  const handleNext = ()=>{
    if(currentQuestionIndex+1 >= total){
      const result = { date: new Date().toISOString(), category, difficulty, score, totalPossible: total*10 }
      saveResultToHistory(result)
      navigate('/result')
    } else {
      setCurrentQuestionIndex(i=>i+1)
    }
  }

  const handleTimeUp = ()=>{
    setShowAnswer(true)
    setRunning(false)
    setTimeout(()=>{
      if(currentQuestionIndex+1 >= total){ const result = { date: new Date().toISOString(), category, difficulty, score, totalPossible: total*10 }; saveResultToHistory(result); navigate('/result') }
      else setCurrentQuestionIndex(i=>i+1)
    }, 900)
  }

  const { resetAll } = useContext(QuizContext);
  const handleQuit = () => {
    resetAll(); // Reset all quiz state
    setStartQuiz(false); // Show homepage
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-linear-to-br from-black via-[#0a0f19] to-black text-white">
      <div className="w-full md:max-w-4xl mt-8 px-6">
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-linear-to-r from-purple-500 to-blue-500 transition-all" style={{ width: ((currentQuestionIndex+1)/total)*100 + '%' }} />
        </div>
      </div>

      <div className="w-full md:max-w-3xl p-6 max-[767px]:px-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">{category?.toUpperCase()} - {difficulty?.toUpperCase()}</h2>
            <p className="text-xs text-gray-400">Score: {score}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-300">Question {currentQuestionIndex+1} / {total}</p>
            <p className="text-xs text-gray-400">Points per correct: 10</p>
          </div>
        </div>

        <div className="bg-card  max-[767px]:px-0 p-6 rounded-2xl shadow">
          <div className="mb-4">
            {/* Timer */}
            <div className="flex items-center justify-between mb-3 text-sm">
              <span>Time</span>
              <span>{timeLeft}s</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded overflow-hidden mb-4">
              <div style={{ width: Math.max(0,(timeLeft/15)*100) + '%' }} className="h-full bg-accent transition-all" />
            </div>

            <QuestionCard questionObj={currentQ} selected={selected} onSelect={handleSelect} showAnswer={showAnswer} />

            <div className="mt-6 flex items-center justify-between">
              <button onClick={handleQuit} className="cursor-pointer px-4 py-2 rounded-lg bg-gray-800 text-gray-300">Quit</button>

              <div className="flex gap-3">
                {showAnswer ? (
                  <button onClick={handleNext} className="cursor-pointer px-4 py-2 rounded-lg bg-accent text-white">{currentQuestionIndex+1 >= total ? 'Finish' : 'Next'}</button>
                ) : (
                  <button onClick={()=>{ setShowAnswer(true); setRunning(false); }} className="cursor-pointer px-4 py-2 rounded-lg bg-gray-800 text-gray-300">Skip</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}