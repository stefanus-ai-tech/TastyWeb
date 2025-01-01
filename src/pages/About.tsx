const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">About Tasty</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-6">
            Welcome to Tasty, where culinary excellence meets convenience. Since our establishment in 2015, 
            we've been dedicated to bringing delicious, high-quality meals directly to your doorstep.
          </p>
          <p className="text-lg mb-6">
            Our team of experienced chefs crafts each dish with passion and precision, 
            using only the freshest ingredients to ensure every bite is memorable.
          </p>
          <p className="text-lg">
            We take pride in our commitment to quality, customer satisfaction, and innovative cooking techniques 
            that bring restaurant-quality meals to your home.
          </p>
        </div>
        <div className="relative">
          <img 
            src="/lovable-uploads/92899863-8a69-455e-8cdd-64771cddba2c.png" 
            alt="About Tasty" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;