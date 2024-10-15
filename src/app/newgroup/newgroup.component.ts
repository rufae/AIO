import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {navigate} from "ionicons/icons";
import {Router} from "@angular/router";

@Component({
    selector: 'app-newgroup',
    templateUrl: './newgroup.component.html',
    styleUrls: ['./newgroup.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class NewgroupComponent  implements OnInit {

  constructor(private router: Router) { }

    crearGrupo(){
        this.router.navigate(['/chats']);
    }

  ngOnInit() {}

}
