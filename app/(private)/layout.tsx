import AuthGate from "@/components/AuthGate";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return <AuthGate>{children}</AuthGate>;
}
