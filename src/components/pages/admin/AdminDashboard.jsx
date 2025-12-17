export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Overview of your application
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <p className="text-sm text-gray-500">Total Products</p>
          <h2 className="text-2xl font-semibold mt-1">120</h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-semibold mt-1">350</h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <p className="text-sm text-gray-500">Users</p>
          <h2 className="text-2xl font-semibold mt-1">98</h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <p className="text-sm text-gray-500">Revenue</p>
          <h2 className="text-2xl font-semibold mt-1">$12,450</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">
            Recent Activity
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex justify-between">
              <span>New product added</span>
              <span className="text-gray-400">2 mins ago</span>
            </li>
            <li className="flex justify-between">
              <span>Order #1021 completed</span>
              <span className="text-gray-400">10 mins ago</span>
            </li>
            <li className="flex justify-between">
              <span>User registered</span>
              <span className="text-gray-400">1 hour ago</span>
            </li>
            <li className="flex justify-between">
              <span>Product updated</span>
              <span className="text-gray-400">3 hours ago</span>
            </li>
          </ul>
        </div>

        {/* Quick Info */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">
            System Status
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Server</span>
              <span className="text-green-600 font-medium">Online</span>
            </div>

            <div className="flex justify-between">
              <span>Database</span>
              <span className="text-green-600 font-medium">Connected</span>
            </div>

            <div className="flex justify-between">
              <span>API</span>
              <span className="text-yellow-500 font-medium">Degraded</span>
            </div>

            <div className="flex justify-between">
              <span>Version</span>
              <span className="text-gray-500">v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
