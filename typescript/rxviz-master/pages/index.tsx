/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import RxViz from '../components/RxViz';
import Head from 'next/head';
import {
  // Classes base
  Observable, Subject,
  // operadores de criação de Observables
  fromEvent,
  interval,
  of,
  combineLatest,
  forkJoin,
  merge,
  concat,
  throwError,
} from 'rxjs';
import {
  // Operadores "pipeable", para serem utilizados dentro da função "pipe"
  map,
  mapTo,
  tap,
  mergeMap,
  mergeAll,
  switchMap,
  take,
  groupBy,
  delay,
  share,
  filter,
  debounceTime,
  throttleTime,
  retry,
  reduce,
  scan,
  withLatestFrom,
  switchMapTo,
  concatAll,
  startWith,
  distinctUntilChanged,
  exhaustMap,
  finalize,
  takeUntil,
  timeout,
  catchError,
  concatMap,
  bufferCount,
  skip
} from 'rxjs/operators';

let countClicks = 0;

// função para simular uma requisição com possibilidade de dar algum erro.
function simulateRequest(errorChance = 0.5, requestTime: number = 500, value = 'R') {
  console.log('request start')
  return of(value)
    .pipe(
      delay(requestTime),
      tap(() => {
        console.log('request end')
        if (Math.random() >= 1 - errorChance) {
          console.log('request error')
          throw new Error("Erro")
        }
      })
    )
}

// Função do componente do React
export default function Index() {

  const inputRef = useRef<HTMLInputElement>(null);

  // Abaixo estão alguns observables já configurados para podermos manipular com operadores.

  // Observable criado do zero com um producer
  const producer$ = new Observable<string>(subscriber => {
    // Essa arrow function é o nosso "Producer", pois ela vai emitir valores para cada subscriber por meio do next
    // por exemplo, emitindo o valor "P1" imediatamente, emitindo o valor "P2" após 2 segundos e completando.
    subscriber.next("P1")
    setTimeout(() => {
      // subscriber.next("P2")
      subscriber.error()
    }, 2000)
  })
  // Esse observable emite um valor incremental a cada segundo, começando em 0, 
  // criado a partir do operador estático "interval"
  const count$ = interval(1000);
  // Emite "C" sempre que a tela é clicada
  const click$ = new Subject<string>();
  // Emite uma tupla com as coordenadas [x, y] do mouse sempre que ele se mover
  const mouseMove$ = new Subject<[x: number, y: number]>();
  // Emite "MD" quando o mouse é pressionado
  const mouseDown$ = new Subject<"MD">()
  // Emite "MU" quando o mouse é levantado
  const mouseUp$ = new Subject<"MU">()
  // Emite o caractere digitado no campo de input
  const key$ = new Subject<string>()
  // Emite todo o texto do campo de input sempre que ele muda
  const input$ = new Subject<string>()


  useEffect(() => {
    // Abaixo adicionamos os listeners para emitir os eventos respectivos nos Subjects por meio do next()
    // Não é necessário alterar nada aqui nessa parte
    document.addEventListener('click', (e) => {
      countClicks++;
      click$.next(`C${countClicks}`)
    })
    document.addEventListener('mousemove', (e) => {
      mouseMove$.next([e.clientX, e.clientY])
    })
    document.addEventListener('mousedown', (e) => {
      mouseDown$.next('MD')
    })
    document.addEventListener('mouseup', (e) => {
      mouseUp$.next('MU')
    })
    inputRef.current?.addEventListener('keydown', (e) => {
      key$.next(e.key)
    })
    inputRef.current?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      input$.next(target.value)
    })
  })

  // De forma geral, os Observables "cold" não fazem nada sem terem um subscriber, 
  // feito ao chamar o método ".subscribe(observer)" e passando um objeto de Observer
  // com os callbacks de next/error/complete:
  const subscription = count$.subscribe({
    next: (value) => {
      console.log(`next count$: ${value}`)
    },
    error: (error) => {
      console.log(error)
    },
    complete: () => {
      console.log('complete')
    },
  })
  // podemos cancelar a subscription pelo método unsubscribe(),
  // porém, observables que completam ou tem erro já encerram automaticamente
  // e não é necessário fazer o unsubscribe manualmente (ex: chamadas http no Angular)
  subscription.unsubscribe()

  // Representa o tempo máximo representado na tela, ajuste para mais ou menos se preferir. Padrão de 30 segundos.
  const TIME = 30000

  //************************************************/
  //  SETAR ESSAS TRÊS CONSTANTES PARA REALIZAR OS TESTES
  const input1$ = count$
    .pipe(
      share()
    );
  const input2$ = click$
    .pipe(
      startWith("CI")
    );
  const output$ = count$
    .pipe(
      skip(3)
    );

  //Exer1
  const ex1$ = count$
    .pipe(
      mapTo(10)
    )

  //Exer2
  const ex2$ = count$
    .pipe(
      map(x => x * 10)
    )

  //Exer3
  const ex3$ = count$
    .pipe(
      scan((sum, x) => {
        return sum + x;
      }, 0)
    )

  //Exer4
  const ex4$ = click$
    .pipe(
      mergeMap(c => simulateRequest(0))
    )

  //Exer5
  const ex5$ = click$
    .pipe(
      switchMap(c => simulateRequest(0))
    )

  //Exer6
  const ex6$ = click$
    .pipe(
      exhaustMap(c => simulateRequest(0))
    )

  //Exer7
  const ex7$ = key$
    .pipe(
      filter(key => key === 'Enter')
    )
  //Exer8
  const ex8$ = input$
    .pipe(
      debounceTime(300),
    )
  //Exer9
  const ex9$ = ex8$
    .pipe(
      switchMap( //map
        pesquisa => simulateRequest(0),
      ),
    )


  //Exer10
  const ex10$ = key$
    .pipe(
      distinctUntilChanged(),
    )
  //Exer11
  const ex11$ = combineLatest([
    count$,
    click$,
    input$,
  ])
  //Exer12
  const ex12$ = count$
    .pipe(
      withLatestFrom(input$),
      map((tupla) => tupla[1])
    )
  //desconstruir
  const ex12$ = count$
    .pipe(
      withLatestFrom(input$),
      map(([count, input]) => input)
    )

  //Exer13
  const ex13$ = mouseDown$
    .pipe(
      switchMap(() => mouseMove$
        .pipe(
          takeUntil(mouseUp$)
        )
      ),

    )
  // Array de observables que será renderizado na tela, já vai ser feita a subscription em cada um deles pelo componente de renderização.
  // Comente e descomente as linhas para facilitar a sua visualização
  const observables: Array<[name: string, observable: Observable<any>]> = [
    //["count$", count$],
    // ['ex1$', ex1$ ],
    // ['ex2$', ex2$ ],
    //['ex3$', ex3$ ],

    //["producer$", producer$],
    ["mouseMove$", mouseMove$],
    ["mouseDown$", mouseDown$],
    ["mouseUp$", mouseUp$],
    // ["click$", click$],
    //['ex4$', ex4$ ],
    //['ex5$', ex5$ ],
    //['ex6$', ex6$ ],
    // ["key$", key$],
    //['ex10$', ex10$ ],
    // ['ex7$', ex7$ ],

    // ["input$", input$],
    // ['ex8$', ex8$ ],
    // ['ex9$', ex9$ ],
    //['ex11$', ex11$ ],
    // ['ex12$', ex12$ ],
    ['ex13$', ex13$],
    // ["input1$", input1$],
    // ["input2$", input2$],
    // ["output$", output$],
  ]
  /************************************************/

  return (

    <div className="container" style={{ margin: "15px" }}>
      <Head>
        <title>RxViz - Devschool</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono|Montserrat:700"
          rel="stylesheet"
        />
        <style>{`body { margin: 0; font-family: Roboto }`}</style>
      </Head>
      <span>Input de texto: </span><input id='input' ref={inputRef} />
      {observables.map(([name, obs$]) => <div key={name}>
        <div><strong>{name}</strong></div>
        <RxViz
          timeWindow={TIME}
          observable$={obs$}
        />
      </div>
      )}
    </div>
  )
}

