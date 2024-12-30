document.addEventListener("DOMContentLoaded", () => {
	const playerSprite = document.getElementById("player");
	const devButton = document.getElementById("animation-switch");

	const playerAnimations = [
		"player-sprite-idle",
		"player-sprite-run",
		"player-sprite-attack"
	]

	let currentAnimationIndex = 0;


	devButton.addEventListener("click", () => {
		console.log("Switch player animation")
		// remove the current class (= current animation) from the player sprite ()
		playerSprite.classList.remove(playerAnimations[currentAnimationIndex])

		// select next animation
		currentAnimationIndex = (currentAnimationIndex + 1) % playerAnimations.length

		// Apply the animation by applying the corresponding class to the sprite
		playerSprite.classList.add(playerAnimations[currentAnimationIndex])
	})


})
