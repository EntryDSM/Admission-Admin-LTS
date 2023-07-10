import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import { instance } from '../axios';
import {
  IApplicant,
  IApplicationCountRequest,
  IApplicationDetailResponse,
  IApplicationListRequest,
  IApplicationListResponse,
  IGetScoreStatisticsResponse,
} from './types';

const router = 'admin';

/** 지원자 목록 */
export const getApplicationList = ({
  size,
  page,
  isDaejeon,
  isNationWide,
  isSubmitted,
  isNotSubmitted,
  inOfHeadcount,
  outOfHeadcount,
  isCommon,
  isMeister,
  isSocial,
  receiptCode,
  schoolName,
  name,
}: IApplicationListRequest) => {
  const response = async () => {
    const { data } = await instance.get(
      `${router}/applicants?size=${size}&page=${page}&isDaejeon=${isDaejeon}&isNationwide=${isNationWide}&isSubmitted=${isSubmitted}&isNotSubmitted=${isNotSubmitted}&inOfHeadcount=${inOfHeadcount}&outOfHeadcount=${outOfHeadcount}&isCommon=${isCommon}&isMeister=${isMeister}&isSocial=${isSocial}&receiptCode=${receiptCode}&schoolName=${schoolName}&name=${name}`,
    );
    return data;
  };
  return useQuery<IApplicationListResponse>(
    [
      'applicationList',
      size,
      page,
      isDaejeon,
      isNationWide,
      isSubmitted,
      isNotSubmitted,
      inOfHeadcount,
      outOfHeadcount,
      isCommon,
      isMeister,
      isSocial,
      receiptCode,
      schoolName,
      name,
    ],
    response,
  );
};

/** 지원자 세부 정보 */
export const getApplicantDetail = (id: string) => {
  const resposne = async () => {
    const { data } = await instance.get(`${router}/applicant/${id}`);
    return data;
  };
  return useQuery<IApplicationDetailResponse>(['applicationList', id], resposne, { enabled: !!id });
};

/** 유형별 인원 변경 */
export const editApplicationCount = () => {
  const response = async (params: IApplicationCountRequest) => {
    const { data } = await instance.post(`${router}/application-count`, params);
    return data;
  };

  return useMutation(response, {
    onSuccess: () => {},
  });
};

/** 유형별 인원 가져오기 */
export const getApplicationCount = () => {
  const response = async () => {
    const { data } = await instance.get(`${router}/application-count`);
    return data;
  };
  return useQuery<IApplicationCountRequest[]>(['applicationCount'], response);
};

/** 접수 현황 집계(점수) */
export const getStaticsScore = () => {
  const response = async () => {
    const { data } = await instance.get(`${router}/statics/score`);
    return data;
  };

  return useQuery<IGetScoreStatisticsResponse>(['staticsScore'], response);
};

/** 접수 현황 집계(지원자) */
export const getStaticCounts = () => {
  const response = async () => {
    const { data } = await instance.get(`${router}/statics/count`);
    return data;
  };
  return useQuery<IApplicationCountRequest[]>(['staticCount'], response);
};
