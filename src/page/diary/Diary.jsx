import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import DiaryList from './DiaryList';
import DiaryPost from './DiaryPost';
import DiaryPosting from './DiaryPosting';

const Diary = ({match}) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path={`${match.path}`} exact component={DiaryList} />
                <Route path={`${match.path}/post`} component={DiaryPost} />
                <Route path={`${match.path}/posting`} component={DiaryPosting} />
            </Switch>
        </Router>
    );
}

export default Diary;