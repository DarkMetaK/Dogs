import { useEffect, useState } from 'react'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

import { UserStatsGraphContainer } from './styles'

interface StatsData {
  x: string,
  y: number
}

interface Stats {
  acessos: string,
  id: number,
  title: string,
}

interface UserStatsGraphProps {
  data: Stats[]
}

export default function UserStatsGraph({ data }: UserStatsGraphProps) {
  const [ graph, setGraph ] = useState<StatsData[]>([])
  const [ totalViews, setTotalViews ] = useState(0)

  useEffect(() => {
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: +item.acessos
      }
    })

    setTotalViews(
      data.map(({ acessos })=> +acessos)
      .reduce((acc, value) => acc + value, 0)
    )
    setGraph(graphData)
  }, [data])
  

  return (
    <UserStatsGraphContainer className="animeLeft">
      <div className="total">
        <p>Acessos: {totalViews}</p>
      </div>

      <div>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{top: 20, bottom: 20, left: 80, right: 80}}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            }
          }}
        />
      </div>

      <div>
        <VictoryChart>
          <VictoryBar
            data={graph}
            alignment="start"
          />
        </VictoryChart>
      </div>
    </UserStatsGraphContainer>
  )
}
