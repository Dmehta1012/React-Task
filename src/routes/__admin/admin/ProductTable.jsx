import { ProductTable } from '@/pages/admin/ProductTable'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__admin/admin/ProductTable')({
  component: ProductTable,
})


