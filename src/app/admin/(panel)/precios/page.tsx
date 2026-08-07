import { getPreciosEditables } from "@/lib/precios";
import { PreciosForm } from "./PreciosForm";

export const dynamic = "force-dynamic";

export default async function PreciosPage() {
  const precios = await getPreciosEditables();
  return <PreciosForm precios={precios} />;
}
