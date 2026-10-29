import { Suspense } from 'react';
import { ShopClient } from './ShopClient';

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-muted">جاري تحميل المتجر…</div>}>
      <ShopClient />
    </Suspense>
  );
}
