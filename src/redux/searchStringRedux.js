const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};

// selectors
export const getSearchString = (state) => state.searchString;

// actions
const createActionName = (actionName) => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// actions creators
export const updateSearchString = (payload) => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});

export default searchStringReducer;
