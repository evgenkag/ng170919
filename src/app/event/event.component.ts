import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IElement} from "../mock/index";

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    public activeElem: IElement;
    @Input() elements: IElement[];
    @Output() onChanged = new EventEmitter<IElement>();

    constructor() {
    }

    ngOnInit() {
        this.setActive(this.elements[0]);
    }

    public setActive(elem: IElement) {
        this.onChanged.emit(elem);
    }

}
