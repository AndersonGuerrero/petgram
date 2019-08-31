import React, { useState, useEffect, Fragment } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { GET_CATEGORYS_QUERY } from '../../queries'
import { Category } from '../Category'
import { List, Item } from './styles'
import { Loading } from '../Loading'

const ListOfCategoriesComponent = ({ categoryName }) => {
  const [showFixed, setShowFixed] = useState(false)
  const { data, loading } = useQuery(GET_CATEGORYS_QUERY)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }
    onScroll()
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Loading />
          : data.categories.map(category => <Item key={category.id}><Category {...category} path={`/category/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
