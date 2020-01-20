import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import Header from './components/UI/Header';
import Guide from './components/Guide/Guide';
import About from './components/Guide/About';
import Faq from './components/Guide/Faq';
import HowTo from './components/Guide/HowTo';
import Participate from './components/Guide/Participate';
import Program from './components/Program/Program';
import ElysiumTemple from './components/Program/ElysiumTemple';
import Larva from './components/Program/Larva';
import CinemaAndTheater from './components/Program/CinemaAndTheater';
import Workshops from './components/Program/Workshops';
import RayOfHope from './components/Pages/RayOfHope';
import News from './components/Pages/News';
import Gallery from './components/Pages/Gallery';
import Tickets from './components/Pages/Tickets';
import Contact from './components/Pages/Contact';


import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router history={createBrowserHistory()}>
    <Switch>
        <Route path='/news' render={() => <Header><News /></Header>} />
        <Route exact path='/guide' render={() => <Header><Guide /></Header>} />
        <Route path='/guide/about' render={() => <Header><About /></Header>} />
        <Route path='/guide/faq' render={() => <Header><Faq /></Header>} />
        <Route path='/guide/how-to' render={() => <Header><HowTo /></Header>} />
        <Route path='/guide/participate' render={() => <Header><Participate /></Header>} />
        <Route exact path='/program' render={() => <Header><Program /></Header>} />
        <Route path='/program/elysiumTemple' render={() => <Header><ElysiumTemple /></Header>} />
        <Route path='/program/larva' render={() => <Header><Larva /></Header>} />
        <Route path='/program/cinema-and-theater' render={() => <Header><CinemaAndTheater /></Header>} />
        <Route path='/program/workshops' render={() => <Header><Workshops /></Header>} />

        <Route path='/ray-of-hope' render={() => <Header><RayOfHope /></Header>} />
        <Route path='/gallery' render={() => <Header><Gallery /></Header>} />
        <Route path='/tickets' render={() => <Header><Tickets /></Header>} />
        <Route path='/contact' render={() => <Header><Contact /></Header>} />

        <Route exact path='/' render={() => <App />} />
    </Switch>
</Router>, document.getElementById('root'));


serviceWorker.unregister();
