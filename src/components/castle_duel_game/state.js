import utils from './utils';
import CARDS from './cards';

const gameState = {
  MAXHEALTH: 10,
  MAXFOOD: 10,
  handSize: 5,
  cardUid: 0,
  currentPlayingCard: null,
};
// const MAXHEALTH = 10
// const MAXFOOD = 10
// let handSize = 5
// let cardUid = 0
// let currentPlayingCard = null

const createPlayer = name => {
  return {
    name,
    food: 10,
    health: 10,
    // Is skipping is next turn
    skipTurn: false,
    // Skiped turn last time
    skippedTurn: false,
    hand: [],
    lastPlayedCardId: null,
    dead: false,
  };
};

const initializeState = () => {
  return () => ({
    worldRatio: utils.getWorldRatio(),
    turn: 1,
    players: [
      createPlayer('Anonymous Aardvark'),
      createPlayer('Spontaneous Spider'),
    ],
    currentPlayerIndex: Math.round(Math.random()),
    CARDS,
    testHand: [],
    activeOverlay: null,
    lastPlayedCard: null,
  });
};

export { gameState, createPlayer, initializeState };
