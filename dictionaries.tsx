/* eslint-disable react/no-unescaped-entities */
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
    meta_description:
      "Hello there. I'm Algasami, an aspired low-level, software and web developer and a student.",
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
    meta_description: "This is the dev & description page for the site.",
    feature: "Feature",
    dev_in_charge: "Dev in Charge",
    date: "Date",
    content: (
      <>
        This site is built upon Next.js' static site export feature. It was
        originally a page router application, but now most components have been
        migrated to the latest app router introduced in Next.js 14. The site is
        a hundred percent open to everyone's viewing pleasure, with the source
        code located at{" "}
        <a
          className="dynamic-link"
          href="https://github.com/algasami/algasami.github.io"
        >
          this repository
        </a>
        . If you have trouble navigating around on the site on mobile, please
        press the compass icon on the top left of your screen. This opens up a
        navigation modal for you to traverse through this site. It also supports{" "}
        <b>full bilingual translation</b> with the top right button as well.
      </>
    ),
  },
  posts: {
    title: "Posts",
    meta_description: "Repository for the site's posts.",
    next: "Next Post",
    last: "Last Post",
    date: "Date",
    source: "Source",
  },
  graph: {
    title: "Graph",
    meta_description: "This serves as a toolkit for graph manipulation.",
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
    STATE_TEXTS: ["Set Obstacles", "Set Start", "Set End", "Calculating"],
    a_star_state_form: "Current Step",
    a_star_algo_form: "Current Algo",
    a_star_visited: "Total Visited:",
    a_star_algos: ["A*", "Djikstra", "Flooding"],
    a_star_desc: [
      {
        title: "A* Algorithm",
        content: `A* algorithm's main difference from traditional BFS flooding method involves an informed
    search algorithm, whose information largely depends on the non-topological properties of a graph, restricting
    it from being generalized further. Despite this drawback, A* compensates it with a large leap of performance
    compared to traditional flooding and djikstra algorithm. The priority value for each node (less is better) is
    the sum of a heuristic function and the minimum distance from djikstra algorithm.`,
      },
      {
        title: "Djikstra Algorithm",
        content: `Djikstra algorithm is similar to A*, with the priority value for each node being the minimum distance
        from the tree root. Note that it does not contain a heuristic function as Djikstra algorithm is topologically
        flexible.`,
      },
      {
        title: "Flooding",
        content: `Flooding works by flooding the grid, of course. It is BFS with no addition. The algorithm performs
        worst among the three algorithms albeit its simplicity; nevertheless, it is a great algorithm to get started
        from in a beginnner course.`,
      },
    ],
    a_star_next_step: "Next State",
    a_star_next_algo: "Change Algorithm",
    a_star_rst: "Reset",
  },
  tags: {
    math: "Math",
    computer_science: "Computer Science",
    roblox: "Roblox",
    typescript: "Typescript",
    ecs: "ECS",
    netcode: "Netcode",
    personal: "Personal",
    nixos: "NixOS",
    embedded: "Embedded",
    esp: "ESP",
    cpp: "C/C++",
    haskell: "Haskell",
    category_theory: "Category Theory",
    rust: "Rust",
    graphics: "Graphics",
    linux: "Linux",
    vulkan: "Vulkan",
    web: "Web",
    keyboard: "Keyboard",
    dsa: "DSA",
    dynamic_programming: "Dynamic Programming",
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
    meta_description:
      "安安，我是Algasami，一個軟體設計師與網頁設計師，也是一名學生。",
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
    meta_description: "這是本網站的說明與開發紀錄。",
    feature: "功能",
    dev_in_charge: "開發人員",
    date: "日期",
    content: (
      <>
        這網站透過Next.js的靜態網站系統產生，它原先使用page
        router製作，不過目前大部分的原件已經被更新為Next.js 14的app router。
        網站100%是開放給大家閱覽的，原始碼在
        <a
          className="dynamic-link"
          href="https://github.com/algasami/algasami.github.io"
        >
          這個程式庫中
        </a>
        。如果你在行動載具上瀏覽此網站有困難，請點擊左上角的指北針符號，
        它會打開一個瀏覽頁面。本網站也透過右上角按鈕支援<b>全雙語翻譯</b>。
      </>
    ),
  },
  posts: {
    title: "貼文",
    meta_description: "本網站的貼文儲存點。",
    next: "下一篇",
    last: "上一篇",
    date: "日期",
    source: "來源",
  },
  graph: {
    title: "圖論",
    meta_description: "這是圖論相關操作的工具箱。",
    add_x: "新增X",
    add_y: "新增Y",
    calculate: "計算最大匹配",
    reset: "重置",
    x_node: "X節點",
    y_node: "Y節點",
    append: "連結邊",
    how_it_work: "背後的原理",
    content: `你所看到的圖是傳統的二分圖，由兩個互斥集組成。透過匈牙利演算法，
    我們可以找到最有效的最大匹配解法，使用越少的邊達成這件事。雖然此演算法不會報錯，不過在特殊
    情形下可能找不到最優解，因此會採取妥協態度，產生不完整的匹配。
    `,
    traversal_title: "最短路徑問題",
    STATE_TEXTS: ["設定障礙物", "設定起點", "設定終點", "運算中"],
    a_star_state_form: "目前步驟",
    a_star_algo_form: "目前演算法",
    a_star_visited: "拜訪方塊",
    a_star_algos: ["A*", "Djikstra", "淹水法"],
    a_star_desc: [
      {
        title: "A* 演算法",
        content: `A*演算法與傳統的BFS淹水法在於它所做的已知知識搜尋演算法
    （Informed Search Algorithm），其中它所使用的知識源自圖的
    非拓墣性質（Non-topological Properties），造成一個缺點——它難以被通用化。不過，
    儘管它的這個缺點，A*演算法透過驚人的速度超越淹水法與Djikstra演算法。A*的優先值使用
    經驗公式與根節點的最短距離。`,
      },
      {
        title: "Djikstra演算法",
        content: `Djikstra演算法很像A*，不過它的優先值只有使用與根節點的最短距離，
        沒有經驗公式。`,
      },
      {
        title: "淹水法",
        content: `淹水法用類似淹水的方式走訪，它就是原汁原味的廣度優先搜尋，雖然演算法簡單，
        它的表現卻是三者最差的，然而它仍是好的初學者教材。`,
      },
    ],
    a_star_next_step: "下一步",
    a_star_next_algo: "更改演算法",
    a_star_rst: "重置",
  },
  tags: {
    math: "數學",
    computer_science: "電科資工",
    roblox: "Roblox",
    typescript: "Typescript",
    ecs: "ECS",
    netcode: "網路碼",
    personal: "個人",
    nixos: "NixOS",
    embedded: "嵌入式系統",
    esp: "ESP版",
    cpp: "C/C++",
    haskell: "Haskell",
    category_theory: "範疇論",
    rust: "Rust",
    graphics: "圖形",
    linux: "Linux",
    vulkan: "Vulkan",
    web: "網頁",
    keyboard: "鍵盤",
    dsa: "DSA",
    dynamic_programming: "動態程式設計",
  },
};
