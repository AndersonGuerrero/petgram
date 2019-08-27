import gql from 'graphql-tag'

export const GET_PHOTOS_QUERY = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
  }
}`

export const GET_PHOTO_QUERY = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
  }
}
`
export const GET_CATEGORYS_QUERY = gql`
query Categories {
   categories{
    id
    cover
    name
    emoji
    path
  }
}
`
