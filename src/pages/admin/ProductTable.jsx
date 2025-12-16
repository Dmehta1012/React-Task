import {
  deleteProduct,
  getProducts,
  addProduct,
  updateProduct,
} from "@/api/PostApi";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ProductTable = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const limit = 10;

  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ title: "", price: "" });

  const [editId, setEditId] = useState(null);
  const [editProduct, setEditProduct] = useState({ title: "", price: "" });

  const getData = async () => {
    const skip = (page - 1) * limit;
    const res = await getProducts(limit, skip);
    setData(res.data.products);
    setTotal(res.data.total);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleDelete = async (id) => {
    const res = await deleteProduct(id);
    if (res.status === 200) {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleAddProduct = async () => {
    if (!newProduct.title || !newProduct.price) return;
    const res = await addProduct(newProduct);
    if (res.status === 200 || res.status === 201) {
      getData();
      setNewProduct({ title: "", price: "" });
      setShowAddForm(false);
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditProduct({ title: item.title, price: item.price });
  };

  const handleUpdate = async (id) => {
    const res = await updateProduct(id, editProduct);
    if (res.status === 200) {
      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, ...editProduct } : item
        )
      );
      setEditId(null);
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Products</h2>
        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className="shadow-sm"
        >
          + Add Product
        </Button>
      </div>

      {/* ADD FORM */}
      {showAddForm && (
        <div className="mb-6 p-4 border rounded-xl bg-gray-50 shadow-sm flex gap-3">
          <Input
            placeholder="Product title"
            value={newProduct.title}
            className="bg-white"
            onChange={(e) =>
              setNewProduct((p) => ({ ...p, title: e.target.value }))
            }
          />
          <Input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            className="bg-white"
            onChange={(e) =>
              setNewProduct((p) => ({ ...p, price: e.target.value }))
            }
          />
          <Button onClick={handleAddProduct}>Save</Button>
        </div>
      )}

      {/* TABLE */}
      <div className="border rounded-xl shadow-sm bg-white overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-xs uppercase text-gray-600">
                Title
              </TableHead>
              <TableHead className="text-xs uppercase text-gray-600">
                Price
              </TableHead>
              <TableHead className="text-right text-xs uppercase text-gray-600">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-gray-50 transition"
              >
                <TableCell className="font-medium">
                  {editId === item.id ? (
                    <Input
                      value={editProduct.title}
                      onChange={(e) =>
                        setEditProduct((p) => ({
                          ...p,
                          title: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    item.title
                  )}
                </TableCell>

                <TableCell>
                  {editId === item.id ? (
                    <Input
                      type="number"
                      value={editProduct.price}
                      onChange={(e) =>
                        setEditProduct((p) => ({
                          ...p,
                          price: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <span className="font-semibold text-gray-700">
                      ${item.price}
                    </span>
                  )}
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {editId === item.id ? (
                      <>
                        <Button size="sm" onClick={() => handleUpdate(item.id)}>
                          Update
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditId(null)}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>

        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
