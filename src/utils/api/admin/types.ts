import { ApplicationType, EducationStatusType, HeadCountType } from '@/interface/type';

export interface IApplicationListRequest {
  size: number;
  page: number;
  isDaejeon: boolean;
  isNationWide: boolean;
  isSubmitted: boolean;
  isNotSubmitted: boolean;
  inOfHeadcount: boolean;
  outOfHeadcount: boolean;
  isCommon: boolean;
  isMeister: boolean;
  isSocial: boolean;
  receiptCode: string;
  schoolName: string;
  name: string;
}

export interface IApplicationListResponse {
  total_elements: number;
  total_pages: number;
  applicants: IApplicant[];
}

export interface IApplicant {
  receipt_code: number;
  name: string;
  email: string;
  is_daejeon: boolean;
  application_type: ApplicationType;
  is_prints_arrived: boolean;
  is_submitted: boolean;
  headcount: HeadCountType;
}

export interface IApplicationCountRequest {
  application_type: ApplicationType;
  is_daejeon: boolean;
  count: number;
}

export interface IApplicationDetailResponse {
  status: {
    is_printed_arrived: boolean;
    is_submitted: boolean;
  };
  common_information: {
    name: string;
    school_name: string;
    email: string;
    telephone_number: string;
    school_tel: string;
    parent_tel: string;
  };
  more_information: {
    photo_url: string;
    birthday: string;
    education_status: EducationStatusType;
    application_type: ApplicationType;
    application_remark: '';
    address: string;
    detail_address: string;
    head_count: boolean;
  };
  evaluation: {
    volunteer_time: number;
    conversion_score: number;
    day_absence_count: number;
    lecture_absence_count: number;
    early_leave_count: number;
    lateness_count: number;
    average_score: number;
    self_introduce: string;
    study_plan: string;
  };
}

//특별전형 점수
export interface ISpecialScoreDistribution {
  '98-110': number;
  '85-97': number;
  '72-84': number;
  '59-71': number;
  '46-58': number;
  '33-45': number;
  '20-32': number;
  '-19': number;
  application_type: 'MEISTER' | 'SOCIAL';
  daejeon: boolean;
}

//일반전형 점수
export interface ICommonScoreDistribution {
  '158-170': number;
  '145-157': number;
  '132-144': number;
  '119-131': number;
  '106-118': number;
  '93-105': number;
  '80-92': number;
  '-79': number;
  application_type: 'COMMON';
  daejeon: boolean;
}

export interface IGetScoreStatisticsResponse {
  0: ICommonScoreDistribution;
  1: ICommonScoreDistribution;
  2: ISpecialScoreDistribution;
  3: ISpecialScoreDistribution;
  4: ISpecialScoreDistribution;
  5: ISpecialScoreDistribution;
}
