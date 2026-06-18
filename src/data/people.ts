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
    specialty: "Criminal, Family & Community Law",
    specialtyZh: "刑事、家庭与社区法",
    photo: "/images/team/taylor-zhang.png",
    areas: [],
    email: "taylor.zhang@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [
      "Juris Doctor — Monash University",
      "Master of Social Work Studies — University of Queensland",
      "Bachelor of Laws (Major: Criminology) — Chinese People's Public Security University, Beijing",
    ],
    qualificationsZh: [
      "法学博士 Juris Doctor — 莫纳什大学",
      "社会工作研究硕士 — 昆士兰大学",
      "法学学士（主修：犯罪学）— 中国人民公安大学，北京",
    ],
    bio: [
      "Taylor is a Paralegal at Lexcord and is currently completing his Juris Doctor at Monash University. He brings a distinctive multidisciplinary background — combining legal training in both China and Australia with a Master of Social Work and over eight years of frontline community services experience.",
      "At Lexcord, Taylor assists solicitors across a broad range of matters, including drafting and reviewing legal documents and correspondence, conducting legal research, and liaising with clients, barristers and courts. His prior paralegal experience spans community legal services in regional Victoria and private practice in Melbourne, providing exposure to diverse client needs and court procedures.",
      "Taylor's social work background informs a compassionate, client-centred approach — particularly in matters involving families, vulnerable individuals and those navigating complex personal circumstances.",
    ],
    bioZh: [
      "张彦伊（Taylor）担任律和律师助理，同时在莫纳什大学攻读法学博士（JD）课程。他拥有跨学科的多元背景，融合了中澳两国法学训练、社会工作硕士学位，以及逾八年的社区服务一线经验。",
      "在律和，他协助律师处理各类事务，包括起草与审阅法律文书及往来函件、开展法律研究，以及联络客户与大律师及法院。此前，他曾在维多利亚州社区法律服务机构及墨尔本私人律师事务所担任律师助理，积累了丰富的实务经验。",
      "张彦伊的社会工作背景赋予他以客户为中心的同理心视角，尤其擅长处理涉及家庭、弱势群体及复杂个人处境的法律事务。",
    ],
  },
  {
    slug: "carol-ma",
    name: "Carol Ma",
    role: "Paralegal",
    roleZh: "法律顾问",
    specialty: "Commercial, IPO & Capital Markets",
    specialtyZh: "商业、IPO 与资本市场",
    photo: "/images/team/carol-ma.jpg",
    areas: [],
    email: "carol.ma@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [
      "Master of Law — University of Sydney",
      "Bachelor of Laws — Guizhou University",
    ],
    qualificationsZh: [
      "法学硕士 — 悉尼大学",
      "法学学士 — 贵州大学",
    ],
    bio: [
      "Carol is a Paralegal at Lexcord with extensive experience in Chinese and cross-border commercial legal practice. She holds a Master of Law from the University of Sydney and a Bachelor of Laws from Guizhou University, and brings significant experience from her time practising at a leading Beijing commercial law firm.",
      "Carol's practice background spans securities issuance and IPO transactions (A-share and Hong Kong listings), private equity and M&A, and corporate advisory for listed and unlisted companies. Her work has encompassed legal due diligence, drafting investment agreements, shareholder agreements and share transfer documents, regulatory compliance, and corporate governance.",
      "Carol's deep expertise in Chinese capital markets law and her bilingual English and Mandarin capability make her a valuable resource for clients involved in cross-border transactions and China-related commercial matters.",
    ],
    bioZh: [
      "马菊鸿（Carol）担任律和法律顾问，在中国及跨境商业法律实务方面积累了深厚经验。她持有悉尼大学法学硕士及贵州大学法学学士学位，并曾在北京一家知名商业律师事务所执业，积累了丰富的专业经验。",
      "Carol 的执业背景涵盖证券发行与 IPO（A 股及港股上市）、私募股权融资与并购交易，以及为上市与非上市企业提供常年法律顾问服务。其工作内容包括法律尽职调查、起草投资协议、股东协议与股权转让文件，以及监管合规与公司治理咨询。",
      "Carol 在中国资本市场法领域拥有深厚积累，兼具中英双语能力，能够为涉及跨境交易及中国商业事务的客户提供独特的专业支持。",
    ],
  },
];

export const teamBySlug = new Map(team.map((m) => [m.slug, m]));

export function getMember(slug: string): TeamMember | undefined {
  return teamBySlug.get(slug);
}
