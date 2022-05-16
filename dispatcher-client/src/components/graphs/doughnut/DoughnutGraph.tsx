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

interface doughnutProps {
  data: {
    name: string;
    value: number;
  }[];
}

const DoughnutGraph = ({ data }: doughnutProps) => {
  const label = 'Sum';

  const renderLegend = (...args: any) => {
    const { payload } = args[0];
    return (
      <StyledUL>
        {payload.slice(0, 4).map((entry: any, index: number) => {
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
          <Label value={label} position='center' />
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
