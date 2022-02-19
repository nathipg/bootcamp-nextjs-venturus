import { FormEvent, useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';

import { Post } from '../types';

interface PostFormProps {
  postHandler: (formData: FormData) => void;
  post?: Post;
}

const PostForm = ({ postHandler, post }: PostFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [picture, setPicture] = useState<File | null>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    if (picture) {
      formData.append('picture', picture);
    }

    formData.append('title', title);
    formData.append('content', content);

    postHandler(formData);
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  return (
    <form encType="multipart/form-data" onSubmit={submitHandler}>
      <Stack spacing={6}>
        <FormControl>
          <FormLabel htmlFor={'title'}>Title</FormLabel>
          <Input
            id={'title'}
            type={'text'}
            value={title}
            placeholder={'Title'}
            size={'lg'}
            isRequired={true}
            data-testid="post-form-title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={'picture'}>Picture</FormLabel>
          <Input
            id={'picture'}
            type={'file'}
            placeholder={'Picture'}
            size={'lg'}
            isRequired={!post}
            data-testid="post-form-picture"
            onChange={(event) =>
              setPicture(event.target.files ? event.target.files[0] : null)
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={'content'}>Content</FormLabel>
          <Textarea
            id={'content'}
            value={content}
            placeholder={'Content'}
            size={'lg'}
            isRequired={true}
            data-testid="post-form-content"
            rows={20}
            onChange={(event) => setContent(event.target.value)}
          />
        </FormControl>
        <Button type={'submit'} colorScheme={'purple'} alignSelf={'flex-start'}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default PostForm;
