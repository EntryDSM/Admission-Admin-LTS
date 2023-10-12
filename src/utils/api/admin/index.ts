import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Toast } from '@team-entry/design_system';
import { instance } from '../axios';
import {
  IApplicant,
  IApplicationCountRequest,
  IApplicationDetailResponse,
  IApplicationListRequest,
  IApplicationListResponse,
  IGetScoreStatisticsResponse,
} from './types';
import fileSaver from 'file-saver';

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
    onError: () => {
      Toast('수정에 실패하였습니다.', { type: 'error' });
    },
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

/** 지원자 목록 엑셀 출력 */
export const getApplicationListExcel = () => {
  const response = async () => {
    const { data } = await instance.get(`${router}/excel/applicants`, {
      responseType: 'blob',
    });
    return data;
  };

  const date = new Date();

  return useMutation(response, {
    onSuccess: (res) => {
      fileSaver.saveAs(
        res,
        `지원자목록_${date.getMonth() + 1}월${date.getDate()}일_${date.getHours()}시${date.getMinutes()}분`,
      );
    },
  });
};

/** 원서 도착 상태 여부 변경 */
export const changeArrivedStatus = () => {
  const response = async ({
    receipt_code,
    is_prints_arrived,
  }: {
    receipt_code: number;
    is_prints_arrived: boolean;
  }) => {
    const { data } = await instance.patch(
      `${router}/application/prints-arrived/${receipt_code}?is_prints_arrived=${is_prints_arrived}`,
    );
    return data;
  };

  const queryClient = useQueryClient();

  return useMutation(response, {
    onSuccess: (res) => {
      queryClient.invalidateQueries(['applicationList']);
      Toast('원서 도착 상태가 수정되었습니다', { type: 'success' });
    },
    onError: () => {
      Toast('원서 도착 상태 수정에 실패하였습니다', { type: 'error' });
    },
  });
};
