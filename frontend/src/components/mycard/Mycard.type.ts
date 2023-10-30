export interface MycardType {
  type: string;

  title: string;

  writername: string;

  giveaways: string;

  remaintime: string;
  probability?: string;
  endtime: string;

  headcount?: string;
  closedheadcount?: string;
  onClick?: (e: any) => any;

  closed?: string;

}

