import { Component } from '@angular/core';
import { New } from 'src/app/interface/new.interface';

@Component({
  selector: 'new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  public newItems: New[] = [
    {title: 'Hydrogen VS Electric Cars', paragraph: 'Will hydrogen-fueled cars ever catch up to EVs?'},
    {title: 'The Downsides of AI Artistry', paragraph: 'What are the possible adverse effects of on-demand AI image generation?'},
    {title: 'Is VC Funding Drying Up?', paragraph: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'},
  ];

}
