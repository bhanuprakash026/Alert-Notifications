// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <div className="container">
        <AiFillCheckCircle className="icon success" />
        <div className="msg-container">
          <h1 className="notification-status success">Success</h1>
          <p className="notification-para">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderErrorNotifications = () => (
    <Notification>
      <div className="container">
        <RiErrorWarningFill className="icon success" />
        <div className="msg-container">
          <h1 className="notification-status error">Error</h1>
          <p className="notification-para">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <div className="container">
        <MdWarning className="icon warning" />
        <div className="msg-container">
          <h1 className="notification-status warning">Warning</h1>
          <p className="notification-para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <div className="container">
        <MdInfo className="icon info" />
        <div className="msg-container">
          <h1 className="notification-status info">Info</h1>
          <p className="notification-para">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="bg-container">
      <div className="responsive-container">
        <h1 className="main-header">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotifications()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}
export default AlertNotifications
