export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  quantidadeEstoque: number;
  descricaoPreco: string;
  imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
  quantidade: number;
}

export const produtos: IProduto[] = [
  {
    id: 1,
    descricao: 'Angular',
    preco: 85,
    descricaoPreco: 'Promoção',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hM4TPHP4QEOfBgMK6bLPdgwq0ACzCpOCsvagO32e-zXmtIVsrkY_ZHM3G6INirmhxJI&usqp=CAU',
    quantidadeEstoque: 15,
  },
  {
    id: 2,
    descricao: 'Front-end',
    preco: 85,
    descricaoPreco: 'Promoção',
    imagem: 'https://static.thenounproject.com/png/916721-200.png',
    quantidadeEstoque: 10,
  },
  {
    id: 3,
    descricao: 'Mobile',
    preco: 85,
    descricaoPreco: 'Promoção',
    imagem:
      'https://i.pinimg.com/originals/b8/ae/b1/b8aeb1b09d6c6529cbcf66b414052d57.png',
    quantidadeEstoque: 10,
  },
  {
    id: 4,
    descricao: 'Data Science',
    preco: 85,
    descricaoPreco: 'Promoção',
    imagem: 'https://static.thenounproject.com/png/3239702-200.png',
    quantidadeEstoque: 10,
  },
  {
    id: 5,
    descricao: 'DevOps',
    preco: 85,
    descricaoPreco: 'Promoção',
    imagem: 'https://cdn-icons-png.flaticon.com/512/5115/5115293.png',
    quantidadeEstoque: 10,
  },
  {
    id: 6,
    descricao: 'UX & Design',
    preco: 85,
    descricaoPreco: 'Promoção',
    imagem: 'https://cdn-icons-png.flaticon.com/512/5024/5024467.png',
    quantidadeEstoque: 10,
  },
];
