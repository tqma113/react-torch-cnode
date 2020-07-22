const API = 'https://cnodejs.org/api/v1'

const fetcher = async (input: RequestInfo, init?: RequestInit | undefined): Promise<any> => {
  if (typeof input === 'string') {
    input = API + input
  } else {
    input = API + input.url
  }

  init = {
    ...init,
    mode: 'cors'
  }

  return fetch(input, init).then(res => {
    return res.json()
  })
}

export default fetcher