import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-api.now.sh/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloProviderHooks client={client}>
      <App />
    </ApolloProviderHooks>
  </ApolloProvider>,
  document.getElementById('app'))
