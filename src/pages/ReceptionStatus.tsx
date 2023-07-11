import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import { CommonScoreCard } from '@/components/CommonScoreCard';
import { SpecialScoreCard } from '@/components/SpecialScoreCard';
import { getStaticsScore } from '@/utils/api/admin';

function ReceptionStatus() {
  const { data } = getStaticsScore();

  return (
    <_Wrapper>
      <Text size="header1" color="black900">
        접수 현황
      </Text>
      <_StatusCount>
        <Text color="black900" size="title3">
          총 지원자 수:
        </Text>
        <Text color="black900" size="title1">
          44명
        </Text>
        <Text color="black900" size="title3" margin={[0, 0, 0, 4]}>
          총 경쟁률:
        </Text>
        <Text color="black900" size="title1">
          0.6 : 1
        </Text>
      </_StatusCount>
      <Text color="black900" size="header2">
        신입생 전형유형별 지원률
      </Text>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
      }}
      >
        <Text width={80} align="start" size="body1" color="black900">
          일반
        </Text>
        <_Application>
          <_ApplicationRate>
            <Text margin={[0, 0, 0, 12]} color="realWhite" size="body1">
              24명(총 50명)
            </Text>
          </_ApplicationRate>
        </_Application>
        <Text width={80} align="start" size="body1" color="black900">
          0.48 : 1
        </Text>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
      }}
      >
        <Text width={80} align="start" size="body1" color="black900">
          마이스터
        </Text>
        <_Application>
          <_ApplicationRate>
            <Text margin={[0, 0, 0, 12]} color="realWhite" size="body1">
              24명(총 50명)
            </Text>
          </_ApplicationRate>
        </_Application>
        <Text width={80} align="start" size="body1" color="black900">
          0.6 : 1
        </Text>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
      }}
      >
        <Text width={80} align="start" size="body1" color="black900">
          사회통합
        </Text>
        <_Application>
          <_ApplicationRate>
            <Text margin={[0, 0, 0, 12]} color="realWhite" size="body1">
              24명(총 50명)
            </Text>
          </_ApplicationRate>
        </_Application>
        <Text width={80} align="start" size="body1" color="black900">
          0.6 : 1
        </Text>
      </div>
      <div style={{ width: '100%' }}>
        <Text color="black900" size="header2" margin={[0, 0, 20, 0]}>
          분야 및 지역별 경쟁률
        </Text>
        <div style={{ display: 'flex', gap: 20, width: '100%' }}>
          <_CompetitionRate>
            <Text color="black900" size="header3">
              대전
            </Text>
            <Text color="black900" size="title3">
              일반전형:
            </Text>
            <Text color="black900" size="title3">
              마이스터 전형:
            </Text>
            <Text color="black900" size="title3">
              사회통합 전형:
            </Text>
          </_CompetitionRate>
          <_CompetitionRate>
            <Text color="black900" size="header3">
              전국
            </Text>
            <Text color="black900" size="title3">
              일반전형:
            </Text>
            <Text color="black900" size="title3">
              마이스터 전형:
            </Text>
            <Text color="black900" size="title3">
              사회통합 전형:
            </Text>
          </_CompetitionRate>
        </div>
      </div>
      <Text color="black900" size="header2">
        전형 및 지역별 점수 현황
      </Text>
      <div style={{ display: 'flex', gap: 20, width: '100%' }}>
        <CommonScoreCard
          title="일반 전형"
          ranges={['158~170', '145~157', '132~144', '119~131', '106~118', '93-105', '80-92', '-70']}
          daejeonRanges={data?.[0]}
          nationWideRanges={data?.[1]}
        />
        <SpecialScoreCard
          title="마이스터 전형"
          ranges={['98-110', '85-97', '72-84', '59-71', '46-58', '33-45', '20-32', '-19']}
          daejeonRanges={data?.[2]}
          nationWideRanges={data?.[3]}
        />
        <SpecialScoreCard
          title="사회통합 전형"
          ranges={['98-110', '85-97', '72-84', '59-71', '46-58', '33-45', '20-32', '-19']}
          daejeonRanges={data?.[4]}
          nationWideRanges={data?.[5]}
        />
      </div>
    </_Wrapper>
  );
}

export default ReceptionStatus;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px 200px 20px;
  margin-top: 7rem;
  gap: 40px;
`;

const _StatusCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: ${theme.color.black100};
  border-radius: 10px;
`;

const _Application = styled.div`
  position: relative;
  width: 80%;
  height: 45px;
  background-color: ${theme.color.green100};
  border-radius: 8px;
  overflow: hidden;
`;

const _ApplicationRate = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 45px;
  background-color: ${theme.color.green500};
`;

const _CompetitionRate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  background-color: ${theme.color.black50};
  border: 1px solid ${theme.color.black100};
  border-radius: 10px;
  gap: 10px;
`;
