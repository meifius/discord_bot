import { Client, GatewayIntentBits } from "discord.js";

(async () => {
    const BOT = new Client({
        intents: [GatewayIntentBits.Guilds],
    });

    await BOT.login(process.env.BOT_TOKEN);

    BOT.on("ready", () => console.log("Connected to Discord!"));
})();
