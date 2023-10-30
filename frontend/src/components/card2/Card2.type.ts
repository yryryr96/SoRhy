export interface CardType {
  title: string;
  nickname: string;

  giveaways: string;

  probability: string;

  remaintime: string;
  id?: string;

  onClick?: (e: any) => any;
}

