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
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm"
    >
      <div className="container-babua">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl">🚗</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              Babua<span className="text-secondary">LMS</span>
            </span>
          </div>

          {/* Login Button */}
          <button className="px-5 py-2 border border-secondary text-secondary font-medium rounded-full transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
