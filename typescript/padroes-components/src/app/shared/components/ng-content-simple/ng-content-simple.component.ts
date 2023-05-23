import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { PureComponentComponent } from '../pure-component/pure-component.component';

@Component({
  selector: 'app-ng-content-simple',
  template: `
    <div>ng-content-simple works!</div>
    <ng-content></ng-content>
  `,
  styleUrls: ['./ng-content-simple.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgContentSimpleComponent implements AfterContentInit {
  @ContentChildren(PureComponentComponent)
  pureComponent: QueryList<PureComponentComponent> | undefined;

  ngAfterContentInit(): void {
    console.log(this.pureComponent);
  }
}
