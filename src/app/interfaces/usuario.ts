export interface Usuario {
    id: string;
    nombre: string;
    rut: string;
    email: string;
    password: string;
    isActive: boolean;
} // Peticiones PUT, GET, DELETE

export interface NuevoUsuario {
    nombre: string;
    rut: string;
    email: string;
    password: string;
    isActive: boolean;
} // Peticiones POST