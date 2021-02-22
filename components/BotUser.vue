<template>
	<div>
		<title-image
			username="DumBot"
			src="https://cdn.iconscout.com/icon/free/png-256/bot-136-504893.png"
		></title-image>
		<alert
			text="You can talk to me.<br>I answser fast, with <strong>lorem ipsum</strong> sentences."
			class-name="alert-secondary">
		</alert>
	</div>
</template>

<script>
const axios = require('axios');
import Alert from "@/components/Alert";
import TitleImage from "@/components/TitleImage";

export default {
	name: "BotUser",
	components: {Alert, TitleImage},
	props: {
		username: {
			type: String,
			default: '',
		},
		waitingForAnswer: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		waitingForAnswer(value) {
			if (value) {
				let self = this;
				setTimeout(function () {
					self.response()
				}, 1000)
			}
		}
	},
	data() {
		return {
			className: 'right',
		}
	},
	methods: {
		response() {
			let self = this;
			axios.get('https://jsonplaceholder.typicode.com/posts/' + this.randomNumber(100))
				.then(function (response) {
					self.$emit('add-message-event', self.sanitize(response.data.title), self.className, false);
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		sanitize(message) {
			let signs = ['.', '...', ' ?', ' !', ' :)', ' <3'];
			return message.charAt(0).toUpperCase() + message.slice(1) + signs[Math.floor(Math.random() * signs.length)];
		},
		randomNumber(max) {
			let number = Math.floor(Math.random() * Math.floor(max));
			return number > 0 && number <= max ? number : 1;
		},
	},
}
</script>

<style scoped>

</style>
