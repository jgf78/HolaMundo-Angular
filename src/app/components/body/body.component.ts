import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;
    frase: any = {
        mensaje: 'Nadie dijo que fuera ser facil',
        autor: 'Yo'
    };

    personajes: string[] = ['persona 1', 'persona 2', 'persona 3'];
}
