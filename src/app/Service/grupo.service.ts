import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../Model/grupo.model';

@Injectable({
    providedIn: 'root'
})
export class GrupoService {

    private apiUrl = 'http://localhost:8080/viaje';

    constructor(private http: HttpClient) { }

    getGrupos(): Observable<Grupo[]> {
        return this.http.get<Grupo[]>(`${this.apiUrl}/todos`);
    }

    addGrupo(grupo: Grupo): Observable<Grupo> {
        return this.http.post<Grupo>(`${this.apiUrl}/nuevo`, grupo);  // Endpoint para crear el grupo
    }
}
// para arrancar ng serve --proxy-config proxy.conf.json
