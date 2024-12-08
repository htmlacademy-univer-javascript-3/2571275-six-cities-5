export type ReviewData = {
  id: string;
  date: Date;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export type NewReviewData = Pick<ReviewData, 'comment' | 'rating'>

