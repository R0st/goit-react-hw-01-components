import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import style from './FriendList.module.css'

const FriendList = ({friends})=> (
    <ul className={style.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} className={style.item}>
               
                <FriendListItem
                   isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
            </li>
        ))} 
    </ul>
)
    
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,  
    })).isRequired,   
}

export default FriendList;
