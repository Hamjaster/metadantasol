import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export default function FadeUp({ component, delay }) {
    const ref = useRef(null)
    const InView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (InView) controls.start('animate')
        // eslint-disable-next-line
    }, [InView])

    return (
        <motion.div className='overflow-hidden pb-3 h-full' ref={ref}
            initial='initial'
            animate={controls}
            variants={{
                initial: { y: 70, opacity: 0 },
                animate: {
                    y: 0, opacity: 1,
                    transition: {
                        delay: delay ? delay : 0.5, duration: 0.6, type: 'spring'
                    }
                }
            }
            }
        >
            {component}
        </motion.div>
    )
}
