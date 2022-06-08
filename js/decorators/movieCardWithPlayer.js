function movieCardWithPlayer(movieCard) {
    if (movieCard.movie.actor === 'sylvester') {
        movieCard.$wrapper.addEventListenner('click', () => {
            const Player = new PlayerModal(movieCard.movie)
            Player.render()
        })
    }
    return movieCard
}
