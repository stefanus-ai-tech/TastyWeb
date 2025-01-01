import { useState } from "react";
import { Search } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Nasi Goreng", "Mie", "Bihun", "Kwetiau"];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-2">Pilih Makanan</h1>
      <h2 className="text-xl text-center mb-8">Tasty kamu Yuk!</h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-12 relative">
        <input
          type="text"
          placeholder="Cari Menu"
          className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div key={item.id} className="food-card">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Rp. {item.price}</span>
              <button className="btn-primary">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const menuItems = [
  {
    id: 1,
    name: "Nasi Goreng Katsu",
    description: "Nasi goreng dengan ayam katsu yang renyah",
    price: "17.000",
    category: "Nasi Goreng",
    image: "/lovable-uploads/2a170724-8bc2-4d0d-ad35-0bd264034629.png"
  },
  {
    id: 2,
    name: "Mie Goreng",
    description: "Mie kenyal digoreng sempurna dengan telur",
    price: "17.000",
    category: "Mie",
    image: "/lovable-uploads/92899863-8a69-455e-8cdd-64771cddba2c.png"
  },
  {
    id: 3,
    name: "Bihun Goreng",
    description: "Bihun halus digoreng dengan bumbu tradisional",
    price: "17.000",
    category: "Bihun",
    image: "/lovable-uploads/a5388379-b53a-4817-bf4d-729bf9fda322.png"
  }
];

export default Menu;