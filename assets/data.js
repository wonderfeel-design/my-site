/* Katerina Akhmad — portfolio content. Single source of truth for both pages.
   To anonymise a case, just change `client` (and optionally `clientNote`). */
window.KA = {
  profile: {
    name: "Katerina Akhmad",
    role: "Lead UX Researcher",
    discipline: "Consumer Fintech \u00b7 Mobile \u00b7 Emerging Tech",
    location: "Barcelona, Spain",
    auth: "EU work authorisation",
    email: "ekatakhm@gmail.com",
    phone: "+34 603 677 652",
    linkedin: "linkedin.com/in/akhmadeeva",
    linkedinUrl: "https://www.linkedin.com/in/akhmadeeva/",
    notion: "notion.so/katyaakh",
    notionUrl: "https://www.notion.so/katyaakh",
    tagline: "I turn fuzzy product bets into evidence \u2014 across markets, languages and emerging tech.",
    bio: "Senior UX researcher with 7+ years building research practices from the ground up \u2014 across 50+ international markets, in fintech, enterprise and emerging-tech products. I run qualitative and mixed-method studies and translate complex user insight into product decisions that move metrics. Earlier, 15+ years in B2C brand management for global FMCG names gave me deep roots in consumer motivation and cross-cultural behaviour.",
    stats: [
      { value: "7+", label: "years in research" },
      { value: "50+", label: "international markets" },
      { value: "200+", label: "interviews & usability tests" },
      { value: "8", label: "languages of fieldwork" }
    ],
    competencies: [
      "Research operations, from scratch",
      "Discovery & evaluative research",
      "Jobs-to-be-Done & in-depth interviews",
      "Usability testing \u2014 lab, remote, guerrilla",
      "Journey mapping & service blueprints",
      "Segmentation (ABCDX, JTBD)",
      "Product\u2013market fit & concept validation",
      "Mixed-method qual + quant synthesis",
      "Global & cross-cultural research",
      "Stakeholder influence & storytelling"
    ],
    languages: [
      { name: "Russian", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Spanish", level: "Intermediate \u00b7 daily use" }
    ],
    timeline: [
      { period: "2024 \u2014 Present", role: "Senior UX Researcher & Product Expert", org: "Freelance \u00b7 Remote",
        note: "Discovery, CJM and product requirements for an AI-agents SaaS marketplace; usability & workflow research for a B2B payments platform; experimentation framework for a platform redesign." },
      { period: "2023 \u2014 2024", role: "Senior UX Researcher", org: "Garage IT \u2014 Fintech Enterprise",
        note: "End-to-end service-blueprint research in professional trading; 200+ tests & interviews with traders synthesised into roadmap-shaping work. +25% platform engagement." },
      { period: "2022 \u2014 2023", role: "Lead UX Researcher", org: "DUAMENTES \u2014 Global Tech Consulting",
        note: "Built the research practice from zero \u2014 methodology, recruitment pipelines and ops adopted across 30+ projects in 50+ markets. Hired & mentored juniors." },
      { period: "2021 \u2014 2022", role: "Independent Research", org: "Various Clients",
        note: "Multi-market JTBD, PMF testing and concept validation for creator, crypto and Web3 products." },
      { period: "2021", role: "Product Manager", org: "Toloka AI / Yandex",
        note: "+20% platform adoption through user research, 20+ competitor analyses and data-driven feature development." },
      { period: "earlier", role: "Marketing & Brand Management", org: "FMCG \u2014 Faberlic, Bourjois Paris, Swarovski, Amway",
        note: "15+ years, P&L responsibility, product launches and market expansion across 14 markets." }
    ]
  },

  categories: {
    fintech:  { label: "Fintech & Trading",        short: "Fintech",  hue: 40 },
    social:   { label: "Social Discovery & Creator", short: "Social",  hue: 22 },
    emerging: { label: "AI & Emerging Tech",        short: "Emerging", hue: 250 }
  },

  cases: [
    /* ───────────────────────── FINTECH ───────────────────────── */
    {
      id: "retail-bank-usability",
      category: "fintech",
      client: "BKS Bank",
      clientNote: "Major retail bank",
      title: "Rebuilding trust in a redesigned banking app",
      summary: "A full-app usability study \u2014 14 scenarios, 30 people, 11 cities \u2014 that replaced internal assumptions with a severity-ranked, sprint-ready backlog.",
      tags: ["Usability testing", "Severity analysis", "Sprint prioritisation"],
      method: "Moderated usability testing \u00b7 14 task scenarios",
      sample: "N=30 \u00b7 11 cities",
      year: "Fintech \u00b7 mobile banking",
      metrics: [
        { value: "30", label: "participants tested" },
        { value: "14", label: "task scenarios" },
        { value: "11", label: "cities covered" },
        { value: "Top 5", label: "issues ranked for sprints" }
      ],
      star: {
        situation: "A major retail bank had redesigned its mobile app with no usability baseline. Decisions on complex flows \u2014 ATMs, bonuses, transaction history, tariffs, currency exchange, SBP \u2014 were driven by internal assumptions.",
        task: "Lead a structured usability study covering the full app: severity-rank every issue and hand product a prioritised, sprint-ready set of findings.",
        action: "Ran 14 scenario-based moderated sessions with 30 participants across 11 cities. Applied severity coding and frequency analysis, and produced per-scenario completion-rate analysis with annotated failure points.",
        result: "Surfaced the top 5 problem flows \u2014 ATMs (12/26 couldn't find commission info), Bonuses (12/14 confused by three sections), Transaction history (the 1-week default filter caused major failure), Tariffs and Currency exchange \u2014 and the top 5 reliable flows (auth, QR payments, third-party top-up, SBP, credit application). Findings fed directly into sprint prioritisation."
      },
      artifacts: [
        "Severity-ranked issue log \u2014 completion rate + failure type per scenario",
        "Annotated task-flow maps for the top 5 problem areas",
        "30-participant \u00d7 14-scenario success/failure matrix",
        "Prioritised recommendations report for product & design"
      ],
      shots: [
        { id: "bank-matrix", cap: "30 \u00d7 14 success / failure matrix" },
        { id: "bank-severity", cap: "Severity-ranked issue log" }
      ]
    },
    {
      id: "crypto-pmf",
      category: "fintech",
      client: "KeyApp",
      clientNote: "Solana-based crypto app",
      title: "Two product bets, eleven markets, one PMF decision",
      summary: "44 JTBD interviews in 8 languages mapped six user mindsets and validated two distinct product concepts \u2014 an Investment App and a Cash App \u2014 before a line of code was committed.",
      tags: ["Discovery", "PMF testing", "JTBD", "Multi-market", "UX testing"],
      method: "JTBD interviews + PMF concept validation + UX testing (5 task flows)",
      sample: "N=44 \u00b7 11 markets \u00b7 8 languages \u00b7 12 weeks",
      year: "Crypto \u00b7 multi-market discovery",
      metrics: [
        { value: "44", label: "in-depth interviews" },
        { value: "11", label: "markets, 8 languages" },
        { value: "15", label: "hypotheses tested" },
        { value: "2", label: "validated PMF concepts" }
      ],
      star: {
        situation: "A Solana-based, zero-fee crypto app was live across many markets but lacked validated understanding of user motivation, trust barriers and core use cases. The team was weighing a strategic pivot and needed cross-market evidence \u2014 15 hypotheses \u2014 before committing to development.",
        task: "Validate the product direction, map user mindsets, and run product\u2013market-fit testing to define two concepts (Investment App and Cash App), each with target audience, value proposition, features and growth model.",
        action: "Ran 44 JTBD interviews across 11 markets in 8 languages (22 high-active, 22 low-active). Tested 15 hypotheses, mapped 6 user mindsets, and UX-tested five task flows: explore \u2192 register \u2192 top up \u2192 swap \u2192 send. PMF-tested both concepts against target groups, mapping confirmed vs. unconfirmed use cases.",
        result: "Trading/investment confirmed as primary use (42/44); crypto as income source (28/44); mobile-first (44/44); Binance dominant for conversion (39/44). Found critical UX failures \u2014 a silent wallet-address resolution error, and missing app-store reviews deterring users in the Philippines. PMF testing validated two distinct directions with differentiated TA, value prop, features and growth."
      },
      concepts: [
        { name: "Concept 1 \u2014 Investment App",
          vp: "Easy crypto investing in a few taps \u2014 no fees, no gas fees. Self-custody with simple sign-up.",
          ta: "Early investors, traders, GenZ/teens, Solana & gaming-project users with low crypto experience.",
          confirmed: "Portfolio building, daily trading, airdrops. Not confirmed: dApps, NFT, staking, lending.",
          markets: "Asia (Solana ecosystem): Vietnam, Thailand, Philippines, Pakistan, Indonesia \u00b7 LATAM \u00b7 South Korea." },
        { name: "Concept 2 \u2014 Cash App (P2P)",
          vp: "Easy P2P payments, fast cash-out, airdrops. International transfers in seconds \u2014 zero fees.",
          ta: "Unbanked / underbanked youth, GenZ, Muslim users (Hawala), cross-border senders.",
          confirmed: "P2P transfers, cross-border remittance, USD savings, Hawala-style payments.",
          markets: "Vietnam, Thailand, Philippines, Pakistan, Indonesia \u00b7 LATAM \u00b7 South Korea." }
      ],
      artifacts: [
        "6 user-mindset profiles with market mapping and trust barriers",
        "15-hypothesis validation matrix with per-market evidence",
        "UX testing deck \u2014 critical/minor/cosmetic issue log across 5 flows",
        "PMF report \u00d7 2 \u2014 Investment App & Cash App (TA, VP, features, growth)",
        "Target-market prioritisation map: Asia, LATAM, secondary markets"
      ],
      shots: [
        { id: "crypto-mindsets", cap: "6 user mindsets \u00d7 market map" },
        { id: "crypto-hypo", cap: "15-hypothesis validation matrix" }
      ]
    },
    {
      id: "b2b-insurance",
      category: "fintech",
      client: "Mains Group",
      clientNote: "Insurance broker group",
      title: "De-risking a B2B insurance transformation",
      summary: "20 JTBD interviews with HR decision-makers tested four strategy hypotheses and produced a 7-stage journey map \u2014 the first real evidence behind a digital transformation.",
      tags: ["B2B discovery", "JTBD", "CJM", "Service design"],
      method: "In-depth JTBD interviews \u00b7 4-hypothesis validation",
      sample: "N=20 \u00b7 15 companies (SMB + large corp)",
      year: "Insurtech \u00b7 B2B discovery",
      metrics: [
        { value: "20", label: "JTBD interviews" },
        { value: "15", label: "companies" },
        { value: "4", label: "strategy hypotheses" },
        { value: "7-stage", label: "B2B journey map" }
      ],
      star: {
        situation: "An insurance broker group was planning the digital transformation of its B2B corporate product with zero prior research on HR client workflows. Four core hypotheses underpinned the strategy \u2014 none validated.",
        task: "Validate or invalidate four strategic hypotheses, map HR client journeys across seven stages, and build target-audience portraits for SMB and large-corporate segments to inform feature prioritisation.",
        action: "Ran 20 JTBD interviews with HR professionals from 15 companies (4 SMB + 10 large corp + 6 employees). Tested four hypotheses, produced a 7-stage CJM, and mapped barriers and drivers per hypothesis per segment.",
        result: "H1 (DMS to HR): confirmed 7/13 \u2014 opaque handling and phone dependency as barriers. H2 (enrolment time): mixed \u2014 EDO simplifies, regional insurer incompetence is the real barrier. H3 (changing insurer): confirmed 3/13 \u2014 brokers ease tenders, SMBs distrust them. H4 (HR controls complaints): not confirmed by 10/13 \u2014 employees contact insurers directly. Delivered a 7-stage CJM and two TA portraits as strategic input."
      },
      artifacts: [
        "4 hypothesis-validation reports with barriers/drivers and quotes",
        "7-stage B2B customer journey map (needs \u2192 employee training)",
        "2 TA portraits: SMB vs. large-corp HR decision profiles",
        "Strategic product recommendations grounded in confirmed pain points"
      ],
      shots: [
        { id: "ins-cjm", cap: "7-stage B2B journey map" },
        { id: "ins-portraits", cap: "SMB vs. large-corp TA portraits" }
      ]
    },
    {
      id: "mena-segmentation",
      category: "fintech",
      client: "CFI",
      clientNote: "Global trading platform, 35 countries",
      title: "Segmenting four MENA markets, qual meets 3B transactions",
      summary: "25 Arabic interviews and 3B+ transactions combined into four trader portraits and two regional strategy clusters \u2014 the backbone of CFI's new MENA marketing plan.",
      tags: ["Market research", "Segmentation", "CJM", "Quant + qual", "4 markets"],
      method: "25 Arabic interviews + ABCDX segmentation + CJM as-is/to-be + transaction analysis (BigQuery / SQL / Python)",
      sample: "Lebanon, Jordan, Egypt, Kuwait \u00b7 8 weeks",
      year: "Trading \u00b7 MENA market research",
      metrics: [
        { value: "25", label: "in-depth Arabic interviews" },
        { value: "3B+", label: "transactions analysed" },
        { value: "4", label: "MENA markets" },
        { value: "100+", label: "validated insights" }
      ],
      star: {
        situation: "CFI needed to know what to prioritise in its messaging across four MENA markets. Some approaches drove awareness, but the team didn't know why they worked, or which product dimension to lead with per market \u2014 so spend was undifferentiated.",
        task: "Lead market research across Lebanon, Jordan, Egypt and Kuwait: build trader segment portraits, identify MENA-specific behaviours, map conservative vs. exploratory clusters, and produce actionable recommendations from 100+ insights.",
        action: "Ran 25 in-depth Arabic interviews across the four markets and applied the ABCDX framework to map four profiles, from Beginners to Experts. Mapped the full journey (contemplation \u2192 education \u2192 community \u2192 active trading \u2192 decision) and ran quantitative analysis of 3B+ transactions via BigQuery, GA, SQL and Python. Built CJM as-is and to-be.",
        result: "Delivered four trader portraits and two regional clusters \u2014 Lebanon + Egypt (conservative) and Jordan + Kuwait (exploratory). Pan-MENA insight: the primary motivation is financial enrichment, not speculation, with shared focus on Oil, Gold and major Forex. 100+ insights underpinned CFI's new regional marketing plan, revised comms strategy and UX improvements; an AI trading assistant was recommended as a research-validated initiative."
      },
      artifacts: [
        "4 trader segment portraits (Beginners \u2192 Experts)",
        "2-cluster regional strategy brief: conservative vs. exploratory",
        "CJM as-is: friction and drop-off points per segment",
        "CJM to-be: opportunity map for marketing & product",
        "Pan-MENA insight report + 100+ insight repository"
      ],
      shots: [
        { id: "cfi-segments", cap: "4 trader segment portraits" },
        { id: "cfi-cjm", cap: "CJM as-is / to-be" }
      ]
    },
    {
      id: "ajtbd-payments",
      category: "fintech",
      client: "B2B Payments Platform",
      clientNote: "Regulated high-risk industries",
      title: "Advanced JTBD against 90-day churn in regulated payments",
      summary: "A 5-month AJTBD programme mapped a four-role job ecosystem and produced a 3-phase roadmap with measurable targets \u2014 87% less reconciliation time, 80% faster investigations.",
      tags: ["Advanced JTBD", "B2B SaaS", "Workflow research", "Figma prototype testing"],
      method: "Advanced JTBD interviews (35 min) + UX scenario testing with 4 role-specific Figma prototypes",
      sample: "N=13+ \u00b7 Finance, Risk, Technical, Owner roles \u00b7 5 months",
      year: "Fintech \u00b7 B2B payments \u00b7 $2.8T market",
      metrics: [
        { value: "87%", label: "reconciliation time cut" },
        { value: "80%", label: "faster investigations" },
        { value: "<24h", label: "integration (was weeks)" },
        { value: "$2.8T", label: "target market" }
      ],
      star: {
        situation: "A B2B payment platform serving regulated industries (iGaming, crypto, adult content, high-risk fintech) faced low adoption and high 90-day churn. Users juggled 15+ provider dashboards, compliance varied by jurisdiction, environment confusion created security risk, and four roles filed conflicting feature requests with no evidence base.",
        task: "Apply Advanced JTBD to map the full job ecosystem across four roles, quantify workflow failures, and produce a 3-phase roadmap grounded in measurable outcomes \u2014 replacing competing assumptions with shared evidence.",
        action: "Ran a 5-month multi-method programme: JTBD interviews (job-story mapping, impact/frequency pain prioritisation, screen-share workflow documentation, cross-role dependency mapping) plus UX scenario testing on four role-specific Figma prototypes. Applied four AJTBD mechanics \u2014 fix problems, kill jobs, consolidate jobs, reduce cognitive investment.",
        result: "Finance Managers: 87% reconciliation-time reduction (2+ hrs \u2192 30 min). Risk Managers: 80% faster investigation (15 \u2192 3 min). Technical Specialists: sub-day integration (weeks \u2192 <24 hrs). 50%+ ticket reduction projected. Delivered a 3-phase roadmap (fix failures \u2192 kill jobs \u2192 AI job-intelligence); the job graph became an AI-ready foundation for automation boundaries."
      },
      artifacts: [
        "AJTBD job graph: 4-role ecosystem, sub-jobs, dependencies, 'tax jobs'",
        "Impact/frequency pain matrix per workflow stage per role",
        "4 role-specific Figma prototype testing reports + scorecards",
        "Recruitment channel analysis: cost-per-qualified-participant",
        "3-phase product roadmap with quantified outcome targets",
        "AI integration framework: job-boundary definitions"
      ],
      shots: [
        { id: "ajtbd-graph", cap: "AJTBD 4-role job graph" },
        { id: "ajtbd-roadmap", cap: "3-phase roadmap with targets" }
      ]
    },

    /* ─────────────────── SOCIAL DISCOVERY & CREATOR ─────────────────── */
    {
      id: "creator-2market",
      category: "social",
      client: "Funcorp",
      clientNote: "Creator-tools company",
      title: "Should we build a coaching app? Two markets answer",
      summary: "Two sequential JTBD flights in Mexico and the US tested 29 hypotheses and mapped five creator segments \u2014 validating a coaching app for advanced creators, and a freemium pivot for everyone else.",
      tags: ["Discovery", "JTBD", "Segmentation", "Concept validation", "2 markets"],
      method: "In-depth JTBD interviews \u00b7 2 research flights",
      sample: "MX: N=10 micro-influencers \u00b7 US: N=6 creators",
      year: "Creator economy \u00b7 2-market discovery",
      metrics: [
        { value: "2", label: "markets: Mexico + US" },
        { value: "16", label: "creator interviews" },
        { value: "29", label: "hypotheses tested" },
        { value: "5", label: "segment portraits" }
      ],
      star: {
        situation: "A creator-tools company planned to launch a coaching app across Mexico and the US. Neither the creator segments, their monetisation behaviour, nor their openness to coaching had been validated before committing to positioning or scope.",
        task: "Lead two sequential JTBD flights: (1) map creator segments, journeys and barriers in Mexico with a product concept check; (2) validate the coaching-app hypothesis with US creators and refine the target audience.",
        action: "Flight 1 \u2014 Mexico (N=10): 10 JTBD interviews with micro-influencers; three segment portraits (Hobbyists, Professional Creators, Expert Bloggers); 15 hypotheses across routine, monetisation, trends, education; CJM for content creation and brand monetisation; concept check on a $14.99/mo coach app. Flight 2 \u2014 US (N=6): JTBD interviews + questionnaire across two income segments; 14 hypotheses across five clusters.",
        result: "Mexico: content-creation difficulty confirmed 8/10, trend monitoring 10/10, competitor monitoring 9/10. Key insight \u2014 motivation is passion, not monetisation (only 3/10 had active monetisation problems); pointed to a freemium model with niche mentors and community. US: difficulty 6/6, education willingness 6/6, coach credibility critical 6/6. Two segments \u2014 Hobbyists (stuck at $100/mo) and Advanced Creators ($500\u2013$5K/mo); the coaching app validated for Advanced Creators at $10\u2013$60/course."
      },
      artifacts: [
        "3-segment portrait map (Mexico): JTBD, barriers, tools, monetisation stack",
        "15-hypothesis validation scorecard (Mexico) with quotes",
        "2-segment portrait map (US): Hobbyists vs. Advanced Creators",
        "14-hypothesis validation report (US)",
        "Creator CJM \u2014 content creation + brand monetisation, both markets",
        "Market comparison brief: MX vs. US monetisation readiness"
      ],
      shots: [
        { id: "creator-segments", cap: "Segment portraits \u2014 MX 3 segments" },
        { id: "creator-scorecard", cap: "Hypothesis scorecard \u2014 US flight" }
      ]
    },
    {
      id: "dexart-web3",
      category: "social",
      client: "DexArt",
      clientNote: "Web3 metaverse ecosystem",
      title: "Making virtual real estate make sense to business owners",
      summary: "Competitive benchmarking and business-owner interviews informed two from-scratch flows \u2014 a Metaverse Map and an Avatar Room \u2014 that lowered the Web3 entry barrier for non-crypto-native users.",
      tags: ["Competitive benchmarking", "UX research", "UI design", "Web3", "Avatar creation"],
      method: "Competitive analysis of major metaverses + in-depth interviews with online business owners",
      sample: "Decentraland, The Sandbox + category benchmarking",
      year: "Web3 \u00b7 metaverse UX & UI",
      metrics: [
        { value: "2", label: "flagship flows designed" },
        { value: "0\u21921", label: "metaverse onboarding" },
        { value: "2D + 3D", label: "unified UI kit" },
        { value: "Web3", label: "barrier lowered for business users" }
      ],
      star: {
        situation: "DexArt is a next-gen metaverse focused on digital assets, virtual real estate and business integration. The Web3 landscape suffers from high entry barriers and gamer-centric interfaces that alienate business users. Two core entry experiences \u2014 the Avatar Room and the Metaverse Map \u2014 needed designing from scratch.",
        task: "Research and design two critical flows for non-crypto-native business users: a Metaverse Map (spatial navigation + investment discovery) and an Avatar Room (identity and personalisation), grounded in competitive benchmarking.",
        action: "Benchmarked Decentraland, The Sandbox and others across functionality, onboarding and monetisation. Interviewed online business owners to surface mental models and cognitive-load barriers. Designed the Metaverse Map as a city (districts, roads, landmarks) with a hexagonal NFT-land grid and progressive disclosure; designed the Avatar Room as a lightweight identity hub keeping the 3D character as the focal point.",
        result: "Onboarded users with zero prior metaverse experience. Spatial metaphors \u2014 city districts, a hexagonal ownership grid \u2014 reduced cognitive load and made digital real-estate value tangible. Progressive disclosure improved FPS and exploration on mobile; the Avatar Room gave a safe transition before the public 3D world. Delivered a modular, scalable UI kit spanning 2D overlays and 3D space, with colour-coded zoning that cut decision time."
      },
      artifacts: [
        "Competitive benchmarking report: functionality, onboarding, monetisation",
        "Interview synthesis: mental-model map of business-user Web3 barriers",
        "Metaverse Map prototype: hexagonal NFT grid + district navigation",
        "Avatar Room prototype: customisation flow + identity UI",
        "Unified design system / UI kit: 2D overlay + 3D space, colour-coded zoning"
      ],
      shots: [
        { id: "dexart-bench", cap: "Metaverse functionality & monetisation matrix" },
        { id: "dexart-map", cap: "Metaverse Map \u2014 hexagonal NFT grid" },
        { id: "dexart-avatar", cap: "Avatar Room \u2014 customisation flow" }
      ]
    },

    /* ─────────────────── AI & EMERGING TECH ─────────────────── */
    {
      id: "sensorium-avatar",
      category: "emerging",
      client: "Sensorium Galaxy",
      clientNote: "AI-powered immersive metaverse",
      title: "Why people really come to an AI metaverse",
      summary: "A 10-week, two-phase study reframed the roadmap around three findings: avatars felt too artificial, AI \u2014 not animation \u2014 was the real draw, and stability outranked everything.",
      tags: ["User research", "UX testing", "Segmentation", "Avatar design", "VR / AI"],
      method: "In-depth interviews + moderated UX testing of live app sessions",
      sample: "10 weeks \u00b7 2 research phases",
      year: "AI metaverse \u00b7 product strategy",
      metrics: [
        { value: "10 wks", label: "research programme" },
        { value: "2", label: "research phases" },
        { value: "3", label: "roadmap-shaping findings" },
        { value: "Reddit", label: "#1 discovery channel" }
      ],
      star: {
        situation: "Sensorium Galaxy is an AI-powered immersive metaverse of distinct virtual worlds, bridging creators and audiences through advanced AI avatars. The team lacked validated understanding of user expectations, motivations and in-app friction \u2014 a critical gap before investing in design and the AI feature roadmap.",
        task: "Understand what drives users into the app, what they do inside, and what blocks immersion. Deliver actionable insight on avatar perception, animation usage, AI feature priority and stability.",
        action: "Ran two phases over 10 weeks: (1) in-depth interviews on download motivation, preferences, usage and AI expectations; (2) moderated UX testing of regular app sessions, observing avatar engagement, animation use and AI-chat behaviour. Synthesised findings into a prioritised roadmap.",
        result: "Three findings reshaped the roadmap: (1) avatars read as excessively artificial \u2014 a real adoption barrier; users wanted more customisation. (2) Primary motivation was scientific interest in AI and AI-bot engagement \u2014 dance/animation features saw minimal use, shifting direction toward AI. (3) Crashes from heavy animation directly damaged perception and retention \u2014 stability became the top technical priority. Discovery insight: most users arrived via AI discussion on Reddit, not gaming channels \u2014 confirming an AI-first positioning."
      },
      artifacts: [
        "User motivation & discovery report: AI interest as primary driver",
        "Avatar perception analysis: artificial vs. lifelike spectrum",
        "UX testing synthesis: feature engagement map (AI chat vs. animation)",
        "App stability impact report: crashes mapped to churn signals",
        "Prioritised roadmap: stability > AI > customisation > animation"
      ],
      shots: [
        { id: "sensorium-perception", cap: "Avatar perception \u2014 artificial vs. natural" },
        { id: "sensorium-engagement", cap: "Feature engagement map" }
      ]
    },
    {
      id: "ai-trading-agent",
      category: "emerging",
      client: "Garage IT",
      clientNote: "Fintech trading platform",
      title: "Designing trust into an AI trading agent",
      summary: "Mental-model interviews and lo-fi concept testing defined how much automation traders will trust \u2014 and the explanation format an AI order-analysis agent needed \u2014 before development began.",
      tags: ["AI UX research", "Mental-model mapping", "Concept testing"],
      method: "In-depth interviews \u00b7 workflow mapping \u00b7 concept testing with lo-fi prototypes",
      sample: "Professional traders \u00b7 closed-order analysis agent",
      year: "Fintech \u00b7 AI agent UX",
      metrics: [
        { value: "Pre-dev", label: "assumptions de-risked" },
        { value: "+25%", label: "platform engagement (Garage IT)" },
        { value: "3", label: "trust signals defined" }
      ],
      star: {
        situation: "A fintech trading platform was building an AI agent to analyse professional traders' closed-order history. The team had a strong technical vision but no validated understanding of how traders review orders, how much automation they'd trust, or what explanation format would be usable.",
        task: "Define trader mental models around order analysis and AI-assisted decisions, validate the interaction concept, and produce requirements for AI output format, explanation depth and trust signals before development.",
        action: "Ran in-depth interviews with professional traders to map order-review workflows, sensemaking steps and decision triggers. Concept-tested lo-fi prototypes and identified the trust signals that mattered: explanation depth, data-source visibility and override control.",
        result: "Key assumptions about automation tolerance and AI trust were tested before development began. Delivered a mental-model map and AI output-format requirements \u2014 explanation depth per insight, confidence signalling, transparency controls \u2014 grounding the interaction and explanation layer in research and reducing rework risk."
      },
      artifacts: [
        "Trader mental-model map: sensemaking steps, decision triggers, trust thresholds",
        "AI output-format guidelines: explanation depth, confidence labelling, overrides",
        "Concept-test synthesis with design principles for the agent layer",
        "Requirements document aligning product and engineering on MVP scope"
      ],
      shots: [
        { id: "agent-mental", cap: "Trader mental-model map" },
        { id: "agent-output", cap: "AI output-format guidelines" }
      ]
    }
  ]
};
