import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-content-trigger',
  templateUrl: './content-trigger.component.html',
  styleUrls: ['./content-trigger.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTriggerComponent<T = any> {
  triggerSomeEvent(data: T): void {
    console.log('triggered: ', data);
  }
}
