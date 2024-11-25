export interface Clases {
    id: number;
    nombre: string;
    seccion: string;
    docenteId: string;
    horarios: string;
    estudiantesInscritos: string[];
} // PETICIÓN GET, PUT, DELETE

export interface NuevaClases {
    nombre: string;
    seccion: string;
    docenteId: string;
    horarios: string;
    estudiantesInscritos: string[];
} // PETICIÓN POST
