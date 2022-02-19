import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import { useToast } from '@chakra-ui/react';

import Post from '../../components/Post';

import { deletePostById, getPostById, getPosts } from '../../service/post';

import { Post as PostType } from '../../types';

interface PostDetailProps {
  post: PostType;
}

const PostDetail: NextPage<PostDetailProps> = ({ post }) => {
  const router = useRouter();
  const toast = useToast();

  const updatePostHandler = (id: number) => {
    router.push(`/edit-post/${id}`);
  };

  const deletePostHandler = async (id: number) => {
    const result = await deletePostById(id);

    if (!result) {
      toast({
        title: 'Could not delete the post :(',
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
      return;
    }

    router.push(`/`);
  };

  return (
    <>
      {!post && <DefaultErrorPage statusCode={404} />}
      {post && (
        <Post
          post={post}
          updatePostHandler={updatePostHandler}
          deletePostHandler={deletePostHandler}
        />
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const posts: PostType[] = await getPosts();
  const postsId: { params: { id: string } }[] = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths: postsId,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  let post: PostType | null = null;

  if (id) {
    post = await getPostById(+id);

    if (post) {
      post = {
        ...post,
        picture: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${post.picture}`,
      };
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default PostDetail;
