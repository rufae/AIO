import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private apiUrl = 'http://localhost:8080/api/usuarios';

    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    addUsuario(usuario: any): Observable<any> {
        return this.http.post<any>('http://localhost:8080/api/usuario', usuario);
    }
}
