import {
  Button,
  ButtonGroup,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
  updatePostHandler: (id: number) => void;
  deletePostHandler: (id: number) => void;
}

const Post = ({ post, updatePostHandler, deletePostHandler }: PostProps) => {
  return (
    <Stack spacing={6}>
      <Heading as={'h2'} size={'xl'}>
        {post.title}
      </Heading>
      <ButtonGroup variant={'outline'} spacing={3}>
        <Button
          size={'xs'}
          variant={'outline'}
          colorScheme={'purple'}
          onClick={() => updatePostHandler(post.id)}
        >
          Update
        </Button>
        <Button
          size={'xs'}
          variant={'outline'}
          colorScheme={'red'}
          onClick={() => deletePostHandler(post.id)}
        >
          Delete
        </Button>
      </ButtonGroup>
      <Image src={post.picture} alt={post.title} />
      <Text>{post.content}</Text>
    </Stack>
  );
};

export default Post;
