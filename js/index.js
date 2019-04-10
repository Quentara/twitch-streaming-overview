// Array of Twitch Channels to display
const followingChannels = ["cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

// Itterate through array to display channels
followingChannels.forEach(function(follow) {
	
	// Fetch users via Twitch API
	$.getJSON(`https://wind-bow.glitch.me/twitch-api/users/${follow}`, function(json) {
		let user = json;
		// Fetch channel info via Twitch API
		let channel = $.getJSON(`https://wind-bow.glitch.me/twitch-api/streams/${follow}`, function(json) {
			let status = "";
			let statusCSS = "status on"
			if (json.stream === null) {
				status = "Offline";
				statusCSS = "status";
			} else {
				status = json.stream.channel.status;
			}
			$(".container").append(`
			<div class="user">
				<img class="logo image" src="${user.logo}" alt="${user.name}" />
				<p class="display-name"><a href="https://twitch.tv/${user.name}" target="_blank">${user.display_name}</a></p>
				<span class="${statusCSS}"></span>
				<p class="stream">${status}</p>
				</div>
			`);
		});
	});
});