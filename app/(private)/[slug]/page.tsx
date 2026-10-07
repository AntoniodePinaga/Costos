import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { formatNumber } from "@/lib/format";
import PriceCards from "@/components/PriceCards";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  return { title: product ? `Cotización · ${product.name}` : "Cotizador ESPAC" };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main>
      <p><Link href="/" className="back">← Todas las cotizaciones</Link></p>
      <header>
        <h1>{product.name}</h1>
        <p className="sub">{product.subtitle}</p>
        <div className="spec">
          {product.spec.map(([label, value]) => (
            <div key={label}><span>{label} </span>{value}</div>
          ))}
        </div>
      </header>

      <PriceCards options={product.options} />

      <section>
        <h2>Despiece</h2>
        <div className="wrap">
          <table>
            <thead>
              <tr><th>Pieza</th><th>Material</th><th className="n">Largo (mm)</th><th className="n">Cantidad</th></tr>
            </thead>
            <tbody>
              {product.pieces.map((pc) => (
                <tr key={pc.name}>
                  <td>{pc.name}</td>
                  <td>{pc.material}</td>
                  <td className="n">{formatNumber(pc.largo)}</td>
                  <td className="n">{pc.cant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Condiciones</h2>
        <ul>{product.notes.map((n) => <li key={n}>{n}</li>)}</ul>
      </section>

      <footer>{product.footer}</footer>
    </main>
  );
}
