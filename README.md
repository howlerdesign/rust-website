# Rust Website Template
Rust Website Template is a NodeJS/EJS App built to easily set up a website for a Rust Community.

## General Info
* Change images, colors and text with simple config file.
* Display Steam membercount.
* Display Discord membercount.
* Responsive
* Built with NodeJS and EJS.

### How to get Discord API Link? (This is not the invite link!)
1. Go to your Discord Server Settings.
2. Click "Widget".
3. Click "Copy" next to JSON API.
4. Paste it into discordAPILink in config.js.

## How to install?
There are many ways to run a Node app, but I'm going to guide you through with Heroku.com. Heroku.com offers a free tier with some down sides, but they also offer affordable 'Hobbyist' hosting. We will be setting up the free tier, but you can upgrade it anytime you want.

### Setting up files locally
1. Download the files and put them into a folder somewhere in your computer. Just remember the location.
2. Open your Terminal (MacOS) or Command Prompt (Windows) and type "cd /path/to/the/folder/"
3. Once you have managed to get into the folder you can move to Setting up Heroku

### Setting up Heroku
1. Go to https://www.heroku.com
2. Sign Up.
	- You can select Node.js in the "Primary development language". It doesn't matter though.
3. Once you've verified your account, you will be shown a screen with two buttons. Click on Create new app.
4. Give your app a name (remember this name for step 10.) and choose the region you want it to be hosted at and click Create App.
5. There are 3 deployment methods and we are going to use the CLI method. It might seem scary at first, but trust me, it is simple.
6. Click on the link where it says "Download and install the Heroku CLI".
7. If you are on MacOS, you can use Terminal to install the CLI. Just copy/paste the line you are shown. If you are on windows, select the correct installer. Instructions for Ubuntu are also provided.
8. Once you have successfully installed the CLI, go back to your Terminal or Command Prompt and type "heroku login". It will ask for your email and password. (You might need to restart Terminal/Command Prompt)
9. Type "git init".
10. Type "heroku git:remote -a yourappname".
11. Type "git add .".
12. Type "git commit -m "First Commit".
13. Type "git push heroku master".
14. Wait for it to upload the app. Once it has finished, it will provide you a link that you can use to open the website. (Looks like www.yourappname.herokuapp.com).
15. If you configured the config.js file correctly, you should see you website live.

### Custom Domain
You might want your website to be accessible with your own domain. Heroku has made this easy.
Instructions: https://devcenter.heroku.com/articles/custom-domains
