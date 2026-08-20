import useSWR from 'swr'
import { fetcher } from './fetcher'

export function usePosts() {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  )

  return { posts: data, error, isLoading }
}
