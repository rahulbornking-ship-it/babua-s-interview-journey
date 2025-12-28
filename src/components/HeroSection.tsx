import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card animation
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );

      // Text animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.4 }
      );

      // Floating animation for card
      gsap.to(cardRef.current, {
        y: -8,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen pt-20 pb-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(200 85% 92%) 0%, hsl(45 100% 96%) 60%, hsl(40 100% 97%) 100%)",
      }}
    >
      <div className="container-babua">
        <div className="flex flex-col items-center max-w-md mx-auto lg:max-w-lg">
          {/* Illustration Card */}
          <div ref={cardRef} className="relative w-full mb-8">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(180deg, hsl(200 85% 88%) 0%, hsl(200 80% 92%) 100%)",
              }}
            >
              {/* Clouds */}
              <div className="absolute top-4 left-6 w-12 h-6 bg-card/80 rounded-full blur-[2px]" />
              <div className="absolute top-6 right-8 w-10 h-5 bg-card/80 rounded-full blur-[2px]" />
              <div className="absolute top-3 left-1/3 w-8 h-4 bg-card/70 rounded-full blur-[2px]" />

              {/* Speech Bubble */}
              <div className="relative z-10 pt-6 px-6">
                <div className="bg-card rounded-2xl px-4 py-3 shadow-soft inline-block relative mx-auto">
                  <p className="text-sm font-semibold text-foreground">
                    Babua, interview crack karna chahte ho?
                  </p>
                  {/* Bubble tail */}
                  <div
                    className="absolute -bottom-2 left-8 w-4 h-4 bg-card"
                    style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
                  />
                </div>
                {/* Mentor avatar */}
                <div className="absolute right-8 top-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg border-2 border-card overflow-hidden">
                  <span>👨‍🏫</span>
                </div>
              </div>

              {/* Auto Rickshaw */}
              <div className="relative z-10 flex justify-center pb-4 pt-2">
                <div className="relative">
                  {/* Rickshaw SVG-like representation */}
                  <div className="relative w-48 h-32 flex items-end justify-center">
                    {/* Main body - yellow-green rickshaw */}
                    <div className="relative">
                      {/* Roof */}
                      <div 
                        className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-10 rounded-t-full"
                        style={{ background: "linear-gradient(135deg, hsl(52 95% 55%) 0%, hsl(85 70% 50%) 100%)" }}
                      />
                      {/* Body */}
                      <div 
                        className="relative w-28 h-16 rounded-lg flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, hsl(52 95% 55%) 0%, hsl(85 70% 50%) 100%)" }}
                      >
                        {/* Window - front */}
                        <div className="absolute top-1 left-2 w-6 h-6 bg-foreground/80 rounded-sm" />
                        {/* Passenger area */}
                        <div className="absolute top-1 right-2 w-14 h-8 bg-foreground/20 rounded-sm flex items-center justify-center gap-1">
                          <span className="text-xs">👨</span>
                          <span className="text-xs">👩</span>
                        </div>
                      </div>
                      {/* Wheels */}
                      <div className="absolute -bottom-3 left-2 w-5 h-5 bg-foreground rounded-full border-2 border-muted" />
                      <div className="absolute -bottom-3 right-2 w-5 h-5 bg-foreground rounded-full border-2 border-muted" />
                      <div className="absolute -bottom-3 right-8 w-5 h-5 bg-foreground rounded-full border-2 border-muted" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ground/Road */}
              <div 
                className="h-4"
                style={{ background: "linear-gradient(180deg, hsl(142 50% 75%) 0%, hsl(142 60% 65%) 100%)" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="text-center space-y-6 w-full">
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground">
                Babua LMS
              </h1>
              <p className="text-lg text-secondary font-medium">
                Desi way to crack tech interviews
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
              <button className="btn-primary w-full justify-center">
                Start Learning <span className="text-lg">🚀</span>
              </button>
              <button className="btn-secondary w-full justify-center">
                Explore Courses <span className="text-lg">🗺️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
