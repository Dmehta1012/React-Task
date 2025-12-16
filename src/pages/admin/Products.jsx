import { useState } from "react";
import { useProducts } from "@/api/productsApi";

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
    return <p className="p-4 text-gray-500">Loading...</p>;

  if (isError)
    return <p className="p-4 text-red-500">Error loading products</p>;

  const totalPages = Math.ceil(data.total / limit);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <h1 className="text-2xl font-semibold mb-6">Products</h1>

      {/* TABLE CARD */}
      <div className="border rounded-xl shadow-sm bg-white overflow-hidden">
        <Table>
          <TableCaption className="text-sm text-gray-500 py-3">
            Product list
          </TableCaption>

          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[70px] text-xs text-gray-600">
                ID
              </TableHead>
              <TableHead className="text-xs text-gray-600">
                Title
              </TableHead>
              <TableHead className="text-right text-xs text-gray-600">
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
                <TableCell className="text-sm font-medium">
                  {product.id}
                </TableCell>
                <TableCell className="text-sm">
                  {product.title}
                </TableCell>
                <TableCell className="text-right text-sm font-medium">
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
        >
          Previous
        </Button>

        <span className="text-sm text-gray-600">
          Page {page + 1} of {totalPages}
        </span>

        <Button
          disabled={page + 1 >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          variant="outline"
          size="sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
