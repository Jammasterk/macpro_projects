import React, {useContext} from "react"
import Profile from "./Profile"
import ProfileForm from "./ProfileForm"
import {UserContext} from "../context/UserProvider"

export default function ProfileList(props){
    const {addProfile, addPhoto} = props
    const {profiles, deleteProfile, updateProfile, deletePhoto} = useContext(UserContext)
    return(
        <>
            <ProfileForm
                submit={addProfile}
                btnText="Submit Profile"
            />
            {
                profiles.map(profile =>
                    <Profile
                        {...profile}
                        key={profile.name}
                        deleteProfile={deleteProfile}
                        updateProfile={updateProfile}
                        deletePhoto={deletePhoto}
                     />)}
        </>
    )
}