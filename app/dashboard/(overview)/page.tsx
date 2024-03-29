//! THIS PAGE IS UNIQUE FOR DASHBOARD, NO NEED TO ADD ANY UI INTO ROOT LAYOUT

import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import CardWrapper from '@/app/ui/dashboard/cards';

// Use for suspense fetchRevenue
import { Suspense } from 'react';

// Skeletons
import {
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

// Overwriting the global metadata
export const metadata: Metadata = {
  title: 'Dashboard',
};

// Page is an async component. This allows you to use await to fetch data.
export default async function Page() {
  // Request waterfall
  // const revenue = await fetchRevenue(); // Deleted to suspense
  // const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue()

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* Now it is suspensed, do not blocking whole page. */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* Removed  revenue={revenue} prop, fecthing inside revenue-chart.tsx */}
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
