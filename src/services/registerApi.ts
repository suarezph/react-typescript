/* eslint-disable  @typescript-eslint/no-explicit-any */
import request from './index'

export interface RegisterTypes {
  fullname: string
  email: string
  password: string
  passwordConfirmation: string
}

const RegisterAPI = (data: RegisterTypes): Promise<any> =>
  request.post('/users/register', data)

export default RegisterAPI
