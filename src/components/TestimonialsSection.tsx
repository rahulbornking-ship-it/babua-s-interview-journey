import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: '"Babua saved my life! The LLD section is pure gold. Amazon cracked in 2 months!"',
    name: "Rahul",
    role: "SDE-1",
    avatar: "👨‍💻",
  },
  {
    id: 2,
    text: '"DBMS ka Godown was so fun to learn. Finally understood Joins without falling asleep."',
    name: "Priya",
    role: "Data Engineer",
    avatar: "👩‍💻",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: i * 0.2,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-background">
      <div className="container-babua">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🍵</span>
          <h2 className="text-2xl font-bold text-foreground">
            Chai Tapri Talks
          </h2>
        </div>

        {/* Testimonial Cards - Stacked */}
        <div className="space-y-4 max-w-md mx-auto lg:max-w-lg">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-card rounded-2xl p-5 shadow-soft border border-border/50"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">
                    {testimonial.text}
                  </p>
                  <p className="text-sm font-semibold text-foreground text-right">
                    – {testimonial.name}, {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
