import { Component, OnInit } from '@angular/core';
import {ActivguardadasComponent} from "../activguardadas/activguardadas.component";
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-paginaguardados',
    templateUrl: './paginaguardados.component.html',
    styleUrls: ['./paginaguardados.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        ActivguardadasComponent
    ]
})
export class PaginaguardadosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
