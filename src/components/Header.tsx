import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border/50"
      style={{ boxShadow: "0 2px 20px -4px hsl(240 20% 12% / 0.06)" }}
    >
      <div className="container-babua">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-glow-yellow">
              <span className="text-2xl">😊</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Babua <span className="text-secondary">LMS</span>
            </span>
          </div>

          {/* Login Button */}
          <button className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-yellow">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
