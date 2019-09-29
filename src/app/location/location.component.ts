import {Component, OnInit, Input} from '@angular/core';
import {IElement} from "../mock/index";

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
    @Input() elem: IElement;

    constructor(
    ) { }

    ngOnInit() {
    }

}
