interface Blog {
    blogId: number,
    content: [Content]
    publishDate: string,
    title: string
}

interface Content {
    position: number,
    type: string,
    value: string,
    meta: Meta | null
}

interface Meta {
    lang: string | null,
    altText: string | null
}

export type { Blog, Content, Meta }