const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Perfect Nasi Goreng",
      date: "March 15, 2024",
      excerpt: "Discover the secrets behind making the perfect Indonesian fried rice...",
      image: "/lovable-uploads/2a170724-8bc2-4d0d-ad35-0bd264034629.png"
    },
    {
      id: 2,
      title: "Exploring Indonesian Street Food",
      date: "March 10, 2024",
      excerpt: "A journey through the vibrant street food culture of Indonesia...",
      image: "/lovable-uploads/334af0a0-cffd-4357-acb9-e501d6e6bbd7.png"
    },
    {
      id: 3,
      title: "Healthy Eating Habits",
      date: "March 5, 2024",
      excerpt: "Tips and tricks for maintaining a balanced diet while enjoying your favorite foods...",
      image: "/lovable-uploads/b3308e98-d5ba-4995-a64e-b0ba2eddd807.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-primary hover:text-opacity-80 font-medium">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;