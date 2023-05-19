import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  descricao = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(['produtos'], {
        queryParams: { descricao: this.descricao },
      });
      return;
    }

    this.router.navigate(['produtos']);
  }
}
