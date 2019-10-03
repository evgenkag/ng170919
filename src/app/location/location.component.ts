import {Component, Input} from '@angular/core';
import {IElement} from "../mock/index";

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent {
    @Input() elem!: IElement;
}
