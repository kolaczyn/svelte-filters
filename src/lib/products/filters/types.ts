export type Status = {
  id: string;
  type: string;
  name: string;
};

export type StatusListDto = {
  data: Status[];
};
