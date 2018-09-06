webpackJsonp([93935941002267],{420:function(e,l){e.exports={data:{site:{siteMetadata:{title:"momorandum",subtitle:"momo's memorandums",copyright:"© All rights reserved.",author:{name:"momo",twitter:"sbg"},disqusShortname:"",url:"https://ymomoi.github.io"}},markdownRemark:{id:"/Users/momo/web/gatsby-momo/src/pages/articles/2012-04-17-centos/index.md absPath of file >>> MarkdownRemark",html:'<p>CentOS 6.2 に MySQL 5.5 をインストールしようとしたら，依存関係があってちょっと悩んだ．\n具体的には，postfix などが依存している mysql-libs 5.1 がコンフリクトする．\nこの依存関係をどう解消したものかと調べてみると，remi というリポジトリのものを使っているようだった．\nひとまずそれにならってインストールしてみることにする．</p>\n<ol>\n<li>\n<p>epel, remi をインストール</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">sudo rpm -Uvh http://ftp-srv2.kddilabs.jp/Linux/distributions/fedora/epel/6/x86_64/epel-release-6-5.noarch.rpm\nsudo rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm</code></pre>\n      </div>\n</li>\n<li>\n<p>mysql 関連パッケージをアップデート</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">sudo yum -y --enablerepo=remi install mysql-server mysql-devel mysql-client</code></pre>\n      </div>\n</li>\n<li>\n<p>mysqld 設定</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">sudo chkconfig mysqld on\nsudo service mysqld start\nsudo mysql_secure_installation</code></pre>\n      </div>\n</li>\n<li>\n<p>httpd, phpMyAdmin をインストール</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">sudo yum -y install --enablerepo=epel,remi httpd php phpMyAdmin php-mysql</code></pre>\n      </div>\n</li>\n<li>\n<p>phpMyAdmin 設定</p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">sudo vi /etc/httpd/conf.d/phpMyAdmin.conf</code></pre>\n      </div>\n</li>\n</ol>\n<p>参考:</p>\n<ul>\n<li><a href="http://rails3beginner.blogspot.jp/2012/01/centos6mysql55.html">Rails3備忘録: CentOS6にMySQL5.5をインストール</a></li>\n<li><a href="http://www.limemo.net/blog/2012/03/add-epe-repository-of-yum-on-cenots.html">CentOSのyumにEPELレポジトリを追加する | Linuxとかをつついてみるブログ</a></li>\n</ul>',fields:{tagSlugs:["/tags/linux/","/tags/cent-os/"]},frontmatter:{title:"MySQL 5.5 install on CentOS 6.2",tags:["Linux","CentOS"],date:"2012-04-17T00:00:00.000Z",description:"CentOS 6.2 に MySQL 5.5 をインストールしようとしたら，依存関係があってちょっと悩んだ．"}}},pathContext:{slug:"/posts/2012041700/"}}}});
//# sourceMappingURL=path---posts-2012041700-27de35619f3a4b1dea31.js.map