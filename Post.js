import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faComment } from '@fortawesome/free-solid-svg-icons';

const PostContainer = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

const Username = styled.div`
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Caption = styled.div`
  padding: 10px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  color: ${props => (props.liked ? 'red' : 'black')};
  font-size: 20px;
  cursor: pointer;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;



function Post({ username, avatar, imageUrl, caption,  onDelete, onAddComment, currentUser }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes(prevLikes => (liked ? prevLikes - 1 : prevLikes + 1));
    setLiked(!liked);
  };

  
  const canDeletePost = currentUser && (currentUser.role === 'admin' || currentUser.username === username);
  const canAddPost = currentUser && (currentUser.role === 'admin' || currentUser.role === 'moderator');

  return (
    <PostContainer name="post">
      <Header>
        <Avatar src={avatar} alt={`${username}'s avatar`} />
        <Username>{username}</Username>
      </Header>
      <Image src={imageUrl} alt="Post image" />
      <Caption>{caption}</Caption>
      <ActionContainer>
        <LikeButton onClick={handleLike} liked={liked}>
          {liked ? '❤️' : '🤍'} {likes}
        </LikeButton>
        {canDeletePost && (
          <IconButton onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </IconButton>
        )}
        
      </ActionContainer>
      
    </PostContainer>
  );
}

export default Post;
