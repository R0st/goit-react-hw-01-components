import React from 'react';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';

// import FriendListItem from './components/friend-list/FriendListItem';
import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';

import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';

const App = () => {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
                
            />

            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friends} />,
            <TransactionHistory items={transactions} />;
            

        </div>
    );
};

export default App;