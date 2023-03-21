export type CalendarProps = {
  date: Date,
  setDate: Function,
}

export type TUser = {
  id: string,
  name: string,
  cpf: string,
  email: string,
  username: string,
  password: string,
  token?: string
}

export type TTask = {
  id: string,
  description: string,
  date: Date,
  dateCreated: Date,
  user?: TUser
}