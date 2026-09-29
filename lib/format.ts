const clp = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

export const formatCLP = (n: number) => clp.format(Math.round(n));
export const formatNumber = (n: number) => new Intl.NumberFormat("es-CL").format(n);
