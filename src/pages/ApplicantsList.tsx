import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Checkbox, Input, Stack, Text, theme, VStack } from '@team-entry/design_system';
import { getApplicationList } from '@/utils/api/admin';
import { IApplicationListRequest } from '@/utils/api/admin/types';
import { applicationTypeToKorean } from '@/utils/translate';
import PageNation from '@/components/PageNation';
import { SideBar } from '@/components/SideBar';
import { StudentInfo } from '@/components/StudentInfo';

const ApplicantsList = () => {
  const [filter, setFilter] = useState<IApplicationListRequest>({
    size: 10,
    page: 0,
    isDaejeon: false,
    isNationWide: false,
    isSubmitted: false,
    isNotSubmitted: false,
    inOfHeadcount: false,
    outOfHeadcount: false,
    isCommon: false,
    isMeister: false,
    isSocial: false,
    receiptCode: '',
    schoolName: '',
    name: '',
  });

  const onChangeCheckBox = (e: React.MouseEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setFilter((prev) => ({ ...prev, [name]: checked }));
  };

  const [isOpen, setIsOpen] = useState(false);
  const [receiptCode, setReceiptCode] = useState('');

  const { data: application_list } = getApplicationList(filter);

  return (
    <_Wrapper>
      <Text size="header1" color="black900" margin={[0, 0, 30, 0]}>
        지원자 목록
      </Text>
      <Input
        width={300}
        icon="Magnifier"
        type="text"
        placeholder="검색"
        onChange={(e) => setFilter({ ...filter, name: e.target.value })}
      />
      <Text color="black900" size="title2" margin={[40, 0, 8, 0]}>
        필터
      </Text>
      <_CheckBoxs>
        <Checkbox
          color="green"
          isChecked={filter.isDaejeon}
          value=""
          label="대전"
          name="isDaejeon"
          onClick={onChangeCheckBox}
        />
        <Checkbox
          color="green"
          isChecked={filter.isNationWide}
          value=""
          label="전국"
          name="isNationWide"
          onClick={onChangeCheckBox}
        />
        <_Line />
        <Checkbox
          color="green"
          isChecked={filter.isSubmitted}
          value=""
          label="최종제출 완료"
          name="isSubmitted"
          onClick={onChangeCheckBox}
        />
        <Checkbox
          color="green"
          isChecked={filter.isNotSubmitted}
          value=""
          label="최종제출 미완료"
          name="isNotSumbmitted"
          onClick={onChangeCheckBox}
        />
        <_Line />
        <Checkbox
          color="green"
          isChecked={filter.isCommon}
          value=""
          label="일반전형"
          name="isCommon"
          onClick={onChangeCheckBox}
        />
        <Checkbox
          color="green"
          isChecked={filter.isMeister}
          value=""
          label="마이스터 전형"
          name="isMeister"
          onClick={onChangeCheckBox}
        />
        <Checkbox
          color="green"
          isChecked={filter.isSocial}
          value=""
          label="사회통합 전형"
          name="isSocial"
          onClick={onChangeCheckBox}
        />
      </_CheckBoxs>
      <_THead>
        <Text align="center" width={110} color="black700" size="body1">
          접수번호
        </Text>
        <Text align="center" width={110} color="black700" size="body1">
          이름
        </Text>
        <Text align="center" width={110} color="black700" size="body1">
          지역
        </Text>
        <Text align="center" width={110} color="black700" size="body1">
          전형
        </Text>
        <Text align="center" width={110} color="black700" size="body1">
          원서 제출 상태
        </Text>
        <Text align="center" width={110} color="black700" size="body1">
          최종제출
        </Text>
      </_THead>
      {application_list?.applicants.map((applicant, idx) => (
        <_TBody
          onClick={() => {
            setIsOpen((prev) => !prev);
            setReceiptCode(String(applicant.receipt_code));
          }}
        >
          <Text align="center" width={110} color="black800" size="body3">
            {idx + 1}
          </Text>
          <Text align="center" width={110} color="black800" size="body3">
            {applicant.name}
          </Text>
          <Text align="center" width={110} color="black800" size="body3">
            {applicant.is_daejeon ? '대전' : '전국'}
          </Text>
          <Text align="center" width={110} color="black800" size="body3">
            {applicationTypeToKorean[applicant.application_type]} 전형
          </Text>
          <Stack width={110} justify="center">
            <Checkbox
              color="green"
              label=""
              name=""
              onClick={() => {}}
              value=""
              isChecked={applicant.is_prints_arrived}
            />
          </Stack>
          <Text align="center" width={110} color="black800" size="body3">
            {applicant.is_submitted ? '완료' : '미완료'}
          </Text>
        </_TBody>
      ))}
      <SideBar
        title="접수 상세정보"
        isOpened={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        <StudentInfo receiptCode={receiptCode} />
      </SideBar>
      <PageNation />
    </_Wrapper>
  );
};

export default ApplicantsList;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px 200px 20px;
  margin-top: 7rem;
`;

const _CheckBoxs = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const _Line = styled.div`
  width: 1px;
  height: 22px;
  background-color: ${theme.color.black300};
`;

const _THead = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  border-top: 1px solid ${theme.color.black900};
  border-bottom: 1px solid ${theme.color.black900};
  padding: 14px 20px;
  margin-top: 20px;
`;

const _TBody = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  border-bottom: 1px solid ${theme.color.black100};
  padding: 20.5px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.green100};
  }
`;
