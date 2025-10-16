import React from 'react';
import { cn } from "@/lib/utils";
import { motion as Motion } from 'framer-motion';

// Icon component for contact details
const InfoIcon = ({
    type
}) => {
    const icons = {
        website: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary">
                <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};


const HeroSection = React.forwardRef(
    ({ className, logo, slogan, title, titles, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
      
      // Animation variants for the container to orchestrate children animations
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
      };

      // Animation variants for individual text/UI elements
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      };
      
      // Looping typewriter effect (type → pause → delete → next)
      const phrases = React.useMemo(() => {
        if (Array.isArray(titles) && titles.length > 0) return titles;
        return [title || ""];
      }, [title, titles]);

      const [typedTitle, setTypedTitle] = React.useState("");
      const [phraseIndex, setPhraseIndex] = React.useState(0);
      const [isDeleting, setIsDeleting] = React.useState(false);
      const [showCaret, setShowCaret] = React.useState(true);

      React.useEffect(() => {
        const full = phrases[phraseIndex] || "";
        const typeSpeed = 45;
        const deleteSpeed = 28;
        const fullPauseMs = 1400;
        const emptyPauseMs = 400;

        let timer;
        if (!isDeleting && typedTitle !== full) {
          timer = setTimeout(() => setTypedTitle(full.slice(0, typedTitle.length + 1)), typeSpeed);
        } else if (!isDeleting && typedTitle === full) {
          timer = setTimeout(() => setIsDeleting(true), fullPauseMs);
        } else if (isDeleting && typedTitle.length > 0) {
          timer = setTimeout(() => setTypedTitle(full.slice(0, typedTitle.length - 1)), deleteSpeed);
        } else if (isDeleting && typedTitle.length === 0) {
          timer = setTimeout(() => {
            setIsDeleting(false);
            setPhraseIndex((i) => (i + 1) % phrases.length);
          }, emptyPauseMs);
        }
        return () => clearTimeout(timer);
      }, [typedTitle, isDeleting, phraseIndex, phrases]);

      React.useEffect(() => {
        const caretInterval = setInterval(() => setShowCaret((c) => !c), 600);
        return () => clearInterval(caretInterval);
      }, []);

      return (
          <Motion.section
              ref={ref}
              className={cn(
                  "relative flex w-full min-h-[100dvh] flex-col items-stretch overflow-hidden bg-background text-foreground md:flex-row",
                  className
              )}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              {...props}>
              {/* Animated background pattern on the left half */}
              <div className="pointer-events-none absolute inset-y-0 left-0 right-1/2">
                  <Motion.div
                      className="h-full w-full opacity-[0.12]"
                      style={{
                        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0% 0%",
                        color: "oklch(0.28 0 0)",
                      }}
                      animate={{ backgroundPosition: ["0% 0%", "50% 50%", "0% 0%"] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Soft rotating highlight */}
                  <Motion.div
                      className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
                      style={{
                        backgroundImage:
                          "conic-gradient(from 0deg at 50% 50%, transparent 0deg, currentColor 30deg, transparent 60deg)",
                        color: "oklch(0.28 0 0)",
                      }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Animated diagonal line texture */}
                  <Motion.div
                      className="absolute inset-0 opacity-[0.07] mix-blend-multiply"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 12px)",
                        color: "oklch(0.28 0 0)",
                        backgroundSize: "auto",
                        backgroundPosition: "0% 0%",
                      }}
                      animate={{ backgroundPosition: ["0% 0%", "20% 10%", "0% 0%"] }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Gold accent diagonal lines for luxury feel */}
                  <Motion.div
                      className="absolute inset-0 opacity-[0.05] mix-blend-screen"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, var(--primary) 0px, var(--primary) 1px, transparent 1px, transparent 18px)",
                        backgroundSize: "auto",
                        backgroundPosition: "0% 0%",
                      }}
                      animate={{ backgroundPosition: ["0% 0%", "10% 5%", "0% 0%"] }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Fine film grain for depth */}
                  <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'120\\' height=\\'120\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.25\\'/></svg>')",
                        backgroundSize: "200px 200px",
                      }}
                  />
              </div>
              {/* Left Side: Content */}
              <div
                  className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-24">
                  {/* Top Section: Logo & Main Content */}
                  <div>
                      <Motion.header className="mb-12" variants={itemVariants}>
                          {logo && (
                              <div className="flex items-center">
                                  <img src={logo.url} alt={logo.alt} className="mr-3 h-8" />
                                  <div>
                                      {logo.text && <p className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>{logo.text}</p>}
                                      {slogan && <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>{slogan}</p>}
                                  </div>
                              </div>
                          )}
                      </Motion.header>

                      <Motion.main variants={containerVariants}>
                          <Motion.h1
                              className="text-5xl font-semibold leading-[1.03] tracking-tight text-foreground md:text-7xl lg:text-8xl"
                              style={{ fontFamily: "var(--font-heading)" }}
                              variants={itemVariants}>
                              {typedTitle}
                              <span
                                aria-hidden="true"
                                className="ml-1 inline-block w-[2px] align-middle"
                                style={{
                                  height: "1em",
                                  backgroundColor: "currentColor",
                                  opacity: showCaret ? 1 : 0,
                                  transition: "opacity 0.2s ease",
                                }}
                              />
                          </Motion.h1>
                          <Motion.div className="my-6 h-[3px] w-28 bg-primary/80" variants={itemVariants}></Motion.div>
                          <Motion.p
                              className="mb-10 max-w-2xl text-lg md:text-2xl text-muted-foreground"
                              style={{ fontFamily: 'var(--font-subheading)' }}
                              variants={itemVariants}>
                              {subtitle}
                          </Motion.p>
                          {/* Luxury highlights */}
                          <Motion.ul
                              className="mb-10 grid max-w-xl grid-cols-1 gap-3 text-sm md:grid-cols-2 md:text-base"
                              style={{ fontFamily: 'Montserrat, sans-serif' }}
                              variants={itemVariants}
                          >
                              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span> Waterfront and skyline residences</li>
                              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span> Private viewings and concierge</li>
                              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span> Off‑plan and exclusive listings</li>
                              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span> Multilingual expert advisors</li>
                          </Motion.ul>
                          <Motion.a
                              href={callToAction.href}
                              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold tracking-[0.2em] text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                              style={{ fontFamily: 'var(--font-subheading)' }}
                              variants={itemVariants}>
                              {callToAction.text}
                          </Motion.a>
                          {/* Trust stats */}
                          <Motion.div className="mt-12 grid grid-cols-3 gap-8 text-center" variants={itemVariants}>
                              <div>
                                  <div className="text-4xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>1,200+</div>
                                  <div className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-body)' }}>Homes Sold</div>
                              </div>
                              <div>
                                  <div className="text-4xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>15</div>
                                  <div className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-body)' }}>Years Expertise</div>
                              </div>
                              <div>
                                  <div className="text-4xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>4.9★</div>
                                  <div className="text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-body)' }}>Client Rating</div>
                              </div>
                          </Motion.div>
                      </Motion.main>
                  </div>

                  {/* Bottom Section: Footer Info */}
                  <Motion.footer className="mt-12 w-full" variants={itemVariants}>
                      <div
                          className="grid grid-cols-1 gap-6 text-xs text-muted-foreground sm:grid-cols-3">
                          <div className="flex items-center">
                              <InfoIcon type="website" />
                              <span>{contactInfo.website}</span>
                          </div>
                          <div className="flex items-center">
                              <InfoIcon type="phone" />
                              <span>{contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center">
                              <InfoIcon type="address" />
                              <span>{contactInfo.address}</span>
                          </div>
                      </div>
                  </Motion.footer>
              </div>
              {/* Right Side: Image with Clip Path Animation and premium overlay */}
              <Motion.div
                  className="relative w-full min-h-[60vh] bg-cover bg-center md:w-1/2 md:min-h-[100dvh] lg:w-2/5"
                  style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                  }}
                  initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                  animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
                  transition={{ duration: 1.2, ease: "circOut" }}>
                  <div className="absolute inset-0 bg-gradient-to-l from-background/0 via-background/0 to-background/60"></div>
              </Motion.div>
          </Motion.section>
      );
    }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
