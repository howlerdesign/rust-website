module.exports = {
	// ** Edit below **

	// Features
	// True if you want to display these links, false if not.
	useStats: false,
	useStore: true,
	useSteam: true,
	useDiscord: true,
	useTwitter: true,
	useYoutube: true,
	useFacebook: true,

	// General
	communityName: 'Community Name',
	slogan: 'Your slogan here',
	discordIntro: 'Describe your Discord here.',
	communityIntro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eveniet? Accusantium esse libero consectetur in a? Illum, sapiente quas aut facilis sit est saepe eligendi nostrum ad asperiores mollitia a! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eveniet? Accusantium esse libero consectetur in a? Illum, sapiente quas aut facilis sit est saepe eligendi nostrum ad asperiores mollitia a! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eveniet? Accusantium esse libero consectetur in a? Illum, sapiente quas aut facilis sit est saepe eligendi nostrum ad asperiores mollitia a!',

	// Links
	twitterLink: 'https://twitter.com/yourtwitter',
	facebookLink: 'https://facebook.com/facebook',
	youtubeLink: 'https://youtube.com/youtube',
	discordLink: 'https://discord.gg/C6uR8JEWmn', // Make sure the link never expires
	storeLink: 'https://yourstorelink.com',
	discordServerID: '780454401466171402',
	steamGroup: 'SteamName', // https://steamcommunity/groups/<copy this part>

	// Images
	headerBackground: 'https://i.imgur.com/oLFD9Jp.png', // Change the header background image
	topLogoUrl: 'https://i.imgur.com/Ih9URET.png', // Will be displayed at the top of the page. Suggested size: 100x30px
	logoUrl: 'https://i.imgur.com/830Y6pL.png', // Will be displayed in the community introduction. Suggested size: 300x300px

	// Database info (If you want to use Stats page. If not, set useStats: false!)
	dbHost: 'localhost', // IP of the server where your database is hosted
	dbTable: 'playerranksdb', // Only change this if you changed the table name when installing the plugin
	dbDb: 'database', // Name of the database
	dbUser: 'username',
	dbPw: 'password',

	// Front page cards
	// You can create new cards by adding new card object.
	// You can add as many as you want, but on most monitors max 3 cards will fit on one row.
	cards: [
		{
			title: 'EU Server',
			content: 'IP: 123.12.123.22:28015'
		},
		{
			title: 'Card Title 2',
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eveniet? Accusantium esse libero consectetur in a? Illum, sapiente quas aut facilis sit est saepe eligendi nostrum ad asperiores mollitia a!'
		},
		{
			title: 'Card Title 3',
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eveniet? Accusantium esse libero consectetur in a? Illum, sapiente quas aut facilis sit est saepe eligendi nostrum ad asperiores mollitia a!'
		},
		{
			title: 'Card Title 4',
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eveniet? Accusantium esse libero consectetur in a? Illum, sapiente quas aut facilis sit est saepe eligendi nostrum ad asperiores mollitia a!'
		},
		{
			title: 'Card Title 5',
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eveniet? Accusantium esse libero consectetur in a? Illum, sapiente quas aut facilis sit est saepe eligendi nostrum ad asperiores mollitia a!'
		},
		{
			title: 'Card Title 6',
			content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eveniet? Accusantium esse libero consectetur in a? Illum, sapiente quas aut facilis sit est saepe eligendi nostrum ad asperiores mollitia a!'
		}
	],

	// Color
	themeColor: '#00FFA7',

	// ** Edit above **
};