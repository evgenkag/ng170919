import {Component, Output, ViewChild} from '@angular/core';
import {elements, IElement} from './mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Курс по Angular 17.09';

    public elements: IElement[] = elements;
    public activeElem: IElement = elements[0];

    public setActive(elem: IElement) {
        this.activeElem = elem;
    }

}
