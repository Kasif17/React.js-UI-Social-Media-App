import "./share.css"
import {PermMedia,Label,LocationOn,EmojiEmotions
} from "@material-ui/icons"
export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assests/Profile/3.jpeg" alt="" className="shareProfileImg" />
                <input placeholder="what is your mind kasif" className="shareInput" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tags</span>
                    </div>
                    <div className="shareOption">
                        <LocationOn htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feeling</span>
                    </div>
                </div>
                <button className="shareButton"> share</button>
                
            </div>
        </div>
    </div>
  )
}
