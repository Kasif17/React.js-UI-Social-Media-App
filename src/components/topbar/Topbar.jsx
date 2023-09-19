import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <span className="logo">KasifSocial</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
        <Search className="searchIcon"/>
        <input placeholder="Search for ..." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">
            HomePage
          </span>
          <span className="topbarLink">
            Timeline
          </span>
         
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
              </div>
            </div>
            <img src="/assests/profile/1.jpeg" alt="" className="topbarImg" />
      </div>

    </div>
  )
}
