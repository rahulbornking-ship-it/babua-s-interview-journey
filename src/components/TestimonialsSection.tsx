import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "Babua saved my life! The LLD section is pure gold. Amazon cracked in 2 months.",
    name: "Rahul",
    role: "SDE-1",
    avatar: "👨‍💻",
    company: "Amazon",
  },
  {
    id: 2,
    text: "DBMS ka Godown was so fun to learn. Finally understood joins without falling asleep.",
    name: "Priya",
    role: "Data Engineer",
    avatar: "👩‍💻",
    company: "Microsoft",
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
            { opacity: 0, y: 40, rotateY: -10 },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              duration: 0.7,
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
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container-babua">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">☕</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Chai Tapri Talks
            </h2>
            <span className="text-4xl">☕</span>
          </div>
          <p className="text-lg text-muted-foreground">
            Real stories from our Babua family
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative"
            >
              {/* Speech bubble card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-yellow">
                {/* Quote marks */}
                <div className="absolute top-4 left-6 text-6xl text-primary/20 font-serif leading-none">
                  "
                </div>

                {/* Text */}
                <p className="text-lg text-foreground leading-relaxed mb-6 pt-8">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Bubble tail */}
                <div
                  className="absolute -bottom-4 left-12 w-8 h-8 bg-card"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                />
              </div>

              {/* Decorative chai cup */}
              <div
                className={`absolute -top-4 ${
                  index % 2 === 0 ? "-right-4" : "-left-4"
                } text-3xl`}
              >
                🍵
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
