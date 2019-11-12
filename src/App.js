import React from 'react';
import ReactDom from 'react-dom';

function test() {
    test.type = 'dog'
}

@test
class Dog {

    eat() {
        console.log('dog eat');
    }
}



class App extends React.Component{

    constructor() {
        super();

        this.dog = new Dog();

        [1, 2, 3].map((n) => n + 1);
        
        console.log(this.dog.eat())
    }


    render() {
        return(
            <div>
                33233
            </div>
        )
    }
}

function start() {
    ReactDom.render(<App></App>, document.getElementById('root'))
}


export {start}

