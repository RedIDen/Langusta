import React, { Component } from 'react';
import NavMenu from './layout_elements/NavMenu';
import Footer from './layout_elements/Footer';
import './Layout.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="flex">
        <NavMenu />
        <div className="layout">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
