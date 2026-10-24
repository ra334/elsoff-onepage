import { Document } from "@/components/Document";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata("uk");

export default function UkLayout({ children }: LayoutProps<"/uk">) {
  return <Document locale="uk">{children}</Document>;
}
