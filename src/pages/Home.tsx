import styled from '@emotion/styled';
import { HStack, Stack, Text, VStack } from '@team-entry/design_system';
import ProgressBar from '../components/ProgressBar';

const Home = () => {
  return (
    <_Wrapper>
      <Stack margin={[0, 'auto']}>
        <VStack margin={['top', 30]}>
          <Text size="header1" color="black900">
            지금은 원서제출 기간이 아닙니다
          </Text>
          <Text size="title2" color="black600">
            원서 제출 : 10월 17일 ~ 10월 20일
          </Text>
        </VStack>
        <ProgressBar />
      </Stack>
    </_Wrapper>
  );
};

export default Home;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 7rem;
  gap: 25px;
`;
