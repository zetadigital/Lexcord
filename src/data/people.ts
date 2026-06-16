export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  roleZh: string;
  /** Practice focus shown under the role (free text, may sit outside the 7 areas). */
  specialty?: string;
  specialtyZh?: string;
  /** Photo path under /public, or null while the headshot is pending. */
  photo: string | null;
  /** Practice-area slugs this person works across (drives the area-team listing). */
  areas: string[];
  email: string;
  phone: string;
  qualifications: string[];
  qualificationsZh: string[];
  bio: string[];
  bioZh: string[];
  /** True when name/role themselves are not yet supplied. */
  placeholder?: boolean;
}

const FIRM_PHONE = "+61 3 7054 5135";

/** Standard "profile pending" copy for members whose full bio is not yet supplied. */
function pendingBio(name: string): string[] {
  return [
    `Full profile pending. ${name}'s biography, experience and credentials will be published here shortly.`,
  ];
}

function pendingBioZh(name: string): string[] {
  return [`完整简介待提供。${name} 的介绍、经验与执业资格将很快在此发布。`];
}

export const team: TeamMember[] = [
  {
    slug: "katherine-ho",
    name: "Katherine Ho",
    role: "Principal",
    roleZh: "主理律师",
    specialty: "Family Law",
    specialtyZh: "家庭法",
    photo: null,
    areas: ["family-law"],
    email: "katherine.ho@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [],
    qualificationsZh: [],
    bio: pendingBio("Katherine Ho"),
    bioZh: pendingBioZh("Katherine Ho"),
  },
  {
    slug: "elijah-feng",
    name: "Elijah Feng",
    role: "Director & Solicitor",
    roleZh: "董事兼律师",
    specialty: "Migration, Property & Business",
    specialtyZh: "移民、房产与商业",
    photo: "/images/team/elijah-feng.png",
    areas: ["migration-law", "property-law", "conveyancing", "commercial"],
    email: "elijah.feng@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [
      "Juris Doctor — University of Melbourne",
      "Graduate Diploma in Migration Law — Victoria University",
      "Bachelor of Computer Science — Monash University",
      "Solicitor of the Supreme Court of Victoria",
      "Solicitor of the High Court of Australia",
      "Registered Migration Agent (Department of Home Affairs, Australia)",
      "Member of the Law Institute of Victoria",
      "Member of the Migration Institute of Australia",
    ],
    qualificationsZh: [
      "法学博士(Juris Doctor)— 墨尔本大学",
      "移民法研究生文凭 — 维多利亚大学",
      "计算机科学学士 — 莫纳什大学",
      "维多利亚州最高法院律师",
      "澳大利亚高等法院律师",
      "注册移民代理(澳大利亚内政部)",
      "维多利亚州法学会会员",
      "澳大利亚移民协会会员",
    ],
    bio: [
      "Mr Feng specialises in Australian immigration law, possessing extensive practical experience and exceptional professional expertise. Whether handling routine visa applications or complex immigration legal matters, he provides precise and efficient legal solutions, ensuring that every case is managed with the highest level of professionalism.",
      "He has in-depth knowledge of various Australian visa categories. With a thorough understanding of visa application processes, assessment criteria, and policy changes, he assists clients in strategic planning to enhance their chances of visa approval. He is also highly skilled in handling visa refusals, cancellations, and complex legal challenges, including Administrative Appeals Tribunal (AAT) appeals, Federal Court appeals, visa cancellation reviews, and Section 57 natural justice responses.",
    ],
    bioZh: [
      "Feng 律师专注于澳大利亚移民法,拥有丰富的实务经验与卓越的专业能力。无论是常规签证申请还是复杂的移民法律事务,他都能提供精准、高效的法律解决方案,确保每一宗案件都以最高的专业水准处理。",
      "他对澳大利亚各类签证类别有深入了解,透彻掌握签证申请流程、评审标准与政策变化,协助客户进行策略规划,以提高签证获批的机会。他同样擅长处理签证拒签、取消及复杂法律挑战,包括行政上诉仲裁庭(AAT)上诉、联邦法院上诉、签证取消复审,以及 Section 57 自然公正回应。",
    ],
  },
  {
    slug: "justin-ho",
    name: "Justin Ho",
    role: "Solicitor & Patent Attorney (Taiwan)",
    roleZh: "律师兼专利代理人(台湾)",
    specialty: "Intellectual Property",
    specialtyZh: "知识产权",
    photo: null,
    areas: ["intellectual-property"],
    email: "justin.ho@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [],
    qualificationsZh: [],
    bio: pendingBio("Justin Ho"),
    bioZh: pendingBioZh("Justin Ho"),
  },
  {
    slug: "chang-qi",
    name: "Chang Qi",
    role: "Solicitor",
    roleZh: "律师",
    specialty: "Family & Business",
    specialtyZh: "家庭与商业",
    photo: null,
    areas: ["commercial"],
    email: "chang.qi@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [],
    qualificationsZh: [],
    bio: pendingBio("Chang Qi"),
    bioZh: pendingBioZh("Chang Qi"),
  },
  {
    slug: "taylor-zhang",
    name: "Taylor Zhang",
    role: "Paralegal",
    roleZh: "律师助理",
    photo: null,
    areas: [],
    email: "taylor.zhang@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [],
    qualificationsZh: [],
    bio: pendingBio("Taylor Zhang"),
    bioZh: pendingBioZh("Taylor Zhang"),
  },
  {
    slug: "carol-ma",
    name: "Carol Ma",
    role: "Paralegal & Lawyer (China)",
    roleZh: "律师助理兼律师(中国)",
    photo: null,
    areas: [],
    email: "carol.ma@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [],
    qualificationsZh: [],
    bio: pendingBio("Carol Ma"),
    bioZh: pendingBioZh("Carol Ma"),
  },
];

export const teamBySlug = new Map(team.map((m) => [m.slug, m]));

export function getMember(slug: string): TeamMember | undefined {
  return teamBySlug.get(slug);
}
