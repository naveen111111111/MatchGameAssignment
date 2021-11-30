import './index.css'

const Thumbnails = props => {
  const {thumbnailDetails, matchImage} = props
  const {thumbnailUrl, imageUrl} = thumbnailDetails

  const compareWithImageUrl = () => {
    matchImage(imageUrl)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={compareWithImageUrl}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default Thumbnails
