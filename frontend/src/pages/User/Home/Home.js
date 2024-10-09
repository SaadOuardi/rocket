import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../components/Authentication/UserContext/UserProvider';
import { Sidebar } from '../../../components/User/Main/Sidebar/Sidebar';
import { Navbar } from '../../../components/User/Main/Navbar/Navbar';
import { Feed } from '../../../components/User/Home/Feed/Feed';
import { Post } from '../../../components/User/Home/Post/Post';
import { Subscribe } from '../../../components/User/Home/Subscribe/Subscribe';
import { Follow } from '../../../components/User/Home/Follow/Follow';
import { Trends } from '../../../components/User/Home/Trends/Trends';

import './Home.scss';

const Home = () => {
    const { user } = useContext(UserContext);
    const [FeedData, setFeedData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setFeedData(data);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
    }, []);
    const handleDeletePost = (postId) => {
        fetch(`http://localhost:5000/api/posts/${postId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setFeedData(FeedData.filter(feed => feed.id !== postId));
        })
        .catch(error => {
            console.error('Error deleting post:', error);
        });
    };
    return (
        <main>
            <div className='side-0'>
                <Navbar/>
            </div>
            <div className='side-1 sticky__container Primary-Padding'>
                <Sidebar/>
            </div>
            <div className='side-2'>
                <div>
                    <Post userID={user.userId} />
                </div>
                {!FeedData >= 0? (
                    FeedData.map(feed => 
                        (
                            <Feed 
                                key={feed.id} 
                                feed={feed} 
                                onDelete={handleDeletePost} 
                                userId={user.userId} 
                            />
                        )
                    )
                ):(
                    <h1>No post</h1>
                )}
            </div>

            <div className='side-3 column-gap__container sticky__container'>
                <Subscribe/>
                <Follow/>
                <Trends/>
            </div>
        </main>
    );
};

export default Home;