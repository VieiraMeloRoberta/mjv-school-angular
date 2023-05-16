import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor() {}

  productDetails = [
    {
      id: 1,
      productName: 'Angular',
      productDetails: 'Typescript | RxJS | Services | Arquitetura ',
      productPrice: 85,
      productImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hM4TPHP4QEOfBgMK6bLPdgwq0ACzCpOCsvagO32e-zXmtIVsrkY_ZHM3G6INirmhxJI&usqp=CAU',
    },
    {
      id: 2,
      productName: 'Front-end',
      productDetails: 'HTML, CSS | React | Angular | JavaScript',
      productPrice: 85,
      productImg: 'https://static.thenounproject.com/png/916721-200.png',
    },
    {
      id: 3,
      productName: 'Mobile',
      productDetails: 'React Native | Flutter | iOS e Swift | Android',
      productPrice: 85,
      productImg:
        'https://i.pinimg.com/originals/b8/ae/b1/b8aeb1b09d6c6529cbcf66b414052d57.png',
    },
    {
      id: 4,
      productName: 'Data Science',
      productDetails: 'Ciência de dados | BI | Machine Learning',
      productPrice: 85,
      productImg: 'https://static.thenounproject.com/png/3239702-200.png',
    },
    {
      id: 5,
      productName: 'DevOps',
      productDetails: 'AWS | Azure | Docker | Segurança | Linux',
      productPrice: 85,
      productImg: 'https://cdn-icons-png.flaticon.com/512/5115/5115293.png',
    },
    {
      id: 6,
      productName: 'UX & Design',
      productDetails: 'Usabilidade e UX | Vídeo e Motion | 3D',
      productPrice: 85,
      productImg: 'https://cdn-icons-png.flaticon.com/512/5024/5024467.png',
    },
  ];
}
