const Footer = () => {
  const navItems = [
    { icon: "🏠", label: "Home", active: false },
    { icon: "🗺️", label: "Map", active: true },
    { icon: "👤", label: "Profile", active: false },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 z-50">
      <div className="flex items-center justify-around py-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all duration-300 ${
              item.active
                ? "text-secondary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
