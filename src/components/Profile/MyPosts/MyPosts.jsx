import React from 'react';
import AddPostForm from './AddPostForm';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
	const { addPost, postsData } = props;
	let postsElements = postsData.map((post) => (
		<Post message={post.message} likes={post.likesCount} key={post.id} />
	));

	return (
		<div className={styles['posts-block']}>
			<h3>My Posts</h3>
			<div>
				<AddPostForm addPost={addPost} />
			</div>
			<div className={styles.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
