import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { More } from './More/More';
import { Alert } from '../../../../lightboxes/Alert/Alert';
import './Feed.scss';

export const Feed = ({ feed, onDelete, userId }) => {
    const [likeCount, setLikeCount] = useState(0);
    const [postHide, setPostHide] = useState(true);
    const [Error, setError] = useState(false);
    const IconError = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path></svg>
    );
    useEffect(() => {
        const fetchLikeCount = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/posts/${feed.id}/likes`);
                if (!response.ok) throw new Error('Failed to fetch like count');
                const data = await response.json();
                setLikeCount(data.likeCount);
            } catch (error) {
                console.error('Error fetching like count:', error);
            }
        };
        fetchLikeCount();
    }, [feed.id]);
    const handlePostDelete = () => {
        setError(!Error);
        setTimeout(() => {
            setError(false);
            onDelete(feed.id);
        }, 2000);
    };
    const handlePostHide = () => {
        setPostHide(!postHide)
    };

    return(
        <>
            {postHide && feed &&
                <div className="Feed container">
                    <div className='Feed-Content'>
                        <div className='Header'>
                            <div className='Header-Content Flex-Row Flex-Between'>
                                <div className='User-Data Flex-Center'>
                                    <a href={`/profile/${feed.username}`}>
                                        <div className="User-Profile">
                                            <img src={feed.profile_picture} alt={feed.username} className="image"/>
                                        </div>
                                    </a>
                                    <div className='Flex-Center Flex-Column Flex-Start'>
                                        <div className='Flex-Center'>
                                            <div className='Flex-Center'>
                                                <a href={`/profile/${feed.username}`}>
                                                    <div className='User-Name'>
                                                        <h5>{feed.first_name} {feed.last_name}</h5>
                                                    </div>
                                                </a>
                                                <div className="Verification Flex-Center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/></svg>
                                                </div>
                                            </div>
                                            <span>|</span>
                                            <div className='User-Username'>
                                                <h6>@{feed.username}</h6>
                                            </div>
                                        </div>

                                        <div>
                                            <h6 className="post-date">{new Date(feed.created_at).toLocaleDateString()}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='Options Flex-Center'>
                                    <More handleHidePost={handlePostHide}/>
                                    <div className='Icon-Bg' title='Delete Post' onClick={handlePostDelete}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Body'>
                            <div className='Body-Content Flex-Column'>
                                {feed.content &&
                                    <div className='Feed-Status'>
                                        <h5 className="Status__Post">{feed.content}</h5>
                                    </div>
                                }

                                {feed.image_url &&
                                    <div className='Feed-Photo-Video' id='dataPost'>
                                        <img src={feed.image_url} alt="" className="Image__Post" id='imagePost'/>
                                    </div>
                                }

                            </div>
                        </div>
                        <div className='Footer'>
                            <Navbar likeCount={likeCount} postId={feed.id} userId={userId}/>
                        </div>
                    </div>
                </div>
            }

            {Error && 
                <Alert Icon={IconError} Message='Post deleted successfully' BgColor='red'/>
            }
        </>
    )
};