import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import CommunityList from './CommunityList';
import CommunityPost from './CommunityPost';
import CommunityPosting from './CommunityPosting';

const Community = ({match}) => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path={`${match.path}`} exact component={CommunityList} />
                <Route path={`${match.path}/post`} component={CommunityPost} />
                <Route path={`${match.path}/posting`} component={CommunityPosting} />
            </Switch>
        </Router>
    );
};

export default Community;