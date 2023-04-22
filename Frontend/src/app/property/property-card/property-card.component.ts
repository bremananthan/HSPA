import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  //template: '<h1>I am a card </h1>',--moved this to component.html
  templateUrl: 'property-card.component.html',
  //styles: ['h1 { font-weight: normal;}']--moved this to component.css
  styleUrls: ['property-card.component.css']

}
)

export class PropertyCardComponent {
    Property: any = {
      "Id":1,
      "Type":"House",
      "Price":12000
    }
}
