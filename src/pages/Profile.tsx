import { User, Settings, ShoppingBag, Heart } from "lucide-react";

const Profile = () => {
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    orders: 12,
    favorites: 5
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-primary bg-opacity-10 p-4 rounded-full">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{userProfile.name}</h1>
              <p className="text-gray-600">{userProfile.email}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold">Orders</h3>
              <p className="text-2xl font-bold">{userProfile.orders}</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <Heart className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold">Favorites</h3>
              <p className="text-2xl font-bold">{userProfile.favorites}</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <Settings className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold">Settings</h3>
              <button className="text-primary text-sm">Manage →</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                <div>
                  <p className="font-medium">Order #{order}</p>
                  <p className="text-sm text-gray-600">March {order}, 2024</p>
                </div>
                <button className="text-primary hover:text-opacity-80">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;