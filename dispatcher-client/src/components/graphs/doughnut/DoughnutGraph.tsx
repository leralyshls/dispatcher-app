import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Label,
  ResponsiveContainer,
} from 'recharts';
import {
  StyledUL,
  StyledLI,
  BlueSpan,
  GreySpan,
  StyledListContainer,
} from './styles';
import { GraphItem } from '../graph/Graph';
import { COLORS } from '../../../utils/colors';

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
                <BlueSpan className='font-mulish'>{entry.value}</BlueSpan>
                <GreySpan className='font-mulish'>
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
    <ResponsiveContainer width='100%' height='90%'>
      <PieChart
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Pie
          data={data}
          outerRadius={'70%'}
          innerRadius={'60%'}
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
