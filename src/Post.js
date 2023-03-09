import { Avatar } from '@mui/material'
import React, { forwardRef, useEffect, useState } from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import { db } from './firebase'

const Post = forwardRef(({ id, name, description, message, photoUrl }, ref) => {
  const [likes, setLikes] = useState(0)

  // Listen to changes in likes count in Firebase
  useEffect(() => {
    const postRef = db.collection('posts').doc(id)
    const unsubscribe = postRef.onSnapshot((doc) => {
      const data = doc.data()
      setLikes(data.likes || 0)
    })
    return unsubscribe
  }, [id])

  const handleLike = () => {
    // Increment the likes count in Firebase
    const postRef = db.collection('posts').doc(id)
    postRef.update({ likes: likes + 1 })
      .then(() => console.log('Likes updated successfully'))
      .catch((error) => console.error('Error updating likes:', error))
  }

  return (
    <div ref={ref} className='post'>
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <p className="likes">{likes} likes</p>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <div onClick={handleLike}>
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        </div>
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  )
})

export default Post
