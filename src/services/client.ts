import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  CancelTokenSource,
} from 'axios'
import routes from '../constants/routes'
import storage from '../constants/storage'

const apiURL = process.env.API_URL

const { CancelToken } = axios
const source: CancelTokenSource = CancelToken.source()

function clearStorage(): void {
  localStorage.removeItem(storage.auth_token)
  window.location.href = routes.logout
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
    const authToken: string | null = localStorage.getItem(storage.auth_token)

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`
    }

    const locale: string | null = localStorage.getItem(storage.locale)
    config.headers['X-localization'] = locale || 'en'
    config.headers.Timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    return config
  },
  error => Promise.reject(error),
)

function client() {
  return {
    get: (url: string, config: AxiosRequestConfig = {}) => {
      const promise = new Promise((resolve, reject) => {
        config.cancelToken = source.token
        axios
          .get(url, config)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            if (axios.isCancel(error)) return
            reject(error)
          })
      })

      return promise
    },
    post: (url: string, data: any, config: AxiosRequestConfig = {}) => {
      const promise = new Promise(
        // eslint-disable-next-line no-unused-vars
        (resolve, reject) => {
          config.cancelToken = source.token
          axios
            .post(url, data, config)
            .then(response => {
              resolve(response)
            })
            .catch(error => {
              if (axios.isCancel(error)) return
              reject(error)
            })
        },
      )
      return promise
    },
  }
}

export default client
