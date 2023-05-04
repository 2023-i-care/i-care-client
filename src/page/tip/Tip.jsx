import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TipList from './TipList';
import TipPost from './TipPost';
import TipPosting from './TipPosting';

const Tip = ({match}) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path={`${match.path}`} exact component={TipList} />
                <Route path={`${match.path}/post`} component={TipPost} />
                <Route path={`${match.path}/posting`} component={TipPosting} />
            </Switch>
        </Router>
    );
}

export default Tip;