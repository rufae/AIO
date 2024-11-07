export interface Usuario {
    usuarioId: number;
    username: string;
    password: string;
    fechaRegistro: string;
    amigos: Usuario[];
}
