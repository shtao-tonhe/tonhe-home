<template>
  <div>
    123123123
    <div class="markdown-container">
      <!-- 渲染Markdown内容 -->
      <div v-html="compiledMarkdown"></div>
    </div>
    <div class="sidebar">
      <!-- 渲染Markdown目录 -->
      <ul>
        <li v-for="heading in headings" :key="heading.id">
          <a :href="'#' + heading.id" @click="scrollToHeading(heading)">{{ heading.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MarkdownIt from 'markdown-it'
  import { reactive, onMounted } from 'vue'

  export default {
    name: 'MarkdownViewer',
    props: {
      markdownContent: String
    },
    setup(props) {
      const compiledMarkdown = reactive('')
      const headings = reactive([])

      const md = new MarkdownIt()
      console.log('@=md=@', md);

      // 将Markdown内容编译成HTML，并提取标题列表
      const compileMarkdown = () => {
        const tokens = md.parse(props.markdownContent, {})
        let headings = []
        tokens.forEach(token => {
          if (token.type === 'heading_open') {
            const id = token.attrGet('id')
            const title = tokens[tokens.indexOf(token) + 1].content
            headings.push({ id, title })
          }
        })
        compiledMarkdown.value = md.render(props.markdownContent)
        headings = headings.filter(h => h.title && h.title.trim() !== '')
        return headings
      }

      // 点击目录时滚动到相应标题
      const scrollToHeading = (heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }

      onMounted(() => {
        headings.value = compileMarkdown()
      })

      return {
        compiledMarkdown,
        headings,
        scrollToHeading
      }
    }
  }
</script>

<style>
  /* 样式可以根据需要自行调整 */
  .markdown-container {
    width: 70%;
    float: left;
  }

  .sidebar {
    width: 30%;
    float: right;
  }
</style>