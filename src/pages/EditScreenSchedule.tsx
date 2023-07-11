import { Button, Dropdown, Text, theme } from '@team-entry/design_system';
import styled from '@emotion/styled';
import ProgressBar from '../components/ProgressBar';
import { useEffect, useState } from 'react';
import { generateNumberArray } from '@/utils/GenerateNumberArray';
import { useDropDown } from '@/hooks/useDropDown';
import { editSchedule, getSchedule } from '@/utils/api/schedule';

const scheduleType = ['START_DATE', 'FIRST_ANNOUNCEMENT', 'INTERVIEW', 'SECOND_ANNOUNCEMENT', 'END_DATE'];

const screenScheduleProgress = ['원서 제출', '1차 발표', '심층 면접', '최종발표'];

const EditScreenSchedule = () => {
  const { mutate } = editSchedule();
  const { data } = getSchedule();

  console.log(data?.schedules[0].date.slice(5, 7));

  const {
    form: startDropDown,
    onChange: onChangeStartDropDown,
    setForm: setStartDropDown,
  } = useDropDown([
    ['01월', '01일', '00시', '00분'],
    ['01월', '01일', '00시', '00분'],
    ['01월', '01일', '00시', '00분'],
    ['01월', '01일', '00시', '00분'],
  ]);

  const { form: endDropDown, onChange: onChangeEndDropDown } = useDropDown([['01월', '01일', '00시', '00분']]);

  const dropDownOption = (index: number) => {
    switch (index) {
      case 0:
        return generateNumberArray(1, 12, '월');
      case 1:
        return generateNumberArray(1, 31, '일');
      case 2:
        return generateNumberArray(0, 23, '시');
      case 3:
        return generateNumberArray(0, 59, '분');
      default:
        return [];
    }
  };

  useEffect(() => {
    setStartDropDown((prev) => [...prev]);
  }, [startDropDown]);

  return (
    <_Wrapper>
      <Text size="header1" color="black900">
        전형 일정 수정
      </Text>
      <Text color="black400" size="title1">
        전형 일정은 다음과 같이 표시됩니다
      </Text>
      <_ProgressWrapper>
        <ProgressBar />
      </_ProgressWrapper>
      <_Table>
        <_THead>
          {screenScheduleProgress.map((progressName) => (
            <Text display="flex" color="black900" size="title1" width={200}>
              {progressName}
            </Text>
          ))}
        </_THead>
        <_TBody>
          <Text width={200} color="black900" size="title1">
            시작
          </Text>
          {startDropDown.map((res, typeIdx) => {
            {
              return (
                <_DropDowns>
                  {res.map((res, dateIdx) => {
                    return (
                      <Dropdown
                        width={80}
                        onChange={(value) => {
                          onChangeStartDropDown([typeIdx, dateIdx], value);
                        }}
                        options={dropDownOption(dateIdx)}
                        value={res}
                      />
                    );
                  })}
                </_DropDowns>
              );
            }
          })}
        </_TBody>
        <_TBody>
          <Text width={200} color="black900" size="title1">
            마감
          </Text>
          {endDropDown.map((res, typeIdx) => {
            {
              return (
                <_DropDowns>
                  {res.map((res, dateIdx) => {
                    return (
                      <Dropdown
                        width={80}
                        onChange={(value) => onChangeEndDropDown([typeIdx, dateIdx], value)}
                        options={generateNumberArray(0, 12, '월')}
                        value={res}
                      />
                    );
                  })}
                </_DropDowns>
              );
            }
          })}
        </_TBody>
      </_Table>
      <_Buttons>
        <Button
          color="green"
          onClick={() => {
            mutate({
              type: 'FIRST_ANNOUNCEMENT',
              date: '2021-10-20`T`12:05:55',
            });
          }}
        >
          저장
        </Button>
        <Button color="green" kind="outlined" onClick={() => {}}>
          취소
        </Button>
      </_Buttons>
    </_Wrapper>
  );
};

export default EditScreenSchedule;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 65rem;
  width: 100%;
  margin: 7rem auto 0;
  padding: 0 20px 200px;
  gap: 25px;
`;

const _ProgressWrapper = styled.div`
  padding: 10px;
  border: 1px solid ${theme.color.black200};
  border-radius: 20px;
`;

const _Table = styled.div`
  width: 100%;
`;

const _THead = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${theme.color.black100};
`;

const _TBody = styled.div`
  position: relative;
  width: 100%;
  height: 138px;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid ${theme.color.black100};
  &: nth-of-type(2) {
    z-index: 99;
  }
`;

const _Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const _DropDowns = styled.div`
  width: 150px;
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(2, 1fr);
  margin-right: 50px;
  > div {
    position: relative;
    &: nth-of-type(1) {
      z-index: 2;
    }
    &: nth-of-type(2) {
      z-index: 2;
    }
    &: nth-of-type(3) {
      z-index: 1;
    }
    &: nth-of-type(4) {
      z-index: 1;
    }
  }
`;
