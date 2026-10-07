import Link from "next/link";
import { products } from "@/data/products";
import { formatCLP } from "@/lib/format";
import PlanoUpload from "@/components/PlanoUpload";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Cotizador ESPAC</h1>
        <p className="sub">Sube el plano del producto en PDF y revisa las cotizaciones disponibles.</p>
      </header>

      <section>
        <h2>Plano del producto</h2>
        <PlanoUpload />
      </section>

      <section>
        <h2>Cotizaciones</h2>
        <ul className="index">
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}/`}>
                <strong>{p.name}</strong>
                <span>Desde {formatCLP(p.options[0].venta)} + IVA</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
