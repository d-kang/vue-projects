const gameState = {
  MAXHEALTH: 10,
  MAXFOOD: 10,
  handSize: 5,
  cardUid: 0,
  currentPlayingCard: null,
}
// const MAXHEALTH = 10
// const MAXFOOD = 10
// let handSize = 5
// let cardUid = 0
// let currentPlayingCard = null

const initializeState = () => {
  return {
    worldRatio: utils.getWorldRatio(),
    turn: 1,
    players: [{ name: 'Anonymous Aardvark '}, { name: 'Spontaneous Spider' }],
    currentPlayerIndex: Math.round(Math.random()),
    CARDS,
    testHand: [],
    activeOverlay: null,
  }
}
