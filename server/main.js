import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // サーバーを起動したときに実行される初期化の部分
  // ローカルでソースの更新が走ったときも実行される
  console.log('サーバーを起動しました');
});
