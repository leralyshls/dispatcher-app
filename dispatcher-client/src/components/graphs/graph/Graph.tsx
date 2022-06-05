import { useAppSelector } from '../../../store/hooks';
import {
  prepareDoughnutData,
  prepareAreaChartData,
} from '../../../utils/prepareGraphData';
import AreaChartGraph from '../areaChart/AreaChartGraph';
import DoughnutGraph from '../doughnut/DoughnutGraph';

export interface GraphProps {
  type: string;
}

const Graph = ({ type }: GraphProps) => {
  const articles = useAppSelector((state) => state.news.articles);
  const areaChartData = prepareAreaChartData(articles);
  const doughnutData = prepareDoughnutData(articles);
  return (
    <>
      {type === 'area' ? (
        <AreaChartGraph data={articles.length ? areaChartData : []} />
      ) : (
        <DoughnutGraph data={articles.length ? doughnutData : []} />
      )}
    </>
  );
};

export default Graph;
