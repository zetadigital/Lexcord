export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  roleZh: string;
  roleZhTw?: string;
  /** Practice focus shown under the role (free text, may sit outside the 7 areas). */
  specialty?: string;
  specialtyZh?: string;
  specialtyZhTw?: string;
  /** Photo path under /public, or null while the headshot is pending. */
  photo: string | null;
  /** Practice-area slugs this person works across (drives the area-team listing). */
  areas: string[];
  email: string;
  phone: string;
  qualifications: string[];
  qualificationsZh: string[];
  qualificationsZhTw?: string[];
  memberships?: string[];
  membershipsZh?: string[];
  membershipsZhTw?: string[];
  bio: string[];
  bioZh: string[];
  bioZhTw?: string[];
  /** True when name/role themselves are not yet supplied. */
  placeholder?: boolean;
}

const FIRM_PHONE = "+61 3 7054 5135";

function pendingBio(name: string): string[] {
  return [
    `Full profile pending. ${name}'s biography, experience and credentials will be published here shortly.`,
  ];
}

function pendingBioZh(name: string): string[] {
  return [`完整简介待提供。${name} 的介绍、经验与执业资格将很快在此发布。`];
}

function pendingBioZhTw(name: string): string[] {
  return [`完整簡介待提供。${name} 的介紹、經驗與執業資格將很快在此發布。`];
}

export const team: TeamMember[] = [
  {
    slug: "katherine-ho",
    name: "Katherine Ho",
    role: "Principal",
    roleZh: "主理律师",
    roleZhTw: "主理律師",
    specialty: "Family Law",
    specialtyZh: "家庭法",
    specialtyZhTw: "家庭法",
    photo: null,
    areas: ["family-law"],
    email: "katherine.ho@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [],
    qualificationsZh: [],
    qualificationsZhTw: [],
    bio: pendingBio("Katherine Ho"),
    bioZh: pendingBioZh("Katherine Ho"),
    bioZhTw: pendingBioZhTw("Katherine Ho"),
  },
  {
    slug: "elijah-feng",
    name: "Elijah Feng",
    role: "Director & Solicitor",
    roleZh: "董事兼律师",
    roleZhTw: "董事兼律師",
    specialty: "Migration, Property & Business",
    specialtyZh: "移民、房产与商业",
    specialtyZhTw: "移民、房產與商業",
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
      "Registered Migration Agent (Australia)",
      "Immigration Adviser (New Zealand)",
    ],
    qualificationsZh: [
      "法学博士(Juris Doctor)— 墨尔本大学",
      "移民法研究生文凭 — 维多利亚大学",
      "计算机科学学士 — 蒙纳士大学",
      "维多利亚州最高法院律师",
      "澳大利亚高等法院律师",
      "澳大利亚注册移民代理",
      "新西兰注册移民顾问",
    ],
    qualificationsZhTw: [
      "法學博士(Juris Doctor)— 墨爾本大學",
      "移民法研究生文憑 — 維多利亞大學",
      "電腦科學學士 — 蒙納士大學",
      "維多利亞州最高法院律師",
      "澳大利亞高等法院律師",
      "澳大利亞注冊移民代理",
      "新西蘭注冊移民顧問",
    ],
    memberships: [
      "Member of the Law Institute of Victoria",
      "Member of the Migration Institute of Australia",
    ],
    membershipsZh: [
      "LIV 会员",
      "澳大利亚移民协会会员",
    ],
    membershipsZhTw: [
      "LIV 會員",
      "澳大利亞移民協會會員",
    ],
    bio: [
      "Elijah is an Australian legal practitioner with broad experience across immigration, property and commercial law. He advises and assists individual and business clients in a wide range of legal matters, with a focus on practical solutions, careful risk assessment and clear communication.",
      "In immigration matters, Elijah assists clients with the preparation and management of various visa applications, including family, skilled, employer-sponsored, business, visitor and other temporary and permanent visa pathways. He has a strong understanding of Australian visa requirements, application processes, evidentiary standards and policy considerations, and provides clients with strategic and practical guidance throughout the application process. He also assists with complex immigration matters, including responses to Departmental requests, natural justice letters, refusal and cancellation issues, character-related concerns and compliance matters.",
      "Elijah also practises in property law, particularly residential and commercial conveyancing. He assists clients with contract reviews, section 32 vendor statements, due diligence, settlement preparation, transfer of land, off-the-plan purchases, lease assignments and property-related issues. He is experienced in identifying legal and practical risks in property transactions and providing clients with clear advice before they proceed.",
      "In addition, Elijah advises on a range of commercial law matters, including business sales and purchases, commercial contracts, shareholder and partnership arrangements, referral agreements, lease matters, corporate structuring issues and general business disputes. His commercial practice focuses on helping clients understand their legal position, manage risk and structure transactions in a commercially sensible manner.",
      "With combined experience in immigration, property and commercial law, Elijah provides practical and well-rounded legal support to clients, particularly where their legal needs involve both personal and business considerations.",
    ],
    bioZh: [
      "Elijah 是一名澳大利亚执业律师，在移民、房产及商业法领域拥有丰富的实务经验。他为个人与商业客户提供广泛的法律事务建议与协助，注重实用解决方案、审慎的风险评估以及清晰有效的沟通。",
      "在移民事务方面，Elijah 协助客户准备和管理各类签证申请，涵盖家庭、技术、雇主担保、商业、访客及其他临时与永久签证类别。他对澳大利亚签证要求、申请流程、证据标准及政策考量有深入了解，并在整个申请过程中为客户提供策略性与实务性的指引。他亦协助处理复杂的移民事务，包括回应移民局要求函、自然公正信函、拒签与取消签证问题、品格相关事宜及合规问题。",
      "Elijah 亦在房产法领域执业，尤其专注于住宅及商业产权过户。他协助客户审阅合同、第 32 条卖方声明、尽职调查、结算准备、土地转让、楼花购买、租约转让及与房产相关的各类事宜。他在识别房产交易中的法律与实务风险，以及在客户推进交易前提供明确建议方面具有丰富经验。",
      "此外，Elijah 就广泛的商业法律事务提供咨询，包括商业买卖、商业合同、股东及合伙安排、转介协议、租赁事务、公司架构问题及一般商业纠纷。其商业法律实务着力于协助客户了解自身法律处境、管控风险，并以合理的商业方式构建交易。",
      "凭借在移民、房产及商业法领域的综合经验，Elijah 为客户提供实用而全面的法律支持，尤其适合法律需求同时涉及个人与商业事务的客户。",
    ],
    bioZhTw: [
      "Elijah 是一名澳大利亞執業律師，在移民、房產及商業法領域擁有豐富的實務經驗。他為個人與商業客戶提供廣泛的法律事務建議與協助，注重實用解決方案、審慎的風險評估以及清晰有效的溝通。",
      "在移民事務方面，Elijah 協助客戶準備和管理各類簽證申請，涵蓋家庭、技術、僱主擔保、商業、訪客及其他臨時與永久簽證類別。他對澳大利亞簽證要求、申請流程、證據標準及政策考量有深入了解，並在整個申請過程中為客戶提供策略性與實務性的指引。他亦協助處理複雜的移民事務，包括回應移民局要求函、自然公正信函、拒簽與取消簽證問題、品格相關事宜及合規問題。",
      "Elijah 亦在房產法領域執業，尤其專注於住宅及商業產權過戶。他協助客戶審閱合約、第 32 條賣方聲明、盡職調查、結算準備、土地轉讓、樓花購買、租約轉讓及與房產相關的各類事宜。他在識別房產交易中的法律與實務風險，以及在客戶推進交易前提供明確建議方面具有豐富經驗。",
      "此外，Elijah 就廣泛的商業法律事務提供諮詢，包括商業買賣、商業合約、股東及合夥安排、轉介協議、租賃事務、公司架構問題及一般商業糾紛。其商業法律實務著力於協助客戶了解自身法律處境、管控風險，並以合理的商業方式構建交易。",
      "憑藉在移民、房產及商業法領域的綜合經驗，Elijah 為客戶提供實用而全面的法律支持，尤其適合法律需求同時涉及個人與商業事務的客戶。",
    ],
  },
  {
    slug: "justin-ho",
    name: "Justin Ho",
    role: "Solicitor & Patent Attorney (Taiwan)",
    roleZh: "律师兼专利代理人(台湾)",
    roleZhTw: "律師兼專利代理人（台灣）",
    specialty: "Intellectual Property",
    specialtyZh: "知识产权",
    specialtyZhTw: "知識產權",
    photo: null,
    areas: ["intellectual-property"],
    email: "justin.ho@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [],
    qualificationsZh: [],
    qualificationsZhTw: [],
    bio: pendingBio("Justin Ho"),
    bioZh: pendingBioZh("Justin Ho"),
    bioZhTw: pendingBioZhTw("Justin Ho"),
  },
  {
    slug: "chang-qi",
    name: "Chang Qi",
    role: "Solicitor",
    roleZh: "律师",
    roleZhTw: "律師",
    specialty: "Family & Business",
    specialtyZh: "家庭与商业",
    specialtyZhTw: "家庭與商業",
    photo: null,
    areas: ["commercial"],
    email: "chang.qi@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [],
    qualificationsZh: [],
    qualificationsZhTw: [],
    bio: pendingBio("Chang Qi"),
    bioZh: pendingBioZh("Chang Qi"),
    bioZhTw: pendingBioZhTw("Chang Qi"),
  },
  {
    slug: "taylor-zhang",
    name: "Taylor Zhang",
    role: "Paralegal",
    roleZh: "律师助理",
    roleZhTw: "律師助理",
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
      "法学博士 Juris Doctor — 蒙纳士大学",
      "社会工作研究硕士 — 昆士兰大学",
      "法学学士（主修：犯罪学）— 中国人民公安大学，北京",
    ],
    qualificationsZhTw: [
      "法學博士 Juris Doctor — 蒙納士大學",
      "社會工作研究碩士 — 昆士蘭大學",
      "法學學士（主修：犯罪學）— 中國人民公安大學，北京",
    ],
    bio: [
      "Taylor is a Paralegal at Lexcord and is currently completing his Juris Doctor at Monash University. He brings a distinctive multidisciplinary background — combining legal training in both China and Australia with a Master of Social Work and over eight years of frontline community services experience.",
      "At Lexcord, Taylor assists solicitors across a broad range of matters, including drafting and reviewing legal documents and correspondence, conducting legal research, and liaising with clients, barristers and courts. His prior paralegal experience spans community legal services in regional Victoria and private practice in Melbourne, providing exposure to diverse client needs and court procedures.",
      "Taylor's social work background informs a compassionate, client-centred approach — particularly in matters involving families, vulnerable individuals and those navigating complex personal circumstances.",
    ],
    bioZh: [
      "Taylor 担任律和律师助理，同时在蒙纳士大学攻读法学博士（JD）课程。他拥有跨学科的多元背景，融合了中澳两国法学训练、社会工作硕士学位，以及逾八年的社区服务一线经验。",
      "在律和，他协助律师处理各类事务，包括起草与审阅法律文书及往来函件、开展法律研究，以及联络客户与大律师及法院。此前，他曾在维多利亚州社区法律服务机构及墨尔本私人律师事务所担任律师助理，积累了丰富的实务经验。",
      "Taylor 的社会工作背景赋予他以客户为中心的同理心视角，尤其擅长处理涉及家庭、弱势群体及复杂个人处境的法律事务。",
    ],
    bioZhTw: [
      "Taylor 擔任律和律師助理，同時在蒙納士大學攻讀法學博士（JD）課程。他擁有跨學科的多元背景，融合了中澳兩國法學訓練、社會工作碩士學位，以及逾八年的社區服務一線經驗。",
      "在律和，他協助律師處理各類事務，包括起草與審閱法律文書及往來函件、開展法律研究，以及聯絡客戶與大律師及法院。此前，他曾在維多利亞州社區法律服務機構及墨爾本私人律師事務所擔任律師助理，積累了豐富的實務經驗。",
      "Taylor 的社會工作背景賦予他以客戶為中心的同理心視角，尤其擅長處理涉及家庭、弱勢群體及複雜個人處境的法律事務。",
    ],
  },
  {
    slug: "carol-ma",
    name: "Carol Ma",
    role: "Paralegal & P.R.C. Qualified Lawyer",
    roleZh: "律师助理 · 中国执业律师",
    roleZhTw: "律師助理 · 中國執業律師",
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
    qualificationsZhTw: [
      "法學碩士 — 悉尼大學",
      "法學學士 — 貴州大學",
    ],
    bio: [
      "Carol is a Paralegal at Lexcord with extensive experience in Chinese and cross-border commercial legal practice. She holds a Master of Law from the University of Sydney and a Bachelor of Laws from Guizhou University, and brings significant experience from her time practising at a leading Beijing commercial law firm.",
      "Carol's practice background spans securities issuance and IPO transactions (A-share and Hong Kong listings), private equity and M&A, and corporate advisory for listed and unlisted companies. Her work has encompassed legal due diligence, drafting investment agreements, shareholder agreements and share transfer documents, regulatory compliance, and corporate governance.",
      "Carol's deep expertise in Chinese capital markets law and her bilingual English and Mandarin capability make her a valuable resource for clients involved in cross-border transactions and China-related commercial matters.",
    ],
    bioZh: [
      "Carol 担任律和律师助理，在中国及跨境商业法律实务方面积累了深厚经验。她持有悉尼大学法学硕士及贵州大学法学学士学位，并曾在北京一家知名商业律师事务所执业，积累了丰富的专业经验。",
      "Carol 的执业背景涵盖证券发行与 IPO（A 股及港股上市）、私募股权融资与并购交易，以及为上市与非上市企业提供常年法律顾问服务。其工作内容包括法律尽职调查、起草投资协议、股东协议与股权转让文件，以及监管合规与公司治理咨询。",
      "Carol 在中国资本市场法领域拥有深厚积累，兼具中英双语能力，能够为涉及跨境交易及中国商业事务的客户提供独特的专业支持。",
    ],
    bioZhTw: [
      "Carol 擔任律和律師助理，在中國及跨境商業法律實務方面積累了深厚經驗。她持有悉尼大學法學碩士及貴州大學法學學士學位，並曾在北京一家知名商業律師事務所執業，積累了豐富的專業經驗。",
      "Carol 的執業背景涵蓋證券發行與 IPO（A 股及港股上市）、私募股權融資與並購交易，以及為上市與非上市企業提供常年法律顧問服務。其工作內容包括法律盡職調查、起草投資協議、股東協議與股權轉讓文件，以及監管合規與公司治理諮詢。",
      "Carol 在中國資本市場法領域擁有深厚積累，兼具中英雙語能力，能夠為涉及跨境交易及中國商業事務的客戶提供獨特的專業支持。",
    ],
  },
];

export const teamBySlug = new Map(team.map((m) => [m.slug, m]));

export function getMember(slug: string): TeamMember | undefined {
  return teamBySlug.get(slug);
}
