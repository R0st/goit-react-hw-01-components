import React from 'react';
import style from './Profile.css'
import PropTypes from 'prop-types'

const Profile = ({avatar, name, tag, location, stats}) => (
        <div className={style.profile}>
        <div className={style.description}>
            <img
                src={avatar}
                alt={name}
                width="200"
                className={style.avatar}
            />
            <p className={style.name}>{name}</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.location}>{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className={style.label}>Followers</span>
                <span className={style.quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    );

// Profile.defaultProps = {
//     url: defaultImage,
// };

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile;
