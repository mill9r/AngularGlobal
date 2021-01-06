import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-meta-data',
  templateUrl: './meta-data.component.html',
  styleUrls: ['./meta-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetaDataComponent {
  @Input() public icon: string;
  @Input() public iconAriaDescription: string;
  @Input() public message: string;
  @Input() public isWhite: boolean;
}


