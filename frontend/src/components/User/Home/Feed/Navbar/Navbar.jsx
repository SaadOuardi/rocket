import React from 'react';
import { Like } from './Like/Like';
import { Comment } from './Comment/Comment';
import { Repost } from './Repost/Repost';
import { View } from './View/View';
import { Save } from './Save/Save';
import { Share } from './Share/Share';
import './Navbar.scss';

export const Navbar = ({ likeCount, postId, userId }) => {
    return (
        <div className="Feed-Navbar">
            <div className="navbar Feed-Navbar__container">
                <Like likeCount={likeCount} postId={postId} userId={userId} />
                <Comment />
                <Repost />
                <View />
            </div>
            <div className="Feed-Navbar__container">
                <Save />
                <Share />
            </div>
        </div>
    );
};