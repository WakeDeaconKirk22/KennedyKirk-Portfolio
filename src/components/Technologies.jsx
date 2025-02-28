import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { DiNodejs } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiLinux } from 'react-icons/di'
import { DiIllustrator } from 'react-icons/di'
import { DiPhotoshop } from 'react-icons/di'
import { DiJava } from 'react-icons/di'
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    intial: {y:-10},
    animate: {
        y:[10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat:Infinity,
            repeatType: "reverse",
        }
    }
})
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1, y: 0}}
        initial={{opacity:0 , y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
       <motion.div
       whileInView={{opacity: 1 , x: 0}}
       initial={{opacity:0 , x: -100}}
       transition={{duration: 1.5}}
       
       className='flex flex-wrap items-center justify-center gap-4'>
           <motion.div 
           variants={iconVariants(2.5)}
           intial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiReactjsLine className='text-7xl text-cyan-400'/>
           </motion.div>
           <motion.div 
            variants={iconVariants(3)}
            intial="initial"
            animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiCss3 className='text-7xl text-blue-600'/>
           </motion.div>
           <motion.div 
            variants={iconVariants(1.5)}
            intial="initial"
            animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiHtml5 className='text-7xl text-orange-300'/>
           </motion.div>
           <motion.div 
            variants={iconVariants(2.5)}
            intial="initial"
            animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiNodejs className='text-7xl text-green-500'/>
           </motion.div>
           <motion.div 
            variants={iconVariants(3)}
            intial="initial"
            animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiLinux className='text-7xl text-cyan-400'/>
            
           </motion.div>
           <motion.div 
            variants={iconVariants(1.5)}
            intial="initial"
            animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiIllustrator className='text-7xl text-orange-400'/>
           </motion.div>
           <motion.div 
            variants={iconVariants(3)}
            intial="initial"
            animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiPhotoshop className='text-7xl text-blue-600'/>
           </motion.div>
           <motion.div
            variants={iconVariants(2.5)}
            intial="initial"
            animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiJavascript1 className='text-7xl text-yellow-400'/>
           </motion.div>
           <motion.div 
            variants={iconVariants(3.5)}
            intial="initial"
            animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiJava className='text-7xl text-cyan-400'/>
           </motion.div>
       </motion.div>
    </div>
  )
}

export default Technologies
