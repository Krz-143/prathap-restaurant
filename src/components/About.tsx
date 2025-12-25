import { Heart, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              For over <span className="font-bold text-amber-800">25 years</span>, Prathap has been the heart of our community, serving authentic South Indian cuisine with love and dedication. What started as a small family kitchen in 1999 has grown into a beloved gathering place for food lovers.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our recipes have been passed down through three generations, each dish prepared with the same care and traditional methods our grandparents used. We source local ingredients and stay true to authentic flavors that remind you of home.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Every meal at Prathap is more than just food—it's a celebration of heritage, family, and the timeless taste of South India.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-600 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Heart className="w-8 h-8 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Made with Love</h3>
                  <p className="text-gray-600">Every dish crafted with care using traditional family recipes</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-600 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Users className="w-8 h-8 text-orange-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Family Owned</h3>
                  <p className="text-gray-600">Three generations serving our community with pride</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Award className="w-8 h-8 text-red-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Authentic Taste</h3>
                  <p className="text-gray-600">Traditional methods and the finest local ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
