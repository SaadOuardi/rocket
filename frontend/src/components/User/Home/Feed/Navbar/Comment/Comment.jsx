import React, { useState } from 'react';
import Profile from '../../../../../../assets/images/Profile/ElonMusk.webp';
import Profile1 from '../../../../../../assets/images/Profile/Ninja.jpg';
import Profile2 from '../../../../../../assets/images/Profile/Tfue.png';
import './Comment.scss';

export const Comment = ({data}) => {
    const [open, setOpen] = useState(false);
    const handleOpenComment = () =>{
        setOpen(!open);
    }
    return (
        <>
            <li className='Comment' title='Comment'>
                <div className='Icon-Bg' onClick={handleOpenComment}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242Z"></path></svg>
                </div>
                {data &&
                    <h3>{data}</h3>
                }
            </li>
            {open && 
                <>
                    <div className='Comment-List container'>
                        <div className='Comment-List-Content'>
                            <div className='Header'>
                                <div className='Header-Contnet Flex-Center'>
                                    <div className='Flex-Center'>
                                        <div className='User-Profile Flex-Center'>
                                            <img src={Profile} alt="" />
                                        </div>
                                        <div className='Flex-Center'>
                                            <div className='Flex-Center'>
                                                <h1>Elon Musk</h1>
                                            </div>
                                            <div className="Verification Flex-Center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <button style={{backgroundColor:'red'}} onClick={handleOpenComment}>x</button>
                                </div>
                            </div>
                            <hr/>
                            <div className='Body'>
                                <div className='Body-Content Comments-List Flex-Center'>
                                    <UserComment Profile={Profile} Username='Elen Musk' Comment='Soon!' Time='14h'/>
                                    <UserComment Profile={Profile1} Username='Ninja' Comment='Super Curious to see what is next!' Time='14h'/>
                                    <UserComment Profile={Profile2} Username='Tfue' Comment='Exited! it is super nice to see you glowing and taking us to the next world!' Time='14h'/>
                                </div>
                            </div>
                            <div className='Footer'>
                                <div className="Footer-Content">
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
const UserComment = ({Profile, Username, Comment, Time}) => {
    const [reply, setReply] = useState(false);
    const handleReply = () =>{
        setReply(!reply);
    }
    return (
        <>
            <div className='Comment-Content Flex-Center'>
                <div className='Flex-Center Flex-Start'>
                    <div className='Flex-Center'>
                        <div className='User-Profile Flex-Center'>
                            <img src={Profile} alt="" />
                        </div>
                    </div>
                    {false &&
                        <div title='Options' className='Icon-Bg'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                        </div>
                    }
                </div>
                <div className='Comment-Container container'>
                    <div className='UserName UserVerif Flex-Center'>
                        <div className='Flex-Center'>
                            <p>{Username}</p>
                        </div>
                        <div className="Verification Flex-Center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/></svg>
                        </div>
                    </div>
                    <p>{Comment}</p>
                </div>
            </div>
            <div className='Flex-Center'>
                <p>{Time}</p>
                <p>Like</p>
                <p onClick={handleReply}>Reply</p>
            </div>
            {reply &&
                <UserReply Profile={Profile} Username={Username}/>
            }
        </>
    )
}
const UserReply = ({Profile, Username}) => {
    const [hide, setHide] = useState(true);
    const handleHide = () =>{
        setHide(!hide);
    }
    return (
        <>
        {hide &&
            <div className='UserReply Flex-Center'>
                <div className='User-Profile Flex-Center'>
                    <img src={Profile} alt="" />
                </div>

                <div>
                    <input type="text" placeholder={`Reply to @${Username}`} />
                </div>
                <button onClick={handleHide}>x</button>
            </div>
        }
        </>
    )
}