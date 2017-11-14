import React from 'react'


class ThemedDecorations extends React.Component {
  render () {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {className: this.props.theme,})
    )
  return (
    <div>
      {childrenWithProps}
    </div>
    )
  }
}

export default ThemedDecorations
