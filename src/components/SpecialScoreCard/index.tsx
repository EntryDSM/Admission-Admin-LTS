import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import { ISpecialScoreDistribution } from '@/utils/api/admin/types';

export interface IPropsType {
  title: string;
  ranges: string[];
  daejeonRanges?: ISpecialScoreDistribution;
  nationWideRanges?: ISpecialScoreDistribution;
}

export function SpecialScoreCard({ title, ranges, daejeonRanges, nationWideRanges }: IPropsType) {
  return (
    <_ScoreStatus>
      <Text color="black900" size="title2">
        {title}
      </Text>

      <_Boxs>
        <_Box>
          {ranges.map((range) => (
            <Text color="black900" size="title3" width={90}>
              {range}:
            </Text>
          ))}
          <Text color="black900" size="title2" width={90}>
            총합:
          </Text>
        </_Box>
        <_Box>
          <Text color="black900" size="title1">
            대전
          </Text>
          <Text color="black900" size="title2">
            {daejeonRanges?.['98-110']}
          </Text>
          <Text color="black900" size="title2">
            {daejeonRanges?.['85-97']}
          </Text>
          <Text color="black900" size="title2">
            {daejeonRanges?.['72-84']}
          </Text>
          <Text color="black900" size="title2">
            {daejeonRanges?.['59-71']}
          </Text>
          <Text color="black900" size="title2">
            {daejeonRanges?.['46-58']}
          </Text>
          <Text color="black900" size="title2">
            {daejeonRanges?.['33-45']}
          </Text>
          <Text color="black900" size="title2">
            {daejeonRanges?.['20-32']}
          </Text>
          <Text color="black900" size="title2">
            {daejeonRanges?.['-19']}
          </Text>
          <Text color="black900" size="title2">
            {daejeonRanges
              ? Object.values(daejeonRanges).reduce((acc, cur) => (acc += typeof cur == 'number' ? cur : 0), 0)
              : 0}
          </Text>
        </_Box>
        <_Box>
          <Text color="black900" size="title1">
            전국
          </Text>
          <Text color="black900" size="title2">
            {nationWideRanges?.['98-110']}
          </Text>
          <Text color="black900" size="title2">
            {nationWideRanges?.['85-97']}
          </Text>
          <Text color="black900" size="title2">
            {nationWideRanges?.['72-84']}
          </Text>
          <Text color="black900" size="title2">
            {nationWideRanges?.['59-71']}
          </Text>
          <Text color="black900" size="title2">
            {nationWideRanges?.['46-58']}
          </Text>
          <Text color="black900" size="title2">
            {nationWideRanges?.['33-45']}
          </Text>
          <Text color="black900" size="title2">
            {nationWideRanges?.['20-32']}
          </Text>
          <Text color="black900" size="title2">
            {nationWideRanges?.['-19']}
          </Text>
          <Text color="black900" size="title2" width={90}>
            {nationWideRanges
              ? Object.values(nationWideRanges).reduce((acc, cur) => (acc += typeof cur == 'number' ? cur : 0), 0)
              : 0}
          </Text>
        </_Box>
      </_Boxs>
    </_ScoreStatus>
  );
}

const _ScoreStatus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const _Boxs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 30px;
  background-color: ${theme.color.black50};
  border: 1px solid ${theme.color.black100};
  border-radius: 10px;
  gap: 10px;
`;

const _Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-top: auto;
  > div {
    height: 26.5px;
  }
`;
