import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "卢江洋",
  initials: "溪河",
  location: "Wrocław, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "我是一个爱折腾、有着技术抱负的创业青年，喜欢探索新鲜技术，并热衷于将技术的乐趣分享给更多人。我坚信技术是改变世界的重要驱动力，我相信，知识的价值在于分享。我不仅在技术领域追求卓越，还热衷于将我的所学所得传递给他人。我通过博客、公众号和自媒体平台，分享好玩的 AI 技术产品应用，让更多人感受到科技的魅力。",
  avatarUrl: "https://avatars.githubusercontent.com/u/67847083?v=4",
  personalWebsiteUrl: "https://www.ljy-lu.space/",
  contact: {
    email: "L4Walk@chuheng.tech",
    tel: "+8617858601564",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/L4Walk",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%E6%B1%9F%E6%B4%8B-%E5%8D%A2-a68966293/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/L4Walk",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "中国计量大学",
      degree: "数据科学与大数据技术，本科",
      start: "2021.09",
      end: "至今",
    },
    {
      school: "中国计量大学",
      degree: "首届创新创业管理微专业",
      start: "2022.09",
      end: "2024.01",
    },
    {
      school: "浙江大学",
      degree: "求是强鹰实践成长计划二十一期",
      start: "2023.12",
      end: "至今",
    },
  ],
  work: [
    {
      company: "整数智能信息技术（杭州）有限责任公司",
      link: "https://molardata.com",
      badges: ["实习"],
      title: "产品经理",
      logo: ConsultlyLogo,
      start: "2024.02",
      end: "至今",
      description:
        "负责MooreData数据工程平台个人版产品设计和市场推广；竞品调研；AIGC行业研究",
    },
    {
      company: "上海蓝衫科技有限公司",
      link: "https://parabol.co",
      badges: ["远程"],
      title: "技术主管",
      logo: ParabolLogo,
      start: "2023.09",
      end: "2023.12",
      description:
        "负责蓝衫科技C端产品研发，蓝衫科技导航站站长，负责站内AI搜索研发；蓝衫AI Tool、APP封装、蓝衫云支付等产品线研发搭建",
    },
    {
      company: "杭州初恒智云科技有限公司",
      link: "",
      badges: ["创业公司"],
      title: "创始人，CEO",
      logo: ClevertechLogo,
      start: "2022.10",
      end: "至今",
      description:
        "• 首次创业尝试，主营业务为技术外包与服务• 基于机器视觉的自动化检测系统• 基于 ArcGIS 的生态红线检测系统（与教授合作）• 文本对话助手 SciChat• 基于 ChatGLM2 的本地智能客服系统• 基于 LDM 和 CPM-Bee 的 AI 绘图软件（2023 年国家级大学生创新创业训练计划项目）",
    },
  ],
  skills: [
    "C++",
    "C#",
    "Figma",
    "Python",
    "Matlab",
    "Data Analytics",
    "Machine Learning",
    "Computer Vision",
    "Crawling",
    "Deep Learning",
    "Vue.js",
    "TypeScript",
    "Nuxt.js",
    "Tailwind CSS",
  ],
  projects: [
    {
      title: "基于机器视觉的自动化检测系统",
      techStack: ["C++", "QT", "OpenCV", "Node.js", "GraphQL"],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "基于 ArcGIS Enigine 的地理信息系统检测软件",
      techStack: ["C#", "ArcGIS Engine"],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "基于 LLM 的智能问答助理",
      techStack: ["Nuxt.js", "TypeScript", "Vite", "RAG"],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "中国计量大学创赛服务平台",
      techStack: ["Nuxt.js", "TypeScript", "Vite"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "基于 LDM 和 CPM-Bee 模型的 AIGC 绘图软件研发",
      techStack: ["Nuxt.js", "TypeScript", "Vite", "LLMOps"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
