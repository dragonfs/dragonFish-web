import * as React from 'react';
import * as ReactDom from 'react-dom';
import './App.less';
import AppLayout from './Layout';


class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <AppLayout />
        )
    }
}

function start() {
    ReactDom.render(<App />, document.getElementById('root'))
}


export {start}

