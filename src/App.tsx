import * as React from 'react';
import * as ReactDom from 'react-dom';
import './App.less';
import AppLayout from './Layout';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Link
} from "react-router-dom";

import Loadable from 'react-loadable';

console.log(Loadable);

const Home = Loadable({
  loader: () => import('./home/Home'),
  loading: () => <div>loading</div>,
})

const Contact = Loadable({
  loader: () => import("./contact/Contact"),
  loading: () => <div>loading</div>
});

function NoMatch() {
    let location = useLocation();
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
}


class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <Router>
                hello, drgon
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                    <Link to="/users">Users</Link>
                    </li>
                </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

function start() {
    ReactDom.render(<AppLayout />, document.getElementById('root'))
}


export {start}

