import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Cana",
  description: "公务员备考知识点总结",
  themeConfig: {
    // 网站右上角的主导航栏
    nav: [
      { text: 'Home', link: '/' },
    
      {
        text: '📝 行测总结',
        items: [
          { text: '📊 资料分析', link: '/行测/资料分析/' },
          { text: '💬 言语理解', link: '/行测/言语理解/' },
          { text: '🔢 数量关系', link: '/行测/数量关系/' },
          { text: '🧩 判断推理', link: '/行测/判断推理/' },
          { text: '🇨🇳 政治理论', link: '/行测/政治理论/' },
          { text: '⚖️ 公基常识', link: '/行测/公基常识/' }
        ]
      },

      {
        text: '🖋️ 申论精修',
        items: [
          { text: '🔍 单一题/概括归纳', link: '/shenlun/summary' },
          { text: '💡 综合分析题', link: '/shenlun/analysis' },
          { text: '🛠️ 提出对策题', link: '/shenlun/solutions' },
          { text: '📄 应用文写作', link: '/shenlun/practical-writing' },
          { text: '🦁 大作文/文章写作', link: '/shenlun/essay' },
          { text: '📚 金句与时政素材', link: '/shenlun/materials' }
        ]
      }
    ],

    // 左侧树状侧边栏
    sidebar: {
      // 1. 资料分析模块侧边栏
      '/行测/资料分析/': [
        {
          text: '📊 资料分析',
          collapsed: false,
          items: [
            { text: '开篇', link: '/行测/资料分析/开篇' },
            { text: '结构阅读法', link: '/行测/资料分析/结构阅读法' },
            { text: '速算技巧', link: '/行测/资料分析/速算技巧' },
            { text: '比重专题', link: '/行测/资料分析/比重专题' },
            { text: '增长量专题', link: '/行测/资料分析/增长量专题' },
            { text: '平均数专题', link: '/行测/资料分析/平均数专题' },
            { text: '增长率专题', link: '/行测/资料分析/增长率专题' },
            { text: '倍数专题', link: '/行测/资料分析/倍数专题' },
            { text: '秒杀技巧', link: '/行测/资料分析/秒杀技巧' }
          ]
        }
      ],

      // 2. 言语理解模块侧边栏（新增嵌套结构）
      '/行测/言语理解/': [
        {
          text: '💬 言语理解',
          collapsed: false,
          items: [
            // 第一层级带有嵌套子菜单：中心理解
            {
              text: '中心理解',
              collapsed: true, // 默认展开
              items: [
                { text: '行文脉络', link: '/行测/言语理解/中心理解/行文脉络' },
                { text: '转折关系', link: '/行测/言语理解/中心理解/转折关系' },
                { text: '并列关系', link: '/行测/言语理解/中心理解/并列关系' },
                { text: '因果关系', link: '/行测/言语理解/中心理解/因果关系' },
                { text: '条件关系', link: '/行测/言语理解/中心理解/条件关系' },
                { text: '递进关系', link: '/行测/言语理解/中心理解/递进关系' },
                { text: '反面论证', link: '/行测/言语理解/中心理解/反面论证' }
              ]
            },
            // 普通选项
            { text: '细节判断', link: '/行测/言语理解/细节判断' },
            { text: '推断下文', link: '/行测/言语理解/推断下文' },
            { text: '标题填入', link: '/行测/言语理解/标题填入' },
            { text: '语句填空', link: '/行测/言语理解/语句填空' },
            { text: '语句排序', link: '/行测/言语理解/语句排序' },
            // 带有嵌套子菜单：逻辑填空
            {
              text: '逻辑填空',
              collapsed: true, // 默认展开
              items: [
                { text: '词义辨析', link: '/行测/言语理解/逻辑填空/词义辨析' },
                { text: '语境分析', link: '/行测/言语理解/逻辑填空/语境分析' },
                { text: '词语积累', link: '/行测/言语理解/逻辑填空/词语积累' }
              ]
            },
            // 剩下的普通选项
            { text: '词句理解', link: '/行测/言语理解/词句理解' },
            { text: '篇章阅读', link: '/行测/言语理解/篇章阅读' },
            { text: '病句辨析', link: '/行测/言语理解/病句辨析' },
            { text: '歧义句辨析', link: '/行测/言语理解/歧义句辨析' }
          ]
        }
      ]
    }
  }

  export default {
  base: '/my-docs/',   // 你的仓库名，前后都带斜杠
  // 其他配置...
}
})