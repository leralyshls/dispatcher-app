import { useAppSelector } from '../../../store/hooks';
import {
  prepareDoughnutData,
  prepareAreaChartData,
} from '../../../utils/prepareGraphData';
import AreaChartGraph from '../areaChart/AreaChartGraph';
import DoughnutGraph from '../doughnut/DoughnutGraph';
import topHeadlinesPage1 from '../../../mockData/topHeadlinesPage1.json';
import { areaChartMock } from '../graphsMockData';

export interface GraphProps {
  type: string;
}

const Graph = ({ type }: GraphProps) => {
  const articles = useAppSelector((state) => state.news.articles);
  prepareDoughnutData(topHeadlinesPage1.articles);
  return (
    <>
      {type === 'area' ? (
        <AreaChartGraph data={areaChartMock} />
      ) : (
        <DoughnutGraph data={articles && prepareDoughnutData(articles)} />
      )}
    </>
  );
};

export default Graph;
