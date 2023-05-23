import { Directive, HostListener, Input } from '@angular/core';
import { ContentTriggerComponent } from './content-trigger.component';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[app-content-trigger]',
})
export class ContentTriggerDirective<T = any> {
  @Input()
  customData: T | undefined = undefined;

  @HostListener('click')
  onClick(): void {
    this.parent.triggerSomeEvent(this.customData);
  }

  constructor(private parent: ContentTriggerComponent) {
    console.log('trigger');
  }
}
