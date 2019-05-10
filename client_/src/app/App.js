import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import UI from './ui';
import Routing from './routing';


class App extends React.Component {
    render() {
        return (
            <Router>
                <UI>
                    <Route path="/react-dj" component={Routing} />
                </UI>
            </Router>
        )
    }
}

export default App;