import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mapStops = [
  {
    id: 1,
    icon: "🚩",
    title: "Start Point",
    subtitle: "Shuruat ka Chauka",
    isStart: true,
  },
  {
    id: 2,
    icon: "🛣️",
    title: "DSA Station",
    subtitle: "Algorithms ki Gali",
    isActive: true,
  },
  {
    id: 3,
    icon: "🏗️",
    title: "LLD Chowk",
    subtitle: "Design ka Adda",
  },
  {
    id: 4,
    icon: "🗃️",
    title: "DBMS Godown",
    subtitle: "Data ka Warehouse",
  },
  {
    id: 5,
    icon: "🏆",
    title: "Placement Nagar",
    subtitle: "Offer Letter Point",
    isEnd: true,
  },
];

const GameMapSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
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
              delay: i * 0.1,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container-babua">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              EXPLORE YOUR MAP
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent font-semibold rounded-full border border-accent/20 transition-all hover:bg-accent/20 hover:scale-105 w-fit">
            <span>🗺️</span> Tech City Tour
          </button>
        </div>

        {/* Game Map */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full -translate-y-1/2 z-0" />

          {/* Map Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mapStops.map((stop, index) => (
              <div
                key={stop.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative group cursor-pointer ${
                  stop.isActive ? "z-10" : ""
                }`}
              >
                <div
                  className={`relative bg-card rounded-2xl p-6 text-center transition-all duration-300 group-hover:-translate-y-2 ${
                    stop.isActive
                      ? "shadow-glow-blue ring-2 ring-secondary"
                      : stop.isStart
                      ? "shadow-glow-yellow"
                      : stop.isEnd
                      ? "shadow-glow-green"
                      : "shadow-card group-hover:shadow-glow-yellow"
                  }`}
                >
                  {/* Step number badge */}
                  <div
                    className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      stop.isActive
                        ? "bg-secondary text-secondary-foreground"
                        : stop.isEnd
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {stop.id}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-3xl ${
                      stop.isActive
                        ? "bg-secondary/10"
                        : stop.isEnd
                        ? "bg-accent/10"
                        : "bg-primary/10"
                    }`}
                  >
                    {stop.icon}
                  </div>

                  {/* Text */}
                  <h3 className="font-bold text-foreground mb-1">{stop.title}</h3>
                  <p className="text-sm text-muted-foreground">{stop.subtitle}</p>

                  {/* Active indicator */}
                  {stop.isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                        Currently Here
                      </div>
                    </div>
                  )}
                </div>

                {/* Connector dot */}
                <div
                  className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-card z-10 ${
                    index < mapStops.length - 1 ? "-right-2" : ""
                  } ${
                    stop.isActive
                      ? "bg-secondary"
                      : stop.isEnd
                      ? "bg-accent"
                      : "bg-primary"
                  }`}
                  style={{ right: index < mapStops.length - 1 ? "-8px" : undefined }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameMapSection;
