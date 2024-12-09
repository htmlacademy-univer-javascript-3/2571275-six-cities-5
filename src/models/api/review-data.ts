import {ExternalUserData} from './user-data.ts';

export type ReviewData = {
  id: string;
  date: Date;
  user: ExternalUserData;
  comment: string;
  rating: number;
}

export type NewReviewData = Pick<ReviewData, 'comment' | 'rating'>;

