import { Pipe, PipeTransform } from '@angular/core';
import {IElement} from "./mock/index";

@Pipe({
  name: 'menu'
})
export class MenuPipe implements PipeTransform {

  public transform(elements: IElement[]): IElement[] {
      let items: any = [];
      elements.forEach((elem, index) => {
          if (!items.includes(elem.type)) {
              items.push(elem.type);
          }
      });
      return items;
  }

}
