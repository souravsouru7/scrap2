"use client";;
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]"
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}>
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative">
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )} />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "ScrapFlow",
    title1 = "Transform Your Waste",
    title2 = "Into Reliable Revenue",
    description = "India's most intelligent scrap management platform. Real-time pricing, instant pickup, seamless recycling."
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    const [isModelVisible, setIsModelVisible] = useState(false)
    const [modelSrc, setModelSrc] = useState(null)
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const modelContainerRef = useRef(null)

    useEffect(() => {
        const element = modelContainerRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsModelVisible(true)
                    observer.disconnect()
                }
            },
            { root: null, rootMargin: "0px", threshold: 0.2 }
        )
        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 640px)')
        const apply = () => setIsSmallScreen(mq.matches)
        apply()
        mq.addEventListener('change', apply)
        return () => mq.removeEventListener('change', apply)
    }, [])

    // Ensure the model shows immediately on small screens without waiting for intersection
    useEffect(() => {
        if (isSmallScreen) {
            setIsModelVisible(true)
        }
    }, [isSmallScreen])

    // Defer setting the heavy GLB src until visible, to improve first paint
    useEffect(() => {
        if (isModelVisible && !modelSrc) {
            const timer = setTimeout(() => {
                setModelSrc('/city_pack_3.glb')
            }, 250)
            return () => clearTimeout(timer)
        }
    }, [isModelVisible, modelSrc])

    return (
        <div
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
            </div>
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12">
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <h1
                            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                                )}>
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Mobile-only 3D model directly under headline */}
                    <div className="block md:hidden w-full mt-4">
                        <div className="relative w-full h-[55vh] overflow-hidden" ref={modelContainerRef}>
                            {isModelVisible ? (
                                <model-viewer
                                    src={modelSrc || undefined}
                                    camera-controls
                                    autoplay={!isSmallScreen}
                                    auto-rotate={!isSmallScreen}
                                    shadow-intensity="1"
                                    exposure="1.1"
                                    camera-orbit={isSmallScreen ? "0deg 70deg 95%" : "0deg 65deg 70%"}
                                    min-camera-orbit={isSmallScreen ? "auto auto 65%" : "auto auto 55%"}
                                    max-camera-orbit={isSmallScreen ? "auto auto 150%" : "auto auto 160%"}
                                    field-of-view={isSmallScreen ? "16deg" : "8deg"}
                                    ar
                                    loading="lazy"
                                    interaction-prompt="none"
                                    className="absolute inset-0 h-full w-full"
                                    style={{ ['--poster-color']: 'transparent', background: 'transparent' }}
                                ></model-viewer>
                            ) : (
                                <div className="absolute inset-0 h-full w-full bg-black/20 animate-pulse rounded-none" />
                            )}
                        </div>
                        <p className="sr-only">3D model viewer rendering local file city_pack_3.glb</p>
                    </div>

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="hidden md:block">
                        <p
                            className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            {description}
                        </p>
                    </motion.div>
                    {/* Mobile-only description right after mobile model */}
                    <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="block md:hidden">
                        <p
                            className="text-base sm:text-lg text-white/60 mt-6 mb-2 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* Local GLB model viewer (full, no box) */}
            <div className="hidden md:block relative z-10 w-full px-4 md:px-6 mt-8 md:mt-12" ref={modelContainerRef}>
                <div className="relative w-full h-[75vh] sm:h-[90vh] md:h-[100vh] overflow-hidden">
                    {isModelVisible ? (
                        <model-viewer
                            src={modelSrc || undefined}
                            camera-controls
                            autoplay
                            auto-rotate
                            shadow-intensity="1"
                            exposure="1.1"
                            camera-orbit={isSmallScreen ? "0deg 70deg 95%" : "0deg 65deg 70%"}
                            min-camera-orbit={isSmallScreen ? "auto auto 65%" : "auto auto 55%"}
                            max-camera-orbit={isSmallScreen ? "auto auto 150%" : "auto auto 160%"}
                            field-of-view={isSmallScreen ? "16deg" : "8deg"}
                            ar
                            loading="lazy"
                            interaction-prompt="none"
                            className="absolute inset-0 h-full w-full"
                            style={{ ['--poster-color']: 'transparent', background: 'transparent' }}
                        ></model-viewer>
                    ) : (
                        <div className="absolute inset-0 h-full w-full bg-black/20 animate-pulse rounded-none" />
                    )}
                </div>
                <p className="sr-only">3D model viewer rendering local file city_pack_3.glb</p>
            </div>
            <div
                className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }