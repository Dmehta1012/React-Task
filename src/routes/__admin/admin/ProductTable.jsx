import { ProductTable } from '@/components/pages/admin/ProductTable'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__admin/admin/ProductTable')({
  component: ProductTable,
})


