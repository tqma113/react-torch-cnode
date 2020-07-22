import useSWR from 'swr'
import get from './get'

export const useUser = (loginname: string) => {
  const { data, error } = useSWR(`/user/${loginname}`, get)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const getUser = (loginname: string) => {
  return get(`/user/${loginname}`)
}