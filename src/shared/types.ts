export type OG = {
  title: string;
  type: string;
  url: string;
};

export type SeoData = {
  title: string;
  description: string;
  og: OG;
};

export type Profile = {
  title: string;
  logoName: string;
  subTitle: string;
  about: string;
  resumeLink: string;
  portfolioRepository: string;
  githubProfile: string;
};

export type SocialMediaLink = {
  name: string;
  link: string;
  fontAwesomeIcon: string;
  backgroundColor: string;
};

export type EducationHead = {
  title: string;
  description: string;
};

export type Qualifications = {
  title: string;
  subtitle: string;
  logoPath: string;
  altName: string;
  duration: string;
  descriptions: string[];
  website_link: string;
};

export type Skill = {
  skillName: string;
  fontAwesomeClassname: string;
  style: {
    color: string;
    backgroundColor?: string;
  };
};

export type SkillSection = {
  title: string;
  fileName: string;
  skills: string[];
  softwareSkills: Skill[];
};

export type ExperienceSection = {
  title: string;
  experiences: {
    title: string;
    company: string;
    companyUrl: string;
    logoPath: string;
    duration: string;
    location: string;
    description: string;
    color: string;
    backgroundColor?: string;
  }[];
};

export type Experience = {
  title: string;
  subtitle: string;
  description: string;
  headerImagePath: string;
  sections: ExperienceSection[];
};

export type Tech = {
  name: string;
  icon: string;
  color?: string;
};

export type Project = {
  id: string;
  name: string;
  createdAt: string;
  url: string;
  description: string;
  isFork: boolean;
  imgUrl: string;
  websiteUrl: string;
  techStack: Tech[];
};

export type ProjectSection = {
  title: string;
  description: string;
  avatarImagePath: string;
  projects: Project[];
};

export type Section = {
  title: string;
  subtitle?: string;
  description?: string;
  profileImagPath?: string;
  avatarImagePath?: string;
  locationMapLink?: string;
};

export type ContactSection = {
  contactSection: Section;
  addressSection: Section;
  phoneSection: Section;
  emailSection: Section;
};
