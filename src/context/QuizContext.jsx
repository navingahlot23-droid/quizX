import React, { createContext, useState, useEffect } from 'react'
import { questionsData } from '../data/questions'

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [score, setScore] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [questionList, setQuestionList] = useState([])
  const [history, setHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem('quiz_history')) || [] } catch { return [] }
  })

  useEffect(() => { localStorage.setItem('quiz_history', JSON.stringify(history)) }, [history])

  const loadQuestions = (cat, diff) => {
    const list = questionsData[cat]?.[diff] || []
    const shuffled = [...list].sort(() => Math.random() - 0.5)
    setQuestionList(shuffled)
    setCurrentQuestionIndex(0)
    setScore(0)
  }

  const saveResultToHistory = (result) => {
    const newHistory = [result, ...history].slice(0,50)
    setHistory(newHistory)
  }

  const resetAll = () => {
    setCategory('')
    setDifficulty('')
    setScore(0)
    setCurrentQuestionIndex(0)
    setQuestionList([])
  }

  return (
    <QuizContext.Provider value={{
      category, setCategory,
      difficulty, setDifficulty,
      score, setScore,
      currentQuestionIndex, setCurrentQuestionIndex,
      questionList, setQuestionList,
      loadQuestions,
      saveResultToHistory,
      history,
      resetAll
    }}>
      {children}
    </QuizContext.Provider>
  )
}