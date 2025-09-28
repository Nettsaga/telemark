import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProductsDropdown(false);
      }
    };

    if (showProductsDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProductsDropdown]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const isDropdownActive = (dropdownItems: Array<{ name: string; path: string }>) => {
    return dropdownItems.some(item => isActive(item.path));
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setShowProductsDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowProductsDropdown(false);
    }, 150); // 150ms delay before closing
  };

  const navItems = [
    { name: "Hjem", path: "/" },
    {
      name: "Produkter",
      path: "/produkter",
      hasDropdown: true,
      dropdownItems: [
        { name: "Alle produkter", path: "/produkter" },
        { name: "Hjullastere", path: "/produkter?category=wheel-loaders" },
        { name: "Aggregater & Tilbehør", path: "/produkter?category=aggregates" },
        { name: "Båtmotorer", path: "/batmotorer" }
      ]
    },
    { name: "Everun Hjullastere", path: "/everun-hjullastere" },
    { name: "Priser", path: "/priser" },
    { name: "Kontakt", path: "/kontakt" }
  ];

  const desktopLinkClasses = (path: string, isDropdown = false, dropdownItems?: Array<{ name: string; path: string }>) => {
    const active = isDropdown ? isDropdownActive(dropdownItems || []) : isActive(path);
    return cn(
      "px-3 py-2 rounded-md transition-colors",
      scrolled ? "text-slate-900 hover:text-amber-600" : "text-zinc-100 hover:text-amber-300",
      active && (scrolled ? "text-amber-600 font-semibold" : "text-amber-200 font-semibold")
    );
  };

  const dropdownWrapperClasses = cn(
    "absolute top-full left-0 w-48 rounded-md border shadow-lg backdrop-blur-sm z-[9999] transition-all duration-200 ease-in-out",
    scrolled ? "bg-white/95 border-zinc-200" : "bg-slate-900/95 border-slate-700/60"
  );

  const dropdownItemClasses = (path: string) => {
    const active = isActive(path);
    return cn(
      "block px-4 py-2 text-sm transition-colors",
      active
        ? scrolled
          ? "bg-amber-50 text-amber-700 font-semibold"
          : "bg-amber-900/20 text-amber-200 font-semibold"
        : scrolled
          ? "text-slate-700 hover:bg-zinc-100 hover:text-slate-900"
          : "text-zinc-100 hover:bg-slate-800/80 hover:text-amber-200"
    );
  };

  const mobileWrapperClasses = cn(
    "md:hidden py-4",
    scrolled
      ? "border-t border-zinc-200 bg-white/95 text-slate-900"
      : "border-t border-slate-700/70 bg-slate-900/95 text-zinc-100"
  );

  const mobileLinkClasses = (path: string, isDropdown = false, dropdownItems?: Array<{ name: string; path: string }>) => {
    const active = isDropdown ? isDropdownActive(dropdownItems || []) : isActive(path);
    return cn(
      "block px-3 py-2 rounded-md transition-colors",
      active
        ? scrolled
          ? "bg-zinc-100 text-amber-600"
          : "bg-slate-800/80 text-amber-200"
        : scrolled
          ? "text-slate-700 hover:bg-zinc-100 hover:text-slate-900"
          : "text-zinc-100 hover:bg-slate-800/70 hover:text-amber-200"
    );
  };

  return (
    <nav
      className={cn(
        "fixed top-[42px] z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 border-b border-zinc-200 shadow-sm backdrop-blur"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo - Left side */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.avif"
              alt="Telemark Trade AS"
              className={cn(
                "h-14 w-auto transition-all duration-300",
                !scrolled && "filter brightness-0 invert"
              )}
            />
          </Link>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    ref={dropdownRef} 
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="flex items-center">
                      <Link to={item.path} className={cn("flex items-center", desktopLinkClasses(item.path, true, item.dropdownItems))}>
                        <span>{item.name}</span>
                      </Link>
                      <div className="ml-1 p-1 cursor-pointer">
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform",
                          scrolled ? "text-slate-900" : "text-zinc-100",
                          showProductsDropdown && "rotate-180"
                        )} />
                      </div>
                    </div>

                    {showProductsDropdown && (
                      <div className={dropdownWrapperClasses}>
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link 
                            key={dropdownItem.name} 
                            to={dropdownItem.path} 
                            className={dropdownItemClasses(dropdownItem.path)}
                            onClick={() => setShowProductsDropdown(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={item.path} className={desktopLinkClasses(item.path)}>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Facebook Icon - Right side */}
          <div className="hidden md:flex items-center">
            <a
              href="https://www.facebook.com/telemarktrade/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-md transition-colors",
                scrolled 
                  ? "text-slate-900 hover:text-blue-600 hover:bg-blue-50" 
                  : "text-zinc-100 hover:text-blue-300 hover:bg-white/10"
              )}
              title="Følg oss på Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "md:hidden text-primary ml-auto"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {isOpen && (
          <div className={mobileWrapperClasses}>
            {navItems.map((item) => (
              <div key={item.name}>
                <Link to={item.path} className={mobileLinkClasses(item.path, item.hasDropdown, item.dropdownItems)} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
                {item.hasDropdown && item.dropdownItems && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => {
                      const active = isActive(dropdownItem.path);
                      return (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className={cn(
                            "block px-3 py-1 text-sm transition-colors rounded-md",
                            active
                              ? scrolled
                                ? "bg-amber-50 text-amber-700 font-semibold"
                                : "bg-amber-900/20 text-amber-200 font-semibold"
                              : scrolled
                                ? "text-slate-600 hover:text-slate-900 hover:bg-zinc-100"
                                : "text-zinc-100/80 hover:text-amber-200 hover:bg-slate-800/50"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <div
              className={cn("mt-4 pt-4 border-t", scrolled ? "border-zinc-200" : "border-slate-700/70")}
            />
            <a
              href="https://www.facebook.com/telemarktrade/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center p-3 rounded-md transition-colors",
                scrolled 
                  ? "text-slate-900 hover:text-blue-600 hover:bg-blue-50" 
                  : "text-zinc-100 hover:text-blue-300 hover:bg-white/10"
              )}
              title="Følg oss på Facebook"
            >
              <Facebook className="h-6 w-6 mr-2" />
              <span>Følg oss på Facebook</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
