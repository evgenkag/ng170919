import {Component, OnInit, Input} from '@angular/core';
import {IElement} from "../mock/index";

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
    @Input() elem: IElement;

    constructor() { }

    ngOnInit() {

    }

}
