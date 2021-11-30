import './index.css'

const ScoreCard = props => {
  const {restartGame, score} = props

  const onRestartGame = () => {
    restartGame()
  }

  return (
    <div className="score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="score-number">{score}</p>
      <button type="button" onClick={onRestartGame} className="play-again-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-img"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default ScoreCard
