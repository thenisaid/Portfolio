import { Project, Skill, SocialLink, ExperienceItem } from './types';

export const USER_IMAGE_URL = "https://picsum.photos/id/1/1200/800"; // Placeholder remains

export const HERO_SPLINE_URL = "https://my.spline.design/ticktockinteractivelanding-N2GomyNDaDuQTHvnx2UKijS6/";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "현대자동차 (Hyundai Motor Company)",
    period: "2024 — Present",
    role: "UX Writer",
    descriptions: [
      "인포테인먼트&모바일 통합 UX 라이팅 가이드라인 구축 및 프로세스 정리",
      "myHyundai/MY GENESIS/Kia app 앱 UX 라이팅 고도화: 문구 사용자 최적화 수정 및 협업 프로세스 정립",
      "디자인 시스템(ODS) UX 라이팅 가이드라인 확립: 디자인 시스템에 맞춘 UX 라이팅 가이드라인 최적화&Figma 플러그인 툴 개발"
    ]
  },
  {
    company: "야놀자 (Yanolja)",
    period: "2022 — 2024",
    role: "UX Writer",
    descriptions: [
      "슈퍼앱 보이스 톤 정립: 숙박, 레저, 교통 통합 서비스 운영에 따른 일관된 브랜드 보이스 확립",
      "결제 및 예약 여정 최적화: 단계별 안내 문구 및 에러 메시지 개선으로 예약 전환율(CVR) 유의미한 상승 견인",
      "마케팅-서비스 라이팅 통합: 프로모션 문구와 서비스 내 UX 라이팅의 연계성을 강화하여 끊김 없는 사용자 경험 설계"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "'UX 라이터로 살아가기' 컨퍼런스",
    category: 'Conference Host',
    description: '국내 유일 UX 라이팅 컨퍼런스 기획 및 운영, 누적 참여자 1,000명 돌파하며 직무 인식 제고 기여',
    image: './images/project-01.png',
    tags: ['Conference Planning', 'Community Building', 'Branding'],
  },
  {
    id: '2',
    title: '책 집필 & Class101 강의',
    category: 'Writer & Educator',
    description: "UX 라이팅 책 집필 및 Class101 '실전 UX 라이팅' 강의 런칭을 통한 노하우 공유",
    image: './images/project-02.png',
    tags: ['Book Publishing', 'Class101', 'Mentoring'],
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Domain",
    description: "UX Writing, Content Design, Information Architecture, Localization",
    icon: "PenTool"
  },
  {
    name: "Research",
    description: "A/B Testing, User Interview, VOC Analysis, Usability Testing",
    icon: "Users"
  },
  {
    name: "Tools",
    description: "Figma, Notion, Slack, Jira, Amplitude",
    icon: "Layout"
  },
  {
    name: "Languages",
    description: "Korean (Native), English (Business)",
    icon: "MessageSquare"
  }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:thenisaid1@gmail.com",
    icon: "Mail",
    label: "thenisaid1@gmail.com"
  },
  {
    platform: "Brunch",
    url: "https://brunch.co.kr/@1dayliterature",
    icon: "Link",
    label: "brunch.co.kr/@1dayliterature"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/thenisaid/",
    icon: "Linkedin",
    label: "linkedin.com/in/thenisaid"
  }
];