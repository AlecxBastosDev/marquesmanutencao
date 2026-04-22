
import { Product, Service } from './types';

export const PRODUCTS: Product[] = [
  // ABASTECIMENTO
  {
    id: '4625',
    name: 'Bico Automático BR50',
    description: 'Bico de alta performance com desligamento automático.',
    price: 580.00,
    image: '/fotos/bicobr50.jpg',
    category: 'Abastecimento',
    specifications: ['Vazão: 70 l/min', 'Entrada: 3/4" NPT', 'Fluídos: Diesel, Etanol, Gasolina']
  },
  {
    id: '1843',
    name: 'Bico Automático BR120',
    description: 'Bico de alta vazão para abastecimento pesado.',
    price: 1150.00,
    image: '/fotos/bicobr50.jpg',
    category: 'Abastecimento',
    specifications: ['Vazão: 120 l/min', 'Entrada: 1" NPT', 'Ideal para Caminhões e Ônibus']
  },
  {
    id: '9219',
    name: 'Bomba para Diesel 12V',
    description: 'Bomba autoaspirante de palhetas com válvula by-pass.',
    price: 1280.00,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    category: 'Abastecimento',
    specifications: ['Vazão: 50 l/min', 'Tensão: 12V', 'Ciclo: 30 min']
  },
  {
    id: '9804',
    name: 'Kit Abastecimento Diesel 230V',
    description: 'Sistema completo pronto para instalação.',
    price: 4250.00,
    image: '/fotos/kitabastecimento.jpg',
    category: 'Abastecimento',
    specifications: ['Vazão: 60 l/min', 'Medidor Mecânico 4 dígitos', 'Bico Automático']
  },

  // LUBRIFICAÇÃO
  {
    id: '8597',
    name: 'Propulsora Pneumática 50:1',
    description: 'Equipamento de alta pressão para lubrificação industrial.',
    price: 2850.00,
    image: '/fotos/propulsora50.jpg',
    category: 'Lubrificação',
    specifications: ['Rateio: 50:1', 'Vazão: 850 g/min', 'Pressão Saída: Até 5800 PSI']
  },
  {
    id: '8596',
    name: 'Unidade Móvel para Graxa 20kg',
    description: 'Conjunto completo com propulsora e balde com rodas.',
    price: 3450.00,
    image: '/fotos/unidademovel20kg.jpg',
    category: 'Lubrificação',
    specifications: ['Capacidade: 20kg', 'Mangueira: 1/4"', 'Válvula de Controle Z']
  },
  {
    id: '8393',
    name: 'Carretel Aberto Óleo',
    description: 'Carretel com retração automática para óleo lubrificante.',
    price: 3100.00,
    image: 'https://images.unsplash.com/photo-1589113155355-0c3330687638?auto=format&fit=crop&q=80&w=800',
    category: 'Lubrificação',
    specifications: ['Mangueira: 15m x 1/2"', 'Pressão Máx: 2000 PSI', 'Retração Automática']
  },

  // ARLA 32
  {
    id: '8119',
    name: 'Bomba Elétrica Arla 32 220V',
    description: 'Bomba de diafragma em polipropileno para Arla 32.',
    price: 1950.00,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    category: 'Arla 32',
    specifications: ['Vazão: 32 l/min', 'Tensão: 220V', 'Material: Polipropileno']
  },
  {
    id: '7493',
    name: 'Bico Automático Arla 32',
    description: 'Bico em aço inoxidável com vedações em Viton.',
    price: 980.00,
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
    category: 'Arla 32',
    specifications: ['Material: Inox / Viton', 'Vazão: 35 l/min', 'Entrada: 3/4"']
  },
  {
    id: '9416',
    name: 'Medidor Digital Arla 32',
    description: 'Medidor de turbina de alta precisão.',
    price: 639.99,
    image: '/fotos/medidordigitalarla.jpg',
    category: 'Arla 32',
    specifications: ['Precisão: +/- 1%', 'Vazão: 35 l/min', 'Rosca: BSP']
  },

  // CONEXÕES
  {
    id: '4580',
    name: 'Adaptador Macho x Fêmea 1"',
    description: 'Adaptador Tipo A em alumínio para fluídos.',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fm=webp&fit=crop&q=75&w=800',
    category: 'Conexões',
    specifications: ['Tipo: A', 'Bitola: 1" x 1"', 'Material: Alumínio']
  },
  {
    id: '1609',
    name: 'Acoplador Fêmea x Fêmea 2"',
    description: 'Acoplador Tipo D com aletas em aço inox.',
    price: 385.00,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
    category: 'Conexões',
    specifications: ['Tipo: D', 'Bitola: 2" x 2"', 'Aletas: Inox']
  },
  {
    id: '1674',
    name: 'Adaptador Macho x Espigão',
    description: 'Adaptador Tipo E em alumínio.',
    price: 145.00,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fm=webp&fit=crop&q=75&w=800',
    category: 'Conexões',
    specifications: ['Tipo: E', 'Bitola: 1 1/2"', 'Material: Alumínio']
  },
  {
    id: 'breakaway-34',
    name: 'Válvula Breakaway com Proteção 3/4"',
    description: 'Válvula de segurança projetada para interromper o fluxo de combustível em caso de arrancada acidental.',
    price: 177.99,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    category: 'Abastecimento',
    specifications: ['Bitola: 3/4"', 'Reconectável', 'Proteção inclusa']
  },
  {
    id: 'tampa-bocal-4',
    name: 'Tampa do Bocal de Tanque 4"',
    description: 'Tampa de alta resistência para bocal de descarga e medição de tanques de combustível.',
    price: 127.99,
    image: '/fotos/tampatanque.jpg',
    category: 'Conexões',
    specifications: ['Diâmetro: 4"', 'Vedação hermética', 'Material resistente']
  },
  {
    id: 'capa-bomba-3g',
    name: 'Capa Protetora para Bomba 3G Dupla',
    description: 'Proteção personalizada para bombas série 3G Dupla, evitando desgaste e danos externos.',
    price: 132.99,
    image: 'https://images.unsplash.com/photo-1589113155355-0c3330687638?auto=format&fit=crop&q=80&w=800',
    category: 'Abastecimento',
    specifications: ['Modelo: 3G Dupla', 'Material: Vinil reforçado', 'Fácil instalação']
  },
  {
    id: 'almotolia-500ml',
    name: 'Almotolia em Metal 500ml com Bico Extensor',
    description: 'Lubrificador manual metálico ideal para aplicação precisa de óleos em componentes mecânicos.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
    category: 'Lubrificação',
    specifications: ['Capacidade: 500ml', 'Material: Chapa de aço', 'Bico flexível extensor']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Manutenção de Bombas',
    description: 'Calibração, troca de componentes e verificação de vazamentos em bombas multimarcas.',
    icon: 'Wrench'
  },
  {
    id: 's2',
    title: 'Limpeza de Tanques',
    description: 'Remoção de borra e resíduos com tecnologia de hidrojateamento e sucção.',
    icon: 'Droplets'
  },
  {
    id: 's3',
    title: 'Teste de Estanqueidade',
    description: 'Certificação obrigatória para detecção de vazamentos em sistemas subterrâneos.',
    icon: 'ShieldCheck'
  },
  {
    id: 's4',
    title: 'Automação de Pista',
    description: 'Instalação de sistemas de gestão e controle de estoque de combustível.',
    icon: 'Cpu'
  }
];
