
import AdminLayout from "@/layouts/AdminLayout";

import React from "react";
export default function Products() {
  return (
    
    <div>
      <AdminLayout/>
      <h1 className="text-2xl font-semibold mb-4">Products</h1>

      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <p className="text-gray-600">This is the Products Management page.</p>
      </div>
    </div>
  )     
};
