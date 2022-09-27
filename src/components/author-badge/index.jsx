import "./styles.css"
import ProfileImage from "../../assets/images/profile.jpg"

export default function Author() {
    return (
        <div className="author-badge-container">
            <img className="author-badge-image" src={ProfileImage} />
            <div>
                <h3>Ezequiel M</h3>
                <p>Teach Lead</p>
            </div>
        </div>
    )
}