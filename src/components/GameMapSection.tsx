import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mapStops = [
  {
    id: 1,
    icon: "📍",
    title: "Start Point",
    isStart: true,
  },
  {
    id: 2,
    title: "DSA Station",
    subtitle: "Algorithms ki Gali",
    isActive: true,
    hasImage: true,
  },
];

const GameMapSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: i * 0.15,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 bg-background">
      <div className="container-babua">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              EXPLORE YOUR MAP
            </span>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-card text-foreground text-sm font-medium rounded-full border border-border transition-all hover:bg-muted">
            <span className="w-4 h-4 bg-secondary rounded-sm flex items-center justify-center text-[10px] text-secondary-foreground">▶</span>
            Tech City Tour
          </button>
        </div>

        {/* Game Map - Horizontal scroll container */}
        <div 
          className="relative rounded-3xl overflow-hidden p-6"
          style={{
            background: "linear-gradient(135deg, hsl(217 70% 45%) 0%, hsl(217 80% 35%) 100%)",
          }}
        >
          {/* Dotted path */}
          <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-card/30 -translate-y-1/2" />
          
          <div className="flex gap-6 overflow-x-auto pb-2">
            {mapStops.map((stop, index) => (
              <div
                key={stop.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="flex-shrink-0"
              >
                {stop.isStart ? (
                  // Start point node
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 backdrop-blur-sm flex items-center justify-center text-2xl border border-secondary/30">
                      {stop.icon}
                    </div>
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {stop.title}
                    </span>
                  </div>
                ) : (
                  // Station card
                  <div className="flex items-center gap-4">
                    {/* Connecting line dot */}
                    <div className="w-2 h-2 rounded-full bg-card/50" />
                    
                    <div className="bg-card rounded-2xl p-4 shadow-card min-w-[160px]">
                      {/* Road image placeholder */}
                      <div 
                        className="w-full h-20 rounded-xl mb-3 flex items-center justify-center overflow-hidden"
                        style={{
                          background: "linear-gradient(180deg, hsl(220 15% 25%) 0%, hsl(220 15% 15%) 100%)",
                        }}
                      >
                        {/* Road lines */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1 h-full bg-muted-foreground/30" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-foreground/10 to-transparent" />
                          {/* Dashed center line */}
                          <div className="flex flex-col gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="w-0.5 h-2 bg-primary/70" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <h3 className="font-bold text-secondary text-base">{stop.title}</h3>
                      <p className="text-xs text-muted-foreground">{stop.subtitle}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Fade out edge */}
            <div className="flex-shrink-0 w-16 bg-gradient-to-l from-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameMapSection;
