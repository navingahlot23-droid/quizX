import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import Loader from '../components/Loader'
import Quiz from './Quiz'
import { QuizContext } from '../context/QuizContext'

export default function Home() {
  const [startQuiz, setStartQuiz] = useState(false)
  const [loading, setLoading] = useState(false)
  const [category, setCategoryState] = useState('javascript')
  const [difficulty, setDifficultyState] = useState('easy')
  const { setCategory, setDifficulty, loadQuestions } = useContext(QuizContext)

  const start = (cat, diff) => {
    setCategory(cat)
    setDifficulty(diff)
    setLoading(true)
    setTimeout(() => {
      loadQuestions(cat, diff)
      setLoading(false)
      setStartQuiz(true)
    }, 1800)
  }

  if (loading) return <Loader />
  if (startQuiz) return <Quiz setStartQuiz={setStartQuiz} />

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div className="absolute inset-0 bg-linear-to-br from-purple-700 via-indigo-700 to-black" animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} style={{ backgroundSize: '200% 200%' }} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="absolute inset-0 flex items-center justify-center">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl mx-2 max-w-md text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-4xl font-extrabold text-white drop-shadow-lg mb-4">Test Your Knowledge</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="text-gray-300 text-lg mb-6 tracking-wide">Challenge yourself with our interactive quiz adventure!</motion.p>

          <div className="grid grid-cols-1 gap-3 mb-4">
            <select
              className="p-3 rounded-lg bg-black/40 border border-white/10 text-white"
              value={category}
              onChange={(e) => setCategoryState(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </select>

            <select
              className="p-3 rounded-lg bg-black/40 border border-white/10 text-white"
              value={difficulty}
              onChange={(e) => setDifficultyState(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => start(category, difficulty)}
            className="cursor-pointer px-10 py-4 text-lg text-white font-semibold bg-indigo-600 rounded-2xl shadow-xl hover:shadow-indigo-500/50 transition-all"
          >
            Start Quiz
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}