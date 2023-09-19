import "./post.css"
import {MoreVert} from "@material-ui/icons"
import {Users} from "../../dummyData"
import { useState } from "react"
export default function Post({post}) {
  const [like,setLike] =useState(post.like)
  const [isLiked,setIsLiked] =useState(false)
  const likeHandler = ()=>{
    setLike(isLiked ? like-1 :like+1 )
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopleft">
                <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
                <MoreVert/>
              </div>
            </div>
            <div className="postCenter">
              <snap className="postText">{post?.desc}</snap>
              <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
              <img src="/assests/like.png" alt="" onClick={likeHandler} className="likeIcon" />
                <img src="/assests/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
                <span className="postlikeCounter">{like} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postlikeComment">{post.comment} people comments</span>
              </div>
            </div>
        </div>
    </div>
  )
}
