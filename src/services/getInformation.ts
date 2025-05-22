import { client } from '../libs/microcms';

type Post = {
  id: string;
  body:string;
  title: string;
  publishedAt: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  categories: {
    id: string;
    name: string;
  }[];
  skill: string;
};


export async function getWorkPosts(): Promise<Post[]> {
  const data = await client.get({
    endpoint: 'work',
    queries: {
      fields: 'id,title,thumbnail,categories,skill',
      depth: 1,
    },
  });
  return data.contents;
}

export async function getWorkPagePosts(id: string): Promise<Post> {
  const data = await client.get({
    endpoint: `work/${id}`,
  });
  return data;
}

export async function getLearningPosts(): Promise<Post[]> {
  const data = await client.get({
    endpoint: 'learning',
    queries: {
      fields: 'id,title,thumbnail,categories,skill',
      depth: 1,
    },
  });
  return data.contents;
}

export async function getLearningPagePosts(id: string): Promise<Post> {
  const data = await client.get({
    endpoint: `learning/${id}`,
  });
  return data;
}
