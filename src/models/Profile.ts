export interface Profile {
  name: string;
  job: string;
  avatar: string;
  aboutMe: AboutMe;
  socialNetwork: SocialNetwork[];
}

interface AboutMe {
  greeting: string;
  introduction: string;
  journey: Section;
  expertise: ExpertiseSection;
  impact: ImpactSection;
  philosophy: Section;
  beyondCode: Section;
  callToAction: string;
}

interface Section {
  title: string;
  content: string;
}

interface ExpertiseSection {
  title: string;
  items: string[];
}

interface ImpactSection {
  title: string;
  metrics: Metric[];
}

interface Metric {
  value: string;
  label: string;
}

interface SocialNetwork {
  name: string;
  url: string;
}
