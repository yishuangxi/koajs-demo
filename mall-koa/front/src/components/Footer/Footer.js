/**
 * Created by Yi on 11/10/2016.
 */
import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <IndexLink to='/' activeClassName='route--active' className="footer-item">
          夺宝
        </IndexLink>

        <Link to='/counter' activeClassName='route--active' className="footer-item">
          分类搜索
        </Link>
        <Link to='/test' activeClassName='route--active' className="footer-item">
          发现
        </Link>

        <Link to='/test' activeClassName='route--active' className="footer-item">
          清单
        </Link>

        <Link to='/test' activeClassName='route--active' className="footer-item">
          我的
        </Link>
      </div>
    )
  }
}

export default Footer