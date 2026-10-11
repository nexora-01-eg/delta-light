import { BUSINESS } from "@/data/content";

export const WHATSAPP_NUMBER = "201062528182";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waGeneral = () =>
  waLink(`مرحباً دلتا لايت، أريد الاستفسار عن حلول الإضاءة المناسبة لمساحتي.`);

export const waProduct = (name: string, code: string | null) =>
  waLink(
    `مرحباً دلتا لايت، أريد الاستفسار عن:\n${name}` +
      (code ? `\nكود المنتج: ${code}` : "") +
      `\nمن فضلك أرسل السعر والتفاصيل المتاحة.`
  );

export const waRoom = (room: string, style: string) =>
  waLink(
    `مرحباً دلتا لايت، أعجبني مشهد (${room} / ${style}) في المعرض الرقمي وأريد تصميماً مشابهاً لمساحتي.`
  );

export const waCheckout = (lines: string[], total: string) =>
  waLink(`مرحباً دلتا لايت، أريد طلب المنتجات التالية:\n${lines.join("\n")}\nالإجمالي: ${total}`);

export const telLink = `tel:${BUSINESS.phoneIntl}`;
export const mailLink = `mailto:${BUSINESS.email}`;
