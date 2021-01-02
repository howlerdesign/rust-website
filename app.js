const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const config = require('./config');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

	const stats = config.useStats;
	const steam = config.useSteam;
	const discord = config.useDiscord;

	if (stats && steam && discord) {

	} else if (!stats && steam && discord) {

	} else if (stats && !steam && discord) {

	} else if (stats && steam && !discord) {

	} else if (!stats && !steam && discord) {

	} else if (stats && !steam && !discord) {

	} else if (!stats && steam && !discord) {

	}

	res.render('index', {
		community: config.communityName,
		slogan: config.slogan,
		communityIntroduction: config.communityIntro,
		discordIntro: config.discordIntro,
		headerBackground: config.headerBackground,
		topLogo: config.topLogoUrl,
		logo: config.logoUrl,
		useStore: config.useStore,
		useSteam: config.useSteam,
		useDiscord: config.useDiscord,
		useStats: config.useStats,
		useYoutube: config.useYoutube,
		useTwitter: config.useTwitter,
		useFacebook: config.useFacebook,
		youtubeLink: config.youtubeLink,
		twitterLink: config.twitterLink,
		facebookLink: config.facebookLink,
		steamLink: config.steamGroup,
		discordLink: config.discordLink,
		storeLink: config.storeLink,
		cards: config.cards,
		color: config.themeColor
	});

});

app.listen(port, console.log(`Server started on port ${port}`));