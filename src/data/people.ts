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
    role: "Founder & Principal Solicitor",
    roleZh: "创始人兼主理律师",
    roleZhTw: "創始人兼主理律師",
    specialty: "Family, Cross-Border & Estate Law",
    specialtyZh: "家庭法、跨境法律及遗产规划",
    specialtyZhTw: "家庭法、跨境法律及遺產規劃",
    photo: "/images/team/katherine-ho.jpg",
    areas: ["family-law", "wills-estates", "commercial", "migration-law"],
    email: "katherine.ho@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [
      "Solicitor of the Supreme Court of Victoria",
      "Solicitor of the High Court of Australia",
      "Admitted as a Lawyer — Taiwan",
      "Accredited Mediator — Australia",
      "Certified Elder Financial Planning Consultant — Taiwan",
    ],
    qualificationsZh: [
      "维多利亚州最高法院律师",
      "澳大利亚高等法院律师",
      "台湾执业律师",
      "澳大利亚认证调解员",
      "台湾认证老龄化财务规划顾问",
    ],
    qualificationsZhTw: [
      "維多利亞州最高法院律師",
      "澳大利亞高等法院律師",
      "台灣執業律師",
      "澳大利亞認可調解員",
      "台灣認證老齡化財務規劃顧問",
    ],
    bio: [
      "Katherine Ho is the Founder and Principal Solicitor of Lexcord Lawyers. Admitted to practise as a lawyer in both Australia and Taiwan, Katherine is also an accredited Mediator and a certified Taiwanese Elder Financial Planning Consultant — a combination of qualifications that positions her uniquely to serve clients navigating complex, cross-border legal challenges.",
      "Katherine provides strategic and practical advice across family law, international family law, wills and estate planning, commercial law, and migration law. Her dual-jurisdiction background enables her to assist clients whose matters span multiple countries, legal systems, and asset structures with confidence and clarity.",
      "In family law, Katherine has extensive experience in parenting disputes, property settlements, family violence matters, Binding Financial Agreements, and child recovery proceedings. She has successfully assisted clients in negotiating increased time with their children and resolving high-conflict disputes through negotiation, mediation, and litigation.",
      "A significant focus of Katherine's practice is international and cross-border family law. She regularly advises on international relocation applications, Hague Convention proceedings, and parenting disputes involving parents residing in different countries. She understands the legal and practical challenges these matters present and works closely with clients to protect both parental rights and the best interests of children.",
      "Katherine also has substantial experience in complex property settlements involving trusts, companies, family businesses, self-managed superannuation funds, and overseas assets — including matters spanning Australia, Taiwan, China, and beyond. Her approach centres on identifying, protecting, and fairly distributing assets while accounting for enforcement, taxation, and commercial realities.",
      "In addition to family law, Katherine advises individuals, families, and business owners on wills, testamentary trusts, asset protection, succession planning, enduring powers of attorney, and estate administration. She is particularly passionate about helping families preserve wealth and implement effective intergenerational succession strategies.",
      "Fluent in English and Mandarin, Katherine regularly acts for clients from diverse cultural and international backgrounds, bringing clear, strategic, and compassionate guidance to some of the most significant decisions affecting families, assets, and futures.",
    ],
    bioZh: [
      "何凯瑟琳是 Lexcord 律师事务所的创始人兼主理律师。她在澳大利亚及台湾均取得律师执照，同时也是认证调解员及台湾认证老龄化财务规划顾问——这一独特的资历组合，使她能够为需要应对复杂跨境法律挑战的客户提供专业服务。",
      "Katherine 在家庭法、国际家庭法、遗嘱与遗产规划、商业法及移民法等领域提供全面的策略性与实务性法律建议。她的双重司法管辖背景，使她能够自信清晰地协助事务跨越多国、多种法律体系及资产结构的客户。",
      "在家庭法领域，Katherine 在育儿权争议、财产分割、家庭暴力事宜、具约束力的财务协议及子女追索诉讼方面拥有丰富经验。她成功协助多位客户争取更多与子女相处的时间，并通过谈判、调解及诉讼方式化解高冲突纠纷。",
      "跨国及跨境家庭法是 Katherine 执业的重要领域。她定期就国际迁居申请、《海牙公约》诉讼以及涉及居住于不同国家的父母的育儿权争议提供专业意见。她深刻理解此类事务在法律及实务层面带来的挑战，并与客户紧密合作，切实保护亲权及子女的最大利益。",
      "Katherine 在涉及信托、公司、家族企业、自管养老金及海外资产的复杂财产分割案件方面同样拥有深厚经验，事务涵盖澳大利亚、台湾、中国大陆及其他地区。她的处理方式以识别、保全并公平分配资产为核心，同时充分考量执行、税务及商业现实。",
      "除家庭法外，Katherine 还为个人、家庭及企业主提供遗嘱、遗嘱信托、资产保全、财富传承规划、持久授权书及遗产管理等方面的法律服务。她对帮助家庭保护财富、建立有效代际传承策略尤为热忱。",
      "Katherine 流利掌握英语和普通话，长期代理来自多元文化及国际背景的客户，在涉及家庭、资产与未来的重大决策中，提供清晰、策略性且富有关怀的法律指引。",
    ],
    bioZhTw: [
      "何凱瑟琳是 Lexcord 律師事務所的創始人兼主理律師。她在澳大利亞及台灣均取得律師執照，同時也是認可調解員及台灣認證老齡化財務規劃顧問——這一獨特的資歷組合，使她能夠為需要應對複雜跨境法律挑戰的客戶提供專業服務。",
      "Katherine 在家庭法、國際家庭法、遺囑與遺產規劃、商業法及移民法等領域提供全面的策略性與實務性法律建議。她的雙重司法管轄背景，使她能夠自信清晰地協助事務跨越多國、多種法律體系及資產結構的客戶。",
      "在家庭法領域，Katherine 在育兒權爭議、財產分割、家庭暴力事宜、具約束力的財務協議及子女追索訴訟方面擁有豐富經驗。她成功協助多位客戶爭取更多與子女相處的時間，並透過談判、調解及訴訟方式化解高衝突糾紛。",
      "跨國及跨境家庭法是 Katherine 執業的重要領域。她定期就國際遷居申請、《海牙公約》訴訟以及涉及居住於不同國家的父母的育兒權爭議提供專業意見。她深刻理解此類事務在法律及實務層面帶來的挑戰，並與客戶緊密合作，切實保護親權及子女的最大利益。",
      "Katherine 在涉及信託、公司、家族企業、自管退休金及海外資產的複雜財產分割案件方面同樣擁有深厚經驗，事務涵蓋澳大利亞、台灣、中國大陸及其他地區。她的處理方式以識別、保全並公平分配資產為核心，同時充分考量執行、稅務及商業現實。",
      "除家庭法外，Katherine 還為個人、家庭及企業主提供遺囑、遺囑信託、資產保全、財富傳承規劃、持久授權書及遺產管理等方面的法律服務。她對幫助家庭保護財富、建立有效代際傳承策略尤為熱忱。",
      "Katherine 流利掌握英語和普通話，長期代理來自多元文化及國際背景的客戶，在涉及家庭、資產與未來的重大決策中，提供清晰、策略性且富有關懷的法律指引。",
    ],
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
    photo: "/images/team/justin-ho.png",
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
    specialty: "Criminal, Family & Commercial",
    specialtyZh: "刑事、家庭与商业",
    specialtyZhTw: "刑事、家庭與商業",
    photo: "/images/team/chang-qi.png",
    areas: ["criminal-law", "family-law", "commercial"],
    email: "chang.qi@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [
      "Juris Doctor — University of Melbourne",
      "Master of Translation and Interpreting Studies — University of Melbourne",
      "Master of Professional Accounting — University of Melbourne",
      "Bachelor of Foreign Languages — Zhejiang University",
      "Solicitor of the Supreme Court of Victoria",
      "Solicitor of the High Court of Australia",
    ],
    qualificationsZh: [
      "法学博士（Juris Doctor）— 墨尔本大学",
      "翻译与口译研究硕士 — 墨尔本大学",
      "专业会计硕士 — 墨尔本大学",
      "外语学士 — 浙江大学",
      "维多利亚州最高法院律师",
      "澳大利亚高等法院律师",
    ],
    qualificationsZhTw: [
      "法學博士（Juris Doctor）— 墨爾本大學",
      "翻譯與口譯研究碩士 — 墨爾本大學",
      "專業會計碩士 — 墨爾本大學",
      "外語學士 — 浙江大學",
      "維多利亞州最高法院律師",
      "澳大利亞高等法院律師",
    ],
    memberships: [
      "China Accreditation Test for Translators and Interpreters (CATTI)",
      "NAATI Accreditation",
    ],
    membershipsZh: [
      "中国翻译专业资格（水平）考试（CATTI）",
      "NAATI 认证",
    ],
    membershipsZhTw: [
      "中國翻譯專業資格（水平）考試（CATTI）",
      "NAATI 認證",
    ],
    bio: [
      "Chang is a Solicitor at Lexcord and a Juris Doctor graduate of the University of Melbourne. She practises across criminal law, family law and commercial matters.",
      "Chang assists clients throughout all stages of a matter, including legal research, drafting court documents and correspondence, preparing evidence and case materials, and liaising with clients, barristers and other stakeholders. She approaches each matter with care, attention to detail and a focus on practical, client-centred solutions.",
      "Before joining Lexcord, Chang gained experience across in-house, community legal and advisory environments. At Australian Clinical Labs, an ASX-listed healthcare organisation, she supported commercial legal matters and developed an understanding of how legal advice is applied within a highly regulated business environment.",
      "Chang has also assisted with employment-related disputes at the Young Workers Centre and contributed to the Street Law Clinic at Melbourne Law School. Her work at the Clinic included developing a dispute resolution resource that was subsequently adopted by the Eastern Community Legal Centre to assist with insurance-related disputes in the Yarra Ranges region.",
      "In addition to her legal qualifications, Chang has postgraduate qualifications in translation and interpreting studies and professional accounting. Her multidisciplinary and cross-cultural background strengthens her communication skills, commercial awareness and ability to explain complex legal issues in a clear and accessible manner.",
    ],
    bioZh: [
      "Chang 是 Lexcord 的律师，毕业于墨尔本大学，获得法学博士（Juris Doctor）学位。她的执业领域涵盖刑事法、家庭法及商业事务。",
      "Chang 协助客户处理事务的全程各个阶段，包括法律研究、起草法庭文书及往来函件、准备证据与案件材料，以及与客户、大律师及其他相关方保持沟通联络。她对每一件事务都认真细致，注重实际、以客户为中心。",
      "加入 Lexcord 之前，Chang 曾在企业内部法务、社区法律及法律顾问等不同环境中积累经验。在 ASX 上市医疗机构 Australian Clinical Labs，她协助处理商业法律事务，并深入了解了法律意见在高度监管的商业环境中的实际运用。",
      "Chang 还曾在 Young Workers Centre 协助处理与就业相关的纠纷，并参与了墨尔本法学院的 Street Law Clinic。她在该诊所期间参与开发了一份纠纷解决资源，该资源后来被东部社区法律中心采用，用于协助 Yarra Ranges 地区的保险纠纷处理。",
      "除法律专业资质外，Chang 还持有翻译与口译研究及专业会计方向的研究生学位。她跨学科、跨文化的背景进一步提升了其沟通能力、商业敏感度，以及将复杂法律问题清晰、通俗地传达给客户的能力。",
    ],
    bioZhTw: [
      "Chang 是 Lexcord 的律師，畢業於墨爾本大學，獲得法學博士（Juris Doctor）學位。她的執業領域涵蓋刑事法、家庭法及商業事務。",
      "Chang 協助客戶處理事務的全程各個階段，包括法律研究、起草法庭文書及往來函件、準備證據與案件材料，以及與客戶、大律師及其他相關方保持溝通聯絡。她對每一件事務都認真細致，注重實際、以客戶為中心。",
      "加入 Lexcord 之前，Chang 曾在企業內部法務、社區法律及法律顧問等不同環境中積累經驗。在 ASX 上市醫療機構 Australian Clinical Labs，她協助處理商業法律事務，並深入了解了法律意見在高度監管的商業環境中的實際運用。",
      "Chang 還曾在 Young Workers Centre 協助處理與就業相關的糾紛，並參與了墨爾本法學院的 Street Law Clinic。她在該診所期間參與開發了一份糾紛解決資源，該資源後來被東部社區法律中心採用，用於協助 Yarra Ranges 地區的保險糾紛處理。",
      "除法律專業資質外，Chang 還持有翻譯與口譯研究及專業會計方向的研究生學位。她跨學科、跨文化的背景進一步提升了其溝通能力、商業敏感度，以及將複雜法律問題清晰、通俗地傳達給客戶的能力。",
    ],
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
      "Taylor is a Paralegal at Lexcord and is currently completing his Juris Doctor at Monash University. He brings a distinctive multidisciplinary background, combining legal training in both China and Australia with a Master of Social Work, a Bachelor of Laws in Criminology, and extensive experience in frontline police and community services.",
      "Before transitioning into legal practice, Taylor served as a police officer in China, where he gained firsthand experience in criminal investigations, law enforcement procedures, and the practical operation of the justice system. This background provides him with a unique understanding of criminal justice processes, evidence gathering, regulatory frameworks, and the challenges faced by individuals interacting with legal institutions.",
      "At Lexcord, Taylor assists solicitors across a broad range of matters, including drafting and reviewing legal documents and correspondence, conducting legal research, and liaising with clients, barristers and courts. His prior paralegal experience spans community legal services in regional Victoria and private practice in Melbourne, providing exposure to diverse client needs and court procedures.",
      "Taylor's social work background informs a compassionate, client-centred approach, particularly in matters involving families, vulnerable individuals, and those navigating complex personal circumstances. His combined experience in law, criminology, policing and social work enables him to approach legal issues with both analytical rigour and practical insight, while maintaining a strong commitment to accessible and effective client service.",
    ],
    bioZh: [
      "Taylor 担任律和律师助理，同时在蒙纳士大学攻读法学博士（JD）课程。他拥有跨学科的多元背景，融合了中澳两国法学训练、社会工作硕士学位、犯罪学法学学士学位，以及在一线警务与社区服务领域的丰富经验。",
      "在转型进入法律行业之前，Taylor 曾在中国担任警察，亲历了刑事调查、执法程序以及司法系统的实际运作。这一背景使他对刑事司法流程、证据收集、监管框架及个人与法律机构打交道时所面临的挑战有着独到的理解。",
      "在律和，他协助律师处理各类事务，包括起草与审阅法律文书及往来函件、开展法律研究，以及联络客户与大律师及法院。此前，他曾在维多利亚州社区法律服务机构及墨尔本私人律师事务所担任律师助理，积累了丰富的实务经验。",
      "Taylor 的社会工作背景赋予他以客户为中心的同理心视角，尤其擅长处理涉及家庭、弱势群体及复杂个人处境的法律事务。其在法律、犯罪学、警务及社会工作领域的综合经验，使他能够以严谨的分析思维与务实的洞察力处理法律问题，同时致力于为客户提供高效、可及的法律服务。",
    ],
    bioZhTw: [
      "Taylor 擔任律和律師助理，同時在蒙納士大學攻讀法學博士（JD）課程。他擁有跨學科的多元背景，融合了中澳兩國法學訓練、社會工作碩士學位、犯罪學法學學士學位，以及在一線警務與社區服務領域的豐富經驗。",
      "在轉型進入法律行業之前，Taylor 曾在中國擔任警察，親歷了刑事調查、執法程序以及司法系統的實際運作。這一背景使他對刑事司法流程、證據收集、監管框架及個人與法律機構打交道時所面臨的挑戰有著獨到的理解。",
      "在律和，他協助律師處理各類事務，包括起草與審閱法律文書及往來函件、開展法律研究，以及聯絡客戶與大律師及法院。此前，他曾在維多利亞州社區法律服務機構及墨爾本私人律師事務所擔任律師助理，積累了豐富的實務經驗。",
      "Taylor 的社會工作背景賦予他以客戶為中心的同理心視角，尤其擅長處理涉及家庭、弱勢群體及複雜個人處境的法律事務。其在法律、犯罪學、警務及社會工作領域的綜合經驗，使他能夠以嚴謹的分析思維與務實的洞察力處理法律問題，同時致力於為客戶提供高效、可及的法律服務。",
    ],
  },
  {
    slug: "gloria-guo",
    name: "Gloria Guo",
    role: "Paralegal",
    roleZh: "律师助理",
    roleZhTw: "律師助理",
    photo: "/images/team/gloria-guo.png",
    areas: [],
    email: "gloria.guo@lexcord.com.au",
    phone: FIRM_PHONE,
    qualifications: [
      "Juris Doctor — Monash University",
      "Bachelor of Laws — Renmin University of China",
    ],
    qualificationsZh: [
      "法学博士 Juris Doctor — 蒙纳士大学",
      "法学学士 — 中国人民大学",
    ],
    qualificationsZhTw: [
      "法學博士 Juris Doctor — 蒙納士大學",
      "法學學士 — 中國人民大學",
    ],
    bio: [
      "Gloria is a Paralegal at Lexcord and a Juris Doctor candidate at Monash University. At Lexcord, Gloria primarily focuses on family law, including divorce, parenting and property settlement. She is responsible for a wide range of work including conducting legal research, assisting with client consultation and drafting court documents.",
      "Gloria began her legal career at a community legal service centre, where she gained broad experience in family law, family violence intervention orders, parenting matters, and property settlement disputes.",
      "Her passion for helping people navigate deeply personal and often emotionally charged issues drove her to specialise in this area. Gloria understands that family law issues can be one of the most difficult experiences in one's life. Her goal is to provide clients with quality legal services while ensuring they feel understood, supported and empowered.",
    ],
    bioZh: [
      "Gloria 担任律和律师助理，同时在蒙纳士大学攻读法学博士（JD）课程。在律和，Gloria 主要专注于家庭法事务，涵盖离婚、亲权安排及财产分割等领域。她的工作内容广泛，包括开展法律研究、协助客户咨询及起草法庭文书。",
      "Gloria 的法律职业生涯始于一家社区法律援助中心，在那里她积累了家庭法、家庭暴力干预令、亲权事务及财产分割纠纷等方面的丰富经验。",
      "她对帮助当事人处理高度私密、往往伴随强烈情感压力的法律问题充满热忱，这驱使她深耕家庭法领域。Gloria 深知家庭法纠纷往往是人生中最艰难的经历之一，她致力于为客户提供优质法律服务，同时让他们感到被理解、被支持，并有能力面对挑战。",
    ],
    bioZhTw: [
      "Gloria 擔任律和律師助理，同時在蒙納士大學攻讀法學博士（JD）課程。在律和，Gloria 主要專注於家庭法事務，涵蓋離婚、親權安排及財產分割等領域。她的工作內容廣泛，包括開展法律研究、協助客戶諮詢及起草法庭文書。",
      "Gloria 的法律職業生涯始於一家社區法律援助中心，在那裡她積累了家庭法、家庭暴力干預令、親權事務及財產分割糾紛等方面的豐富經驗。",
      "她對幫助當事人處理高度私密、往往伴隨強烈情感壓力的法律問題充滿熱忱，這驅使她深耕家庭法領域。Gloria 深知家庭法糾紛往往是人生中最艱難的經歷之一，她致力於為客戶提供優質法律服務，同時讓他們感到被理解、被支持，並有能力面對挑戰。",
    ],
  },
  {
    slug: "carol-ma",
    name: "Carol Ma",
    role: "Paralegal & P.R.C. Qualified Lawyer",
    roleZh: "律师助理 · 中国执业律师",
    roleZhTw: "律師助理 · 中國執業律師",
    photo: "/images/team/carol-ma.png",
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
