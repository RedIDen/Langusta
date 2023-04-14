import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './layout_elements/NavMenu';
import Footer from './layout_elements/Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container className="d-flex justify-content-center">
          {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  }
}
