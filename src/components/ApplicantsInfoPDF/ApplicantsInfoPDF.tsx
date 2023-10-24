import React from 'react';
import { IGetPdfApplicatnsInfoResponse } from '@/utils/api/admin/types';
import styled from '@emotion/styled';

const ApplicantsInfoPDF = ({ ...props }: IGetPdfApplicatnsInfoResponse) => {
  return (
    <>
      <div className="WordSection2">
        <p className="MsoNormal" style={{ textAlign: 'center', margin: 0 }}>
          <b>
            <span style={{ fontSize: '20px' }}>자기소개서 및 학업계획서</span>
          </b>
        </p>
      </div>
      <_TABLE style={{ border: '1px solid black', marginBottom: '50px' }}>
        <tbody>
          <tr>
            <_TD rowSpan={3} style={{ width: '7%' }}>
              인적
              <br />
              사항
            </_TD>
            <_TD style={{ padding: '10px', width: '10%' }}>성명</_TD>
            <_TD style={{ padding: '10px', width: '20%' }}>{props.name}</_TD>
            <_TD style={{ padding: '10px', width: '10%' }}>접 수 번 호</_TD>
            <_TD style={{ padding: '10px', width: '20%' }}>{props.receipt_code}</_TD>
          </tr>
          <tr>
            <_TD style={{ padding: '10px', width: '10%' }}>연락처</_TD>
            <_TD style={{ padding: '10px', width: '20%' }}>{props.telephone_number}</_TD>
            <_TD style={{ padding: '10px', width: '10%' }}>출신 중학교</_TD>
            <_TD style={{ padding: '10px', width: '20%' }} colSpan={3}>
              {props.school_name}
            </_TD>
          </tr>
          <tr>
            <_TD style={{ padding: '10px', width: '10%' }}>주소</_TD>
            <_TD style={{ padding: '10px', width: '20%' }} colSpan={3}>
              {props.address}
            </_TD>
          </tr>
        </tbody>
      </_TABLE>
      <_TABLE style={{ marginBottom: '50px', textAlign: 'left' }}>
        <tbody>
          <tr>
            <_TD style={{ textAlign: 'left', fontSize: '15.5px' }}>
              ◎ <b>자기소개서</b> 내용은 특별한 형식이 없으며 개인의 특성 및 성장 과정, 취미·특기, 학교 생활, 가족
              안에서의 역할, 남들보다 뛰어나다고 생각하는 자신의 장점(특성 혹은 능력)과 보완·발전시켜야 할 단점에 대하여
              기술하십시오.
            </_TD>
          </tr>
          <tr>
            <_TD style={{ minHeight: '230px', textAlign: 'left', padding: '0px 7px' }}>
              <p style={{ lineHeight: '25px' }}>(빈칸 포함 1,600자 이내)</p>
              <p style={{ minHeight: '230px', wordBreak: 'keep-all', whiteSpace: 'pre-line' }}>
                {props.self_introduce}
              </p>
            </_TD>
          </tr>
        </tbody>
      </_TABLE>
      <_TABLE style={{ marginBottom: '50px' }}>
        <tbody>
          <tr>
            <_TD style={{ textAlign: 'left', fontSize: '15.5px' }}>
              ◎ <b>학업계획서</b>는 자신이 본교를 선택하게 된 구체적인 사유(지원 동기)와 고등학생이 된 후 이루고자 하는
              <br />
              목표를 달성하기 위한 학업계획을 상세하게 기술하십시오.
            </_TD>
          </tr>
          <tr>
            <_TD style={{ minHeight: '230px', textAlign: 'left', padding: '0px 7px' }}>
              <p style={{ lineHeight: '25px' }}>(빈칸 포함 1,600자 이내)</p>
              <p style={{ minHeight: '230px', wordBreak: 'keep-all', whiteSpace: 'pre-line' }}>{props.study_plan}</p>
            </_TD>
          </tr>
        </tbody>
      </_TABLE>
    </>
  );
};

export default ApplicantsInfoPDF;

const _TD = styled.td`
  border: 1px solid black;
  text-align: center;
`;

const _TABLE = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  border: 1px solid black;
  width: 100%;
`;
