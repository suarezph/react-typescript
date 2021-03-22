/* eslint-disable  @typescript-eslint/no-explicit-any */
import request from './index'

export interface LoginTypes {
  email: string
  password: string
}

const LoginAPI = (data: LoginTypes): Promise<any> =>
  request.post('/users/login', data)

export default LoginAPI
