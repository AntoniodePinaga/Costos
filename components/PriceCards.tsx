"use client";

import { useState } from "react";
import type { Option } from "@/data/products";
import { formatCLP } from "@/lib/format";

export default function PriceCards({ options }: { options: Option[] }) {
  const [raw, setRaw] = useState("1");
  const parsed = parseInt(raw, 10);
  const qty = Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;

  return (
    <section>
      <h2>Precio por unidad</h2>
      <label className="qty">
        Cantidad
        <input
          type="number"
          min={1}
          value={raw}
          inputMode="numeric"
          onChange={(e) => setRaw(e.target.value)}
        />
      </label>
      <div className="prices">
        {options.map((o) => (
          <div className="opt" key={o.name}>
            <h3>{o.name}</h3>
            <p>{o.desc}</p>
            <div className="big">{formatCLP(o.venta)}</div>
            <div className="lista"><s>{formatCLP(o.lista)}</s>precio lista</div>
            <div className="tot">
              Total
              <b>{formatCLP(o.venta * qty)}</b>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
