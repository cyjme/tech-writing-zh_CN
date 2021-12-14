import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import type { NavbarConfig } from '@vuepress/theme-default'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'Technical Writing - 技术写作',
  description: '面向技术人员的技术写作教程',
  base: '/tech-writing/',

  themeConfig: {
    logo: 'https://developers.google.com/tech-writing/images/TechWritingLogo.png',
    contributors: false,
    lastUpdated: false,
    sidebarDepth: 0,
    sidebar: [
      {
        text: "概述",
        link: "/overview"
      },
      {
        text: "技术写作第一部分",
        children: [
          {
            text: "介绍",
            link: "/one/introduction.html",
          },
          {
            text: "基础语法",
            link: "/one/just-enough-grammer.html",
          },
          {
            text: "单词",
            link: "/one/words.html",
          },
          {
            text: "主动语态",
            link: "/one/active-voice.html",
          },
          {
            text: "清晰的句子",
            link: "/one/clear-sentences.html",
          },
          {
            text: "简短的句子",
            link: "/one/short-sentences.html",
          },
          {
            text: "列表和表格",
            link: "/one/lists-and-tables.html",
          },
          {
            text: "段落",
            link: "/one/paragraphs.html",
          },
          {
            text: "读者",
            link: "/one/audience.html",
          },
          {
            text: "文档",
            link: "/one/documents.html",
          },
          {
            text: "标点符号",
            link: "/one/punctuation.html",
          },
          {
            text: "Markdown",
            link: "/one/markdown.html",
          },
          {
            text: "总结",
            link: "/one/summary.html",
          }
        ]
      },
      {
        text: "技术写作第二部分",
        children: [
          {
            text: "介绍",
            link: "/two/introduction.html",
          },
          {
            text: "自编辑",
            link: "/two/self-editing.html",
          },
          {
            text: "组织大型文档",
            link: "/two/organizing-large-docs.html",
          },
          {
            text: "插图",
            link: "/two/illustrations.html",
          },
          {
            text: "创建示例代码",
            link: "/two/sample-code.html",
          },
          {
            text: "总结",
            link: "/two/summary.html",
          }
        ]
      },
      {
        text: "相关资源",
        children: [
          {
            text: "资源",
            link: "/resources"
          }
        ]
      },
    ]
  },
})