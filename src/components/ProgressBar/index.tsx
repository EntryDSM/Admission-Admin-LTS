import { Text } from '@team-entry/design_system';
import * as _ from './style';

const progressState = [
  { id: 0, title: '원서 제출', date: '10/17~10/20' },
  { id: 1, title: '1차 발표', date: '10/24 18:00' },
  { id: 2, title: '원서 제출', date: '10/18 9:00' },
  { id: 3, title: '2차 발표', date: '11/03 10:00' },
];

const ProgressBar = () => {
  const DATE = 1;

  const progressBar = [
    { id: 0, element: <_._ProgressCircle now={0 <= DATE} /> },
    { id: 1, element: <_._ProgressStep now={1 <= DATE} /> },
    { id: 2, element: <_._ProgressCircle now={1 <= DATE} /> },
    { id: 3, element: <_._ProgressStep now={2 <= DATE} /> },
    { id: 4, element: <_._ProgressCircle now={2 <= DATE} /> },
    { id: 5, element: <_._ProgressStep now={3 <= DATE} /> },
    { id: 6, element: <_._ProgressCircle now={3 <= DATE} /> },
  ];

  return (
    <_._Overflow>
      <_._Progress>
        <_._ProgressCards>
          {progressState.map((state) => (
            <_._ProgressCard key={state.id} now={state.id <= DATE}>
              <Text color="realWhite" size="title1">
                {state.title}
              </Text>
              <Text color="realWhite" size="body1">
                {state.date}
              </Text>
            </_._ProgressCard>
          ))}
        </_._ProgressCards>
        <_._ProgressBar>
          {progressBar.map((state) => (
            <>{state.element}</>
          ))}
        </_._ProgressBar>
      </_._Progress>
    </_._Overflow>
  );
};

export default ProgressBar;
