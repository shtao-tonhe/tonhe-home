<template>
  <div class="page">
    <div class="paper">
      <div class="p-body">
        <span class="title">传微软亲自操刀 开发参数5000亿的MAI-1大模型</span>
      </div>
      <div class="p-content">
        <div v-html="article.content"></div>
      </div>
    </div>
    <div class="p-list">
      <div class="c-i" v-for="(item, index) in headings" :key="index">
        {{item.label}}
        <div class="c-i c-2" v-for="(cItem, index) in item.children" :key="index">
          {{cItem.label}}
        </div>
      </div>
    </div>

    <footer-progress />
  </div>
</template>

<script setup>
  import { ref, reactive, onMounted, onUnmounted } from 'vue'
  import * as htmlparser2 from "htmlparser2"
  import FooterProgress from '@/components/FooterProgress.vue'


  const loading = ref(false)
  const article = ref({
    title: '示例文章',
    createTime: '2024-05-10',
    content: `
    <h2>面向openAI学习</h2>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    <h3>第尔尔个标t</h3>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    <h3>第伞伞个标t</h3>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    <h3>第一第一第一个标t</h3>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    <h3>第第一第一个标t</h3>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    <p>事件是 Web 应用的反馈；例如，当一个网页完成加载，或者用户选择什么，按下一个键，调整一个窗口的大小，提交一个表单，或者暂停一个视频。</p>
    `
  })

  const headings = ref([
    {
      label: '完成加载', id: 'one', children: [
        { label: '一个网页完成加载', id: 'one' },
        { label: '或者暂停一个视频', id: 'one' },
        { label: 'Do you really know ai?', id: 'one' },
      ]
    },
  ])

  const extractHeadings = (content) => {
    // 提取标题
    const headings = []
    const parser = new htmlparser2.Parser({
      onopentag(name, attribs) {
        console.log('name--', name, attribs);
        // if (name.startsWith('h')) {
        //   const id = attribs.id
        //   const title = ''
        //   headings.push({ id, title })
        // }
      },
    })
    console.log('可以解析', parser)
    return headings
  }

  onMounted(() => {
    console.log('===================onMounted=================');
    console.log(article.value);
    loading.value = true
    // compiledContent.value = md.render(article.value.content)
    // headings.value = extractHeadings(article.value.content)
    loading.value = false
    return {
      loading,
      article,
      // compiledContent,
      headings
    }
  })
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .paper {
    margin: 50px 200px;
    max-width: 50%;
    padding: 30px 50px;
    font-size: 30px;
    background: #23272E;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    letter-spacing: 2.2px;

    .title {
      font-size: 30px;
      font-weight: 600;
      color: #ABB2BF;
      margin-bottom: 10px;
    }

    .desc {
      color: rgba(255, 255, 255, .4);
      font-size: 15px;
      margin-bottom: 10px;
    }

    .context {
      font-size: 18px;
      line-height: 35px;
      color: #ABB2BF;
    }
  }

  .p-list {
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;

    .c-i {
      color: #9ca3af;
      letter-spacing: 1px;
    }

    .c-2 {
      /* padding: 8px 0 8px 20px; */
      padding-top: 13px;
      padding-left: 20px;
    }
  }

  .flow-wave {
    transform: translate(-50%, -50%) scale(3);
    font-size: 18px;
    text-decoration: none;
    background: radial-gradient(circle at 10px -7px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x,
      radial-gradient(circle at 10px 27px, transparent 8px, currentColor 8px, currentColor 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
    padding: 5px 0;
  }

  .flow-wave:hover,
  .flow-wave:focus {
    background: radial-gradient(circle at 10px -7px, transparent 8px, #FF0000 8px, #FF0000 9px, transparent 9px) repeat-x,
      radial-gradient(circle at 10px 27px, transparent 8px, #FF0000 8px, #FF0000 9px, transparent 9px) repeat-x;
    background-size: 20px 20px;
    background-position: -10px calc(100% + 16px), 0 calc(100% - 4px);
    animation: waveFlow 1s infinite linear;
  }

  @keyframes waveFlow {
    from {
      background-position-x: -10px, 0;
    }

    to {
      background-position-x: -30px, -20px;
    }
  }

  @keyframes moveTop {
    100% {
      bottom: -5px;
    }
  }

  @keyframes moveBottom {
    100% {
      bottom: 5px;
    }
  }
</style>


<!-- 1、《明朝那些事》的作者当年明月，在接受央视采访时，说过下面这段话：


当年明月：我经常上自习到11点多，自己在教室自习，自习完了自己出去。那时教室没有人了，路上都没有人了，我记得是秋天，晚上很冷，我就走在路上，往宿舍走，只能听到我自己的脚步声。哪怕是出去玩的人，都回来了，只有我自己的脚步声，那个时候，我感到一种无比的喜悦。

记者：喜悦？

当年明月：我感到我在不断地向前进，世界上有很多人很多种选择。最低的是温饱，对吧，然后是利益，就是钱，超越钱的，是名望，权力，但是在超越这些所有东西之上还有一样东西，叫智慧。

你到这个世界上来，你应该有这样一个觉悟，就是你终究是要死的，这就是一个人他很悲剧的，他无论多厉害，无论多牛，无论多么嚣张，他都要死的，他都有终结那一天。那么在这段时间里做什么呢，不断地看书，懂得这个世界的很多东西，知道这个世界的规律，那是一种无比的喜悦，狂喜。



当年明月：智慧，告诉你是一种无比强大的感觉，强大到你不会再畏惧任何人，这个世界上，无论是，开名车，住好房子，经常夸耀这些，为什么，为了向别人证明自己并不弱小，但这是虚的，因为很容易戳破的，怎么样强大，只有智慧和知识的内在强大，让你自己懂得很多，对这个世界你有充分的了解，你就不会有委屈了。

....



2、实话实说，上面的内心独白，很多时候也是我对《毛选》的一些感悟。

《毛选》是公认的屠龙术，研读《毛选》的这些年，虽然没有让我一夜暴富，走上人生巅峰，但给我带来的改变却是肉眼可见的



它让我看到了这个世界上最顶级的高手是如何思考棘手问题、解决棘手问题的。

整部《毛选》其实就是教员结合实际，创造性地运用马、恩、列的立场观点方法和原理解决中国实际问题的典型案例库。

他思考解决的重大问题包括但不限于：怎样区分敌友、立足点选择农村还是城市、如何搞好内部团结、怎样星火燎原、如何由弱变强、抗战是速决战还是持久战等等。



任何一个问题，单独拎出来都是世界级的难题，更不要说，他打至都没有时间去静静思考这些问题，因为他不仅要面对这些难题，还要随时面对自己人的刁难、责骂和不理解，但教员的逆天之处就在于，他不仅给出了完美的解决方案，还把思考的过程、解决的过程、所用到的原理全部用最通俗的大白话写了出来，这就是我们看到的《毛选》。



电影《教父》中有句名言：“那些花半秒钟就看透事物本质的人，和花一辈子都看不清事物本质的人，注定是截然不同的命运。”



教员说：《毛选》里的这些东西，是群众教给我们的，是血的著作。

读这样的书，哪怕什么方法也学不会，但带给我们内心的震撼和感动却是其他名著给不了的，更不用说这套书极大地开阔了我们的眼界，本身就在潜移默化中塑造着我们的灵魂。



、《毛选》中没有哪篇文章在专门教我们如何才能更加自信，但读完《毛选》，很难不自信。在我们的成长过程中，每个人多多少少都有遇到这样的问题。

过于在意别人的想法和感受，以至于做什么事情，都战战兢兢。失去了朋友、恋人、社会关系，就以为会天翻地覆，从此孤单一人。

人活在这个世界上，与其他动物有一个非常大的区别，就是存在着外部评价，这个评价体系，来自于其他个体、社会团体、道德与法律。

在狗的世界里，根本就不存在什么外部评价，吃喝拉撒，交配繁衍后代，这些东西，都可以由着它来。

但人就不行。

随着社会日渐演化，个人的差异性，越来越受到大众群体的干扰，外部的观点，越来越渗透到个体的骨子里面去。“xx事件”，很多人之所以会转发，就是看到朋友圈里，与自己有社会关系的人，都在转发。

自己如果不转发，就会被扣上冷酷无情的帽子。

转发一下，又不会消耗自己太多的时间与精力成本，还能落得富有同情心的美名。

二者选其一，傻子都知道怎么去筛选。

所以实现内心强大的最重要的，就是只在乎自己内心真实的想法和感受。
你可能会跳出来，指着我的鼻子骂道：
卧槽，你怎么可以那么自私，一点都不在乎别人的感受，这和禽兽有什么区别。
但好好回想一下，你活到现在，有没有真正为自己而活过？你担心和朋友相处地不好，会被同个圈子的其他人孤立起来，怕自己成为一个孤岛，于是你小心翼翼地记下他们的喜好，说什么话，都要经过反复几次斟酌。
才能出口。
别人一点赞，你立刻心花怒放，别人两三天没有理你，你立马就开始自我检讨。自己这两天是不是说错话了？我做错什么事了吗？为什么他不理我了？

说到底，你还是太过于在意他人的反馈。

但人不能依靠别人给予的反馈过日子，不然就如同上了线的玩偶，所有的喜怒哀乐，都掌握在别人手中。

你邀请别人一起去登山，你就要做好别人拒绝你的准备，只有这样，别人去还是不去，你都不会太过于失望；

你暗恋一个男生，能和他一起吃顿饭就已知足，他答不答应和你在一起，其实已经不那么重要；

你做好自己的事情，也要做好准备，迎接别人的冷言冷语，因为不是所有的人，都达到你想要的期望值。

当你想通这一点，你所有的顾虑和担忧，才能最终释怀。

不然整天自己画牢给自己坐，迟早要出大事。 -->