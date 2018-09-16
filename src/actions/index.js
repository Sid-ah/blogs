export function createArticle (article) {
  return {
    type: 'CREATE_ARTICLE',
    payload: article,
  };
}
