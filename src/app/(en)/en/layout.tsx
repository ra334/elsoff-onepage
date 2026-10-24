import { Document } from "@/components/Document";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata("en");

export default function EnLayout({ children }: LayoutProps<"/en">) {
  return <Document locale="en">{children}</Document>;
}
