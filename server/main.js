import { Meteor } from 'meteor/meteor';

import '/imports/collections/Time';
import '/imports/publications/Time';
import '/imports/methods/UpdateTime';

Meteor.startup(() => {
  // サーバーを起動したときに実行される初期化の部分
  // ローカルでソースの更新が走ったときも実行される
  
  // 現在の時刻をアップデートする
  Meteor.call('UpdateTime');
  // 起動の時間をインサートする
  Time.insert({ time: new Date() });
  console.log(`現時刻 : ${Time.findOne().time}`);
  console.log('サーバーを起動しました');
});
