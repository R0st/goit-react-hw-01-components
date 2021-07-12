
import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendListItem = props => {
  const StatusClass = [
    style.status,
    props.isOnline ? style.online : style.offline,
  ];
  return (
    <>
      <span className={StatusClass.join(' ')}></span>
      <img
        className="avatar"
        src={props.avatar}
        alt={props.name}
        width="48"
      />
      <p className={style.name}>{props.name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
