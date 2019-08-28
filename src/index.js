import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks'
import Context from './Context'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-api.now.sh/graphql',
  request: operation => {
    const token = window.window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <App />
      </ApolloProviderHooks>
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
