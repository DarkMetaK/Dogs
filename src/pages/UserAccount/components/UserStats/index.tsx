import { Suspense, lazy, useEffect } from 'react'

import { UseFetch } from '../../../../hooks/useFetch'
import { STATS_GET } from '../../../../lib/api'

import { Error } from '../../../../UI/Error'
import { Loading } from '../../../../UI/Loading'
const UserStatsGraphs = lazy(() => import('../../../../components/UserStatsGraph'))

interface Stats {
  acessos: string,
  id: number,
  title: string,
}

export function UserStats() {
  const { data, error, isLoading, request} = UseFetch()
  const typedData = data as Stats[]

  useEffect(() => {
    async function getStatsData() {
      const token = window.localStorage.getItem('token')
      const { url, options } = STATS_GET(String(token))
      const { json} = await request(url, options)
      console.log(json)
    }
    getStatsData()
  }, [request])

  return (
    <Suspense fallback={<div></div>}>
      {error && <Error errorMessage={error}/>}
      {isLoading && <Loading />}
      {typedData && <UserStatsGraphs data={typedData}/>}
    </Suspense>
  )
}