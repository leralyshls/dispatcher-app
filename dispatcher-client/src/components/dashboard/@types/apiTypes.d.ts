declare namespace APITypes {
  interface ApiResponseData {
    status: string;
    totalResults: number;
    articles: ArticleArticleData[];
  }
  interface ArticleData {
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string | null;
  }
}
