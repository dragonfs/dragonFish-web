import * as React from 'react';
import * as ReactDom from 'react-dom';
import './App.css';

function test(test?: any): void {
    test.type = 'dog'
}

@test
class Dog {

    eat() {
        console.log('dog eat');
    }
}



class App extends React.Component<any, any>{

    dog: Dog;

    constructor(props: any) {
        super(props);

        this.dog = new Dog();

        [1, 2, 3].map((n) => n + 1);
        
        console.log(this.dog.eat())
    }


    render() {
        return(
            <div>
                hello, drgon333
            </div>
        )
    }
}

function start() {
    ReactDom.render(<App></App>, document.getElementById('root'))
}


export {start}

