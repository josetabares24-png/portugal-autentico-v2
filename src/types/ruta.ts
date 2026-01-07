export interface Coordenadas {
  lat: number;
  lng: number;
}

export interface Parada {
  id: number;
  hora: string;
  tipo: 'Visita' | 'Comida' | 'Transporte';
  titulo: string;
  descripcion: string;
  consejoLocal: string;
  coordenadas: Coordenadas;
  imagenUrl: string;
  duracion?: string;
  precio?: string;
  horario?: string;
  transporte?: {
    tipo: string;
    duracion: string;
    coste: string;
  };
}

export interface Ruta {
  id: string;
  nombre: string;
  duracion: string;
  paradas: number;
  precio: number;
  descripcion: string;
  paradas_data: Parada[];
  presupuesto: {
    transporte: number;
    comidas: number;
    entradas: number;
    extras: number;
    total: number;
  };
  consejos: string[];
}
