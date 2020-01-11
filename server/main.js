import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import { onPageLoad } from 'meteor/server-render';
import { createRenderer } from 'vue-server-renderer';

import '/imports/collections/Time';
import '/imports/publications/Time';
import '/imports/methods/UpdateTime';

// SinglePageApplicationで作成する場合SEO対策の一貫としてServerSideRenderingをする必要がある
// ここではなくサーバー側で実装することも可能
// import { VueSSR } from 'meteor/akryum:vue-ssr';
const renderer = createRenderer();

// pageがロードされたときに実行される
onPageLoad(sink => {
  const url = sink.request.url.path;
  const app = new Vue({
    data: {
      url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  });

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error');
      return
    }
    // ここではサンプルで実際に画面に出ているVueコンポーネントではなく、↑で作成しているHTMLを表示している
    console.log('html', html);
    sink.renderIntoElementById('app', html);
  })
})

// サーバーを起動したときに実行される初期化の部分
// ローカルでソースの更新が走ったときも実行される
Meteor.startup(() => {
  // 現在の時刻をアップデートする
  Meteor.call('UpdateTime');
  // 起動の時間をインサートする
  Time.insert({ time: new Date() });
  console.log(`現時刻 : ${Time.findOne().time}`);
  console.log('サーバーを起動しました');
});
