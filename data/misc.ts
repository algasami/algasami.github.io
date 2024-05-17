export type TimelineItem = {
  title: string;
  content: string;
  date: string;
  category: {
    tag: string;
    color: string;
  };
  link?: {
    url: string;
    text: string;
  };
};

export const timeline_en: { [k: number]: TimelineItem } = [
  {
    title: "Started my journey",
    content: `I started my journey in the world of computers by learning Luau
			(Roblox's Lua dialect) to make games on Roblox. During that time, I realized several programming paradigms
			such as object-oriented programming and functional programming.`,
    date: "Around 2016",
    category: {
      tag: "Roblox",
      color: "blue",
    },
  },
  {
    title: "Introduced to C/C++",
    content: `I was introduced to C and C++ during my first year of junior high school.
      I learned the basics of C and C++ during that time.
			After that, I started to learn more about C++ and started to make my own projects.
			One of my projects was a simple render engine that I made using C++ and OpenGL.`,
    date: "Early 2018",
    category: {
      tag: "C/C++",
      color: "blue",
    },
  },
  {
    title: "Started learning Web Development",
    content: `I started learning web development in the late 2018. I learned HTML, CSS, and JavaScript/Typescript during that time.`,
    date: "Late 2018",
    category: {
      tag: "Web Development",
      color: "blue",
    },
  },
  {
    title: "Started learning Python seriously",
    content: `Since I was interested in machine learning, I started learning Python.
		It was simple yet powerful when to comes to data analysis and machine learning.`,
    date: "2019",
    category: {
      tag: "Python",
      color: "blue",
    },
  },
  {
    title: "Competitive Programming",
    content: `I started competitive programming in 2020. I learned a handful of algorithms and data structures,
		varying from basic concepts to advanced ones during that time.`,
    date: "2020",
    category: {
      tag: "Competitive Programming",
      color: "blue",
    },
  },
  {
    title: "Tinkering with Linux",
    content: `I started playing around with Linux distros in 2020.
		My first Linux distro was Ubuntu, then I moved to Manjaro Linux, and then to Arch Linux.
		During that time, I learned a lot about Linux and how the operating system interacts with the kernel.
		I also got into the world of Linux rice and started to customize my desktop environment.`,
    date: "2020",
    category: {
      tag: "Linux",
      color: "blue",
    },
  },
  {
    title: "Started learning IC Design",
    content: `I started learning IC design in the early 2022.
		Although quite difficult and drastically different from the other fields I've learned, I still enjoyed it.
		I followed a self-teaching group on Discord and learned a lot about IC design during that time.
		In the end, I made a simple RISC-V CPU using Verilog (Synthesized with Xilinx ).`,
    date: "Early 2021",
    category: {
      tag: "IC Design",
      color: "blue",
    },
    link: {
      url: "https://github.com/algasami/RV32i_Imp",
      text: "View on GitHub",
    },
  },
  {
    title: "NECC Excellence Award",
    content: `I was awarded the National English Composition Contest (NECC全國作文比賽) Excellence Award in the mid 2021.
		This award is given to the top ten of the participants in the contest, and I was one of them.
		I wrote an essay about the importance of ethics in the 21st century which was published in the NECC book.
		This shows my abilities in writing and critical thinking, including my abilities to express my ideas clearly and concisely in a foreign language.
		`,
    date: "2021",
    category: {
      tag: "NECC",
      color: "blue",
    },
  },

  {
    title: "Preparing for GSAT",
    content: `I've been busy preparing for the General Scholastic Ability Test (GSAT) since 2022.
		This test is a standardized test that is used to determine the eligibility of students to enter the top high schools in Taiwan.
		I am currently studying for the test and I hope to get a good score.`,
    date: "2022",
    category: {
      tag: "GSAT",
      color: "violet",
    },
  },
  {
    title: "Kernel in Assembly",
    content: `With all the low-level knowledge and deep understanding of CPU architecture, I managed to create a
		standalone kernel and bootloader in x86_64 assembly. It could handle simple I/O tasks and FAT data reading. The
		final result opened vast possibilities for me to create a complete OS from scratch.`,
    date: "2023",
    category: {
      tag: "Kernel",
      color: "violet",
    },
    link: {
      url: "https://github.com/algasami/temporal",
      text: "View on Github",
    },
  },
  {
    title: "University Prep",
    content: `With the end of GSAT comes a large period of free time before I head to university. I've been previewing
    calculus, linear algebra and computer science out of sheer boredom on MIT Open Course Ware.`,
    date: "Early 2024",
    category: {
      tag: "Academy",
      color: "violet",
    },
  },
];

export const timeline_zh_tw: { [k: number]: TimelineItem } = [
  {
    title: "開始我的程式設計旅程",
    content: `我第一個接觸到的語言是LuaU--Roblox版本的Lua，以在Roblox製作遊戲。
    在那段時間，我接觸到了一些程式設計的範示(paradigm)，像是物件導向與函數導向程式設計法。`,
    date: "2016左右",
    category: {
      tag: "Roblox",
      color: "blue",
    },
  },
  {
    title: "C/C++初體驗",
    content: `上高一時，因為社團而接觸到C與C++語言，一見鍾情，後來便開始鑽研
    C/C++更深層的意涵與應用，在高一時有使用C++與OpenGL/Vulkan製作渲染引擎。`,
    date: "2018年初",
    category: {
      tag: "C/C++",
      color: "blue",
    },
  },
  {
    title: "開始學習網頁設計",
    content: `在2018年年底時，我開始接觸與學習網頁設計相關的技術，像是HTML,css與JS/TS。`,
    date: "2018年底",
    category: {
      tag: "Web Development",
      color: "blue",
    },
  },
  {
    title: "開始認真學習Python",
    content: `由於我對於機器學習相關領域有興趣，我開始學習Python(認真的)，別看它簡單的外表，
    在實務上是非常強大的，尤其是在資料分析與機器學習如魚得水。`,
    date: "2019",
    category: {
      tag: "Python",
      color: "blue",
    },
  },
  {
    title: "上競賽程式設計擂台",
    content: `同樣是社團的關係，我在2020年時開始參加程式設計比賽，為了妥備工具，我學到了不少的
    演算法與資料結構，簡單的和衍伸的都有。`,
    date: "2020",
    category: {
      tag: "Competitive Programming",
      color: "blue",
    },
  },
  {
    title: "動手用Linux",
    content: `由於高二上時手頭時間很多，我便開始接觸GNU+Linux作業系統。我第一個使用的是Ubuntu，
    跳到Manjaro與Arch，Linux促使我細部檢視作業系統的運行原理，這也為後來我所製作的Temporal作業系統埋下
    種子。`,
    date: "2020",
    category: {
      tag: "Linux",
      color: "blue",
    },
  },
  {
    title: "接觸到硬體設計",
    content: `在2022年初寒假時，我參加了線上的辦辦學(Accomdemy)自學活動，使用Verilog和Xilinx合成
    自己的RISC-V ISA中央處理器，這段經歷增添不少我的硬體知識。`,
    date: "2021年初",
    category: {
      tag: "IC Design",
      color: "blue",
    },
    link: {
      url: "https://github.com/algasami/RV32i_Imp",
      text: "在Github檢視",
    },
  },
  {
    title: "全國英文作文比賽優勝",
    content: `在2021年中旬，我在北二區競賽中獲得了此佳績，這是只有頒給前十名的獎項，
    證明了我對英文的掌握程度與我的語言表達能力。`,
    date: "2021",
    category: {
      tag: "NECC",
      color: "blue",
    },
  },
  {
    title: "準備學測",
    content: `我自2022年便開始為在2024年一月舉辦的學測做準備，我希望能夠獲得佳績，上好的大學。`,
    date: "2022",
    category: {
      tag: "GSAT",
      color: "violet",
    },
  },
  {
    title: "用組合語言寫電腦殼層",
    content: `我所積攢的低階程式設計與硬體知識終於在Temporal專案的誕生下顯現了，
    我使用C與x86_64組合語言寫出了起動器與殼層。Temporal可以處理簡單的輸入輸出任務
    與FAT檔案系統。它的成功打開了製作自己的作業系統的大門。`,
    date: "2023",
    category: {
      tag: "Kernel",
      color: "violet",
    },
    link: {
      url: "https://github.com/algasami/temporal",
      text: "在Github檢視",
    },
  },
  {
    title: "準備大學",
    content: `學測後生活清閒無憂，不過人需要居安思危，所以我已提早參加麻省理工的線上學士課程，
    攻讀微積分、線性代數與資訊工程。`,
    date: "2024年初",
    category: {
      tag: "Academy",
      color: "violet",
    },
  },
];

export type TProjectItem = {
  name: string;
  subtitle: string;
  content: string;
};

export const projects_en: TProjectItem[] = [
  {
    name: "RV32i_Imp",
    subtitle: "CPU Architecture",
    content: `I learned a lot about algorithm, but I had never understood how a CPU worked. Since the best way
    to learn something is by making it, I started to write a RISC-V 32bit CPU in verilog with the help from 伴伴學.
    `,
  },
  {
    name: "temporal",
    subtitle: "Bootloader + Kernel",
    content: `With the help from Nanobyte's tutorials, I have been developing this kernel for some time.
    It also comes with a Nix Flake, so you can put your worries about dependencies away.
    `,
  },
  {
    name: "boson-rust",
    subtitle: "Single-bounce Ray Tracing Engine",
    content: `I have been working on this project for a while. It is a simple ray tracing engine that can render
    polygons. It is written in Rust from scratch.`,
  },
  {
    name: "iot_connect",
    subtitle: "ESP8266 Project",
    content: `It was meant as a tutorial project to teach people about embedded C++, but I made several versions of
    it. Details in README.md`,
  },
  {
    name: "nixos_dotfiles",
    subtitle: "NixOS Configs",
    content:
      "This monolithic configuration is written for various programs in NixOS.",
  },
];

export const projects_zh_tw: TProjectItem[] = [
  {
    name: "RV32i_Imp",
    subtitle: "CPU架構",
    content: `我對於電腦科學的知識自認是夠的，但是對於硬體則是一竅不通，
    幸好，辦辦學團體的同好們與我一起自學，做出了一顆使用RISC-V指令集的CPU。`,
  },
  {
    name: "Temporal",
    subtitle: "啟動器與殼層",
    content: `有Nanobyte的輔佐下，我做出了這個啟動器與殼層，它有內建的Nix Flake，
    可以不用擔心要安裝依賴。`,
  },
  {
    name: "boson-rust",
    subtitle: "單碰撞光學引擎",
    content: `這是一個從無到有所做出來的光學引擎，背後只有引用std函數庫，剩下都是
    自己寫的，由repo的名子不難看出這是用rust撰寫的。`,
  },
  {
    name: "iot_connect",
    subtitle: "ESP8266專案",
    content: `這是為了多元選修課為了教導同學物聯網的應用所製作的，不過，我也有花了一點時間
    寫了進階版，詳情請見README.md。`,
  },
  {
    name: "nixos_dotfiles",
    subtitle: "NixOS Configs",
    content: "這是我使用NixOS時的設定檔。",
  },
];
