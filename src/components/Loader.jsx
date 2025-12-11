import { motion } from 'framer-motion'

export default function Loader(){
  return (
    <motion.div className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0f] overflow-hidden" initial={{opacity:1}} animate={{opacity:1}}>
      <motion.div className="relative w-40 h-40 rounded-full bg-linear-to-br from-purple-500 to-indigo-600 shadow-3xl" animate={{ scale: [1,1.15,1], boxShadow: [ '0 0 25px rgba(139,92,246,0.4)', '0 0 50px rgba(139,92,246,0.9)','0 0 25px rgba(139,92,246,0.4)'] }} transition={{ duration:2, repeat: Infinity, ease: 'easeInOut' }}>
        <motion.span className="absolute inset-0 border-4 border-purple-400/40 rounded-full" animate={{ scale: [1,1.7], opacity: [1,0] }} transition={{ duration:1.6, repeat: Infinity, ease: 'easeOut' }} />
      </motion.div>
      <motion.p className="mt-8 text-xl text-gray-300 tracking-wide font-light" animate={{ opacity: [0.4,1,0.4] }} transition={{ duration:1.8, repeat: Infinity }}>Preparing your Quiz…</motion.p>
    </motion.div>
  )
}