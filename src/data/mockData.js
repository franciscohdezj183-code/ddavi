export const categories = [
  { id: 1, name: 'Novedades', slug: 'novedades', subcategories: [{ id: 11, name: 'Recién llegados', slug: 'recien-llegados' }, { id: 12, name: 'Favoritos', slug: 'favoritos' }] },
  { id: 2, name: 'Belleza', slug: 'belleza', subcategories: [{ id: 21, name: 'Maquillaje', slug: 'maquillaje' }, { id: 22, name: 'Cuidado personal', slug: 'cuidado-personal' }] },
  { id: 3, name: 'Accesorios', slug: 'accesorios', subcategories: [{ id: 31, name: 'Bolsas', slug: 'bolsas' }, { id: 32, name: 'Joyería', slug: 'joyeria' }] },
  { id: 4, name: 'Regalos', slug: 'regalos', subcategories: [{ id: 41, name: 'Detalles', slug: 'detalles' }, { id: 42, name: 'Temporada', slug: 'temporada' }] },
  { id: 5, name: 'Hogar', slug: 'hogar', subcategories: [{ id: 51, name: 'Decoración', slug: 'decoracion' }, { id: 52, name: 'Organización', slug: 'organizacion' }, { id: 53, name: 'Cocina', slug: 'cocina' }] },
]

const baseProducts = [
  { id: 17, name: 'Termo Vacuum', price: '$135', priceValue: 135, categoryId: 1, subcategoryId: 11, keywords: ['termo', 'vacuum', 'bebidas', 'colores'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/TermoVacuumTodos.jfif', imageLabel: 'Termo Vacuum en todos sus colores', isNew: true, featured: true },
  { id: 18, name: 'Termo coffee', price: '$100', priceValue: 100, categoryId: 1, subcategoryId: 11, keywords: ['termo', 'coffee', 'café', 'bebidas', 'estampado'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/Termocoffeetodos.jfif', imageLabel: 'Termo coffee en todos sus diseños', isNew: true, featured: true },
  { id: 19, name: 'Vaso sport 1L', price: '$70', priceValue: 70, categoryId: 1, subcategoryId: 11, keywords: ['vaso', 'sport', 'deportivo', '1 litro', 'bebidas'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/Vasosporttodos.jfif', imageLabel: 'Vaso sport 1L en todos sus colores', isNew: true, featured: true },
  { id: 20, name: 'Termo digital', price: '$65', priceValue: 65, categoryId: 1, subcategoryId: 11, keywords: ['termo', 'digital', 'temperatura', 'bebidas', 'colores'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/Termodigitaltodos.jfif', imageLabel: 'Termo digital en todos sus colores', isNew: true, featured: true },
  { id: 21, name: 'Termo Vacuum Cup de Acero Inoxidable', price: '$100', priceValue: 100, categoryId: 1, subcategoryId: 11, keywords: ['termo', 'vacuum cup', 'acero inoxidable', 'bebidas', 'colores'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/TermoVacuumCupAceroInoxidabletodos.jfif', imageLabel: 'Termo Vacuum Cup de Acero Inoxidable en todos sus colores', isNew: true, featured: true },
  { id: 22, name: 'Lonchera térmica grande', price: '$40', priceValue: 40, categoryId: 1, subcategoryId: 11, keywords: ['lonchera', 'térmica', 'grande', 'alimentos', 'organización'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/Loncheratérmicagrandeprincipal.jfif', imageLabel: 'Vista principal de la Lonchera térmica grande', isNew: true, featured: true },
  { id: 23, name: 'Lapicero Búho', price: '$100', priceValue: 100, categoryId: 1, subcategoryId: 11, keywords: ['lapicero', 'búho', 'escolar', 'organizador', 'colores'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/LapiceroBúhotodos.jfif', imageLabel: 'Lapicero Búho en todos sus colores', isNew: true, featured: true },
  { id: 24, name: 'Mochila', price: '$150', priceValue: 150, categoryId: 1, subcategoryId: 11, keywords: ['mochila', 'escolar', 'viaje', 'organización', 'negra'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/mochilaprincipal.jfif', imageLabel: 'Vista principal de la Mochila', isNew: true, featured: true },
  { id: 25, name: 'Marcador acrílico 48 pzas', price: '$155', priceValue: 155, categoryId: 1, subcategoryId: 11, keywords: ['marcadores', 'acrílico', '48 piezas', 'colores', 'arte'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/Marcadoracrílico48pzasprincipal.jfif', imageLabel: 'Marcador acrílico 48 pzas', isNew: true, featured: true },
  { id: 26, name: 'Bocina Bombax 4', price: '$725', priceValue: 725, categoryId: 1, subcategoryId: 11, keywords: ['bocina', 'bombax 4', 'audio', 'portátil', 'música'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/BocinaBombaxprincipal.jfif', imageLabel: 'Vista principal de la Bocina Bombax 4', isNew: true, featured: true },
  { id: 27, name: 'Ventilador', price: '$150', priceValue: 150, categoryId: 1, subcategoryId: 11, keywords: ['ventilador', 'mesa', 'luz', 'colores', 'hogar'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/ventiladorprincipal.jfif', imageLabel: 'Vista principal del Ventilador', isNew: true, featured: true },
  { id: 28, name: 'Espejo organizador', price: '$195', priceValue: 195, categoryId: 5, subcategoryId: 52, keywords: ['espejo', 'organizador', 'cajones', 'maquillaje', 'tocador'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/Espejoorganizadorprincipal.jfif', imageLabel: 'Vista principal del Espejo organizador', isNew: true, featured: true },
  { id: 29, name: 'Set herramienta', price: '$120', priceValue: 120, categoryId: 5, subcategoryId: 52, keywords: ['herramienta', 'set', 'dados', 'puntas', 'estuche'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/Setherramientaprincipal.jfif', imageLabel: 'Vista principal del Set herramienta', isNew: true, featured: true },
  { id: 30, name: 'Set Smart Watch', price: '$200', priceValue: 200, categoryId: 3, subcategoryId: 32, keywords: ['smart watch', 'reloj', 'correas', 'accesorios', 'tecnología'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/SetSmartWatchprincipal.jfif', imageLabel: 'Vista principal del Set Smart Watch', isNew: true, featured: true },
  { id: 31, name: 'Cosmetiquera', price: '$50', priceValue: 50, categoryId: 2, subcategoryId: 22, keywords: ['cosmetiquera', 'maquillaje', 'organizador', 'belleza'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/cosmetiquera.jpeg', imageLabel: 'Cosmetiquera', isNew: true, featured: true },
  { id: 32, name: 'Ventilador con humificador', price: '$120', priceValue: 120, categoryId: 1, subcategoryId: 11, keywords: ['ventilador', 'humificador', 'portátil', 'hogar'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/ventiladorconumificador.jpeg', imageLabel: 'Ventilador con humificador', isNew: true, featured: true },
  { id: 33, name: 'Esmeril inalambrico', price: '$1000', priceValue: 1000, categoryId: 5, subcategoryId: 52, keywords: ['esmeril', 'inalambrico', 'herramienta', 'batería'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/esmerilinalambrico.jpeg', imageLabel: 'Esmeril inalambrico', isNew: true, featured: true },
  { id: 34, name: 'Zapatera armable', price: '$250', priceValue: 250, categoryId: 5, subcategoryId: 52, keywords: ['zapatera', 'armable', 'organizador', 'calzado'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/zapateraarmable.jpeg', imageLabel: 'Zapatera armable', isNew: true, featured: true },
  { id: 35, name: 'Baumanometro digital', price: '$120', priceValue: 120, categoryId: 2, subcategoryId: 22, keywords: ['baumanometro', 'digital', 'presión', 'cuidado personal'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/baumanometrodigital.jpeg', imageLabel: 'Baumanometro digital', isNew: true, featured: true },
  { id: 36, name: 'Cobertor para bebe', price: '$95', priceValue: 95, categoryId: 5, subcategoryId: 51, keywords: ['cobertor', 'bebe', 'textil', 'hogar'], badge: 'Nuevo', badgeVariant: 'new', image: '/productos/cobertorparabebe.jpeg', imageLabel: 'Cobertor para bebe', isNew: true, featured: true },
  { id: 37, name: 'Rack de Baño', price: '$300', priceValue: 300, categoryId: 5, subcategoryId: 52, keywords: ['rack', 'baño', 'organizador', 'hogar', 'promoción'], badge: 'Promoción', badgeVariant: 'promo', image: '/productos/RackdeBaño.png', imageLabel: 'Rack de Baño', isPromo: true, featured: true },
  { id: 38, name: 'Taburete', price: '$300', priceValue: 300, categoryId: 5, subcategoryId: 52, keywords: ['taburete', 'almacenamiento', 'organizador', 'hogar', 'promoción'], badge: 'Promoción', badgeVariant: 'promo', image: '/productos/Taburete.png', imageLabel: 'Taburete con almacenamiento', isPromo: true, featured: true },
  { id: 39, name: 'Sandwichera RAF', price: '$320', priceValue: 320, categoryId: 5, subcategoryId: 53, keywords: ['sandwichera', 'raf', 'cocina', '750w', 'antiadherente', 'promoción'], badge: 'Promoción', badgeVariant: 'promo', image: '/productos/Sándwichera.png', imageLabel: 'Sandwichera RAF con su caja', isPromo: true, featured: true },
]

const productDetailsById = {
  17: {
    shortDescription: 'Un termo práctico y colorido para acompañar tus bebidas durante el día.',
    description: 'Su diseño alto incluye tapa, popote y asa para transportarlo con comodidad. Está disponible en varios colores para que elijas el que mejor combine contigo.',
    images: [
      { src: '/productos/TermoVacuumTodos.jfif', alt: 'Termo Vacuum en todos sus colores' },
      { src: '/productos/TermoVacuumRosa.jfif', alt: 'Termo Vacuum rosa' },
      { src: '/productos/TermoVacuumrojo.jfif', alt: 'Termo Vacuum rojo' },
      { src: '/productos/TermoVacuumturqueza.jfif', alt: 'Termo Vacuum turquesa' },
      { src: '/productos/TermoVacuumazulpetroleo.jfif', alt: 'Termo Vacuum azul petróleo' },
      { src: '/productos/TermoVacuumazulmarino.jfif', alt: 'Termo Vacuum azul marino' },
      { src: '/productos/TermoVacuumnegro.jfif', alt: 'Termo Vacuum negro' },
    ],
    variants: {
      colors: [
        { id: 'rosa', name: 'Rosa', image: '/productos/TermoVacuumRosa.jfif' },
        { id: 'rojo', name: 'Rojo', image: '/productos/TermoVacuumrojo.jfif' },
        { id: 'turquesa', name: 'Turquesa', image: '/productos/TermoVacuumturqueza.jfif' },
        { id: 'azul-petroleo', name: 'Azul petróleo', image: '/productos/TermoVacuumazulpetroleo.jfif' },
        { id: 'azul-marino', name: 'Azul marino', image: '/productos/TermoVacuumazulmarino.jfif' },
        { id: 'negro', name: 'Negro', image: '/productos/TermoVacuumnegro.jfif' },
      ],
    },
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'low' },
      { branchId: 'calnali', status: 'available' },
    ],
  },
  18: {
    shortDescription: 'Un termo compacto con diseños llamativos para acompañar tu café cada día.',
    description: 'Su formato es cómodo para llevar y cuenta con una tapa práctica para beber durante tus actividades. Sus diferentes estampados permiten elegir un diseño que combine con tu estilo.',
    images: [
      { src: '/productos/Termocoffeetodos.jfif', alt: 'Termo coffee en todos sus diseños' },
      { src: '/productos/Termocoffeerosa.jfif', alt: 'Termo coffee rosa' },
      { src: '/productos/Termocoffeecafeclaro.jfif', alt: 'Termo coffee café claro' },
      { src: '/productos/Termocoffeecafe.jfif', alt: 'Termo coffee café' },
      { src: '/productos/Termocoffeenegro.jfif', alt: 'Termo coffee negro' },
    ],
    variants: {
      colors: [
        { id: 'rosa', name: 'Rosa', image: '/productos/Termocoffeerosa.jfif' },
        { id: 'cafe-claro', name: 'Café claro', image: '/productos/Termocoffeecafeclaro.jfif' },
        { id: 'cafe', name: 'Café', image: '/productos/Termocoffeecafe.jfif' },
        { id: 'negro', name: 'Negro', image: '/productos/Termocoffeenegro.jfif' },
      ],
    },
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'low' },
      { branchId: 'atlapexco', status: 'available' },
      { branchId: 'calnali', status: 'available' },
    ],
  },
  19: {
    shortDescription: 'Un vaso deportivo de 1 litro para mantener tu bebida cerca durante el día.',
    description: 'Su formato amplio incluye tapa y correa para transportarlo con facilidad. Las marcas laterales ayudan a consultar el contenido y sus distintos colores permiten elegir tu favorito.',
    images: [
      { src: '/productos/Vasosporttodos.jfif', alt: 'Vaso sport 1L en todos sus colores' },
      { src: '/productos/Vasosportazul.jfif', alt: 'Vaso sport 1L azul' },
      { src: '/productos/Vasosportrosa.jfif', alt: 'Vaso sport 1L rosa' },
      { src: '/productos/Vasosportmorado.jfif', alt: 'Vaso sport 1L morado' },
      { src: '/productos/Vasosportnegro.jfif', alt: 'Vaso sport 1L negro' },
    ],
    variants: {
      colors: [
        { id: 'azul', name: 'Azul', image: '/productos/Vasosportazul.jfif' },
        { id: 'rosa', name: 'Rosa', image: '/productos/Vasosportrosa.jfif' },
        { id: 'morado', name: 'Morado', image: '/productos/Vasosportmorado.jfif' },
        { id: 'negro', name: 'Negro', image: '/productos/Vasosportnegro.jfif' },
      ],
    },
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'available' },
      { branchId: 'calnali', status: 'low' },
    ],
  },
  20: {
    shortDescription: 'Un termo compacto con indicador digital para consultar la temperatura de tu bebida.',
    description: 'Su tapa incorpora una pantalla digital de lectura rápida y su formato delgado facilita llevarlo durante el día. Está disponible en distintos colores para elegir el que más te guste.',
    images: [
      { src: '/productos/Termodigitaltodos.jfif', alt: 'Termo digital en todos sus colores' },
      { src: '/productos/Termodigitaldorado.jfif', alt: 'Termo digital dorado' },
      { src: '/productos/Termodigitalblanco.jfif', alt: 'Termo digital blanco' },
      { src: '/productos/Termodigitalazul.jfif', alt: 'Termo digital azul' },
      { src: '/productos/Termodigitalnegro.jfif', alt: 'Termo digital negro' },
      { src: '/productos/Termodigitalrojo.jfif', alt: 'Termo digital rojo' },
    ],
    variants: {
      colors: [
        { id: 'dorado', name: 'Dorado', image: '/productos/Termodigitaldorado.jfif' },
        { id: 'blanco', name: 'Blanco', image: '/productos/Termodigitalblanco.jfif' },
        { id: 'azul', name: 'Azul', image: '/productos/Termodigitalazul.jfif' },
        { id: 'negro', name: 'Negro', image: '/productos/Termodigitalnegro.jfif' },
        { id: 'rojo', name: 'Rojo', image: '/productos/Termodigitalrojo.jfif' },
        { id: 'rosa', name: 'Rosa' },
      ],
    },
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'low' },
      { branchId: 'calnali', status: 'available' },
    ],
  },
  21: {
    shortDescription: 'Un termo de acero inoxidable con diseño compacto y detalles en acabado dorado.',
    description: 'Su formato estilizado incluye una correa lateral que facilita transportarlo. La combinación de colores suaves y detalles metálicos lo convierte en una opción práctica para acompañar tus bebidas.',
    images: [
      { src: '/productos/TermoVacuumCupAceroInoxidabletodos.jfif', alt: 'Termo Vacuum Cup de Acero Inoxidable en todos sus colores' },
      { src: '/productos/TermoVacuumCupAceroInoxidableazulcielo.jfif', alt: 'Termo Vacuum Cup de Acero Inoxidable azul cielo' },
      { src: '/productos/TermoVacuumCupAceroInoxidableblanco.jpg', alt: 'Termo Vacuum Cup de Acero Inoxidable blanco' },
      { src: '/productos/TermoVacuumCupAceroInoxidablerosa.jfif', alt: 'Termo Vacuum Cup de Acero Inoxidable rosa' },
      { src: '/productos/TermoVacuumCupAceroInoxidableverdementa.jfif', alt: 'Termo Vacuum Cup de Acero Inoxidable verde menta' },
    ],
    variants: {
      colors: [
        { id: 'azul-cielo', name: 'Azul cielo', image: '/productos/TermoVacuumCupAceroInoxidableazulcielo.jfif' },
        { id: 'blanco', name: 'Blanco', image: '/productos/TermoVacuumCupAceroInoxidableblanco.jpg' },
        { id: 'rosa', name: 'Rosa', image: '/productos/TermoVacuumCupAceroInoxidablerosa.jfif' },
        { id: 'verde-menta', name: 'Verde menta', image: '/productos/TermoVacuumCupAceroInoxidableverdementa.jfif' },
      ],
    },
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'available' },
      { branchId: 'calnali', status: 'low' },
    ],
  },
  22: {
    shortDescription: 'Una lonchera térmica amplia para organizar y transportar tus alimentos.',
    description: 'Su compartimento principal con cierre ofrece espacio para llevar recipientes y bebidas. Las asas superiores y los bolsillos laterales facilitan el uso diario y mantienen los artículos pequeños al alcance.',
    images: [
      { src: '/productos/Loncheratérmicagrandeprincipal.jfif', alt: 'Vista principal de la Lonchera térmica grande' },
      { src: '/productos/Loncheratérmicagrandedefrente.jfif', alt: 'Vista frontal de la Lonchera térmica grande' },
      { src: '/productos/Loncheratérmicagrandevistalateral.jfif', alt: 'Vista lateral de la Lonchera térmica grande' },
      { src: '/productos/Loncheratérmicagrandevita3cuartos.jpg', alt: 'Vista de tres cuartos de la Lonchera térmica grande' },
    ],
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'low' },
      { branchId: 'calnali', status: 'available' },
    ],
  },
  23: {
    shortDescription: 'Un lapicero amplio con estampado de búhos para organizar tus útiles favoritos.',
    description: 'Su formato con varios cierres ayuda a distribuir lápices, colores y accesorios escolares. El asa lateral facilita transportarlo y su estampado añade un detalle alegre al uso diario.',
    images: [
      { src: '/productos/LapiceroBúhotodos.jfif', alt: 'Lapicero Búho en todos sus colores' },
      { src: '/productos/LapiceroBúhocrema.jfif', alt: 'Lapicero Búho crema' },
      { src: '/productos/LapiceroBúhoazul.jfif', alt: 'Lapicero Búho azul' },
      { src: '/productos/LapiceroBúhorosa.jfif', alt: 'Lapicero Búho rosa' },
    ],
    variants: {
      colors: [
        { id: 'crema', name: 'Crema', image: '/productos/LapiceroBúhocrema.jfif' },
        { id: 'azul', name: 'Azul', image: '/productos/LapiceroBúhoazul.jfif' },
        { id: 'rosa', name: 'Rosa', image: '/productos/LapiceroBúhorosa.jfif' },
      ],
    },
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'low' },
      { branchId: 'calnali', status: 'available' },
    ],
  },
  24: {
    shortDescription: 'Una mochila amplia y práctica para organizar tus objetos de uso diario.',
    description: 'Cuenta con varios compartimentos con cierre, bolsillo frontal y espacios laterales de malla. Sus tirantes acolchados y ajustables ayudan a transportarla cómodamente durante la escuela, el trabajo o un viaje.',
    images: [
      { src: '/productos/mochilaprincipal.jfif', alt: 'Vista principal de la Mochila' },
      { src: '/productos/mochiladefrente.jfif', alt: 'Vista frontal de la Mochila' },
      { src: '/productos/mochilavista3cuartos.jpg', alt: 'Vista de tres cuartos de la Mochila' },
      { src: '/productos/mochilavistalateral.jpg', alt: 'Vista lateral de la Mochila' },
    ],
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'low' },
      { branchId: 'atlapexco', status: 'available' },
      { branchId: 'calnali', status: 'available' },
    ],
  },
  25: {
    shortDescription: 'Un set de 48 marcadores acrílicos con una amplia selección de colores.',
    description: 'La variedad de tonos permite crear ilustraciones, detalles y combinaciones coloridas. Sus diferentes puntas ayudan a realizar trazos amplios o precisos según las necesidades de cada proyecto.',
    images: [
      { src: '/productos/Marcadoracrílico48pzasprincipal.jfif', alt: 'Detalle de colores del Marcador acrílico 48 pzas' },
      { src: '/productos/Marcadoracrílico48pzasvista1.jfif', alt: 'Presentación de los 48 marcadores acrílicos' },
      { src: '/productos/Marcadoracrílico48pzasvista2.jfif', alt: 'Ejemplo de trazos con los marcadores acrílicos' },
      { src: '/productos/Marcadoracrílico48pzasvista3.jfif', alt: 'Marcadores acrílicos en uso' },
    ],
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'available' },
      { branchId: 'calnali', status: 'low' },
    ],
  },
  26: {
    shortDescription: 'Una bocina portátil con formato robusto para disfrutar tu música en distintos espacios.',
    description: 'Su diseño integra un asa superior para transportarla y controles de acceso rápido en la parte frontal. El cuerpo compacto permite colocarla con facilidad en interiores o llevarla a reuniones al aire libre.',
    images: [
      { src: '/productos/BocinaBombaxprincipal.jfif', alt: 'Vista principal de la Bocina Bombax 4' },
      { src: '/productos/BocinaBombaxdefrente.jfif', alt: 'Vista frontal de la Bocina Bombax 4' },
      { src: '/productos/BocinaBombaxvista3cuartos.jfif', alt: 'Vista de tres cuartos de la Bocina Bombax 4' },
      { src: '/productos/BocinaBombaxvistalateral.jfif', alt: 'Vista lateral de la Bocina Bombax 4' },
    ],
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'low' },
      { branchId: 'calnali', status: 'unavailable' },
    ],
  },
  27: {
    shortDescription: 'Un ventilador compacto con iluminación multicolor para refrescar espacios pequeños.',
    description: 'Su formato de mesa ocupa poco espacio y permite dirigir el aire hacia donde lo necesitas. El marco iluminado aporta un detalle decorativo para recámaras, escritorios o áreas de descanso.',
    images: [
      { src: '/productos/ventiladorprincipal.jfif', alt: 'Ventilador en un espacio de descanso' },
      { src: '/productos/ventiladordefrente.jfif', alt: 'Vista frontal del Ventilador' },
      { src: '/productos/ventiladorvista3cuartos.jfif', alt: 'Vista de tres cuartos del Ventilador' },
      { src: '/productos/ventiladorvistalateral.jfif', alt: 'Vista lateral del Ventilador' },
    ],
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'available' },
      { branchId: 'calnali', status: 'low' },
    ],
  },
  28: {
    shortDescription: 'Un espejo de tocador con compartimentos para mantener tus productos organizados.',
    description: 'Integra dos cajones centrales y espacios laterales para separar maquillaje, brochas, accesorios y artículos de uso diario. Su espejo redondo completa una estación compacta para arreglarte y conservar todo al alcance.',
    images: [
      { src: '/productos/Espejoorganizadorprincipal.jfif', alt: 'Espejo organizador en un tocador' },
      { src: '/productos/Espejoorganizadordefrente.jfif', alt: 'Vista frontal del Espejo organizador' },
      { src: '/productos/Espejoorganizadorvista3cuartos.jfif', alt: 'Vista de tres cuartos del Espejo organizador' },
      { src: '/productos/Espejoorganizadorvistacajonesabiertos.jpg', alt: 'Espejo organizador con los cajones abiertos' },
    ],
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'low' },
      { branchId: 'calnali', status: 'available' },
    ],
  },
  29: {
    shortDescription: 'Un set compacto con dados, puntas y accesorios para tareas prácticas del hogar.',
    description: 'Incluye diferentes medidas y extensiones organizadas dentro de un estuche rígido. La distribución permite identificar cada pieza con facilidad y mantener el conjunto listo para pequeños ajustes o reparaciones.',
    images: [
      { src: '/productos/Setherramientaprincipal.jfif', alt: 'Vista principal del Set herramienta' },
      { src: '/productos/Setherramientafrontal.jfif', alt: 'Vista frontal del Set herramienta' },
      { src: '/productos/Setherramientavistadecerca.jfif', alt: 'Detalle de las piezas del Set herramienta' },
      { src: '/productos/Setherramientauso.jfif', alt: 'Set herramienta en uso' },
    ],
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'available' },
      { branchId: 'calnali', status: 'low' },
    ],
  },
  30: {
    shortDescription: 'Un set de reloj inteligente con correas intercambiables para combinar diferentes estilos.',
    description: 'Incluye el reloj, ocho correas, cable de carga y protector transparente. La variedad de materiales y colores permite cambiar la apariencia del reloj según la ocasión.',
    images: [
      { src: '/productos/SetSmartWatchprincipal.jfif', alt: 'Vista principal del Set Smart Watch' },
      { src: '/productos/SetSmartWatchfrontal.jfif', alt: 'Presentación frontal del Set Smart Watch' },
      { src: '/productos/SetSmartWatchcontenido.jpg', alt: 'Contenido completo del Set Smart Watch' },
      { src: '/productos/SetSmartWatchuso.jfif', alt: 'Set Smart Watch en uso' },
    ],
    branchAvailability: [
      { branchId: 'zacualtipan', status: 'available' },
      { branchId: 'atlapexco', status: 'low' },
      { branchId: 'calnali', status: 'available' },
    ],
  },
  31: {
    shortDescription: 'Una cosmetiquera compacta para mantener tus productos de belleza organizados.',
    description: 'Su apertura amplia permite ver y acomodar maquillaje, brochas y artículos personales con facilidad. El cierre superior ayuda a mantener el contenido reunido durante el uso diario o un viaje.',
    images: [{ src: '/productos/cosmetiquera.jpeg', alt: 'Cosmetiquera abierta con productos de belleza' }],
    branchAvailability: [{ branchId: 'zacualtipan', status: 'available' }, { branchId: 'atlapexco', status: 'available' }, { branchId: 'calnali', status: 'low' }],
  },
  32: {
    shortDescription: 'Un ventilador compacto con función de humidificación para espacios pequeños.',
    description: 'Su formato portátil integra asa superior y controles frontales para facilitar su uso. Es una opción práctica para colocar en escritorios, recámaras o áreas de descanso.',
    images: [{ src: '/productos/ventiladorconumificador.jpeg', alt: 'Ventilador con humificador portátil' }],
    branchAvailability: [{ branchId: 'zacualtipan', status: 'low' }, { branchId: 'atlapexco', status: 'available' }, { branchId: 'calnali', status: 'available' }],
  },
  33: {
    shortDescription: 'Un esmeril inalámbrico acompañado de accesorios para diferentes tareas.',
    description: 'El conjunto incluye el esmeril, mango auxiliar, baterías, cargador y estuche. Su formato inalámbrico facilita llevarlo al área de trabajo y conservar sus piezas organizadas.',
    images: [{ src: '/productos/esmerilinalambrico.jpeg', alt: 'Esmeril inalambrico con accesorios' }],
    branchAvailability: [{ branchId: 'zacualtipan', status: 'available' }, { branchId: 'atlapexco', status: 'low' }, { branchId: 'calnali', status: 'unavailable' }],
  },
  34: {
    shortDescription: 'Una zapatera armable de varios niveles para organizar tu calzado.',
    description: 'Su formato vertical aprovecha mejor el espacio y reúne distintos pares en un solo lugar. La cubierta frontal ayuda a mantener el contenido visualmente ordenado.',
    images: [{ src: '/productos/zapateraarmable.jpeg', alt: 'Zapatera armable con varios niveles' }],
    branchAvailability: [{ branchId: 'zacualtipan', status: 'available' }, { branchId: 'atlapexco', status: 'available' }, { branchId: 'calnali', status: 'low' }],
  },
  35: {
    shortDescription: 'Un baumanómetro digital con monitor y brazalete para uso doméstico.',
    description: 'Incluye una pantalla digital y brazalete ajustable. Consulta siempre las instrucciones del fabricante antes de utilizarlo; sus lecturas no sustituyen una valoración médica profesional.',
    images: [{ src: '/productos/baumanometrodigital.jpeg', alt: 'Baumanometro digital con brazalete' }],
    branchAvailability: [{ branchId: 'zacualtipan', status: 'low' }, { branchId: 'atlapexco', status: 'available' }, { branchId: 'calnali', status: 'available' }],
  },
  36: {
    shortDescription: 'Un cobertor suave para acompañar los momentos de descanso del bebé.',
    description: 'Su formato ligero permite mantenerlo a la mano en la habitación o llevarlo durante una salida. El diseño infantil aporta un detalle cálido y agradable.',
    images: [{ src: '/productos/cobertorparabebe.jpeg', alt: 'Cobertor para bebe con diseño infantil' }],
    branchAvailability: [{ branchId: 'zacualtipan', status: 'available' }, { branchId: 'atlapexco', status: 'low' }, { branchId: 'calnali', status: 'available' }],
  },
  37: {
    shortDescription: 'Un rack vertical para aprovechar el espacio del baño y mantener todo organizado.',
    description: 'Su diseño se coloca sobre el sanitario y ofrece varios niveles para acomodar toallas, artículos de higiene y accesorios. Incluye espacios laterales para mantener objetos pequeños al alcance.',
    images: [{ src: '/productos/RackdeBaño.png', alt: 'Rack de Baño blanco con varios niveles' }],
    branchAvailability: [{ branchId: 'zacualtipan', status: 'available' }, { branchId: 'atlapexco', status: 'low' }, { branchId: 'calnali', status: 'available' }],
  },
  38: {
    shortDescription: 'Un taburete acolchado con espacio interior para sentarte y organizar al mismo tiempo.',
    description: 'La tapa acolchada funciona como asiento y se retira para acceder a un compartimento amplio. Su formato plegable ayuda a guardarlo con facilidad cuando no está en uso.',
    images: [{ src: '/productos/Taburete.png', alt: 'Taburete negro con compartimento de almacenamiento abierto' }],
    branchAvailability: [{ branchId: 'zacualtipan', status: 'low' }, { branchId: 'atlapexco', status: 'available' }, { branchId: 'calnali', status: 'available' }],
  },
  39: {
    shortDescription: 'Una sandwichera RAF de 750 W para preparar sándwiches tostados en pocos minutos.',
    description: 'Cuenta con revestimiento antiadherente, calentamiento por ambos lados y un formato compacto que facilita su uso y limpieza. Sus indicadores superiores ayudan a identificar el proceso de calentamiento.',
    images: [{ src: '/productos/Sándwichera.png', alt: 'Sandwichera RAF negra de 750 W junto a su caja' }],
    branchAvailability: [{ branchId: 'zacualtipan', status: 'available' }, { branchId: 'atlapexco', status: 'available' }, { branchId: 'calnali', status: 'low' }],
  },
}

export const products = baseProducts.map((product) => ({ ...product, ...productDetailsById[product.id] }))

export const promotions = [
  { id: 1, title: 'Novedades que inspiran', slug: 'novedades-que-inspiran', shortDescription: 'Rack de Baño en oferta por $300.', description: 'Aprovecha el espacio vertical y mantén tus artículos de baño organizados con este rack en promoción.', image: '/productos/RackdeBaño.png', imageLabel: 'Rack de Baño en promoción', productName: 'Rack de Baño', price: '$300', productId: 37, type: 'novedades', badge: 'Nuevo', featured: true, active: true, productIds: [37], categorySlugs: ['hogar'], catalogQuery: 'promocion=1', tone: 'rose' },
  { id: 2, title: 'Detalles para compartir', slug: 'detalles-para-compartir', shortDescription: 'Taburete en oferta por $300.', description: 'Un taburete acolchado con almacenamiento para organizar distintos espacios del hogar.', image: '/productos/Taburete.png', imageLabel: 'Taburete con almacenamiento en promoción', productName: 'Taburete', price: '$300', productId: 38, type: 'destacadas', badge: 'Destacada', featured: true, active: true, productIds: [38], categorySlugs: ['hogar'], catalogQuery: 'promocion=1', tone: 'lavender' },
  { id: 3, title: 'Sandwichera RAF', slug: 'sandwichera-raf', shortDescription: 'Sandwichera RAF en oferta por $320.', description: 'Prepara sándwiches tostados en pocos minutos con 750 W de potencia y revestimiento antiadherente.', image: '/productos/Sándwichera.png', imageLabel: 'Sandwichera RAF en promoción', productName: 'Sandwichera RAF', price: '$320', productId: 39, type: 'activas', badge: 'Oferta', featured: true, active: true, productIds: [39], categorySlugs: ['hogar'], catalogQuery: 'promocion=1', tone: 'cream' },
  { id: 4, title: 'Favoritos para organizar', slug: 'favoritos-para-organizar', shortDescription: 'Opciones bonitas y prácticas para ordenar.', description: 'Encuentra accesorios y objetos para poner cada cosa en su lugar con un toque alegre.', image: null, imageLabel: 'Imagen de favoritos para organizar', type: 'activas', badge: 'Especial', featured: false, active: true, productIds: [28, 29, 34], categorySlugs: ['hogar', 'belleza'], catalogQuery: 'categoria=hogar', tone: 'mint' },
  { id: 5, title: 'Pequeñas oportunidades', slug: 'pequenas-oportunidades', shortDescription: 'Productos seleccionados para darte un gusto.', description: 'Una selección promocional para completar un regalo o descubrir un nuevo favorito.', image: null, imageLabel: 'Imagen de oportunidades especiales', type: 'activas', badge: 'Promoción', featured: false, active: true, productIds: [25, 26, 27], categorySlugs: ['regalos', 'accesorios'], catalogQuery: 'promocion=1', tone: 'peach' },
  { id: 6, title: 'Campaña anterior', slug: 'campana-anterior', shortDescription: 'Ejemplo de promoción archivada.', description: 'Promoción archivada que no debe mostrarse en el sitio público.', image: null, imageLabel: 'Imagen de campaña archivada', type: 'temporada', badge: 'Archivada', featured: false, active: false, productIds: [], categorySlugs: [], catalogQuery: 'categoria=regalos', tone: 'cream' },
]

export const branches = [
  { id: 'zacualtipan', slug: 'zacualtipan', name: 'D’ Davi NOVEDADES Zacualtipán', shortName: 'Zacualtipán', address: 'Colonia La López Segunda Sección, 43202 Zacualtipán, Hidalgo, México', phone: '5624993992', phoneDisplay: '56 2499 3992', whatsapp: '525624993992', mapsUrl: 'https://maps.app.goo.gl/A6uBjFb8damVCKdH9', coordinates: { lat: 20.6587276, lng: -98.6593393 }, scheduleType: 'known', schedule: [{ days: 'Todos los días', hours: '9:00 a.m. – 8:00 p.m.' }], scheduleLabel: '', showOnHome: true, active: true, image: '/sucursalzacualipan.jpg', imageLabel: 'Sucursal Zacualtipán' },
  { id: 'atlapexco', slug: 'atlapexco', name: 'D’ Davi NOVEDADES Atlapexco', shortName: 'Atlapexco', address: 'Unidad Deportiva, 43060 Atlapexco, Hidalgo, México', phone: '5624993992', phoneDisplay: '56 2499 3992', whatsapp: '525624993992', mapsUrl: 'https://maps.app.goo.gl/vv6dyDbAeKR2tmDp9', coordinates: { lat: 21.0195083, lng: -98.3456989 }, scheduleType: 'maps', schedule: [], scheduleLabel: 'Consulta el horario actualizado en Google Maps', showOnHome: true, active: true, image: '/sucursalatlapexco.jpg', imageLabel: 'Sucursal Atlapexco' },
  { id: 'calnali', slug: 'calnali', name: 'D’ Davi NOVEDADES Calnali', shortName: 'Calnali', address: 'Plaza Felipe Ángeles 15, Centro, 43230 Calnali, Hidalgo, México', phone: '5624993992', phoneDisplay: '56 2499 3992', whatsapp: '525624993992', mapsUrl: 'https://maps.app.goo.gl/UidpZaG327WrbUcu6', coordinates: { lat: 20.8973915, lng: -98.5829596 }, scheduleType: 'maps', schedule: [], scheduleLabel: 'Consulta el horario actualizado en Google Maps', showOnHome: false, active: true, image: null, imageLabel: 'Imagen de sucursal' },
]
