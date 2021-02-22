<template>
	<div>
		<title-image
			:username="username"
			src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/125299453_10158921684904419_9056757258412325534_o.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=3_9Z5oNmbvMAX-fcxF9&_nc_ht=scontent-cdg2-1.xx&oh=abaffc8391aca03e1c449ab5d25459ff&oe=60555244"
		></title-image>
		<input type="text" class="form-control" placeholder="Message" v-model="message" v-bind:class="{ 'is-invalid': error }" @keyup.enter.prevent="onAddMessage">
	</div>
</template>

<script>
import TitleImage from "@/components/TitleImage";

export default {
	name: "MessageForm",
	components: {TitleImage},
	props: {
		username: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			message: '',
			className: 'left',
			error: false,
		}
	},
	methods: {
		onAddMessage() {
			if (this.message === '') {
				this.error = true;
			} else {
				this.$emit('add-message-event', this.message, this.className, true);
				this.message = '';
				this.error = false;
			}
		},
	},
}
</script>

<style scoped>

</style>
