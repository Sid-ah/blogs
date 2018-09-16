export default (state, action) => {
  if (action.type == 'CREATE_ARTICLE') {
    const newArticles = state.articles.concat (action.payload);
    return {articles: newArticles};
  }
  return state;
};
