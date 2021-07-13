import React from 'react';
import './Profile.css'
import PropTypes from 'prop-types'

const Profile = ({avatar, name, tag, location, stats}) => (
        <div className="Profile">
        <div className="Description">
            <img
                src={avatar}
                alt={name}
                width="200"
                className="Avatar"
            />
            <p className="Name">{name}</p>
            <p className="Tag">@{tag}</p>
            <p className="Location">{location}</p>
        </div>

        <ul className="Stats">
            <li>
                <span className="Label">Followers</span>
                <span className="Quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="Label">Views</span>
                <span className="Quantity">{stats.views}</span>
            </li>
            <li>
                <span className="Label">Likes</span>
                <span className="Quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
    );

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile;
