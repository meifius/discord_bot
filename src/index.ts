import { Client, GatewayIntentBits } from "discord.js";

import { connectDatabase } from "./database/connectDatabase";
import { onInteraction } from "./events/onInteraction";
import { validateEnv } from "./utils/validateEnv";

(async () => {
    if (!validateEnv) return;

    const BOT = new Client({
        intents: [GatewayIntentBits.Guilds],
    });

    await BOT.login(process.env.BOT_TOKEN);
    await connectDatabase();

    BOT.on("ready", () => console.log("Connected to Discord!"));

    BOT.on(
        "interactionCreate",
        async (interaction) => await onInteraction(interaction)
    );
})();
