const menuItems = [
  {
    name: 'Idly Sambar',
    description: 'Soft steamed rice cakes with lentil curry',
    price: '₹40',
    image: 'https://png.pngtree.com/png-clipart/20240103/original/pngtree-idly-with-sambar-and-chutney-png-image_14007998.png'
  },
  {
    name: 'Pongal',
    description: 'Savory rice and lentil comfort dish',
    price: '₹50',
    image: 'https://i.ytimg.com/vi/a5lp6nog_qM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGyPRPxzSTmNk6g6Cof5b7Ticeww'
  },
  {
    name: 'Poori',
    description: 'Fluffy, golden fried Indian wheat bread',
    price: '₹50',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Poori_Masala_Tamil_Nadu.jpg'
  }, 
  {
    name: 'Onion Uttapam',
    description: 'Soft, savory onion-topped South Indian pancake',
    price: '₹60',
    image: 'https://www.padhuskitchen.com/wp-content/uploads/2013/01/onion-uthappam.jpg'
  },
  {
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato masala',
    price: '₹60',
    image: 'https://shrisangeethasrestaurant.com/cdn/shop/files/MasalDosa.webp?v=1745994000'
  },
  {
    name: 'Biryani',
    description: 'Fragrant Serraha Samba rice with aromatic spices',
    price: '₹150',
    image: 'https://vaya.in/recipes/wp-content/uploads/2018/03/South-Indian-Chicken-Biryani.jpg'
  },
  {
    name: 'Parotta',
    description: 'Flaky layered flatbread with curry',
    price: '₹50',
    image: 'https://i.ytimg.com/vi/5FLNsvLFLMA/maxresdefault.jpg'
  },
  {
    name: 'Kothu Parotta',
    description: 'Spicy, shredded paratha tossed with flavorful curry',
    price: '₹80',
    image: 'https://c.ndtvimg.com/2023-06/tlp8cf8o_kothu-parotta_625x300_26_June_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
  }
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Menu Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Discover our most loved traditional dishes, prepared fresh daily
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-red rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                  {item.price}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.link/32l4g8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
