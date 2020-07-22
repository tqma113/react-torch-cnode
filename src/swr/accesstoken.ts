import useSWR from 'swr'
import fetch from './fetcher'

export const useAccessToken = (token: string) => {
  const postData = new URLSearchParams(`accesstoken=${token}`)

  const { data, error } = useSWR(
    [`/accesstoken`, postData],
    ([url, data]) => fetch(
      url,
      {
        method: 'post',
        body: data,
        headers: {
          'Context-Type': 'multipart/form-data'
        }
      }
    )
  )

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const getAccessToken = (token: string) => {
  const postData = new URLSearchParams(`accesstoken=${token}`)

  return fetch(
    `/accesstoken`,
    {
      method: 'post',
      body: postData,
      headers: {
        'Context-Type': 'multipart/form-data'
      }
    }
  )
}