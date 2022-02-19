import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

import PostForm from '../components/PostForm';

import { addPost } from '../service/post';

const AddPost: NextPage = () => {
  const toast = useToast();
  const router = useRouter();

  const addPostHandler = async (postData: FormData) => {
    const post = await addPost(postData);

    if (!post) {
      toast({
        title: 'Could not add the post :(',
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
      return;
    }

    router.push(`/post/${post.id}`);
  };

  return <PostForm postHandler={addPostHandler} />;
};

export default AddPost;
