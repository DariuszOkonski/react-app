import shortid from 'shortid';
import { strContains } from '../utils/strContains';

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    case REMOVE_CARD:
      return statePart.filter((card) => card.id !== action.payload);
    default:
      return statePart;
  }
};

// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );
export const getFavoriteCards = (state) =>
  state.cards.filter((card) => card.isFavorite);

// actions
const createActionName = (actionName) => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// actions creators
export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const removeCard = (payload) => ({ type: REMOVE_CARD, payload });
export const toggleCard = (payload) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload,
});

export default cardsReducer;
