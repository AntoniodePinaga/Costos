// Login de DEMOSTRACIÓN: funciona solo en el navegador (sitio estático).
// Las credenciales son visibles en el código, así que no protegen información real.
export const DEMO_USER = "demo@espac.cl";
export const DEMO_PASS = "espac2026";
const KEY = "espac-auth";

export function login(user: string, pass: string): boolean {
  if (user.trim().toLowerCase() === DEMO_USER && pass === DEMO_PASS) {
    sessionStorage.setItem(KEY, "1");
    return true;
  }
  return false;
}

export const isAuthed = () => sessionStorage.getItem(KEY) === "1";
export const logout = () => sessionStorage.removeItem(KEY);
