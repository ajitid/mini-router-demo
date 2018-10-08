import React from 'react'
import { history } from './Router'

const Link = props => {
  return (
    <a href={props.to} onClick={e => {
      e.preventDefault()
      history.push(props.to)
    }} className={props.className}>{props.children}</a>
  )
}

export default Link
