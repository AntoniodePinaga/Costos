import Link from "next/link";
import { products } from "@/data/products";
import { formatCLP } from "@/lib/format";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Cotizador ESPAC</h1>
        <p className="sub">Elige el producto para ver su cotización.</p>
        <p style={{ marginTop: 20 }}>
          <a
            href="/resumen-precios.xlsx"
            download="Resumen de precios.xlsx"
            className="btn"
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            Descargar resumen en Excel
          </a>
        </p>
      </header>

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
