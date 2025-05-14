export default function Home() {
  return (
    <div className="bg-black text-white font-sans">

      {/* ================= HEADER ================= */}
      <header className="w-full h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>

        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 bg-black bg-opacity-50">
          <div className="text-yellow-400 text-xl font-bold">🍣 Just Sushi</div>
          <ul className="flex gap-6 text-white font-light">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#dining">Fine Dining</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">
            Reservation
          </button>
        </nav>

        {/* Hero Section */}
        <div className="text-center mt-32 text-white px-4">
          <h2 className="italic text-lg text-yellow-300">Best Sushi In Town</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold my-4 text-yellow-100">
            TASTE THE RICH FLAVOR OF <br /> HIGH QUALITY SUSHI
          </h1>
          <p className="max-w-xl mx-auto text-sm mb-6 text-gray-200">
            We only use the five star quality for our menu, come and get the richness in every food we serve.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">
            GO TO MENU
          </button>
        </div>
      </header>

      {/* ================= TODAY'S SPECIAL ================= */}
      <section className="py-20 bg-gray-900 text-center" id="menu">
        <h3 className="text-yellow-400 italic">Special Menu</h3>
        <h2 className="text-3xl font-bold mb-4">Today's Special</h2>
        <p className="text-gray-400 mb-10">Special menu oftenly comes different everyday, this is our special food for today</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {['TUNA', 'SALMON', 'JUST'].map((type) => (
            <div className="bg-gray-800 p-4 rounded">
              <img src={`/images/${type.toLowerCase()}-sushi.jpg`} alt={`${type} Sushi`} className="w-full h-48 object-cover rounded" />
              <h4 className="text-xl mt-4 font-bold">{type} SUSHI</h4>
              <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.</p>
              <div className="flex justify-center mt-4 text-yellow-400">★★★★★</div>
              <button className="mt-4 border border-yellow-400 text-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR SPECIALITIES ================= */}
      <section className="py-20 bg-gray-950 text-center">
        <h3 className="text-yellow-400 italic">Discover Your Taste</h3>
        <h2 className="text-3xl font-bold mb-6">Our Specialities</h2>

        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {['Specialities', 'Homestyle Sushi', 'Steak', 'Wine Pairing', 'Cocktails', 'Appetizer'].map((cat) => (
            <button className="border px-4 py-2 rounded text-sm text-white hover:bg-yellow-400 hover:text-black transition">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
          {[
            { name: 'DRAGON SUSHI', price: 50 },
            { name: 'CRABBY SUSHI', price: 50 },
            { name: 'ROLL SALMON SUSHI', price: 50 },
          ].map((item, i) => (
            <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 p-4 rounded">
              <img src={`/images/sushi${i + 1}.jpg`} alt={item.name} className="w-40 h-40 object-cover rounded" />
              <div className="text-left">
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-sm text-gray-400 mt-2">Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec lacus vitae velit mattis.</p>
                <p className="text-yellow-400 mt-2">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DINING EVENTS ================= */}
      <section className="py-20 bg-gray-900 text-center">
        <h3 className="text-yellow-400 italic">Private Events</h3>
        <h2 className="text-3xl font-bold mb-4">Dining Events</h2>
        <p className="text-gray-400 mb-10">We provide dining event for your special day with our special package</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            { type: 'FINE DINING', price: 500 },
            { type: 'GOLD DINING', price: 1000 },
            { type: 'ROYALTY DINING', price: 1500 },
          ].map((event, i) => (
            <div className="bg-gray-800 rounded overflow-hidden">
              <img src={`/images/dining${i + 1}.jpg`} alt={event.type} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">${event.price} {event.type}</h4>
                <p className="text-sm text-gray-400 mt-2">Bottle of Champagne, Secret Menu for 2 - 4, Dessert</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 bg-gray-950 text-center" id="about">
        <h3 className="text-yellow-400 italic">Know us</h3>
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>

        <div className="flex flex-wrap justify-center items-center gap-10 max-w-6xl mx-auto px-4">
          <img src="/images/chef.jpg" alt="chef" className="w-64 h-64 object-cover rounded" />
          <div className="max-w-lg text-left">
            <p className="text-sm text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod elementum facilisis. Curabitur imperdiet pharetra odio sed luctus. Donec convallis sapien ut malesuada.
            </p>
            <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">
              MORE ABOUT US
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-center py-10">
        <h2 className="text-yellow-400 text-lg font-bold mb-4">WE READY TO HAVE YOU THE BEST DINING EXPERIENCES</h2>
        <p className="text-gray-400 text-sm">Avenue SushiTime, Flavor Street, NYC<br/> Open: 09:00 - 21:00</p>
        <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">
          RESERVE A TABLE
        </button>
        <div className="mt-6 flex justify-center gap-6 text-yellow-400 text-sm">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
      </footer>

    </div>
  );
}
