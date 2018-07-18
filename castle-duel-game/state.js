const MAXHEALTH = 10
const MAXFOOD = 10
let handSize = 5
let cardUid = 0
let currentPlayingCard = null

const initializeState = () => {
  return {
    worldRatio: getWorldRatio(),
  }
}
