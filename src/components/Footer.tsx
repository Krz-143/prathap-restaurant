export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-amber-300">Prathap</h3>
            <p className="text-amber-200 leading-relaxed">
              Serving authentic South Indian flavors with love since 1999. A tradition of taste that spans generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-amber-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-amber-200 hover:text-white transition-colors">Menu</a>
              </li>
              <li>
                <a href="#about" className="text-amber-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-amber-200 hover:text-white transition-colors">Call Now</a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  WhatsApp Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-3 text-amber-300">Contact</h4>
            <ul className="space-y-2 text-amber-200">
              <li>kodaikanal road</li>
              <li>dindigul, Tamil Nadu</li>
              <li>📞 +91 9345292250</li>
              <li>🕐 7 AM - 11 PM Daily</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-amber-200 text-sm">
            <p>© {new Date().getFullYear()} Prathap Restaurant. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <span className="text-red-400">❤</span> by <span className="font-semibold text-amber-300">Guider</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
