// usuario.service.ts
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private usuarioId: number | null = null;
    private baseUrl = '/api';

    constructor(private http: HttpClient) { }

    // Establecer el usuarioId
    setUsuarioId(id: number | null): void {
        this.usuarioId = id;
    }

    // Obtener el usuarioId
    getUsuarioId(): number | null {
        // Primero revisa si está guardado en la propiedad interna
        if (this.usuarioId !== null) {
            return this.usuarioId;
        }
        // Si no está en la propiedad interna, revisa en el localStorage
        const storedId = localStorage.getItem('usuarioId');
        if (storedId) {
            return Number(storedId); // Devuelve el valor desde el localStorage
        }
        return null; // Si no hay valor, devuelve null
    }

    // Comprobar si el usuario está logueado
    isUsuarioLoggedIn(): boolean {
        return this.usuarioId !== null;
    }

    // Obtener datos del usuario por ID
    getUsuarioById(id: number) {
        return this.http.get<any>(`${this.baseUrl}/usuarios/${id}`);
    }

    // Obtener grupos (viajes) del usuario
    getGruposByUsuarioId(id: number) {
        return this.http.get<any[]>(`${this.baseUrl}/usuarios/${id}/grupos`);
    }
}
