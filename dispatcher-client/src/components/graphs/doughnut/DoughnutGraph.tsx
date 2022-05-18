import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Label,
  ResponsiveContainer,
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
                <BlueSpan className='font-mullish'>{entry.value}</BlueSpan>
                <GreySpan className='font-mullish'>
                  {(entry.payload.percent * 100).toFixed(0)}%
                </GreySpan>
              </StyledListContainer>
            </StyledLI>
          );
        })}
      </StyledUL>
    );
  };

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={70}
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
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DoughnutGraph;
