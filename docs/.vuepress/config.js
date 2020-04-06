const sidebar = require("./sidebars");

module.exports = {
  base: "/books/",
  themeConfig: {
    nav: [
      {
        text: "设计数据密集型应用",
        link: "/ddia/",
      },
      {
        text: "Go 入门指南",
        link: "/go-doc/",
      },
      {
        text: "GitHub",
        link: "https://github.com/chhpt/ddia",
      },
    ],
    sidebar: {
      "/ddia/": [
        "",
        "preface.md",
        "part-i.md",
        "ch1.md",
        "ch2.md",
        "ch3.md",
        "ch4.md",
        "part-ii.md",
        "ch5.md",
        "ch6.md",
        "ch7.md",
        "ch8.md",
        "ch9.md",
        "part-iii.md",
        "ch10.md",
        "ch11.md",
        "ch12.md",
        "glossary.md",
        "colophon.md",
      ],
      "/go-doc/": sidebar.goDoc,
    },
  },
};
