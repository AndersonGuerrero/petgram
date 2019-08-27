import gql from 'graphql-tag'

export const LIKE_PHOTOS_MUTATION = gql`
mutation LikeAnonymousPhoto($input: LikePhoto!){
  likeAnonymousPhoto(input: $input){
    id
    liked
    likes
  }
}
`
