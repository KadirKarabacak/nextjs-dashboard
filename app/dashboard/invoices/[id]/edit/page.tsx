import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';

// To handle searched invoice id is not exist in database
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Overwriting the global metadata
export const metadata: Metadata = {
  title: 'Edit Invoices',
};

export default async function Page({ params }: { params: { id: string } }) {
  // Reading ID from page params
  const id = params.id;

  // Fetching invoice and customer names for dropdown
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
