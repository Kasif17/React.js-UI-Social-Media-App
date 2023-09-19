import "./right.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
            <img src="/assests/gift.png" alt="" className="birthdayImg" />
            <spna className="birthdayText"><b>Anas</b> and <b>3 other Friends</b> have a birthday today</spna>
          </div>
          <img className="rightbarAd" src="/assests/Ad.png" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
          {Users.map((u)=>(
          <Online key={u.id} user={u}/>
          ))}
          </ul>
      </>
    )
  }
  const ProfileRightbar =()=>{
    return (
      <>
      <h4 className="rightbarTitle">User Informatio</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City</span>
          <span className="rightbarInfoValue">Lucknow</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From</span>
          <span className="rightbarInfoValue">Kalyanpur</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assests/profile/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarUserFollowingName">Badal Choudhary</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/profile/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarUserFollowingName">Badal Choudhary</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/profile/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarUserFollowingName">Badal Choudhary</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/profile/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarUserFollowingName">Badal Choudhary</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/profile/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarUserFollowingName">Badal Choudhary</span>
        </div>
      </div>
      </>
      )
  }
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ?<ProfileRightbar/> : <HomeRightbar/>}
          </div>   
    </div>
  )
}
