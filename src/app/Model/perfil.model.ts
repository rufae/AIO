import { Usuario } from './usuario.model';  // Asegúrate de tener el modelo Usuario

export interface Perfil {
    clienteId: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    email: string;
    telefono: string;
    fechaNacimiento: string;
    usuario: Usuario;
}
