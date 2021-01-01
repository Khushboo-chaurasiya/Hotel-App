import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HotelPin from "./Components/HotelLoginPIN";
import HotelHome from "./Components/HotelHome";
import HotelCard from "./Components/HotelCard";

function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={HotelPin} />
                <Route path="/hotelHome" exact strict component={HotelHome} />
                <Route path="/hotelCard" exact strict component={HotelCard} />
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
