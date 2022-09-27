import "./styles.css"
import ImagePost from '../../assets/images/post2.jpg'

export default function Post({post}){

    return (
        <div className="post-container">

            <div>
                <img className="post-image" src={post.image}/>
            </div>

            <div>
                <p className="post-date">{post.date}</p>
                <p className="post-title">{ post.title}</p>
                <p className="post-description">{ post.description}</p>
            </div>
            
         </div>
    )


}