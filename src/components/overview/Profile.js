import ProfileImage from '../../img/profile_image.jpg'
import classes from './Profile.module.css'

const Profile = () => {
    return <img src={ProfileImage} className={classes.image} alt="Profile" />
}

export default Profile
