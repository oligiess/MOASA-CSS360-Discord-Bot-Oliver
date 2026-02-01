// commands/role.js
import { SlashCommandBuilder } from "discord.js";
import { playerRoles } from "../helpers/gameState.js";
import { ROLE_COMMANDS } from "./roleCommands.js"

export default {
  data: new SlashCommandBuilder()
    .setName("role")
    .setDescription("View your Mafia role"),

  async execute(interaction) {
    const role = playerRoles.get(interaction.user.id);

    if (!role) {
      return interaction.reply({
        content: "❌ You are not part of an active Mafia game.",
        ephemeral: true,
      });
    }

    const commands = ROLE_COMMANDS[role] || "Good luck!";

    await interaction.reply({
      content:
        `🎭 **Your Role: ${role}**\n\n` +
        `${commands}\n\n` +
        "Do not reveal your role to other players.\n" +
        "Use `/mycommands` to view your role's commands at any time.\n" +
        "Good luck… 😈",
      ephemeral: true,
    });
  },
};
