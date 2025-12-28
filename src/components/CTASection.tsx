import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 dotted-pattern relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent/10 blur-xl" />

      <div className="container-babua relative z-10">
        <div
          ref={contentRef}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          {/* Flag icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-5xl mb-4">
            🏁
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground">
              Welcome to{" "}
              <span className="text-accent">Placement Nagar</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Babua, ab interview tumhara hai.
              <br />
              <span className="text-foreground font-medium">
                Your dream offer letter is waiting.
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-glow-green hover:shadow-[0_12px_50px_-8px_hsl(142_71%_45%_/_0.6)]">
              <span>Start Your Ride</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">
                🚀
              </span>
            </button>
          </div>

          {/* Supporting text */}
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="flex -space-x-2">
              {["👨‍💻", "👩‍💻", "🧑‍💻"].map((emoji, i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs border border-card"
                >
                  {emoji}
                </span>
              ))}
            </span>
            <span>
              Join <span className="font-bold text-foreground">10,000+</span>{" "}
              Students today
            </span>
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center gap-8 pt-8">
            {["⭐", "🎯", "💼", "🏆"].map((emoji, i) => (
              <span
                key={i}
                className="text-2xl opacity-50 hover:opacity-100 hover:scale-125 transition-all cursor-pointer"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
