import { useRouter } from 'next/router';
import { Box, Image } from '@chakra-ui/react';

import { Post } from '../types';

interface PostListItemProps {
  post: Post;
}

const PostListItem = ({ post }: PostListItemProps) => {
  const router = useRouter();

  const goToPostDetailsHandler = () => {
    router.push(`/post/${post.id}`);
  };

  return (
    <Box
      data-testid="PostListItem"
      maxW={'100%'}
      minW={'100%'}
      borderWidth={'1px'}
      borderRadius={'lg'}
      marginBlock={2}
      overflow={'hidden'}
      onClick={goToPostDetailsHandler}
    >
      <Image minW={'100%'} src={post.picture} alt={post.title} />

      <Box p={6}>
        <Box display={'flex'} alignItems={'baseline'}>
          <Box
            color={'gray.500'}
            fontWeight={'semibold'}
            letterSpacing={'wide'}
            fontSize={'xs'}
            textTransform={'uppercase'}
          >
            {post.createdAt}
          </Box>
        </Box>

        <Box
          mt={1}
          fontWeight={'semibold'}
          as={'h4'}
          lineHeight={'tight'}
          isTruncated
        >
          {post.title}
        </Box>
      </Box>
    </Box>
  );
};

export default PostListItem;
