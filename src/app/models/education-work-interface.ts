import { Education } from './education-interface';
import { WorkExperience } from './work-experience-interface';

export interface EducationWork {
  education: Education[];
  jobs: WorkExperience[];
}