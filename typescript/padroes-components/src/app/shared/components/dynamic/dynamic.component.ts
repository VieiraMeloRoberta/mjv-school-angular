import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Injector,
} from '@angular/core';
import { PureComponentComponent } from '../pure-component/pure-component.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}

  addComponent(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      PureComponentComponent
    );
    // const componentRef = factory.create(this.injector);
    const componentRef = this.container.createComponent(PureComponentComponent);
    const instance = componentRef.instance;
    instance.open = Math.random() >= 0.5;
    instance.count = Math.floor(Math.random() * 1000);
    // this.viewContainerRef.insert(componentRef.hostView);
    // const compRef2 = this.container.createComponent(factory);
    // this.viewContainerRef.insert(componentRef.hostView);
    
  }

  removeComponent(): void {
    this.viewContainerRef.remove();
    this.container.remove();
  }
}
