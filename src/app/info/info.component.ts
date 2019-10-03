import {Component, Input} from '@angular/core';
import {IElement} from "../mock/index";

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent {
    @Input() elem!: IElement;
}
