"use client";

import { useEffect, useRef, useState } from "react";

type Plano = { id: string; name: string; size: number; url: string };
const MAX_BYTES = 20 * 1024 * 1024;
const mb = (n: number) => (n / 1024 / 1024).toFixed(1).replace(".", ",") + " MB";

export default function PlanoUpload() {
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [error, setError] = useState("");
  const [over, setOver] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const urls = useRef<string[]>([]);

  useEffect(() => () => urls.current.forEach((u) => URL.revokeObjectURL(u)), []);

  function add(files: FileList | null) {
    if (!files) return;
    setError("");
    const nuevos: Plano[] = [];
    for (const f of Array.from(files)) {
      const esPdf = f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf");
      if (!esPdf) { setError(`"${f.name}" no es un PDF.`); continue; }
      if (f.size > MAX_BYTES) { setError(`"${f.name}" pesa más de 20 MB.`); continue; }
      const url = URL.createObjectURL(f);
      urls.current.push(url);
      nuevos.push({ id: `${f.name}-${f.size}-${Date.now()}`, name: f.name, size: f.size, url });
    }
    if (nuevos.length) setPlanos((p) => [...p, ...nuevos]);
    if (input.current) input.current.value = "";
  }

  function remove(p: Plano) {
    URL.revokeObjectURL(p.url);
    setPlanos((list) => list.filter((q) => q.id !== p.id));
  }

  return (
    <div>
      <div
        className={`drop${over ? " over" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); add(e.dataTransfer.files); }}
      >
        <p>Arrastra aquí el plano en PDF o</p>
        <button type="button" className="btn" onClick={() => input.current?.click()}>
          Elegir PDF
        </button>
        <input ref={input} type="file" accept="application/pdf,.pdf" multiple hidden
          onChange={(e) => add(e.target.files)} />
        <p className="hint">Solo PDF, hasta 20 MB. El archivo queda en tu navegador y no se envía a ningún servidor.</p>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      {planos.length > 0 && (
        <ul className="planos">
          {planos.map((p) => (
            <li key={p.id}>
              <span>{p.name} <em>{mb(p.size)}</em></span>
              <span>
                <a href={p.url} target="_blank" rel="noreferrer">Ver plano</a>
                <button type="button" onClick={() => remove(p)}>Quitar</button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
