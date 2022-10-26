interface Blog {
  blogId: number;
  content: [Content];
  publishDate: string;
  title: string;
}

interface Content {
  position: number;
  type: string;
  value: string;
}

export type { Blog, Content };
