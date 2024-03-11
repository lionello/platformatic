// This client was generated by Platformatic from an OpenAPI specification.

import type { Movies } from './movies-types'
import type * as Types from './movies-types'

// The base URL for the API. This can be overridden by calling `setBaseUrl`.
let baseUrl = ''
export const setBaseUrl = (newUrl: string) : void => { baseUrl = newUrl }

const _getPkgScopeNameVersion = async (url: string, request: Types.GetPkgScopeNameVersionRequest): Promise<Types.GetPkgScopeNameVersionResponses> => {

  const response = await fetch(`${url}/pkg/@${request['scope']}/${request['name']}/${request['version']}/${request['*']}`)


  const textResponses = [302, 400]
  if (textResponses.includes(response.status)) {
    return {
      statusCode: response.status as 302 | 400,
      headers: response.headers,
      body: await response.text()
    }
  }
  const blobResponses = [202]
  if (blobResponses.includes(response.status)) {
    return {
      statusCode: response.status as 202,
      headers: response.headers,
      body: await response.blob()
    }
  }
  const jsonResponses = [200, 404]
  if (jsonResponses.includes(response.status)) {
    return {
      statusCode: response.status as 200 | 404,
      headers: response.headers,
      body: await response.json()
    }
  }
  if (response.headers['content-type'] === 'application/json') {
    return {
      statusCode: response.status as 200 | 202 | 302 | 400 | 404,
      headers: response.headers,
      body: await response.json() as any
    }
  }
  return {
    statusCode: response.status as 200 | 202 | 302 | 400 | 404,
    headers: response.headers,
    body: await response.text() as any
  }
}

export const getPkgScopeNameVersion: Movies['getPkgScopeNameVersion'] = async (request: Types.GetPkgScopeNameVersionRequest): Promise<Types.GetPkgScopeNameVersionResponses> => {
  return await _getPkgScopeNameVersion(baseUrl, request)
}
export default function build (url: string) {
  return {
    getPkgScopeNameVersion: _getPkgScopeNameVersion.bind(url, ...arguments)
  }
}