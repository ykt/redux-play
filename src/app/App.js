import React, { PropTypes } from 'react';
import { Link } from 'react-router';


import style from './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <div className={style.appBody}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
