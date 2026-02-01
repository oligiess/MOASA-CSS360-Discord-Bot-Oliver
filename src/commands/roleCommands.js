import { SlashCommandBuilder } from "discord.js";
import { playerRoles } from "../helpers/gameState.js";

export const ROLE_COMMANDS = {
  "Mafia": "🕵️ **Mafia Commands:**\n• `/kill` - Eliminate a player in this round.",
  "Doctor": "🩺 **Doctor Commands:**\n• `/save` - Choose a player to protect.",
  "Civilian": "👥 **Civilian Commands:**\n• '/vote [username]' - Vote for who you think is the Mafia."
};

export default {
  data: new SlashCommandBuilder()
    .setName("mycommands")
    .setDescription("List commands for your role"),

  async execute(interaction) {
    const role = playerRoles.get(interaction.user.id);

    if (!role) {
      return interaction.reply({ content: "No role found!", ephemeral: true });
    }

    await interaction.reply({
      content: `${ROLE_COMMANDS[role]}`,
      ephemeral: true,
    });
  },
};