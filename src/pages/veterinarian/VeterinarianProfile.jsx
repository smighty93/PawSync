import VetDashboardLayout from "../../components/layout/VetDashboardLayout";

function Profile() {
  return (
    <VetDashboardLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          👤 My Profile
        </h1>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <p><strong>Name:</strong> Dr. Sarah Johnson</p>
            <p><strong>Email:</strong> sarah@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Specialization:</strong> Veterinary Surgeon</p>
            <p><strong>Experience:</strong> 8 Years</p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </VetDashboardLayout>
  );
}

export default Profile;