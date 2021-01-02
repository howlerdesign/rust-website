const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const config = require('./config');
const stats = require('./mysql/connection');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

	const steam = config.useSteam;
	const discord = config.useDiscord;

	if (steam && discord) {

		axios.get(`https://discord.com/api/guilds/${config.discordServerID}/widget.json`)
			.then(discordOnline => {
				axios.get('https://steamcommunity.com/groups/RaidGroundsOfficial/memberslistxml/?xml=1')
					.then(steamOnline => {

						parser.parseString(steamOnline.data, (err, steam) => {
							if (!err) {
								res.render('index', {
									discordOnline: discordOnline.data.presence_count,
									steamOnline: steam.memberList.memberCount[0],
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
									color: config.themeColor,
								});
							}
						});
					});
			})
			.catch(err => {
				throw err;
			});
	} else if (!steam && discord) {
		axios.get(`https://discord.com/api/guilds/${config.discordServerID}/widget.json`)
			.then(discordOnline => {
				res.render('index', {
					discordOnline: discordOnline.data.presence_count,
					steamOnline: undefined,
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
					color: config.themeColor,
				});
			})
			.catch(err => {
				throw err;
			});

	} else if (steam && !discord) {
		axios.get('https://steamcommunity.com/groups/RaidGroundsOfficial/memberslistxml/?xml=1')
			.then(steamOnline => {
				parser.parseString(steamOnline.data, (err, steam) => {
					if (!err) {
						console.log(steam.memberList.memberCount[0]);
						res.render('index', {
							discordOnline: undefined,
							steamOnline: steam.memberList.memberCount[0],
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
							color: config.themeColor,
						});
					}
				});
			});
	} else if (!steam && !discord) {
		res.render('index', {
			discordOnline: undefined,
			steamOnline: undefined,
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
	}

});

app.get('/stats', (req, res) => {

	if (config.useStats) {

		if (config.useDiscord && config.useSteam) {
			axios.get(`https://discord.com/api/guilds/${config.discordServerID}/widget.json`)
				.then(discordOnline => {
					axios.get('https://steamcommunity.com/groups/RaidGroundsOfficial/memberslistxml/?xml=1')
						.then(steamOnline => {
							parser.parseString(steamOnline.data, (err, steam) => {
								if (!err) {
									stats.query(`SELECT * FROM ${config.dbTable} ORDER BY KDR DESC`, (err, stats) => {
										if (!err) {
											res.render('stats', {
												stats: stats,
												steamOnline: steam.memberList.memberCount[0],
												discordOnline: discordOnline.data.presence_count,
												community: config.communityName,
												slogan: config.slogan,
												color: config.themeColor,
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
												storeLink: config.storeLink
											});
										}
									});
								}
							});
						});
				})
		}

	} else if (!config.useDiscord && config.useSteam) {

		axios.get('https://steamcommunity.com/groups/RaidGroundsOfficial/memberslistxml/?xml=1')
			.then(steamOnline => {
				parser.parseString(steamOnline.data, (err, steam) => {
					if (!err) {
						stats.query(`SELECT * FROM ${config.dbTable} ORDER BY KDR DESC`, (err, stats) => {
							if (!err) {
								res.render('stats', {
									stats: stats,
									steamOnline: steam.memberList.memberCount[0],
									discordOnline: discordOnline.data.presence_count,
									community: config.communityName,
									slogan: config.slogan,
									color: config.themeColor,
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
									storeLink: config.storeLink
								});
							}
						});
					}
				});
			});

	} else if (config.useDiscord && !config.useSteam) {

		axios.get(`https://discord.com/api/guilds/${config.discordServerID}/widget.json`)
			.then(discordOnline => {
				stats.query(`SELECT * FROM ${config.dbTable} ORDER BY KDR DESC`, (err, stats) => {
					if (!err) {
						res.render('stats', {
							stats: stats,
							steamOnline: steam.memberList.memberCount[0],
							discordOnline: discordOnline.data.presence_count,
							community: config.communityName,
							slogan: config.slogan,
							color: config.themeColor,
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
							storeLink: config.storeLink
						});
					}
				});
			});

	}

});

app.listen(port, console.log(`Server started on port ${port}`));