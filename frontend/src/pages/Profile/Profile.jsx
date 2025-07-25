import "./Profile.css"

import { uploads } from "../../utils/config"

// components
import Message from "../../components/Message"
import { Link } from "react-router-dom"
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs"

// hooks
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserDetails } from "../../slices/userSlice"

// redux

const Profile = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { user, loading } = useSelector((state) => state.user)
    const { user: userAuth } = useSelector((state) => state.auth)

    // New form and edit form refs
    const newPhotoForm = useRef()
    const editPhotoForm = useRef()

    // load user data
    useEffect(() => {
        dispatch(getUserDetails(id))
    }, [dispatch, id])

    if (loading) {
        return <p>Loading...</p>
    }

    const submitHandle = (e) => {
        e.preventDefault()
    }

    return (
        <div id="profile">
            <div className="profile-header">
                {user.profileImage && (
                    <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
                )}
                <div className="profile-description">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                </div>
            </div>

            {id === userAuth._id && (
                <>
                    <div className="new-photo" ref={newPhotoForm}>
                        <h3>Share a moment...</h3>
                        <form onSubmit={submitHandle}>
                            <label>
                                <span>Title for the photo:</span>
                                <input type="text" placeholder="Insert a title" />
                            </label>

                            <label>
                                <span>Image:</span>
                                <input type="file" />
                            </label>

                            <input type="submit" value="Post" />
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}

export default Profile