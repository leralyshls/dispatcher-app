import AreaChartGraph from '../areaChart/AreaChartGraph';
import DoughnutGraph from '../doughnut/DoughnutGraph';

export interface graphProps {
  type: string;
  data: { name: string; value: number }[];
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
