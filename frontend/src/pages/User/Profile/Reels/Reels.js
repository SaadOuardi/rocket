import React from 'react';
import { Member } from '../../../../components/User/Profile/MemberBar/Member';


const Reels = ({userID}) => {
    return (
        <main>
            <div className='Main-Content FLex-Center Flex-Column'>
                <div className='Main-Header Flex-Center Primary-Padding'>
                    <Member userID={userID}/>
                </div>

                <div className='Main-Body Primary-Padding'>
                    <h1>Reels</h1>
                    <h1>Reels</h1>
                    <h1>Reels</h1>
                    <h1>Reels</h1>
                    <h1>Reels</h1>
                    <h1>Reels</h1>
                    <h1>Reels</h1>
                    <h1>Reels</h1>
                    <h1>Reels</h1>
                    <h1>Reels</h1>
                </div>
            </div>
        </main>
    )
}

export default Reels;