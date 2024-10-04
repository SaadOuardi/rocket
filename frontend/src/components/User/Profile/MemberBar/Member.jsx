import React , { useState, useEffect } from 'react';
import { Cover } from '../../../../components/User/Profile/Account/Cover/Cover';
import { Profile } from '../../../../components/User/Profile/Account/Profile/Profile';
import { User } from '../../../../components/User/Profile/Account/User/User';
import { Bio } from '../../../../components/User/Profile/Account/Bio/Bio';
import { Navbar } from '../../../../components/User/Profile/Navbar/Navbar';
import './Member.scss';

export const Member = ({userID}) => {

    const [Member,setMember] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/user')
            .then(response =>{
                if(!response.ok){
                    throw new Error(`error! status: ${response.status}`)
                }
                return response.json();
            })
            .then(data=>{
                setMember(data);
            })
            .catch(error =>{
                console.error(`error fetching members ${error}`)
            })

    }, [])

    return (
        <>
            {Member.length > 0 &&
                <>
                    <div className='Member'>
                        <div className='Member-Content'>
                            <div className='Header'>
                                <div className='Profile-Cover'>
                                    <Cover UserCover={Member[userID - 1].cover_picture}/>
                                    <div className='Profile-Pictire'>
                                        <Profile UserProfile={Member[userID - 1].profile_picture}/>
                                    </div>
                                </div>
                            </div>
                            <div className='Body'>
                                <User User={`${Member[userID - 1].first_name} ${Member[userID - 1].last_name}`} UserUsername={Member[userID - 1].username}/>
                                <Bio Bio={Member[userID - 1].bio}/>
                            </div>
                            <div className='Footer'>
                                <div className='Footer-Content'>
                                    <Navbar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

