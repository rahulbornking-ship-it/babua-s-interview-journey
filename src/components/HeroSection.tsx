import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );

      // Card animation
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 40, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.4 }
      );

      // Floating animation for card
      gsap.to(cardRef.current, {
        y: -12,
        duration: 2,
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
      className="min-h-screen pt-32 pb-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(40 100% 97%) 0%, hsl(45 100% 95%) 100%)",
      }}
    >
      <div className="container-babua">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div ref={textRef} className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight">
                Babua{" "}
                <span className="text-secondary relative">
                  LMS
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 120 8"
                    fill="none"
                  >
                    <path
                      d="M2 6C30 2 90 2 118 6"
                      stroke="hsl(142 71% 45%)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-secondary font-semibold">
                Desi way to crack tech interviews 🎯
              </p>
              <p className="text-lg text-muted-foreground max-w-md">
                Join thousands of students on their journey from chai breaks to FAANG placements!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Start Learning <span className="text-lg">🚀</span>
              </button>
              <button className="btn-secondary">
                Explore Courses <span className="text-lg">🧭</span>
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {["👨‍💻", "👩‍💻", "🧑‍💻", "👨‍🎓"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-card text-lg"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">10,000+</span> students already learning
              </p>
            </div>
          </div>

          {/* Right Column - Illustration Card */}
          <div ref={cardRef} className="relative">
            <div
              className="relative bg-card rounded-3xl p-8 shadow-card overflow-hidden"
              style={{
                background: "linear-gradient(180deg, hsl(200 90% 92%) 0%, hsl(200 80% 97%) 100%)",
              }}
            >
              {/* Clouds */}
              <div className="absolute top-4 left-8 w-16 h-8 bg-card/80 rounded-full blur-sm" />
              <div className="absolute top-8 right-12 w-12 h-6 bg-card/80 rounded-full blur-sm" />
              <div className="absolute top-6 left-1/3 w-10 h-5 bg-card/70 rounded-full blur-sm" />

              {/* Auto Rickshaw Illustration */}
              <div className="relative z-10 flex flex-col items-center py-8">
                {/* Speech Bubble */}
                <div className="relative mb-6">
                  <div className="bg-card rounded-2xl px-6 py-4 shadow-soft relative">
                    <p className="text-lg font-semibold text-foreground text-center">
                      "Babua, interview crack karna chahte ho?" 🎯
                    </p>
                    {/* Bubble tail */}
                    <div
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-card"
                      style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
                    />
                  </div>
                  {/* Mentor avatar */}
                  <div className="absolute -right-4 -top-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow-yellow text-2xl border-4 border-card">
                    🧑‍🏫
                  </div>
                </div>

                {/* Auto Rickshaw */}
                <div className="relative">
                  <div
                    className="w-64 h-40 rounded-2xl flex items-end justify-center pb-4"
                    style={{
                      background: "linear-gradient(135deg, hsl(42 100% 50%) 0%, hsl(85 70% 50%) 100%)",
                    }}
                  >
                    {/* Rickshaw body */}
                    <div className="relative">
                      <div className="text-6xl">🛺</div>
                      {/* Road marks */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full" />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -left-4 top-1/2 text-2xl animate-pulse">✨</div>
                  <div className="absolute -right-4 top-1/3 text-2xl animate-pulse" style={{ animationDelay: "0.5s" }}>⭐</div>
                </div>
              </div>

              {/* Ground */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-babua-green-light/50 rounded-b-3xl" />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/30 animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-secondary/20 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
