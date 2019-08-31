import React from 'react'
import { DetailOfPhotoCard } from '../components/DetailOfPhotoCard'
import { Layout } from '../components/Layout'

export const Detail = ({ id }) => {
  return (
    <Layout
      title={`Fotografia ${id}`}>
      <DetailOfPhotoCard photoId={id} />
    </Layout>
  )
}
