import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const Container = styled.div.attrs({
  className: 'container-fluid pb-3',
})``

const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})``

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Logo />
          <a class="navbar-brand" href="https://www.zoho.com/books/api/v3/#Contacts_List_contacts">All Contacts</a>
        </Nav>
      </Container>
    )
  }
}

export default NavBar
