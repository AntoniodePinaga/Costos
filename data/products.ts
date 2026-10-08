export type Option = { name: string; desc: string; lista: number; venta: number; peso: number };
export type Piece = { name: string; material: string; largo: number; cant: number };
export type Product = {
  slug: string; name: string; subtitle: string; spec: string[][];
  options: Option[]; pieces: Piece[]; notes: string[]; footer: string;
};

// Valores tomados de los Excel de la carpeta /excel (solapa "Costo Directo").
export const products: Product[] = [
  {
    "slug": "caballete-yesero-450-750",
    "name": "Caballete yesero 450-750",
    "subtitle": "Caballete de acero regulable en altura (450 a 750 mm) para trabajos de yesería. Elige el acabado que necesitas.",
    "spec": [
      [
        "Largo",
        "1.076 mm"
      ],
      [
        "Ancho base",
        "668 mm"
      ],
      [
        "Material",
        "Acero"
      ],
      [
        "Peso",
        "12,7 kg (13,3 kg galvanizado)"
      ]
    ],
    "options": [
      {
        "name": "Acero negro",
        "desc": "Sin terminación",
        "lista": 30178.75,
        "venta": 24143.0,
        "peso": 12.7
      },
      {
        "name": "Pintura electroestática",
        "desc": "Terminación pintada",
        "lista": 40181.13,
        "venta": 32144.91,
        "peso": 12.7
      },
      {
        "name": "Galvanizado",
        "desc": "Protección anticorrosión",
        "lista": 44159.24,
        "venta": 35327.39,
        "peso": 13.3
      }
    ],
    "pieces": [
      {
        "name": "Viga superior",
        "material": "Perfil 40x30x2,0 mm",
        "largo": 1076,
        "cant": 1
      },
      {
        "name": "Columna exterior",
        "material": "Tubo Ø42,2x2,0 mm",
        "largo": 215,
        "cant": 2
      },
      {
        "name": "Travesaño superior",
        "material": "Tubo Ø42,2x2,0 mm",
        "largo": 1000,
        "cant": 1
      },
      {
        "name": "Tubo interior (telescópico)",
        "material": "Tubo Ø1¼\"x2,0 mm",
        "largo": 440,
        "cant": 2
      },
      {
        "name": "Travesaño inferior",
        "material": "Tubo Ø1¼\"x2,0 mm",
        "largo": 1000,
        "cant": 1
      },
      {
        "name": "Pata en A",
        "material": "Perfil 30x30x2,0 mm",
        "largo": 499,
        "cant": 4
      },
      {
        "name": "Amarre de patas",
        "material": "Pletina 38x5,0 mm",
        "largo": 370,
        "cant": 2
      },
      {
        "name": "Pletina de cabeza",
        "material": "Pletina 38x5,0 mm",
        "largo": 90,
        "cant": 2
      }
    ],
    "notes": [
      "Valores netos por unidad, más IVA. Ya incluyen el descuento máximo de 20% sobre el precio lista.",
      "Base de cálculo: lote de 30 unidades.",
      "No incluye cadena ni pasador (2 unidades), que el plano marca como faltantes."
    ],
    "footer": "Plano ESPAC · Caballete yesero 450-750 · modificado el 30 de marzo de 2017"
  },
  {
    "slug": "palet-freestanding",
    "name": "Palet Freestanding",
    "subtitle": "Palet metálico con ruedas, postes verticales y diagonales de refuerzo. Elige el acabado que necesitas.",
    "spec": [
      [
        "Largo",
        "1.340 mm"
      ],
      [
        "Ancho",
        "1.150 mm"
      ],
      [
        "Postes",
        "1.020 mm"
      ],
      [
        "Peso",
        "59,8 kg (62,8 kg galvanizado)"
      ]
    ],
    "options": [
      {
        "name": "Acero negro",
        "desc": "Sin terminación",
        "lista": 158480.33,
        "venta": 126784.26,
        "peso": 59.8
      },
      {
        "name": "Pintura electroestática",
        "desc": "Terminación pintada",
        "lista": 198272.25,
        "venta": 158617.8,
        "peso": 59.8
      },
      {
        "name": "Galvanizado",
        "desc": "Protección anticorrosión",
        "lista": 218278.65,
        "venta": 174622.92,
        "peso": 62.8
      }
    ],
    "pieces": [
      {
        "name": "Poste vertical",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 1020,
        "cant": 4
      },
      {
        "name": "Riel superior lateral",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 1070,
        "cant": 2
      },
      {
        "name": "Base frontal",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 1340,
        "cant": 2
      },
      {
        "name": "Base lateral",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 1070,
        "cant": 2
      },
      {
        "name": "Diagonal frontal (corto)",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 863,
        "cant": 4
      },
      {
        "name": "Diagonal lateral (largo)",
        "material": "Perfil 40x20x2,0 mm",
        "largo": 1023,
        "cant": 4
      },
      {
        "name": "Diagonal base larga",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 1578,
        "cant": 1
      },
      {
        "name": "Diagonal base corta",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 766,
        "cant": 2
      },
      {
        "name": "Soporte ruedas",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 215,
        "cant": 4
      },
      {
        "name": "Soporte rueda",
        "material": "Perfil 50x50x5,0 mm",
        "largo": 100,
        "cant": 4
      },
      {
        "name": "Tapa soporte rueda",
        "material": "Pletina 50x5,0 mm",
        "largo": 50,
        "cant": 4
      },
      {
        "name": "Placa de poste 80x45x5",
        "material": "Pletina 80x5,0 mm",
        "largo": 45,
        "cant": 4
      },
      {
        "name": "Placa lateral 300x100x5",
        "material": "Pletina 100x5,0 mm",
        "largo": 300,
        "cant": 4
      }
    ],
    "notes": [
      "Valores netos por unidad, más IVA. Ya incluyen el descuento máximo de 20% sobre el precio lista.",
      "Base de cálculo: lote de 30 unidades.",
      "No incluye las 4 ruedas, que se cotizan aparte."
    ],
    "footer": "Plano ESPAC · Palet Freestanding · cliente Marcelino · 6 de julio de 2026"
  },
  {
    "slug": "rack-estandar-225",
    "name": "Rack estándar 225 Nuevo diseño",
    "subtitle": "Rack de acero para barricas de 225 litros, con orejas de apoyo y perforaciones de escurrimiento. Elige el acabado que necesitas.",
    "spec": [
      [
        "Largo",
        "1.130 mm"
      ],
      [
        "Ancho",
        "780 mm"
      ],
      [
        "Material",
        "Acero"
      ],
      [
        "Peso",
        "25,7 kg (27,0 kg galvanizado)"
      ]
    ],
    "options": [
      {
        "name": "Acero negro",
        "desc": "Sin terminación",
        "lista": 68797.35,
        "venta": 55037.88,
        "peso": 25.7
      },
      {
        "name": "Pintura electroestática",
        "desc": "Terminación pintada",
        "lista": 87357.43,
        "venta": 69885.94,
        "peso": 25.7
      },
      {
        "name": "Galvanizado",
        "desc": "Protección anticorrosión",
        "lista": 95414.85,
        "venta": 76331.88,
        "peso": 27.0
      }
    ],
    "pieces": [
      {
        "name": "Larguero",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 1130,
        "cant": 4
      },
      {
        "name": "Travesaño",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 700,
        "cant": 4
      },
      {
        "name": "Apoyo Interior",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 175,
        "cant": 4
      },
      {
        "name": "Apoyo Exterior",
        "material": "Perfil 40x40x2,0 mm",
        "largo": 255,
        "cant": 4
      },
      {
        "name": "Oreja izquierda",
        "material": "Pletina 38x5,0 mm",
        "largo": 202,
        "cant": 8
      },
      {
        "name": "Oreja derecha",
        "material": "Pletina 38x5,0 mm",
        "largo": 202,
        "cant": 8
      }
    ],
    "notes": [
      "Valores netos por unidad, más IVA. Ya incluyen el descuento máximo de 20% sobre el precio lista.",
      "Base de cálculo: lote de 30 unidades.",
      "Incluye perforaciones Ø18 mm para escurrimiento del galvanizado."
    ],
    "footer": "Plano ESPAC · Rack estándar 225 Nuevo diseño · modificado el 2 de mayo de 2016"
  }
];
