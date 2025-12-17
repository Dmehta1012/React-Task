import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

export default function Products() {
  const limit = 10;
  const [page, setPage] = useState(0);
  const skip = page * limit;

  const { data, isLoading, isError } = useProducts(limit, skip);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        Loading products...
      </div>
    );

  if (isError)
    return (
      <div className="flex items-center justify-center h-64 text-red-500">
        Failed to load products
      </div>
    );

  const totalPages = Math.ceil(data.total / limit);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Products</h1>
            <p className="text-sm text-gray-500">
              Manage your product inventory
            </p>
          </div>

          
        </div>

        {/* TABLE CARD */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <Table>
            <TableCaption className="py-3 text-gray-500">
              Showing {data.products.length} products
            </TableCaption>

            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[80px] text-gray-600">
                  ID
                </TableHead>
                <TableHead className="text-gray-600">
                  Product Name
                </TableHead>
                <TableHead className="text-right text-gray-600">
                  Price
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.products.map((product) => (
                <TableRow
                  key={product.id}
                  className="hover:bg-gray-50 transition"
                >
                  <TableCell className="font-medium text-gray-700">
                    #{product.id}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {product.title}
                  </TableCell>
                  <TableCell className="text-right font-semibold text-gray-800">
                    ${product.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-between mt-6">
          <Button
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
            variant="outline"
            size="sm"
            className="rounded-lg"
          >
            ← Previous
          </Button>

          <span className="text-sm text-gray-600">
            Page <span className="font-medium">{page + 1}</span> of{" "}
            <span className="font-medium">{totalPages}</span>
          </span>

          <Button
            disabled={page + 1 >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            variant="outline"
            size="sm"
            className="rounded-lg"
          >
            Next →
          </Button>
        </div>
      </div>
    </div>
  );
}
