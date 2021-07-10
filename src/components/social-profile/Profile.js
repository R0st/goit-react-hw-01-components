import React from 'react';
import user from './user.json';

    

const Profile = ({avatar, name, tag, location, stats}) => (
        <div class="profile">
        <div class="description">
            <img
                src={avatar}
                alt={name}
                width="200"
                class="avatar"
            />
            <p class="name">{name}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{user.stats.followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{user.stats.views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{user.stats.likes}</span>
            </li>
        </ul>
    </div>
    );

export default Profile;
