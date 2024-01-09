'use server';

// Type validator
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Create a schema for Zod
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(), // Force string to number
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

// To create new Invoice, this function is an "Action"
export async function createInvoice(formData: FormData) {
  // To get validate your types need to do this for Zod
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // Storing amount as cents to avoid JS float number errors.
  const amountInCents = amount * 100;

  // Also the date for new invoice
  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

  // Revalidate does refresh the database after creating the invoice
  revalidatePath('/dashboard/invoices');

  // Redirect to invoices page after creating a new invoice
  redirect('/dashboard/invoices');
}
