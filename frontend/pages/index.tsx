import type { NextPage } from 'next';

import PostList from '../components/PostList';

import { getPosts } from '../service/post';

import { Post } from '../types';

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return <PostList posts={posts} />;
};

export const getStaticProps = async () => {
  const posts: Post[] = await getPosts();

  const updatedPosts = posts.map((post) => {
    return {
      ...post,
      picture: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${post.picture}`,
    };
  });

  return {
    props: {
      posts: updatedPosts,
    },
    revalidate: 1,
  };
};

export default Home;
