import { OpenAPIObject, PathItemObject, PathsObject } from 'openapi3-ts'

const APPLICATION_JSON = 'application/json'

type ResponsesType = {
  [path: string]: {
    [APPLICATION_JSON]: { schema: any }
  }
}

const verbs: (keyof PathItemObject)[] = ['get', 'put', 'post', 'delete', 'patch', 'tytu']

const extractResponses = (obj: OpenAPIObject) => {
  const ret: PathsObject = {}
  Object.keys(obj.paths).forEach((path) => {
    const methods: PathItemObject = obj.paths[path]
    Object.keys(methods).forEach((method: keyof PathItemObject) => {
      if (verbs.includes(method)) {
        const api = methods[method]
        const { responses } = api
        Object.keys(responses).forEach((statusCode: string) => {
          const response = responses[statusCode]
          const { content } = response
          const key = `${path}_${method}_${statusCode}`
          ret[key] = content
        })
      }
    })
  })
  return ret
}

export { extractResponses, APPLICATION_JSON }
export type { ResponsesType }
