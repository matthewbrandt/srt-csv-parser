# srt-csv-parser
Parse 1 or more srt files into a consolidated csv file, for clean use in SQL databases or elsewhere.

# How To
1) Clone the code to your computer, following the instructions from Github
2) Place your .srt files in the `srt_input` folder
3) In your terminal, execute the  command `node parse.js` (requires NodeJS to be installed on your system)
4) The individual .csv files will be in the `csv_output` folder!
5) Optional: use a website like [Merge CSV](https://merge-csv.com/) to combine all your .csv files into a single file for easier import and/or editing.

# Additional Information
## Why I built this
Livestreamers using the [OBS Caption Plugin](https://github.com/ratwithacompiler/OBS-captions-plugin) _(or other plugins that generate subtitle files)_ are now fully able to take the folder of subtitle files (srt) and convert them easily to comma-separated values (csv) files. You can then import them into Excel, Google Sheets or more advanced software or databases in order to do various types of analysis.

## Thank You
Credit where credit is due - I had a lot of help building this while live on [Twitch](https://twitch.tv/matty_twoshoes) and so I owe many thanks to:
- Stoney_Eagle
- Pandapoopums
- Nathnolt
- ExegeteIO