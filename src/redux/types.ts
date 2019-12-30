export interface TActionCreatorType {
  type: string
  payload?: any
}

// Defining an interface as it can be extended when needed
export interface TReducerExtraData {
  loading: boolean
  error: boolean
}

export interface TSignup {
  username: string
  email: string
  uuid?: string
  accessToken?: string
  refreshToken?: string
}

export interface Tsignin {
  username: string
  email: string
  uuid?: string
  accessToken?: string
  refreshToken?: string
}
