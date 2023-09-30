/** 전형 일정 수정 */

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { instance } from '../axios';
import { IEditScheduleRequest, IGetScheduleResponse } from './type';

const router = 'schedule';

export const editSchedule = () => {
  const response = async (params: IEditScheduleRequest[]) => {
    const { data } = await instance.patch(`${router}`, { schedules: params });
    return data;
  };
  const queryClient = useQueryClient();
  return useMutation(response, {
    onSuccess: () => {
      queryClient.invalidateQueries(['schedule']);
      alert('수정 성공');
    },
    onError: () => {
      alert('수정 실패');
    },
  });
};

export const getSchedule = () => {
  const response = async () => {
    const { data } = await instance.get(`${router}`);
    return data;
  };

  return useQuery<IGetScheduleResponse>(['schedule'], response);
};
