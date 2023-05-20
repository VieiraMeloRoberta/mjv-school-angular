import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public search!: string;
  descricao = '';
  cartService: any;

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
  searchInput(event: any) {
    this.search = (event.target as HTMLInputElement).value;
    console.log(this.search);
    this.cartService.searchInput.next(this.search);
  }
}
