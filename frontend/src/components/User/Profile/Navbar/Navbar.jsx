import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <>
            <div className='Profile-Navbar'>
                <a href="/profile/posts">
                    <div className='Container-Bg'>
                        Posts
                    </div>
                </a>
                <a href="/profile/about">
                    <div className='Container-Bg'>
                        About
                    </div>
                </a>
                <a href="/profile/friends">
                    <div className='Container-Bg'>
                        Friends
                    </div>
                </a>
                <a href="/profile/photos">
                    <div className='Container-Bg'>
                        Photos
                    </div>
                </a>
                <a href="/profile/videos">
                    <div className='Container-Bg'>
                        Videos
                    </div>
                </a>
                <a href="/profile/reels">
                    <div className='Container-Bg'>
                        Reels
                    </div>
                </a>
                <a href="/profile/groups">
                    <div className='Container-Bg'>
                        Groups
                    </div>
                </a>
            </div>
        </>
    )
}

