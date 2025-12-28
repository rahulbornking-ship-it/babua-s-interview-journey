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
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
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
      className="py-16 bg-background"
    >
      <div className="container-babua">
        <div
          ref={contentRef}
          className="max-w-md mx-auto lg:max-w-lg text-center space-y-6"
        >
          {/* Flag icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-accent" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M4 4v16h2v-7h14l-2-4.5L20 4H6V3a1 1 0 0 0-2 0v1z"/>
              </svg>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Welcome to
            </h2>
            <h2 className="text-2xl lg:text-3xl font-bold text-accent">
              Placement Nagar
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-muted-foreground leading-relaxed">
            Babua, ab interview tumhara hai.
            <br />
            Your dream offer letter is waiting.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="w-full max-w-xs px-8 py-4 bg-secondary text-secondary-foreground font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-glow-blue">
              Start Your Ride <span className="ml-1">🚀</span>
            </button>
          </div>

          {/* Supporting text */}
          <p className="text-sm text-muted-foreground">
            Join <span className="font-semibold text-foreground">10,000+</span> Students today
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
