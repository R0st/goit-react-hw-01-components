import React from 'react';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json'

const App = () => {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                followers = {user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
                
            />

            {/* <Statistics /> */}
            {/* <FriendList /> */}
            {/* <TransactionHistory /> */}
            

        </div>
    );
};

export default App;