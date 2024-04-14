import { LineChart } from '@tremor/react';
import { Color } from '@tremor/react';

const colors: (Color | string)[] = ['sky', 'cyan'];

// fetching
const chartdata = [
  {
    date: 'Jan 22',
    'IELTS Mock Test Results': 5,
  },
  {
    date: 'Feb 22',
    'IELTS Mock Test Results': 7,
  },
  {
    date: 'Mar 22',
    'IELTS Mock Test Results': 9,
  },
  {
    date: 'Apr 22',
    'IELTS Mock Test Results': 7,
  },
  {
    date: 'May 22',
    'IELTS Mock Test Results': 7,
  },
  {
    date: 'Jun 22',
    'IELTS Mock Test Results': 8,
  },
  {
    date: 'Jul 22',
    'IELTS Mock Test Results': 6,
  },
  {
    date: 'Aug 22',
    'IELTS Mock Test Results': 7.5,
  },
  {
    date: 'Sep 22',
    'IELTS Mock Test Results': 8,
  },
  {
    date: 'Oct 22',
    'IELTS Mock Test Results': 7,
  },
  {
    date: 'Nov 22',
    'IELTS Mock Test Results': 7,
  },
  {
    date: 'Dec 22',
    'IELTS Mock Test Results': 7.5,
  },
];

export function LineChartUsageExample() {
  // const valueFormatter = (number:number) => {
  //   return '$ ' + new Intl.NumberFormat('us').format(number).toString();
  // };

  return (
    <>
    <div className="mx-auto bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Mock test results</h3>
        <LineChart
          className="mt-4 h-72"
          data={chartdata}
          index="date"
          yAxisWidth={65}
          categories={['IELTS Mock Test Results']}
          colors={colors}
          // valueFormatter={valueFormatter}
        />
    </div>
    </>
  );
}
