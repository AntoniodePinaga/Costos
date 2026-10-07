"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DEMO_PASS, DEMO_USER, login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState(DEMO_USER);
  const [pass, setPass] = useState(DEMO_PASS);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (login(user, pass)) router.replace("/");
    else setError("Usuario o contraseña incorrectos.");
  }

  return (
    <main className="login">
      <h1>Cotizador ESPAC</h1>
      <p className="sub">Ingresa para ver las cotizaciones.</p>
      <form onSubmit={onSubmit} className="login-form">
        <label>
          Usuario
          <input type="text" value={user} autoComplete="username"
            onChange={(e) => { setUser(e.target.value); setError(""); }} />
        </label>
        <label>
          Contraseña
          <input type="password" value={pass} autoComplete="current-password"
            onChange={(e) => { setPass(e.target.value); setError(""); }} />
        </label>
        {error && <p className="error" role="alert">{error}</p>}
        <button type="submit" className="btn">Ingresar</button>
        <p className="hint">Credenciales de demostración ya cargadas: solo presiona Ingresar.</p>
      </form>
    </main>
  );
}
