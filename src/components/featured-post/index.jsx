import "./styles.css"
import AuthorBadge from "../author-badge/index"
import ImagePost from '../../assets/images/post2.jpg'

export default function FeaturedPost({ post }){

    return (
        <div className="featured-post-container">

            <div>
                <img className="featured-post-image" src={post.image}/>
            </div>

            <div>
                <p className="featured-post-date">{post.date}</p>
                <h2 className="featured-post-title"> {post.title}</h2>
                <p className="featured-post-description"> { post.description} </p>
                <AuthorBadge />
            </div>
            
         </div>
    )


}