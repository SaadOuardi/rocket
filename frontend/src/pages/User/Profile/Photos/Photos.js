import React from 'react';
import { Member } from '../../../../components/User/Profile/MemberBar/Member';


const Photos = ({userID}) => {
    return (
        <main>
            <div className='Main-Content FLex-Center Flex-Column'>
                <div className='Main-Header Flex-Center Primary-Padding'>
                    <Member userID={userID}/>
                </div>

                <div className='Main-Body Primary-Padding'>
                    <h1>Photos</h1>
                    <h1>Photos</h1>
                    <h1>Photos</h1>
                    <h1>Photos</h1>
                    <h1>Photos</h1>
                    <h1>Photos</h1>
                    <h1>Photos</h1>
                    <h1>Photos</h1>
                    <h1>Photos</h1>
                    <h1>Photos</h1>
                </div>
            </div>
        </main>
    )
}

export default Photos;
