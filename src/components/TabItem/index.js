import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChangeActiveTab = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-btn' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onChangeActiveTab}
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
