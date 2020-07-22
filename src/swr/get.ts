import fetch from './fetcher'

const get = (
  input: RequestInfo,
  params?: Record<string, string | number | boolean>,
  init?: RequestInit
) => {
  if (typeof input === 'string') {
    input = input + `?${JSON.stringify(params)}`
  } else {
    input = input.url + `?${JSON.stringify(params)}`
  }

  init = {
    ...init,
    method: 'GET'
  }

  return fetch(input, init)
}

export default get