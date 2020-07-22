import fetch from './fetcher'

const post = (input: RequestInfo, data?: any, init?: RequestInit | undefined) => {
  init = {
    ...init,
    method: 'POST',
    body: JSON.stringify(data)
  }

  return fetch(input, init)
}

export default post