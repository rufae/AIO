import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VotoService {

    constructor(private http: HttpClient) {}

    checkVoto(actividadId: number, usuarioId: number): Observable<boolean> {
        return this.http.get<boolean>(`api/votos/usuario-ya-voto`, {
            params: {
                actividadId: actividadId.toString(),
                usuarioId: usuarioId.toString()
            }
        });
    }
}
