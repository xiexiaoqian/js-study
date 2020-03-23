var repositories = [
  {
    account: 'CastagnaIT',
    avatar: 'https://avatars2.githubusercontent.com/u/3257156?s=96&v=4',
    introduction: 'InputStream based Netflix plugin for Kodi',
    repositoriesName: 'plugin.video.netflix',
    userName: 'Stefano Gottardo'
  },
  {
    account: 'sdispater',
    avatar: 'https://avatars2.githubusercontent.com/u/555648?s=96&v=4',
    introduction: 'Python datetimes made easy',
    repositoriesName: 'pendulum',
    userName: 'Sébastien Eustace'
  },
  {
    account: 'pzuraq',
    avatar: 'https://avatars2.githubusercontent.com/u/685518?s=96&v=4',
    introduction: 'Animations for modals, dropdowns, popovers, and more! Built on Liquid Fire!',
    repositoriesName: 'liquid-tether',
    userName: 'Chris Garrett'
  },
  {
    account: 'jamesagnew',
    avatar: 'https://avatars0.githubusercontent.com/u/3465117?s=96&v=4',
    introduction: '🔥 HAPI FHIR - Java API for HL7 FHIR Clients and Servers',
    repositoriesName: 'hapi-fhir',
    userName: 'James Agnew'
  },
  {
    account: 'mwaskom',
    avatar: 'https://avatars3.githubusercontent.com/u/315810?s=96&v=4',
    introduction: 'Statistical data visualization using matplotlib',
    repositoriesName: 'seaborn',
    userName: 'Michael Waskom'
  },
  {
    account: 'benjie',
    avatar: 'https://avatars1.githubusercontent.com/u/129910?s=96&v=4',
    introduction:
      '[WIP] Plugin for prettier to support formatting of PostgreSQL-flavour SQL, including function bodies in SQL, pgSQL, PLV8, plpython, etc.',
    repositoriesName: 'prettier-plugin-pg',
    userName: 'Benjie Gillam'
  },
  {
    account: 'nex3',
    avatar: 'https://avatars0.githubusercontent.com/u/188?s=96&v=4',
    introduction: 'Perspectives for Emacs.',
    repositoriesName: 'perspective-el',
    userName: 'Natalie Weizenbaum'
  },
  {
    account: 'lirantal',
    avatar: 'https://avatars2.githubusercontent.com/u/316371?s=96&v=4',
    introduction: 'Immersive terminal interface for managing docker containers and services',
    repositoriesName: 'dockly',
    userName: 'Liran Tal'
  },
  {
    account: '4ian',
    avatar: 'https://avatars2.githubusercontent.com/u/1280130?s=96&v=4',
    introduction: '🎮 GDevelop is an open-source, cross-platform game engine designed to be used by everyone.',
    repositoriesName: 'GDevelop',
    userName: 'Florian Rival'
  },
  {
    account: 'Keno',
    avatar: 'https://avatars2.githubusercontent.com/u/1291671?s=96&v=4',
    introduction: 'Running julia on wasm',
    repositoriesName: 'julia-wasm',
    userName: 'Keno Fischer'
  },
  {
    account: 'rochacbruno',
    avatar: 'https://avatars2.githubusercontent.com/u/458654?s=96&v=4',
    introduction: 'The dynamic configurator for your Python Project 🔧',
    repositoriesName: 'dynaconf',
    userName: 'Bruno Rocha'
  },
  {
    account: 'lipis',
    avatar: 'https://avatars3.githubusercontent.com/u/125676?s=96&v=4',
    introduction: '🎏 A collection of all country flags in SVG — plus the CSS for easier integration',
    repositoriesName: 'flag-icon-css',
    userName: 'Lipis'
  },
  {
    account: 'JakeWharton',
    avatar: 'https://avatars2.githubusercontent.com/u/66577?s=96&v=4',
    introduction: 'Bind Android views and callbacks to fields and methods.',
    repositoriesName: 'butterknife',
    userName: 'Jake Wharton'
  },
  {
    account: 'dbrgn',
    avatar: 'https://avatars2.githubusercontent.com/u/105168?s=96&v=4',
    introduction: 'A very fast implementation of tldr in Rust.',
    repositoriesName: 'tealdeer',
    userName: 'Danilo Bargen'
  },
  {
    account: 'paulirish',
    avatar: 'https://avatars0.githubusercontent.com/u/39191?s=96&v=4',
    introduction: "paul's shell, git, etc config files. also homebrew, migration setup. good stuff.",
    repositoriesName: 'dotfiles',
    userName: 'Paul Irish'
  },
  {
    account: 'a8m',
    avatar: 'https://avatars2.githubusercontent.com/u/7413593?s=96&v=4',
    introduction: 'An overview of Go syntax and features.',
    repositoriesName: 'golang-cheat-sheet',
    userName: 'Ariel Mashraki'
  },
  {
    account: 'unixorn',
    avatar: 'https://avatars0.githubusercontent.com/u/23920?s=96&v=4',
    introduction: 'A collection of ZSH frameworks, plugins, themes and tutorials.',
    repositoriesName: 'awesome-zsh-plugins',
    userName: 'Joe Block'
  },
  {
    account: 'tiangolo',
    avatar: 'https://avatars0.githubusercontent.com/u/1326112?s=96&v=4',
    introduction: 'FastAPI framework, high performance, easy to learn, fast to code, ready for production',
    repositoriesName: 'fastapi',
    userName: 'Sebastián Ramírez'
  },
  {
    account: 'felangel',
    avatar: 'https://avatars0.githubusercontent.com/u/8855632?s=96&v=4',
    introduction: 'A predictable state management library that helps implement the BLoC design pattern',
    repositoriesName: 'bloc',
    userName: 'Felix Angelov'
  },
  {
    account: 'sloria',
    avatar: 'https://avatars2.githubusercontent.com/u/2379650?s=96&v=4',
    introduction:
      'Simple, Pythonic, text processing--Sentiment analysis, part-of-speech tagging, noun phrase extraction, translation, and more.',
    repositoriesName: 'TextBlob',
    userName: 'Steven Loria'
  },
  {
    account: 'Juanpe',
    avatar: 'https://avatars0.githubusercontent.com/u/1409041?s=96&v=4',
    introduction:
      '☠️ An elegant way to show users that something is happening and also prepare them to which contents he is waiting',
    repositoriesName: 'SkeletonView',
    userName: 'Juanpe Catalán'
  },
  {
    account: 'beorn7',
    avatar: 'https://avatars2.githubusercontent.com/u/5609886?s=96&v=4',
    introduction: 'Effective Computation of Things',
    repositoriesName: 'perks',
    userName: 'Björn Rabenstein'
  },
  {
    account: 'klauspost',
    avatar: 'https://avatars0.githubusercontent.com/u/5663952?s=96&v=4',
    introduction: 'Optimized compression packages',
    repositoriesName: 'compress',
    userName: 'Klaus Post'
  },
  {
    account: 'jesseduffield',
    avatar: 'https://avatars0.githubusercontent.com/u/8456633?s=96&v=4',
    introduction: 'simple terminal UI for git commands',
    repositoriesName: 'lazygit',
    userName: 'Jesse Duffield'
  },
  {
    account: 'romainfrancois',
    avatar: 'https://avatars3.githubusercontent.com/u/2625526?s=96&v=4',
    introduction: 'yet another experimental way of processing a data.frame rowwisely',
    repositoriesName: 'rap',
    userName: 'Romain François'
  }
]
var statusArr = []

window.onload = function() {
  initData()
}

function initData() {
  //初始化关注状态的数组
  setStatus()

  let container = document.getElementById('container')

  //主题板
  let banner = `<div class="banner">
  <h1>Trending</h1>
  <p>See what the GitHub community is most excited about today.</p>
  </div>`
  container.innerHTML = banner

  //内容区
  let content = document.createElement('div')
  content.className = 'content'
  container.appendChild(content)

  //内容区选项卡

  //内容信息卡
  for (let index = 0; index < repositories.length; index++) {
    let repository = repositories[index]

    let card = document.createElement('div')
    card.className = 'cardwarp'

    let cardContent = `
    <div class = "card">
      <div class="index"><a href="">${index + 1}</a></div>
      <div class="user">
          <div class="avatar" onmouseover="showBubbleX(this)" onmouseout="hideBubbleX(this)">
            <img src="${repository.avatar}">
            <div class="info-bubble">
              <div class="bubble-header">
                <div class="avatar">
                  <img src="${repository.avatar}">
                </div>
                <div class="name">
                  <p style="font-size:15px;font-weight:600;">${repository.userName}</p>
                  <p style="font-size:14px;">${repository.account}</p>
                </div>
              </div>
              <div class="bubble-body">
                <div class="followers">
                  <p style="font-weight:500; color:#2b3f5b;">639</p>
                  <p class="grey-light">Followers</p>
                </div>
                <div class="following">
                  <p style="font-weight:500; color:#2b3f5b;">2</p>
                  <P class="grey-light">Following</P>
                </div>
                <div class="repos">
                  <p style="font-weight:500; color:#2b3f5b;">47</p>
                  <p class="grey-light">Repos</p>
                </div>
              </div>
              <div class="bubble-foot">
                <i class="iconfont" class="margin-right:10px;">&#xe600;</i>
                <P>Stockholm,Sweden</P>
              </div>
            </div>
          </div>
          <div class="text">
            <div id="info-bubble">气泡</div>
            <p style="font-size:20px;font-weight:500">
              <a href="" style="color:#0366d6;" onmouseover="showBubble(event)" onmouseout="hideBubble(event)">${
                repository.userName
              }</a>
            </p>
            <a href="">${repository.account}</a>
          </div>
      </div>
      <div class="description">
        <p>
        <svg class="octicon octicon-flame text-orange-light mr-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>POPULAR REPO
        </p>

        <div class=""></div>
        <a href="" style="font-weight:500; color:#0366d6;">
          <svg class="octicon octicon-repo text-gray mr-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          ${repository.repositoriesName}
        </a>
        <p>${repository.introduction}</p>
      </div>
      <div class="status">
          <button class="follow" onclick="follow(${index},this)">Follow</button>
      </div>
    </div>
    `
    card.innerHTML = cardContent
    content.appendChild(card)
  }
}

// 关注按钮的点击事件
function follow(index, obj) {
  //关注按钮状态
  let isFollow = statusArr[index]

  setTimeout(function() {
    if (isFollow) {
      obj.innerHTML = 'Follow'
    } else {
      obj.innerHTML = 'Unfollow'
    }
    statusArr[index] = !statusArr[index]
  }, 500)
}

//给关注按钮添加状态
function setStatus() {
  for (let i = 0; i < repositories.length; i++) {
    statusArr.push(false)
  }
  return statusArr
}

//获取鼠标位置
function showCoords(evt) {
  //   alert('clientX value: ' + evt.clientX + '\n' + 'clientY value: ' + evt.clientY + '\n')
  let clientx = evt.clientX
  let clienty = evt.clientY
  let arr = [clientx, clienty]
  return arr
}

//显示气泡
function showBubble(evt) {
  let arr = showCoords(evt)

  //修改隐藏起来的气泡的display，top，left等属性
  let el = document.getElementById('info-bubble')
  el.style.display = 'block'
  el.style.top = arr[1] - 45 + 'px'
  el.style.left = arr[0] + 5 + 'px'

  // console.log(el.style)  //看一哈el.style是啥，改动成功没
}

//隐藏气泡
function hideBubble(evt) {
  let el = document.getElementById('info-bubble')
  el.style.display = 'none'
  el.style.top = 0 + 'px'
  el.style.left = 0 + 'px'
}

//显示气泡（定住的）
function showBubbleX(data) {
  // let el = document.getElementsByClassName('info-bubble')
  // el[0].style.display = 'block'
  let div = data.children[1]
  div.style.display = 'block'
}

//隐藏气泡
function hideBubbleX(data) {
  // let el = document.getElementsByClassName('info-bubble')
  // el[0].style.display = 'none'
  let div = data.children[1]
  div.style.display = 'none'
}

/**
 * function(event,this)
 * event:传事件
 * this：传当前整个元素
 */
