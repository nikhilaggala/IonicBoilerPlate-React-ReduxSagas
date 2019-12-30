// All types are defined here
export type AppPage = {
  url: string;
  icon: object;
  title: string;
}

export type TApiError = {
  message? : string
  code? : string | number
}
