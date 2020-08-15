import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class ZohoContactsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllContacts(1, 200).then(contacts => {
      console.log(contacts);
      this.setState({
        contacts: contacts.data.data.contacts,
        isLoading: false,
      })
    })
  }

  render() {
    const { contacts, isLoading } = this.state
    console.log('TCL: ContactsList -> render -> contacts', contacts)

    const columns = [
      {
        Header: 'NAME',
        accessor: 'contact_name',
        filterable: true,
      },
      {
        Header: 'COMPANY NAME',
        accessor: 'company_name',
        filterable: true,
      },
      {
        Header: 'EMAIL',
        accessor: 'email',
        filterable: true,
      },
      {
        Header: 'WORK PHONE',
        accessor: 'phone',
        filterable: true,
      },
      {
        Header: 'GST TREATMENT',
        accessor: 'gst_treatment',
        filterable: true,
      },
      {
        Header: 'RECEIVABLES',
        accessor: 'outstanding_receivable_amount',
        filterable: true,
        Cell: props => <span>&#8377;{props.value}</span>
      },
      {
        Header: 'PAYABLES',
        accessor: 'outstanding_payable_amount',
        filterable: true,
        Cell: props => <span>&#8377;{props.value}</span>
      }
    ]

    let showTable = true
    if (!contacts.length) {
      showTable = false
    }

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={contacts}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    )
  }
}

export default ZohoContactsList
