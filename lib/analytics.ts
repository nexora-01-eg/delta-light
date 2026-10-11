type EventName =
  | "page_view" | "search" | "category_view" | "product_view"
  | "add_to_cart" | "begin_checkout" | "purchase" | "whatsapp_click"
  | "phone_click" | "contact_submit" | "experience_start" | "experience_skip"
  | "scene_enter" | "scene_complete" | "room_change" | "lighting_change"
  | "product_explore" | "product_detail_open" | "experience_complete";

export function track(event: EventName, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // GA4-ready stub: forwards to dataLayer when present, no-ops otherwise.
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...params });
}
