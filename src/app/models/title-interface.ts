export interface Title {
  id: number,
  char: string,
  animate: boolean
}

export interface Titles {
  workEducation: Title[],
  skills: Title[],
  projects: Title[]
}