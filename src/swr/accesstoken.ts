import useSWR from 'swr'
import post from './post'

export const useAccessToken = (token: string) => {
  const postData = {
    accesstoken: token
  }

  const { data, error } = useSWR([`/accesstoken`, postData], ([url, data]) => post(url, data))


  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const getAccessToken = (token: string) => {
  const postData = {
    accessToken: token
  }

  return post(`/accesstoken`, postData)
}