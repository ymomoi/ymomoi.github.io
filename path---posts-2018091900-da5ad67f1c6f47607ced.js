webpackJsonp([0xaecc9cb2296c],{434:function(n,t){n.exports={data:{site:{siteMetadata:{title:"momorandum",subtitle:"momo's memorandums",copyright:"© All rights reserved.",author:{name:"momo",twitter:"sbg"},disqusShortname:"",url:"https://m.bug.org"}},markdownRemark:{id:"/Users/momo/web/gatsby-momo/src/pages/articles/2018-09-14-rejectcon/index.md absPath of file >>> MarkdownRemark",html:'<p><a href="https://ssmjp.connpass.com/event/95820/">Security Reject Con + ssmjp</a> に blog 枠で参加してみました。\nblog 枠で何かに参加するのは初めてですｗ</p>\n<p>会場は大崎の <a href="https://www.future.co.jp">Future</a> 様。<a href="https://github.com/future-architect/vuls">Vuls</a> 関係などで何度か来ている、個人的にはおなじみの場所です。</p>\n<h1>前説</h1>\n<p>いつもの <a href="https://twitter.com/tigerszk">@tigerszk</a> さんの <a href="https://ssm.pkan.org/">#ssmjp</a> 説明。「なんでもしゃべりに来てね！」が基本スタンスです。</p>\n<p>Security Reject con の説明。カンファレンスや学会で惜しくも不採用になったネタを発表して次の採用に活かすというイベント。</p>\n<h1>Future 様の紹介</h1>\n<p><a href="https://twitter.com/hogehuga">@hogehuga</a> さん。</p>\n<p>あんがい普通の会社紹介資料から、あまり普通ではない説明が続く。\n羽田の到着したところに大きな広告が出てますね！\nまだ転職してきて間もないので、会社紹介なのに「みたいです」が多くなる。</p>\n<p><a href="https://vuls.biz/">FutureVuls</a> 出ました！\n無料で試せるので、ぜひよろしくお願いします。</p>\n<h1>We regret to inform you</h1>\n<p><a href="https://twitter.com/akirakanaoka">@akirakanaoka</a> さん。</p>\n<p>研究者です。Usable Security、暗号の応用とシステム化、モバイルやってます。</p>\n<p>トップカンファレンスとリジェクト。資料作成していたら心が折れそうになりましたｗ</p>\n<p>研究者は論文を出してなんぼ。ジャーナルや海外カンファレンス、特にトップカンファレンスが評価が高い。\n<a href="http://faculty.cs.tamu.edu/guofei/sec_conf_stat.htm">セキュリティカンファレンスのランキング</a> がある。\n影響度順みたいなもの。</p>\n<p>トップカンファレンスは査読や評価が分厚い。\n半年前に締め切って、3ヶ月ぐらいで査読される。\n論文も緻密で長い。\n序盤、中盤、終盤、隙がない。</p>\n<p>自分の強みを知って、作戦を立てる。</p>\n<p>お祈りメールまとめｗ</p>\n<p>落ちていく中でわかってきたこと。</p>\n<ul>\n<li>とにかく新規性</li>\n<li>\n<p>採録通知まで3ヶ月、発表まで半年</p>\n<ul>\n<li>任期付き、ポスドク、学生だとけっこうつらい</li>\n</ul>\n</li>\n<li>スピード感</li>\n<li>うまい文章 (英語とか関係ないレベル)</li>\n<li>出さなきゃ通らない</li>\n</ul>\n<p>次に向けての着実な一歩！</p>\n<ul>\n<li>\n<p>Q&#x26;A</p>\n<ul>\n<li>Q. セキュリティで次に来るのは？</li>\n<li>A. 暗号の実装まわりじゃないだろうか</li>\n</ul>\n</li>\n<li>\n<p><a href="https://twitter.com/akirakanaoka/status/1040551095397830656">話者プロフィール</a></p>\n</li>\n<li>\n<p><a href="https://twitter.com/akirakanaoka/status/1040566631695446016">採録されたとき</a></p>\n</li>\n</ul>\n<h1>Your EV SSL certificate is crying -Gaps between SSL server operators and Contents designers-</h1>\n<p>RWC2018 に出したけど落ちた話。</p>\n<p>suga さんがやってきたことを紹介。自分でも何をやっているのかいまいちわかっていない。\nCRYPTREC とかいろいろな研究会の委員とかやってます。</p>\n<p>Real World Crypto 2018 に投稿したけど落ちた話をします。</p>\n<p>あなたの EV SSL 証明書が泣いている という話をします。\n日本語版は JANOG で話した内容 (<a href="https://www.janog.gr.jp/meeting/janog39/program/evssl.html">JANOG39 EVSSL証明書が泣いている「検索窓問題」～ブラウザのセキュリティインディケータを意識していますか～</a>) です。</p>\n<p>とあるリストを元に、SSL の状況をサーベイしました。\n弱い暗号を使っているサイトもおおいです。\nEV SSL を買っていてもそのように表示されていないサイトがけっこうある。\n検索窓の URL が http で mixed contents になっちゃっているものが多い。\nせっかく高いのを買っているのに…</p>\n<p>さらに、Chrome のバグで EV SSL がちゃんと表示されていない時期があった。一ヶ月ぐらい。\nアドレスバーに組織名が表示されないバグ。</p>\n<h1>サイバーセキュリティ錬金術</h1>\n<p><a href="https://twitter.com/bbr_bbq">@bbr_bbq</a> さん。</p>\n<p>価値あるデータ: XSSの検査値/ブラックリスト を自動的に作る。</p>\n<p>収集は手作業だけど、そのあとは自動で作る。\n記号や HTML タグなど。遺伝的アルゴリズムの基になる遺伝子。\n遺伝的アルゴリズムで、これらを価値あるデータに！</p>\n<p>環境への適合度を評価する。</p>\n<ul>\n<li>HTML 構文として正しいか</li>\n<li>スクリプトが動作するか</li>\n</ul>\n<p>このへんは、一年前に blog を書きました。</p>\n<p>ここでできたものを GAN を使って増やしていく。</p>\n<p>入力となるノイズを合成して行くことで、ベクトルの中間にあたるようなデータが出力できる。\nこれを利用してデータをさらに増やしていく。</p>\n<p>実際に Discremeter を、WAF として使ってみた。\n速度と False Negative が出てしまうのがネックだった。</p>\n<p>今後の課題 (≒ Rejectされた理由)</p>\n<p>今回のソースコードは github にあげてあります。</p>\n<p><a href="https://twitter.com/bbr_bbq/status/1040574520464031751">資料</a></p>\n<h1>リジェクト・キャンプ行ってきましたヽ(´ー｀)ノ</h1>\n<p><a href="https://twitter.com/sonodam">@sonodam</a> さん。</p>\n<p>一本目</p>\n<p>SQL インジェクション攻撃の確率モデルと〜</p>\n<ul>\n<li>サンプル少なすぎ</li>\n<li>SVM と比べた？</li>\n<li>テストベッドとリアルなデータセット使ったか？</li>\n<li>英語がいまいち</li>\n</ul>\n<p>感想。英語はだいたい指摘されるねｗ\n面白い論文はけっこう読んでるけど、内容勝負のやつだと英語がひどかったりするんだけどｗ</p>\n<p>Accept のよいところを拾いつつ Reject 修正というのは、量やストーリーの問題もあってなかなか難しい。</p>\n<p>領域によっては評価できる専門家はそんなに多くない？</p>\n<p>数理モデル+セキュリティはまだまだ感。\nそもそも人が少ない？\nものすごくずれたものの査読依頼が来たこともある。</p>\n<p>新しいものを作っている分野では評価できる人がいないのは普通か。</p>\n<p>リジェクト・キャンプというのを実はやったことがあって。\nセキュリティキャンプに行けなかった人たちで集まって合宿しようぜ、というノリでやったことがある。2008年。\n<a href="https://tech.nikkeibp.co.jp/it/pc/article/column/20080908/1007805/">Rejectキャンプに行ってきました</a>という記事を書きました。\nぶっちゃけおもしろかったです。</p>\n<ul>\n<li>\n<p>コメント</p>\n<ul>\n<li>境界領域は確かに難しいので、分野ではなくて「この人がいる」カンファレンスに出すのがよいのでは (suga)</li>\n</ul>\n</li>\n</ul>\n<h1>NKの内部事情</h1>\n<p>ととろさん。</p>\n<p>2015年に北朝鮮が話題になった話。\nRedStar を解析してみた</p>\n<p>デモは具合悪くて動かず。残念。</p>\n<p>OS に仕掛けがあって、通信が全部、北のサーバを通るようになっていた。\nHTML がいじられて、Twitter, Facebook は表示しないようになっていた。\nどう見ても Apple のソースをパクって作ってある。</p>\n<p>RedStar の解析記事(英語)はググると出てくるので、興味のある方はそちらをどうぞ。</p>',fields:{tagSlugs:["/tags/security/","/tags/ssmjp/"]},frontmatter:{title:"Security Reject Con + ssmjp に参加してきた",tags:["Security","ssmjp"],date:"2018-09-19T00:00:00.000Z",description:"Security Reject Con + ssmjp に blog 枠で参加してみました。"}}},pathContext:{slug:"/posts/2018091900/"}}}});
//# sourceMappingURL=path---posts-2018091900-da5ad67f1c6f47607ced.js.map