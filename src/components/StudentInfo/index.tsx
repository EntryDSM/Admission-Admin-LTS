import { getApplicantDetail } from '@/utils/api/admin';
import { regex } from '@/utils/regex';
import { applicationTypeToKorean, educationStatusTypeToKorean } from '@/utils/translate';
import styled from '@emotion/styled';
import { Button, HStack, Text, VStack } from '@team-entry/design_system';
import { useState } from 'react';

interface IPropsType {
  receiptCode: string;
}

export const StudentInfo = ({ receiptCode }: IPropsType) => {
  const { phone_number } = regex;

  const { data: applciation_detail } = getApplicantDetail(receiptCode);

  const [isIntroduce, setIsIntroduce] = useState(true);

  return (
    <>
      {applciation_detail?.status.is_submitted ? (
        <VStack>
          <_Img src={applciation_detail?.more_information.photo_url} alt="" />
          <Grid>
            <VStack gap={10}>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  이름
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.common_information.name}
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  생년월일
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.more_information.birthday}
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  주소
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.more_information.address}
                </Text>
              </HStack>
              <HR />
              <Text color="black900" size="title2">
                지원 정보
              </Text>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  학교 이름
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.common_information.school_name}
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  졸업 상태
                </Text>
                <Text color="black900" size="body2">
                  {educationStatusTypeToKorean[applciation_detail?.more_information.education_status]}
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  전형
                </Text>
                <Text color="black900" size="body2">
                  {applicationTypeToKorean[applciation_detail?.more_information.application_type]}
                </Text>
              </HStack>
              <HR />
              <Text color="black900" size="title2">
                지원 정보
              </Text>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  이메일
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.common_information.email}
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  학생 본인 연락처
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.common_information.telephone_number}
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  부모님 연락처
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.common_information.parent_tel}
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  학교 연락처
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.common_information.school_tel}
                </Text>
              </HStack>
            </VStack>
            <VStack gap={10}>
              <Text color="black900" size="title2">
                성적 및 봉사 정보
              </Text>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  봉사시간
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.evaluation.volunteer_time}시간
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  성적 점수
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.evaluation.conversion_score}점
                </Text>
              </HStack>
              <HR />
              <Text color="black900" size="title2">
                출석 정보
              </Text>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  무단 결석 일수
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.evaluation.day_absence_count}점
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  무단 조퇴 일수
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.evaluation.early_leave_count}일
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  무단 결과 일수
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.evaluation.lecture_absence_count}점
                </Text>
              </HStack>
              <HStack align="center" gap={20}>
                <Text color="black900" size="body1">
                  무단 지각 일수
                </Text>
                <Text color="black900" size="body2">
                  {applciation_detail?.evaluation.lateness_count}일
                </Text>
              </HStack>
            </VStack>
          </Grid>
          <HStack margin={[40, 0, 10, 0]} gap={10}>
            <Button
              color="green"
              kind={isIntroduce ? 'contained' : 'outlined'}
              onClick={() => {
                setIsIntroduce(true);
              }}
            >
              자기소개서
            </Button>
            <Button
              color="green"
              kind={isIntroduce ? 'outlined' : 'contained'}
              onClick={() => {
                setIsIntroduce(false);
              }}
            >
              학업 계획서
            </Button>
          </HStack>
          <Text color="black900" size="body2">
            {isIntroduce ? applciation_detail?.evaluation.self_introduce : applciation_detail?.evaluation.study_plan}
          </Text>
        </VStack>
      ) : (
        <>
          <VStack gap={20}>
            <Text color="black900" size="title3" margin={[40, 0, 20, 0]}>
              최종제출 미완료 사용자는 기본 인적사항만 표시됩니다
            </Text>
            <HStack gap={20} align="center">
              <Text color="black900" size="body1">
                이름
              </Text>
              <Text color="black900" size="body3">
                {applciation_detail?.common_information.name}
              </Text>
            </HStack>
            <HStack gap={20} align="center">
              <Text color="black900" size="body1">
                학교 이름
              </Text>
              <Text color="black900" size="body3">
                {applciation_detail?.common_information.school_name}
              </Text>
            </HStack>
            <HStack gap={20} align="center">
              <Text color="black900" size="body1">
                이메일
              </Text>
              <Text color="black900" size="body3">
                {applciation_detail?.common_information.email}
              </Text>
            </HStack>
            <HStack gap={20} align="center">
              <Text color="black900" size="body1">
                학생 본인 연락처
              </Text>
              <Text color="black900" size="body3">
                {phone_number(String(applciation_detail?.common_information.telephone_number))}
              </Text>
            </HStack>
            <HStack gap={20} align="center">
              <Text color="black900" size="body1">
                부모님 연락처
              </Text>
              <Text color="black900" size="body3">
                {phone_number(String(applciation_detail?.common_information.parent_tel))}
              </Text>
            </HStack>
            <HStack gap={20} align="center">
              <Text color="black900" size="body1">
                학교 전화번호
              </Text>
              <Text color="black900" size="body3">
                {phone_number(String(applciation_detail?.common_information.school_tel))}
              </Text>
            </HStack>
          </VStack>
        </>
      )}
    </>
  );
};

const _Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 40px 0;
`;

const HR = styled.hr`
  margin: 20px 0;
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 75px;
`;
