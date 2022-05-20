import { objectCaseConverter, Cases } from '@soyhuce/bob.case-converter'

import { LaravelResponse } from './laravel-request-wrapper.types'

enum Methods {
  POST = 'post',
  PUT = 'put',
  GET = 'get',
  DELETE = 'delete',
  PATCH = 'patch'
}

const request = (
  path: string,
  method: Methods,
  options: { credentials?: RequestCredentials },
  payload?: Record<string, unknown>
) => {
  const init = payload
    ? {
        method,
        body: JSON.stringify(payload),
        credentials: options.credentials
      }
    : {
        method,
        credentials: options.credentials
      }
  return new Request(path, init)
}

const laravelRequestWrapper = async <D>(
  path: string,
  method: Methods,
  credentials: RequestCredentials = 'same-origin',
  payload?: Record<string, unknown>
) => {
  const response = await fetch(request(path, method, { credentials }, payload))
  const body: LaravelResponse<D> = await response.json()
  return laravelResponseWrapper<D>(body)
}

const laravelResponseWrapper = <D>(body: LaravelResponse<D>) => {
  if (!body.data) {
    return body
  }
  return objectCaseConverter<LaravelResponse<D>>(body, Cases.SNAKE_CASE, Cases.CAMEL_CASE)
}

export { laravelRequestWrapper, Methods }
export type { LaravelResponse }
