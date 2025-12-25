import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Come experience authentic South Indian flavors in our welcoming space
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    prathap hotel,Near canara bank<br />
                    kodaikanal road,dindigul district, Tamil Nadu 624206
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Opening Hours</h3>
                  <div className="text-gray-700 space-y-1">
                    <p><span className="font-semibold">Breakfast:</span> 8:00 AM - 11:00 AM</p>
                    <p><span className="font-semibold">Lunch:</span> 12:00 PM - 3:00 PM</p>
                    <p><span className="font-semibold">Dinner:</span> 6:00 PM - 11:00 PM</p>
                    <p className="text-amber-700 font-semibold mt-2">Open 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Contact</h3>
                  <div className="space-y-2">
                    <a href="tel:+91 9345292250" className="block text-gray-700 hover:text-amber-700 transition-colors">
                      📞 +91 9345292250
                    </a>
                    <a href="tel:+914362234567" className="block text-gray-700 hover:text-amber-700 transition-colors">
                      📞 +91 7397577176
                    </a>
                    <a
                      href="https://wa.link/32l4g8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14214.816718431395!2d77.9099813!3d10.183014499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b074dc1146afd41%3A0x184552592147565!2sPrathap%20hotel!5e1!3m2!1sen!2sin!4v1761577962630!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prathap Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
