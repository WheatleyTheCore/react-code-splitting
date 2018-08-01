import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
const Settings = () => {
        return(
            <Router>
                <div>
                    <Link to='/settings/editSettings'>Click here to do settings related things</Link>
                    <hr />
                    <Route path='/settings/editSettings' component={() => <h2>We dont actually have any settings to change</h2>} />
                    </div>
            </Router>
        );
    }
export default Settings;