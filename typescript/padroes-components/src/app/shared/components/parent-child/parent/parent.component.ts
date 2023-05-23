import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChildren(ChildComponent)
  componentesFilho!: QueryList<ChildComponent>;

  filhos: number[] = [1];

  constructor() {
    console.log('construtor:', this.componentesFilho);
  }

  ngAfterViewInit(): void {
    console.log(this.componentesFilho);
  }

  chamarFilho() {
    this.componentesFilho.forEach((component) => {
      component.incrementar();
    });
  }

  adicionarFilho() {
    this.filhos.push(this.filhos.length + 1);
  }
}
