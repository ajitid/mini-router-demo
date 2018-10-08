import React, { Component } from 'react' // eslint-disable-line
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class Router extends Component {
  state = {
    pathname: null
  }

  componentDidMount () {
    this.setState({
      pathname: history.location.pathname
    });

    this.unlistenHistory = history.listen((location, action) => {
      this.setState({
        pathname: location.pathname
      });
    })
  }

  componentWillUnmount () {
    this.unlistenHistory()
  }

  getComponentToRender () {
    const { pathname } = history.location
    if(pathname.length > 1 && pathname[pathname.length - 1] === '/')
      history.location.pathname = pathname.slice(0, pathname.length - 1)

    const children = React.Children.toArray(this.props.children)
    let selectedChild = null
    for(const child of children) {
      if (child.props.path != null && child.props.path === history.location.pathname) {
          selectedChild = child
          break
      }
    }
    return selectedChild
  }

  render () {
    const Component = this.getComponentToRender()
    return (
        <React.Fragment>
          {Component}
        </React.Fragment>
    )
  }
}

export { history }
export default Router
