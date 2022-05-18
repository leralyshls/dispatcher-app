import AreaChartGraph from '../areaChart/AreaChartGraph';
import DoughnutGraph from '../doughnut/DoughnutGraph';

export interface GraphItem {
  name: string;
  value: number;
}

export interface GraphProps {
  type: string;
  data: GraphItem[];
}

const Graph = ({ type, data }: GraphProps) => {
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
