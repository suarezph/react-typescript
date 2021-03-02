/* eslint-disable  @typescript-eslint/no-explicit-any */
import request from './index'

export interface RegisterTypes {
  fullname: string
  email: string
  password: string
}

const create = (data: RegisterTypes): Promise<any> =>
  request.post('/users/register', data)

export default create
