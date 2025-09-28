import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Telemark Trade AS</h3>
            <p className="text-sm opacity-90">
              Norges ledende importør og forhandler av båtmotorer, 
              anleggsmaskiner og tilbehør.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>900 33 402</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>klas.grave@telemark-trade.no</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Gravevegen 64, 3803 BØ I TELEMARK</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hurtiglenker</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-accent transition-colors">
                Hjem
              </Link>
              <Link to="/produkter" className="block hover:text-accent transition-colors">
                Produkter
              </Link>
              <Link to="/everun-hjullastere" className="block hover:text-accent transition-colors">
                Everun Hjullastere
              </Link>
              <Link to="/priser" className="block hover:text-accent transition-colors">
                Priser
              </Link>
              <Link to="/kontakt" className="block hover:text-accent transition-colors">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Produkter</h4>
            <div className="space-y-2 text-sm">
              <Link to="/produkter/td-power" className="block hover:text-accent transition-colors">
                TD Power
              </Link>
              <Link to="/produkter/hyundai-seasall" className="block hover:text-accent transition-colors">
                Hyundai SeasAll
              </Link>
              <Link to="/produkter/aquamot" className="block hover:text-accent transition-colors">
                Aquamot
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Telemark Trade AS. Alle rettigheter forbeholdt.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;