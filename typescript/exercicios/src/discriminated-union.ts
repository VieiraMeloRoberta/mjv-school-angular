type Square = {
    type: 'square';
    width: number;
}

type Circle = {
    type: 'circle';
    radius: number;
}


// união com discriminante na propriedade "type"
type Shape = Square | Circle;

function calculateArea(shape: Shape) {
    // afunilamento feito por meio do discriminante
    switch (shape.type) {
        case 'circle': {
            return shape.radius * Math.PI * 2
        }
        case 'square': {
            return shape.width * shape.width;
        }
    }
}








type BasicState = {
    people?: string[]
    errorMessage?: string
}

type SuccessState = {
    success: true;
    people: string[]
}

type FailState = {
    success: false;
    errorMessage: string;
}

type RequestState = SuccessState | FailState

function checkResult(requestState: RequestState) {
    if (requestState.success) {
        console.log(requestState.people)
    } else {
        console.log(requestState.errorMessage)
    }
}

