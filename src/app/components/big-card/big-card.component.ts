import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent {
  @Input() photoCover: string = '';
  @Input() CardTitle: string = 'Vennite a nc';
  @Input() CardDescription: string =
    'Marvel studios anuncia novo filme do homen de ferro';
  @Input() url = 'https://picsum.photos/id/182/500/400';
}
