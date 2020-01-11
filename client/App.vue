<template>
  <div>
    <div v-if="!$subReady.Time">Loading...</div>
    <div v-else>
      <p>Hello {{hello}},
        <br>現時刻 : {{currentTime}}
      </p>
      <button @click="updateTime">時刻を更新する</button>
      <p>Startup times:</p>
      <p>起動時刻が新しい順でソートされている</p>
      <ul>
        <li v-for="t in TimeCursor">
          時刻 : {{t.time}}  -  ID : {{t._id}}
        </li>
      </ul>
      <p>Meteor settings</p>
      <p>サーバー起動時に渡した設定ファイルを参照できる</p>
      <pre><code>
        {{settings}}
      </code></pre>
    </div>
  </div>
</template>

<script>
// collectionをインポート
import '/imports/collections/Time';

export default {
  data() {
    return {
      hello: 'World',
      settings: Meteor.settings.public,
    }
  },
  methods: {  
    updateTime() {
      Meteor.call('UpdateTime');
    }
  },
  meteor: {
    // $subReady.Timeの部分で利用、ここにデータがなければ「Loading...」を表示する
    $subscribe: {
      'Time': []
    },
    currentTime () {
      // 現在時刻、Collectionから取得
      var t = Time.findOne('currentTime') || {};
      return t.time;
    },
    TimeCursor () {
      // コレクションから全件取得してソート
      return Time.find({}, {
        sort: {time: -1}
      })
    },
  }
}
</script>

<style scoped>
  p {
    font-weight: bold;
  }
</style>