import {useRef,useState} from 'react'
import {motion} from 'framer-motion'
import {BrainCircuit,Database,Zap,MessagesSquare,Move} from 'lucide-react'

const agents=[
  {label:'RAG',Icon:Database,className:'left-4 top-8'},
  {label:'Agents',Icon:Zap,className:'right-4 top-14'},
  {label:'LLMs',Icon:MessagesSquare,className:'bottom-7 left-10'},
]

export default function AIPlayground(){
  const bounds=useRef(null)
  const [active,setActive]=useState('Click a node')
  return <div className="relative hidden lg:block">
    <div ref={bounds} className="glass relative h-[330px] w-[330px] overflow-hidden rounded-[2.5rem] shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.24),transparent_55%)]"/>
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:32px_32px]"/>
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-50" viewBox="0 0 330 330">
        <motion.path d="M75 70 Q165 100 165 165" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 7" animate={{strokeDashoffset:[0,-24]}} transition={{duration:2,repeat:Infinity,ease:'linear'}}/>
        <motion.path d="M265 90 Q200 110 165 165" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 7" animate={{strokeDashoffset:[0,-24]}} transition={{duration:2,repeat:Infinity,ease:'linear'}}/>
        <motion.path d="M85 270 Q110 200 165 165" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 7" animate={{strokeDashoffset:[0,-24]}} transition={{duration:2,repeat:Infinity,ease:'linear'}}/>
      </svg>
      <motion.button whileTap={{scale:.9}} onClick={()=>setActive('Neural core online')} className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-violet-300/40 bg-violet-500/20 shadow-[0_0_55px_rgba(139,92,246,.45)] backdrop-blur-xl">
        <motion.span animate={{rotate:360}} transition={{duration:12,repeat:Infinity,ease:'linear'}}><BrainCircuit size={38} className="text-violet-200"/></motion.span>
        <span className="mt-2 text-[10px] font-semibold uppercase tracking-[.2em]">AI Core</span>
      </motion.button>
      {agents.map(({label,Icon,className})=><motion.button key={label} drag dragConstraints={bounds} dragElastic={.12} whileHover={{scale:1.08}} whileDrag={{scale:1.12,zIndex:30}} onClick={()=>setActive(`${label} node selected`)} className={`absolute z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-xs shadow-xl backdrop-blur-xl ${className}`}>
        <Icon size={15} className="text-violet-300"/>{label}
      </motion.button>)}
      <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[9px] uppercase tracking-widest text-white/30"><Move size={11}/>drag nodes</div>
    </div>
    <motion.p key={active} initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} className="mt-3 text-center font-mono text-[10px] uppercase tracking-[.2em] text-violet-300">{active}</motion.p>
  </div>
}
