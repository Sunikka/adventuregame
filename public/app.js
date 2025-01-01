document.addEventListener("DOMContentLoaded", () => {

	const fps = 144;

	// Game elements
	const startBattleBtn = document.getElementById("start-battle")

	class Character {
		constructor(spriteId, containerId, moveSpeed = 5, initialState = "idle") {
			this.id = spriteId;
			this.sprite = document.getElementById(spriteId);
			this.container = document.getElementById(containerId);
			this.moveSpeed = moveSpeed;
			this.state = initialState;
		}

		get position() {
			return parseInt(window.getComputedStyle(this.container).getPropertyValue("left"))
		}

		set position(value) {
			this.container.style.left = `${value}px`
		}

		get bounds() {
			return this.container.getBoundingClientRect()
		}

	}

	const player = new Character("player", "player-sprite-container");
	const opponent = new Character("opponent", "opponent-sprite-container");
	console.log("initial player position: " + player.position)
	console.log("initial opponent position: " + opponent.position)


	// Dev panel buttons
	const toggleRun = document.getElementById("toggle-run");
	const toggleAttack = document.getElementById("toggle-attack");


	// TODO: Make this less sloppy
	// Current usage: ${targetCharacter} + characterAnimations.get(animationKey).className
	const characterAnimations = new Map([
		["idle", { className: "-sprite-idle" }],
		["run", { className: "-sprite-run" }],
		["attack", { className: "-sprite-attack" }]
	])

	// Dev panel functionality

	// Toggle running 
	startBattleBtn.addEventListener("click", () => {
		if (player.state !== "run" && opponent.state !== "run") {
			switchAnimation("run", player);
			switchAnimation("run", opponent);
			startBattle();
		} else {
			switchAnimation("idle", player);
			switchAnimation("idle", opponent);
		}

	})

	// Toggle attack
	toggleAttack.addEventListener("click", () => {
		console.log("Toggle attack")

		if (targetCharacter.state != "attack") {
			switchAnimation("attack", opponent)
		} else {
			switchAnimation("idle", opponent)

		}
	})



	function switchAnimation(animationKey, targetCharacter) {
		// remove the current class (= current animation) from the sprite ()
		targetCharacter.sprite.classList.remove(targetCharacter.id + characterAnimations.get(targetCharacter.state).className)

		// Update Current Animation Key
		targetCharacter.state = animationKey
		console.log(`${targetCharacter.id}: ${targetCharacter.state}`)
		// ApplyanimationKey the animation by applying the corresponding class to the sprite
		targetCharacter.sprite.classList.add(targetCharacter.id + characterAnimations.get(animationKey).className)

	}



	function startBattle() {
		let interval = setInterval(function() {
			if (player.state == "run" && opponent.state == "run") {
				// Update character positions
				player.position += player.moveSpeed;
				opponent.position -= opponent.moveSpeed;


				// Stop condition
				if (player.bounds.right > opponent.bounds.left + (opponent.bounds.width / 3)) {
					clearInterval(interval); // Stop moving when player reaches the edge
					console.log("Collision");
					switchAnimation("attack", player);
					switchAnimation("attack", opponent);
				}
			} else {
				clearInterval(interval);
			}
		}, 1000 / fps)
	}

})
