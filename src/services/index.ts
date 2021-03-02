/* eslint-disable  @typescript-eslint/no-explicit-any */
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  CancelTokenSource,
} from 'axios'
// import routes from '../constants/routes'
import authToken, { locale } from '../constants/storage'

const apiURL: string = process.env.REACT_APP_API_URL || ''

const { CancelToken } = axios
const source: CancelTokenSource = CancelToken.source()

function clearStorage(): void {
  localStorage.removeItem(authToken)
  // console.info('Logged out')
  // window.location.href = routes.logout
}

function errorPromise(error: AxiosError) {
  const { response } = error

  if (!response) {
    clearStorage()
    return Promise.reject(error)
  }

  if (response.status !== 401) {
    return Promise.reject(error)
  }

  clearStorage()
  return false
}

axios.defaults.baseURL = apiURL

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  errorPromise,
)

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const configure = config
    const token: string | null = localStorage.getItem(authToken)

    if (token) {
      configure.headers.Authorization = `Bearer ${authToken}`
    }

    const translate: string | null = localStorage.getItem(locale)
    configure.headers['X-localization'] = translate || 'en'
    configure.headers.Timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    return configure
  },
  (error: AxiosError) => Promise.reject(error),
)

const request = {
  get: (url: string, config?: AxiosRequestConfig | undefined): Promise<any> => {
    return new Promise((resolve, reject) => {
      const configure = config
      if (configure) configure.cancelToken = source.token

      axios
        .get(url, config)
        .then((response: AxiosResponse) => {
          resolve(response)
        })
        .catch((error: AxiosError) => {
          if (axios.isCancel(error)) return
          reject(error)
        })
    })
  },
  post: (
    url: string,
    data: any | undefined,
    config?: AxiosRequestConfig | undefined,
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      const configure = config
      if (configure) configure.cancelToken = source.token

      axios
        .post(url, data, config)
        .then((response: AxiosResponse) => {
          resolve(response)
        })
        .catch((error: AxiosError) => {
          if (axios.isCancel(error)) return
          reject(error.response)
        })
    })
  },
  put: (
    url: string,
    data: any | undefined,
    config?: AxiosRequestConfig | undefined,
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      const configure = config
      if (configure) configure.cancelToken = source.token

      axios
        .put(url, data, config)
        .then((response: AxiosResponse) => {
          resolve(response)
        })
        .catch((error: AxiosError) => {
          if (axios.isCancel(error)) return
          reject(error)
        })
    })
  },
  delete: (
    url: string,
    data: any | undefined,
    config?: AxiosRequestConfig | undefined,
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      const configure = config
      if (configure) configure.cancelToken = source.token

      axios
        .delete(url, { ...config, data: { ...data } })
        .then((response: AxiosResponse) => {
          resolve(response)
        })
        .catch((error: AxiosError) => {
          if (axios.isCancel(error)) return
          reject(error)
        })
    })
  },
}

export default request
