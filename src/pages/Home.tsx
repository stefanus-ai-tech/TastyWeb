import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const testimonials = [
    {
      text: "Makanannya enak banget, pas dimulut",
      rating: 5,
      author: "John Doe"
    },
    {
      text: "Pelayanan cepat dan ramah",
      rating: 4.5,
      author: "Jane Smith"
    },
    {
      text: "Menu favorit saya setiap hari",
      rating: 5,
      author: "Mike Johnson"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-textBrown mb-6">
              You are what you eat
            </h1>
            <Link to="/menu" className="btn-primary inline-block">
              Check Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="/lovable-uploads/b3308e98-d5ba-4995-a64e-b0ba2eddd807.png"
              alt="Featured Dish"
              className="rounded-full w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Favorit Tasty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="food-card">
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Rp. {dish.price}</span>
                  <button className="btn-primary">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Kenapa Tasty?</h2>
        <p className="text-gray-600 max-w-2xl">
          Tasty, perusahaan kuliner yang berdiri sejak 2015 menawarkan pengalaman
          makan istimewa dengan menu original hasil kreasi tim internal.
        </p>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pesan Dari Kostumer Kami
          </h2>
          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-background p-6 rounded-lg text-center mx-2">
                      <p className="text-xl italic mb-4">{testimonial.text}</p>
                      <div className="flex justify-center items-center space-x-2 mb-2">
                        {"★".repeat(Math.floor(testimonial.rating)).split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">
                            {star}
                          </span>
                        ))}
                      </div>
                      <p className="mt-2 text-gray-600">{testimonial.author}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

const featuredDishes = [
  {
    id: 1,
    name: "Nasi Goreng Katsu",
    description: "Nasi goreng dengan ayam katsu yang renyah",
    price: "17.000",
    image: "/lovable-uploads/2a170724-8bc2-4d0d-ad35-0bd264034629.png"
  },
  {
    id: 2,
    name: "Nasi Goreng Seafood",
    description: "Nasi goreng dengan campuran seafood segar",
    price: "17.000",
    image: "/lovable-uploads/334af0a0-cffd-4357-acb9-e501d6e6bbd7.png"
  },
  {
    id: 3,
    name: "Nasi Goreng Telur Ceplok",
    description: "Nasi goreng dengan telur ceplok sempurna",
    price: "15.000",
    image: "/lovable-uploads/b3308e98-d5ba-4995-a64e-b0ba2eddd807.png"
  }
];

export default Home;