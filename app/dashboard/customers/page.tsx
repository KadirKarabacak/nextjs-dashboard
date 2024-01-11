import { Metadata } from 'next';

// Overwriting the global metadata
export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return <p>Customers Page</p>;
}
