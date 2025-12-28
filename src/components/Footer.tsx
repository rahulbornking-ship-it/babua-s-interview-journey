const Footer = () => {
  const navItems = [
    { icon: "🏠", label: "Home", active: false },
    { icon: "🗺️", label: "Map", active: true },
    { icon: "👤", label: "Profile", active: false },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container-babua py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-soft">
              <span className="text-xl">😊</span>
            </div>
            <div>
              <p className="font-bold text-foreground">
                Babua <span className="text-secondary">LMS</span>
              </p>
              <p className="text-xs text-muted-foreground">
                © 2024 All rights reserved
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  item.active
                    ? "bg-secondary text-secondary-foreground shadow-glow-blue"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {["📧", "💼", "🐦"].map((emoji, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg transition-all duration-300 hover:bg-primary/20 hover:scale-110"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
