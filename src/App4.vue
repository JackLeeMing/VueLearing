<template>
    <div>
	<div class="user-card">
		<div class="content">
			<div class="img-wrapper">
				<img src="data:image/jpeg;base64,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" alt="Username" class="user-avatar">
			</div>
			<div class="user-infos">
				<div class="account-type">pro</div>
				<div class="username">
					<div class="fullname">Amadou Oury Diallo</div>
					<div class="pseudo">@amaury_diallo</div>
				</div>
				<div class="job">Frontend developer &amp; more...</div>
				<div class="user-stats">
					<div class="stat projects">
						<div class="stat-title">Projects</div>
						<div class="stat-val">304</div>
					</div>
					<div class="stat followers">
						<div class="stat-title">Followers</div>
						<div class="stat-val">3.5M</div>
					</div>
					<div class="stat awards">
						<div class="stat-title">Awards</div>
						<div class="stat-val">25</div>
					</div>
				</div>
			</div>
			<div class="btn-follow"><span class="add-icon">+</span></div>
		</div>
	</div>
	<footer class="author-bar">
		<div class="author">
			<div class="my-pic">
			</div>
			<span>Amaury</span>
		</div>
		<div class="fb-profile">
			I am on facebook <a href="https://www.facebook.com/amaurydiallo" target="_blank">@amaurydiallo</a>
		</div>
		<div class="fb-page">
			My facebook page <a href="https://www.facebook.com/amaury224" target="_blank">@amaury224</a>
		</div>
		<div class="twt-profile">
			I am on twitter too <a href="https://www.twitter.com/amaury-diall0" target="_blank">@amaury-diall0</a>
		</div>
	</footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
$border-radius-value: 8px;

*,
*::after,
*::before {
	box-sizing: border-box;
}

body {
	font-family: "Trebuchet MS", "apple-system", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #DEDFE1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.user-card::before,
.user-card::after,
.user-card {
	position: absolute;
	margin: auto;
	background-color: #fff;
}

.user-card {
	width: 90%;
	max-width: 520px;
	height: 220px;
	border-radius: 8px;
	box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.25), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);

	.content {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		border-radius: inherit;

		.img-wrapper,
		img {
			border-top-left-radius: inherit;
			border-bottom-left-radius: inherit;
		}

		.img-wrapper {
			position: relative;
			height: 220px;
			width: 220px;

			img {
				max-width: 100%;
				max-height: 100%;
				padding-right: 5px;
				border-right: 2px dashed rgba(#000, .25)
			}
		}

		.user-infos {
			position: relative;
			flex: 1;
			padding: 20px 15px 30px 0;
			color: #B4AAAA;

			.account-type {
				float: right;
				padding: 5px 10px;
				border-radius: 20px;
				text-transform: uppercase;
				font-weight: bold;
				background-color: #E5E5E5;
			}

			.username {
				clear: both;

				.fullname {
					color: #000000;
					font-weight: bold;
					font-size: 1.2em;
				}

			}

			.job {
				font-style: italic;
				color: grey;

				&::before {
					content: '=>';
					color: skyblue;
					padding-right: 5px;
				}
			}

			.user-stats {
				padding-top: 20px;

				.stat {
					padding: 10px;
					display: inline-block;
					text-align: center;

					&.projects .stat-title {
						color: darkviolet;
					}

					&.followers .stat-title {
						color: darkblue;
					}

					&.awards .stat-title {
						color: darkgoldenrod;
					}
				}
			}
		}

		.btn-follow {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			right: -30px;
			top: 50%;
			transform: translateY(-50%);
			width: 10px;
			height: 10px;
			padding: 30px;
			border-radius: 50%;
			font-size: 45px;
			background-color: darkblue;
			color: #fff;
			transition: background-color .3s;
			cursor: pointer;
			user-select: none;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

		}
	}
}

.user-card::before,
.user-card::after {
	content: '';
	width: 90%;
	max-height: 2px;
	z-index: -2;
	padding: 8px;
	left: 0;
	right: 0;
	top: -16px;
	border-radius: 8px 8px 0 0;
	box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.25);
}

.user-card::before {}

.user-card::after {
	width: 80%;
	padding: 10px;
	z-index: -3;
	// background-color: #222;
	top: -30px;
	left: 0;
	right: 0;
}

.author-bar {
	position: fixed;
	bottom: 0;
	min-height: 70px;
	width: 100vw;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;
	background: linear-gradient(-120deg, skyblue 30%, darkviolet 90%);
	color: #fff;

	a {
		color: #000;
	}

	>div {
		margin: 0 15px;
	}

	.author {
		display: flex;
		justify-content: center;
		align-items: center;

		.my-pic {
			width: 50px;
			height: 50px;
			margin-right: 10px;
			border-radius: 50%;
			border: 1px solid #fff;
			background: url('data:image/jpeg;base64,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') center no-repeat;
			background-size: cover;
		}
	}
}
</style>