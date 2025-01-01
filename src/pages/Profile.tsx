import { User, Settings, ShoppingBag, Heart, LogOut } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    orders: 12,
    favorites: 5,
    phone: "+1 234 567 8900"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...userProfile });

  const handleSaveProfile = () => {
    setUserProfile(editForm);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-8">
            <div className="bg-primary bg-opacity-10 p-4 rounded-full mb-4 md:mb-0 w-fit">
              <User className="w-8 h-8 text-primary" />
            </div>
            
            {isEditing ? (
              <div className="space-y-4 w-full">
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Phone"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveProfile}
                    className="btn-primary"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 rounded-full border border-gray-300 hover:border-primary transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-grow">
                <h1 className="text-2xl font-bold mb-1">{userProfile.name}</h1>
                <p className="text-gray-600 mb-1">{userProfile.email}</p>
                <p className="text-gray-600 mb-4">{userProfile.phone}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-primary hover:text-opacity-80 transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
              <button className="text-primary text-sm hover:text-opacity-80 transition-colors">
                Manage →
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border border-gray-100 rounded-lg">
                <div className="mb-2 md:mb-0">
                  <p className="font-medium">Order #{order}</p>
                  <p className="text-sm text-gray-600">March {order}, 2024</p>
                </div>
                <button className="text-primary hover:text-opacity-80 transition-colors w-full md:w-auto text-center md:text-left">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="inline-flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;