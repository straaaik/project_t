export enum ArticlesType {
    IT = 'IT',
    ECONOMICS = 'ECONOMICS',
    SCIENCE = 'SCIENCE',
    POLITICS = 'POLITICS',
    SPORTS = 'SPORTS',
}

export enum ArticlesBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticlesBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticlesBlockType.CODE;
    code: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticlesBlockType.TEXT;
    title?: string;
    paragraphs?: string[];
}
export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticlesBlockType.IMAGE;
    title?: string;
    src?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticlesType[];
    blocks: ArticleBlock[];
}
