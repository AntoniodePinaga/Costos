"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DEMO_USER, isAuthed, logout } from "@/lib/auth";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (isAuthed()) setOk(true);
    else router.replace("/login/");
  }, [router]);

  if (!ok) return null;

  return (
    <>
      <div className="topbar">
        <span>{DEMO_USER}</span>
        <button
          type="button"
          onClick={() => {
            logout();
            router.replace("/login/");
          }}
        >
          Salir
        </button>
      </div>
      {children}
    </>
  );
}
