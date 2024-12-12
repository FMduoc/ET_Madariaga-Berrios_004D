export interface Justificativo {
    id: string; 
    idEstudiante: string; 
    idClase: string;
    comentario: string;
    comentDocente: string; 
  }

  export interface NuevoJustificativo {
    idEstudiante: string;
    idClase: string;
    comentario: string;
    comentDocente: string;
  }
