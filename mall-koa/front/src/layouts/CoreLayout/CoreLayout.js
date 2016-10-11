import React, {Component} from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'

export default class CoreLayout extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render() {
    return (
      <div className='core-layout__viewport'>
        {this.props.children}
      </div>
    )
  }
}


