import React, { useState , useEffect } from 'react';
import { Member } from '../../../../components/User/Profile/MemberBar/Member';
import { Feed } from '../../../../components/User/Home/Feed/Feed';
import './Account.scss';

const Account = ({userID}) => {
    const [MemberData,setMemberData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/posts')
            .then(results =>{
                if(!results.ok){
                    throw new Error(`error! result: ${results}`)
                }
                return results.json();
            })
            .then(data =>{
                setMemberData(data);
            })
            .catch(error =>{
                console.error(`error fetching member data ${error}`)
            })
    }, [])
    return (
        <main>
            <div className='Member-Content Main-Content FLex-Center Flex-Column'>
                <div className='Main-Header Flex-Center Primary-Padding'>
                    <Member userID={userID}/>
                </div>
                <div className='Main-Body Flex-Center Primary-Padding'>
                    {MemberData.map(feed => (
                        <Feed key={feed.id} feed={feed} />
                    ))}
                </div>
            </div>
        </main>
    )
}
export default Account;