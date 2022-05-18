import AreaChartGraph from '../areaChart/AreaChartGraph';
import DoughnutGraph from '../doughnut/DoughnutGraph';

export interface GraphItemProps {
  name: string;
  value: number;
}

export interface graphProps {
  type: string;
  data: GraphItemProps[];
}

const Graph = ({ type, data }: graphProps) => {
  return (
    <>
      {type === 'area' ? (
        <AreaChartGraph data={data} />
      ) : (
        <DoughnutGraph data={data} />
      )}
    </>
  );
};

export default Graph;
