import {
  projects_en,
  projects_zh_tw,
  timeline_en,
  timeline_zh_tw,
} from "data/misc";

export const en = {
  index: {
    author_subtitle: " years old, Comp Sci/Low-Level",
    about: {
      title: "About",
      education: {
        title: "Education",
        content: `
        I'm an aspired high school student in Taiwan currently creating a few computer science projects.
        `,
      },
      interests: {
        title: "Interests",
        content: `
        I'm interested in competitive programming, web development, hardware design and computer science
        in general. I am also an avid voice acting amateur.
        `,
      },
      certs: {
        title: "Certificates",
        header_name: "Name",
        header_pro: "Proficiency",
        toeic: "TOEIC Listening & Reading",
        gept: "GEPT",
        gept_level: "Advanced Intermediate",
        apcs_cs: "APCS Concept Section",
        apcs_ps: "APCS Programming Section",
        footer: `
        GEPT stands for General English Proficiency Test(全民英檢).
        APCS stands for Advanced Placement Computer Science(大學程式設計先修檢測).
        `,
      },
    },
    project_title: "Projects",
    projects: projects_en,
    timeline_title: "Timeline",
    timeline: timeline_en,
  },
  navbar: {
    home: "Home",
    dev: "Development",
    posts: "Posts",
    graph: "Graph",
    knots: "Knots",
  },
  dev: {
    title: "Dev Page",
    subtitle: "Temporary Logs",
  },
  posts: {
    title: "Posts",
  },
  graph: {
    title: "Graph Toolkit",
    add_x: "Add X",
    add_y: "Add Y",
    calculate: "Calculate",
    reset: "Reset",
    x_node: "X Node",
    y_node: "Y Node",
    append: "Append Edge",
    how_it_work: "How does it work?",
    content: `The graph shown above is a standard bipartite graph,
    which is a graph containing two self-disjoint graphs (which can be
      thought as primitive DSUs). By applying Hungarian Algorithm on this
      system, we are enabled to calculate the most optimal approach of connecting
      nodes (or vertices) with as few edges as possible, each node having only one
      edge connected to others. Note that this algorithm does not yield errors should
      it fail to find any optimal solutions, which results in an incomplete matching.
    `,
    traversal_title: "Shortest Path Problem",
  },
};

export const zh_tw: typeof en = {
  index: {
    author_subtitle: "歲。資工/低階設計",
    about: {
      title: "關於",
      education: {
        title: "教育",
        content: `
        我是一位台灣高中生，目前正在製作多個資工專案。
        `,
      },
      interests: {
        title: "興趣喜好",
        content: `
        我對競賽程式設計、網頁開發、硬體設計與資工很有興趣。
        我平時也是業餘的聲優。
        `,
      },
      certs: {
        title: "相關憑證",
        header_name: "名稱",
        header_pro: "熟練等級",
        toeic: "多益聽讀",
        gept: "全民英檢",
        gept_level: "中高級",
        apcs_cs: "APCS觀念題",
        apcs_ps: "APCS實作題",
        footer: ``,
      },
    },
    project_title: "專案",
    projects: projects_zh_tw,
    timeline_title: "時間線",
    timeline: timeline_zh_tw,
  },
  navbar: {
    home: "主頁",
    dev: "開發",
    posts: "貼文",
    graph: "圖論",
    knots: "立體節",
  },
  dev: {
    title: "開發面板",
    subtitle: "暫時性日誌",
  },
  posts: {
    title: "貼文",
  },
  graph: {
    title: "圖論工具箱",
    add_x: "新增X",
    add_y: "新增Y",
    calculate: "計算最大匹配",
    reset: "重置",
    x_node: "X節點",
    y_node: "Y節點",
    append: "連結邊",
    how_it_work: "背後的原理",
    content: `你所看到的圖是一個傳統的二分圖，一個二分圖由兩個互斥集組成。使用匈牙利演算法，
    我們可以找到最有效的最大匹配解法，使用越少的邊達成這件事。雖然此演算法不會報錯，不過在特殊
    情形下可能找不到最優解，因此會採取妥協態度，產生不完整的匹配。
    `,
    traversal_title: "最短路徑問題",
  },
};
