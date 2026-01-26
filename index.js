const { AoiClient } = require("aoi.js");

require('dotenv').config();

const TOKEN = process.env.TOKEN;

const fs = require('fs');

const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");

const client = new AoiClient({
	token: process.env.TOKEN,
	prefix: "w!",
    respondToBots: false,
	aoiLogs: "true",
	aoiWarning: "true",
    intents: ["Guilds", "GuildMembers", "GuildBans", "DirectMessages", "MessageContent", "GuildMessages","GuildVoiceStates"],
    events: ["onInteractionCreate", "onMessageDelete","onMessage", "onChannelCreate", "onThreadCreate", "onJoin", "onLeave", "onMemberUpdate", "onBanAdd"],
	//onInteractionCreate
	disableFunctions : ["$clientToken"],
	database: {
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
    },
    autoUpdates: false,
    mobilePlatform: false,
    guildOnly: true,
    respondOnEdit: {
    commands: true,
    time: 600000
},
    suppressAllErrors: false,
    errorMessage: ["", ""]
    });

const voice = new AoiVoice(client, {
  searchOptions: {
    //soundcloudClientId: "Soundcloud ID", // optional
    youtubegl: "US",
  },
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
});

// optional (cacher / filter)
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(
  PluginName.Filter,
  new Filter({
    filterFromStart: false,
  }),
);

const { LoadCommands } = require("aoi.js");


const loader = new LoadCommands(client);
loader.load(voice.cmds, "./eventsmusic/");

voice.addEvent(PlayerEvents.QueueEnd);
voice.addEvent(PlayerEvents.TrackStart);

voice.bindExecutor(client.functionManager.interpreter); // needed for events

require("./handler/variables.js")(client);
require("./handler/status.js")(client);

client.loadCommands("./comandos/", false);

client.functionManager.createFunction({
    name: "$translate",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [from = "auto", to = "en", text = "Text"] = data.inside.splits;

        async function translate() {
            let request = await fetch(`https://ild.vercel.app/api/translate?from=${from}&to=${to}&text=${text}`);

            let result = await request.json()
            return result.output;
        }

        data.result = await translate();

        return {
            code: d.util.setCode(data)
        };
    }
});

client.functionManager.createFunction({
  name: "$search",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [query, type = "youtube", format = "{title} by {artist} ({duration})", list = 5, separator = "\n"] = data.inside.splits;

    const searchType = type.toLowerCase() === "youtube" ? 3 : 0;

    let results;
    if (searchType === 3) {
      results = await d.client.voiceManager.search(3, query, list);
    } else if (searchType === 0) {
      results = await d.client.voiceManager.search(0, query, list);
    }

    const formattedResults = results.map((result) => {
      let fr = format;

      const placeholders = {
        "{title}": result.title,
        "{artist}": searchType === 3 ? result.author.name : result.publisher_metadata?.artist || "Unknown Artist",
        "{duration}": searchType === 3 ? result.duration.seconds * 1000: result.duration,
        "{formattedDuration}": searchType === 3 ? result.duration.text : new Date(result.duration).toISOString().substr(14, 5),
        "{id}": result.id,
        "{url}": searchType === 3 ? "https://www.youtube.com/watch?v=" + result.id : result.permalink_url
      };

      for (const placeholder in placeholders) {
        fr= fr.replace(new RegExp(placeholder, "g"), placeholders[placeholder]);
      }

      return fr;
    });

    data.result = formattedResults.join(separator);

    return {
      code: d.util.setCode(data)
    };
  }
});

client.functionManager.createFunction({
  name: "$dyColor",
  type: "djs",
  code: async (d) => {
    const fs = require("fs");
    const data = d.util.aoiFunc(d);
    const [type, color] = data.inside.splits;

    try {
      const colors = JSON.parse(fs.readFileSync("Recursos/design/colors.json", "utf8"));
      console.log(colors)
      console.log(colors[type][color])
      if (colors[type] && colors[type][color]) {
        data.result = colors[type][color];
        return { code: d.util.setCode(data) };
      } else {
        data.result = "Infelizmente não encontrei esta cor.";
        return { code: d.util.setCode(data) };
      }
    } catch (error) {
      return d.aoiError.consoleError(error);
    }
  },
});

client.functionManager.createFunction({
    name: "$isCaps",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [percentage, message] = data.inside.splits;

        const capsPercentage = (message.replace(/[^A-Z]/g, "").length / message.length) * 100;
        const isCaps = capsPercentage >= parseFloat(percentage);

        data.result = isCaps;
        return {
            code: d.util.setCode(data)
        };
    }
});