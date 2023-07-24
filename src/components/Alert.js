import React from 'react'

export default function Alert(props) {
  return (
    props.alert !== null &&
    <div>
        <div className={`alert alert-${props.alert}`} role="alert">
            {props.alertmsg}
        </div>
    </div>
  )
}
