import Post from '../post/index'
import "./styles.css"

export default function PostList({ posts }){
    return (
        <div className='post-list-container'>
          {
            posts && posts.map(post =>{
                return <Post post={post} />;
            } )
          }
        </div>
    )
}