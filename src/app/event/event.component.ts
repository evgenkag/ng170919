import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IElement} from "../mock/index";

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    public activeElem!: IElement;
    public elemType: string = '';
    @Input() elements: IElement[] = [];
    @Output() onChanged = new EventEmitter<IElement>();

    ngOnInit() {
        this.setActive(this.elements[0]);
        this.setActiveTab(this.elements[0].type);
    }

    public setActiveTab(elemType: string) {
        this.elemType = elemType;
    }

    public setActive(elem: IElement) {
        this.onChanged.emit(elem);
    }

}
