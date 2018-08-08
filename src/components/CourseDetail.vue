<template>
	<div>
		<ul>
			<li>{{item.name}}</li>
			<li>{{item.course_img}}</li>
			<li>{{item.brief}}</li>
			<li>{{item.asked_question}}</li>
		</ul>

	</div>
</template>

<script>
export default {

  name: 'CourseDetail',
  props:['item'],
  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
</style>
