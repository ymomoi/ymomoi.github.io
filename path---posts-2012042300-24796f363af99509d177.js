webpackJsonp([38439106124999],{419:function(t,e){t.exports={data:{site:{siteMetadata:{title:"momorandum",subtitle:"momo's memorandums",copyright:"© All rights reserved.",author:{name:"momo",twitter:"sbg"},disqusShortname:"",url:"https://ymomoi.github.io"}},markdownRemark:{id:"/Users/momo/web/gatsby-momo/src/pages/articles/2012-04-23-ubuntu-server/index.md absPath of file >>> MarkdownRemark",html:'<p>ubuntu server にセキュリティパッチなどを自動アップデートするように設定する．\nunattended-upgrades パッケージを入れれば OK．</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">apt-get update\napt-get install unattended-upgrades</code></pre>\n      </div>\n<p>設定ファイルは /etc/apt/apt.conf.d/50unattended-upgrades にある．適用するアップデート種類を指定する場合はこれを編集する．</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Unattended-Upgrade::Allowed-Origins {\n        &quot;${distro_id} ${distro_codename}-security&quot;;\n//      &quot;${distro_id} ${distro_codename}-updates&quot;;\n//      &quot;${distro_id} ${distro_codename}-proposed&quot;;\n//      &quot;${distro_id} ${distro_codename}-backports&quot;;\n};</code></pre>\n      </div>\n<p>自動アップデートの対象にしたくないパッケージはここに記述する．</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Unattended-Upgrade::Package-Blacklist {\n//      &quot;vim&quot;;\n//      &quot;libc6&quot;;\n//      &quot;libc6-dev&quot;;\n//      &quot;libc6-i686&quot;;\n};</code></pre>\n      </div>\n<p>アップデートログをメールで送る設定．\n成功/失敗共に通知するのか，失敗したときのみを選択できる．</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">// Send email to this address for problems or packages upgrades\n// If empty or unset then no email is sent, make sure that you\n// have a working mail setup on your system. The package &#39;mailx&#39;\n// must be installed or anything that provides /usr/bin/mail.\nUnattended-Upgrade::Mail &quot;root@localhost&quot;;\n// Set this value to &quot;true&quot; to get emails only on errors. Default\n// is to always send a mail if Unattended-Upgrade::Mail is set\n//Unattended-Upgrade::MailOnlyOnError &quot;true&quot;;</code></pre>\n      </div>',fields:{tagSlugs:["/tags/linux/","/tags/ubuntu/"]},frontmatter:{title:"ubuntu server に自動アップデート設定",tags:["Linux","Ubuntu"],date:"2012-04-23T00:00:00.000Z",description:"ubuntu server にセキュリティパッチなどを自動アップデートするように設定する．unattended-upgrades パッケージを入れれば OK．"}}},pathContext:{slug:"/posts/2012042300/"}}}});
//# sourceMappingURL=path---posts-2012042300-24796f363af99509d177.js.map