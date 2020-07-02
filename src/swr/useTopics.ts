import useSWR from 'swr'
import { stringify } from 'querystring'
import fetcher from './fetcher'

export type Tab = 'ask' | 'share' | 'job' | 'good'
export type TopicsProps = {
  page?: number,
  tab?: Tab,
  limit?: number,
  mdrender?: boolean
}
export const useTopics = ({
  page,
  tab,
  limit,
  mdrender
}: TopicsProps) => {
  const query = {
    page,
    tab,
    limit,
    mdrender
  }

  const { data, error } = useSWR(`/topics?${stringify(query)}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}