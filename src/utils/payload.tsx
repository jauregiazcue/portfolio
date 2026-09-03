//--------------------------------------------------
//-----------------ProjectCardGroup-----------------

import type { CardType } from "@/PalacePackage/utils/interfaces/payload";

//--------------------------------------------------
export interface ProjectCardPayload {
  title: string;
  description: string;
  year: string;
  image?: string;
  type?: CardType;
  url?: string;
  url2?: string;
}

export interface StudiesCardPayload {
  title: string;
  subtitle: string;
  year: string;
  place: string;
}

//--------------------------------------------------
const MazeGenType = {
  aldous: 0,
  backtracking: 1,
  binaryTree: 2,

  ellers: 3,
  huntAndKill: 4,
  kruskals: 5,

  prims: 6,
  recursiveDivision: 7,
  sideWider: 8,
  wilsons: 9
}

type MazeGenType = (typeof MazeGenType)[keyof typeof MazeGenType];
export { MazeGenType };