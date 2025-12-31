export interface ExperienceDescription {
  role?: string[];
  highlight?: string[];
}

export interface Experience {
  job: string;
  company: string;
  companyLogo: string;
  location: string;
  workType: string;
  start: string;
  end?: string;
  description: string | ExperienceDescription;
}
