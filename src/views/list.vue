<template>
  <div>
   	<table>
		<thead>
			<tr>
				<th>排名</th>
				<th>姓名</th>
				<th>性别</th>
				<th>评分</th>
				<th>日期</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item,index) in list" :class="{'odd':index % 2 == 1,'even': index % 2 == 0}">
				<td>NO.{{ index + 1 }}</td>
				<td>{{ item.name }}</td>
				<td>{{ item.sex == 0?'男':'女' }}</td>
				<td>{{ item.score }}分</td>
				<td>{{ item.date | formatDate }}</td>
			</tr>
			<tr>
				<td colspan="5" style="border-bottom: none;color:#999;" @click="loadMore()">点击加载更多</td>
			</tr>
		</tbody>

	</table>

	<table>
		<thead>
			<tr>
				<th style="width:100%">主题 https://cnodejs.org/api</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in topicList">
				<td>{{ item.title }}</td>
			</tr>
		</tbody>
	</table>

	<div class="text-center">
      <h4>组件</h4>
      <addSong></addSong>

 	</div>

  </div>
</template>

<script type="text/ecmascript-6">
	import {formatDate} from 'common/js/date';
	import addSong from './addSong';

  	export default {
	    data() {
	      return {
	        list: [
			   {
			     "name": "张三",
			     "sex": 0,
			     "score": 80,
			     "date": 1483523354510
			   },
			   {
			     "name": "尼古拉斯赵四",
			     "sex": 0,
			     "score": 99,
			     "date": 1483423254510
			   },
			   {
			     "name": "王五a",
			     "score": 76,
			     "sex": 1,
			     "date": 1483723454510
			   },
			    {
			     "name": "田七",
			     "score": 77,
			     "sex": 1,
			     "date": 1483926354510
			   }
			],
			topicList:[]
	      };
	    },
	    created() {
	      this.$http.get('https://cnodejs.org/api/v1/topics?limit=10').then((response) => {
	      	if (response.status === 200) {
	      		this.topicList = response.data.data;
	      	}
	      });
    	},
	    methods: {
	      loadMore() {
			alert("loadMore");
	      }
	    },
	    filters: {
	      formatDate(time) {
	        let date = new Date(time);
	        return formatDate(date, 'yyyy-MM-dd hh:mm');
	      }
	    },
	    components: {
	    	addSong
	    }
    };

</script>

<style scoped>
	table{
		width:100%;
		background-color: white;
		margin-bottom: 30px;
	}

	tr,th,td{
		height:40px;
		line-height: 40px;
		font-size: 15px;
		color:#666;
	}
	th{
		font-weight: normal;
		border-bottom: 1px solid #D2D2D2;
		/*width:20%;*/
		text-align: center;
	}
	td{
		text-align: center;
		border-bottom: 1px solid #E8E8E8;
	}

	.odd {
      background-color: #E3F0F0;
    }
    .even {
      background-color: #D5E3E3;
    }
</style>
