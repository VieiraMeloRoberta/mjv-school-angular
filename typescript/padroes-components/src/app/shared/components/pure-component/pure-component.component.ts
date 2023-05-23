import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-pure-component',
  template: `
    <div>open: {{ open }}</div>
    <div>count: {{ count }}</div>

    <button (click)="triggerOutput()">Trigger output</button>
  `,
  styleUrls: ['./pure-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PureComponentComponent implements OnInit {
  @Input()
  open = false;

  count = 0;

  @Output()
  buttonClicked = new EventEmitter<number>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    setInterval(() => {
      this.count += 1;
      this.changeDetectorRef.markForCheck();
    }, 100);
  }

  triggerOutput(): void {
    this.buttonClicked.emit(this.count);
  }
}
