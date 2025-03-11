const blogs = [
  {
    id: 1,
    title: "前端工程化之代码规范实践",
    content:
      "本篇文章将深入探讨前端工程化中的代码规范实践，包括ESLint的配置、代码风格的统一以及如何通过自动化工具提升代码质量。",
    author: "张三",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/1.jpg",
    views: 1234,
    favorites: 234,
    likes: 345,
    tags: ["前端工程化", "代码规范", "ESLint"],
  },
  {
    id: 2,
    title: "前端项目构建工具比较：Webpack vs Rollup",
    content:
      "本文将对Webpack和Rollup这两种流行的前端构建工具进行详细比较，从配置复杂度、构建速度、代码分割等方面分析它们的优缺点。",
    author: "李四",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/2.jpg",
    views: 1567,
    favorites: 345,
    likes: 456,
    tags: ["前端工程化", "构建工具", "Webpack", "Rollup"],
  },
  {
    id: 3,
    title: "前端自动化测试全攻略",
    content:
      "自动化测试是前端工程化的重要组成部分。本文将介绍如何搭建前端自动化测试环境，包括单元测试、集成测试和端到端测试的实践方法。",
    author: "王五",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/3.jpg",
    views: 987,
    favorites: 123,
    likes: 234,
    tags: ["前端工程化", "自动化测试", "单元测试", "集成测试"],
  },
  {
    id: 4,
    title: "前端模块化开发：从CommonJS到ESModules",
    content:
      "模块化开发是前端工程化的基石。本文将回顾从CommonJS到ESModules的演变过程，并探讨如何在项目中有效应用ESModules。",
    author: "赵六",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/8.jpg",
    views: 1123,
    favorites: 246,
    likes: 357,
    tags: ["前端工程化", "模块化", "ESModules", "CommonJS"],
  },
  {
    id: 5,
    title: "前端性能优化实战指南",
    content:
      "性能优化是前端工程化中不可或缺的一环。本文将分享多个实际项目的性能优化案例，涵盖代码压缩、资源加载策略、渲染优化等方面。",
    author: "钱七",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/5.jpg",
    views: 1345,
    favorites: 369,
    likes: 480,
    tags: ["前端工程化", "性能优化", "代码压缩", "渲染优化"],
  },
  {
    id: 6,
    title: "前端工程化中的持续集成与持续部署",
    content:
      "本文将介绍如何在前端项目中实现持续集成和持续部署，包括CI/CD流程的搭建、自动化测试的集成以及如何利用GitHub Actions等工具提升开发效率。",
    author: "孙八",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/6.jpg",
    views: 1023,
    favorites: 258,
    likes: 369,
    tags: ["前端工程化", "持续集成", "持续部署", "CI/CD"],
  },
  {
    id: 7,
    title: "前端工程化之静态资源管理",
    content:
      "静态资源管理对于前端项目的性能和可维护性至关重要。本文将探讨如何通过CDN、缓存策略以及资源版本控制等手段优化静态资源管理。",
    author: "周九",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/7.jpg",
    views: 987,
    favorites: 147,
    likes: 258,
    tags: ["前端工程化", "静态资源", "CDN", "缓存策略"],
  },
  {
    id: 8,
    title: "前端工程化中的团队协作与代码审查",
    content:
      "在大型前端团队中，如何高效协作和保证代码质量是一个关键问题。本文将分享团队协作的最佳实践以及代码审查的流程和工具。",
    author: "吴十",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/8.jpg",
    views: 1111,
    favorites: 222,
    likes: 333,
    tags: ["前端工程化", "团队协作", "代码审查"],
  },
  {
    id: 9,
    title: "前端工程化之错误监控与日志管理",
    content:
      "本文将介绍如何在前端项目中实现错误监控和日志管理，包括如何捕获和上报前端错误，以及如何利用日志数据进行问题定位和性能分析。",
    author: "郑十一",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/1.jpg",
    views: 1234,
    favorites: 345,
    likes: 456,
    tags: ["前端工程化", "错误监控", "日志管理"],
  },
  {
    id: 10,
    title: "前端工程化：从零到一搭建现代化前端项目",
    content:
      "本文将手把手教你从零开始搭建一个现代化的前端项目，涵盖项目初始化、目录结构设计、构建工具配置以及工程化实践的各个方面。",
    author: "黄十二",
    image: "https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/front/10.jpg",
    views: 1456,
    favorites: 456,
    likes: 567,
    tags: ["前端工程化", "项目搭建", "现代化前端"],
  },
];

export default blogs;
