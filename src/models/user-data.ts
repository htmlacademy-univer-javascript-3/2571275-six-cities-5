export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};


export type ExternalUserData = Pick<UserData, 'name' | 'avatarUrl' | 'isPro'>;
