import React from 'react';
import './Friend.scss';

export const Friend = ({data}) => {
    const handleAddFriend = () =>{
        alert(`You just added @${data.username}`)
    }
    return (
        <>
            {/* {data && */}
                <div className='Friend'>
                    <div className='Friend-Content'>
    
                        <div className='Header'>
                            <div className='Header-Content'>
                                <div className='Cover'>
                                    {data.cover_picture &&
                                        <img src={data.cover_picture} alt=''/>
                                    }
                                </div>
                                    <div className='Profile'>
                                        {data.profile_picture &&
                                            <img src={data.profile_picture} alt='' />
                                        }

                                        {!data.profile_picture &&
                                            <div className='Icon-Bg'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path></svg>
                                            </div>
                                        }
                                    </div>
                            </div>
                        </div>
    
                        <div className='Body'>
                            <div className='Body-Content Flex-Center'>
                                <div className='Flex-Center Flex-Column'>
                                    <p>@{data.username}</p>
                                    <p>{data.first_name} {data.last_name}</p>
                                </div>
    
                                <div className='verification'>
    
                                </div>
                            </div>
                        </div>
    
                        <div className='Footer'>
                            <div className='Footer-Content Flex-Center Flex-Column'>
                                <div className='Add-Friend'>
                                    <button onClick={handleAddFriend}>Follow</button>
                                </div>
    
                                <div className='Message-Friend'>
                                    <button>Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* } */}
        </>
    )
}

