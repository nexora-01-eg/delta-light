export const WHATSAPP_NUMBER = '201062528182';
export const PHONE_DISPLAY = '01062528182';
export const EMAIL = 'lotfy.elsabry0@gmail.com';
export const INSTAGRAM = 'https://instagram.com/delta_lightt';

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function productInquiry(productName: string, code: string | null): string {
  let msg = `مرحباً دلتا لايت، أريد الاستفسار عن:\n${productName}`;
  if (code) msg += `\nكود المنتج: ${code}`;
  return waLink(msg);
}

export function generalInquiry(): string {
  return waLink('مرحباً دلتا لايت، أريد الاستفسار عن الإضاءة المناسبة لمساحتي.');
}

export function cartInquiry(lines: string[]): string {
  const body = lines.length ? lines.join('\n') : 'أريد الاستفسار عن المنتجات في السلة';
  return waLink(`مرحباً دلتا لايت،\n${body}`);
}

export function track(_event: string, _data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
    try {
      ((window as unknown as { dataLayer: unknown[] }).dataLayer as unknown[]).push({ event: _event, ..._data });
    } catch { /* noop */ }
  }
}
