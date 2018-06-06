const defaultState = {
  selectedArticle: -1,
  articles: [
    {
      title: "This year's best coffee makers",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Five household cleaning tips",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "The best websites for travel",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    }
  ]
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_SELECTED_ARTICLE":
      return Object.assign({}, state, { selectedArticle: action.index });
    case "UPDATE_ARTICLES":
      return Object.assign({}, state, { articles: action.articles });

    default:
      return state;
  }
}
