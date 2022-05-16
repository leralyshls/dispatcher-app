import { AreaChart, Area, ResponsiveContainer, XAxis } from 'recharts';
import { COLORS } from '../../../utils/colors';

interface areaProps {
  data: { name: string; value: number }[];
}

const AreaChartGraph = ({ data }: areaProps) => {
  return (
    <ResponsiveContainer width='100%' height='80%'>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0.326' stop-color={COLORS.primary} />
            <stop
              offset='1.035'
              stop-color={COLORS.areaChartBlue}
              stop-opacity='0'
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey='name'
          axisLine={false}
          tickLine={false}
          scale='point'
          stroke={COLORS.purple}
          padding={{ left: 30, right: 25 }}
        />
        <Area
          type='monotone'
          dataKey='value'
          strokeWidth={4}
          stroke={COLORS.primary}
          fillOpacity={0.15}
          fill='url(#gradient)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartGraph;
