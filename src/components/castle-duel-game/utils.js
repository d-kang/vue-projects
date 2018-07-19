const utils = {
  // WORLD
  getWorldRatio() {
    return 1 / 1920 * window.innerWidth
  },
  // GAME

  // Pile
  drawCard() {
    if (getDrawPileCount() === 0) {
      refillPile()
    }

    const choice = Math.round(Math.random() * (getDrawPileCount() - 1)) + 1

    let accumulation = 0
    for (let k in state.drawPile) {
      accumulation += state.drawPile[k]
      if (choice <= accumulation) {
        // Draw the card from the pile
        state.drawPile[k]--
          return {
            id: k,
            uid: cardUid++,
            def: CARDS[k],
          }
      }
    }
  },

  drawInitialHand(player) {
    for (let i = 0; i < handSize; i++) {
      player.hand.push(drawCard())
    }
  },

  addCardToPile (pile, cardId) {
    if (typeof pile[cardId] === 'number') {
      pile[cardId] ++
    } else {
      pile[cardId] = 1
    }
  },

  refillPile () {
    Object.assign(state.drawPile, state.discardPile)
    state.discardPile = {}
  },

  getDrawPileCount() {
    let result = 0
    for (let k in state.drawPile) {
      result += state.drawPile[k]
    }
    return result
  },

  applyCardEffect(card) {
    state.currentPlayer.lastPlayedCardId = card.id
    card.def.play(state.currentPlayer, state.currentOpponent)
    // Check if the stats (health, food) are not outside the boundaries
    state.players.forEach(checkStatsBounds)
  },

  getLastPlayedCard(player) {
    return CARDS[player.lastPlayedCardId]
  },

  checkStatsBounds(player) {
    // Health
    if (player.health < 0) {
      player.health = 0
    } else if (player.health > maxHealth) {
      player.health = maxHealth
    }

    // Food
    if (player.food < 0) {
      player.food = 0
    } else if (player.food > maxFood) {
      player.food = maxFood
    }
  },

  checkPlayerLost(player) {
    player.dead = (player.health === 0 || player.food === 0)
  },

  isOnePlayerDead() {
    return state.players.some(p => p.dead)
  },
}
