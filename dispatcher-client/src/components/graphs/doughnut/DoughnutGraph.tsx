import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Label,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { COLORS } from '../../../utils/colors';
import {
  StyledUL,
  StyledLI,
  BlueSpan,
  GreySpan,
  StyledListContainer,
} from './styles';
import { GraphItem } from '../graph/Graph';

interface DoughnutProps {
  data: GraphItem[];
}

const DoughnutGraph = ({ data }: DoughnutProps) => {
  const totalSources = data.length;
  const renderLegend = (...args: any) => {
    const { payload } = args[0];
    return (
      <StyledUL>
        {payload.map((entry: any, index: number) => {
          return (
            <StyledLI color={entry.color} key={entry.value}>
              <StyledListContainer>
                <BlueSpan>{entry.value}</BlueSpan>
                <GreySpan>{(entry.payload.percent * 100).toFixed(0)}%</GreySpan>
              </StyledListContainer>
            </StyledLI>
          );
        })}
      </StyledUL>
    );
  };

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart
        margin={{
          top: 2,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Pie
          data={data}
          outerRadius={60}
          innerRadius={50}
          paddingAngle={0}
          dataKey='value'
        >
          <Label value={totalSources} position='center' />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS.doughnut[index % COLORS.doughnut.length]}
            />
          ))}
        </Pie>
        <Legend verticalAlign='bottom' content={renderLegend} />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DoughnutGraph;
