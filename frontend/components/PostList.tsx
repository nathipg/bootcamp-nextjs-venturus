import { Alert, AlertIcon, Flex } from '@chakra-ui/react';

import PostListItem from './PostListItem';

import { Post } from '../types';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  const listPosts = () => {
    if (posts.length === 0) {
      return (
        <Alert status={'info'}>
          <AlertIcon />
          No posts found
        </Alert>
      );
    }

    return posts.map((post) => <PostListItem key={post.id} post={post} />);
  };

  return (
    <Flex data-testid="PostList" direction={'column'} align={'center'}>
      {listPosts()}
    </Flex>
  );
};

export default PostList;
