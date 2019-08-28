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

export const LIKE_PHOTO_MUTATION = gql`
mutation LikePhoto($input: LikePhoto!){
  likePhoto(input: $input){
    id
    liked
    likes
  }
}
`

export const REGISTER_USER_MUTATION = gql`
mutation signup ($input: UserCredentials!) {
  signup (input: $input)
}
`

export const LOGIN_USER_MUTATION = gql`
mutation login ($input: UserCredentials!) {
  login (input: $input)
}
`
