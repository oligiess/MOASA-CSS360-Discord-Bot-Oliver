import { SlashCommandBuilder } from "discord.js";

let joinOpen = false;
const joinedPlayers = new Set();
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function formatPlayers(client, players) {
  if (players.size === 0) return "None";
  return [...players]
    .map(id => {
      const user = client.users.cache.get(id);
      return user ? user.username : `<@${id}>`;
    })
    .join(", ");
}

export default {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Join the Mafia game"),

  async execute(interaction) {
    const userId = interaction.user.id;

    // Start joining(after first person joined)
    if (joinOpen) {
      if (joinedPlayers.has(userId)) {
        return interaction.reply({ content: "You already joined!", ephemeral: true });
      }
      
      joinedPlayers.add(userId);
      
      return interaction.reply({
        content: `✅ You joined the game! Total players: ${joinedPlayers.size}`,
        ephemeral: true 
      });
    }

    // Start joining(first person)
    joinOpen = true;
    joinedPlayers.clear();
    joinedPlayers.add(userId);

    let remaining = 15; // Set to 15 seconds

    await interaction.reply({
      content: generateJoinText(remaining, interaction.client, joinedPlayers),
      fetchReply: true
    });

    // Countdwon loop
    while (remaining > 0) {
      await sleep(1000);
      remaining--;

      if (!joinOpen) break; 

      try {
        // Show the newest joinedPlayers and edit
        await interaction.editReply({
          content: generateJoinText(remaining, interaction.client, joinedPlayers)
        });
      } catch (error) {
        console.error("Update error:", error);
      }
    }

    // Finish
    joinOpen = false;
    const finalSize = joinedPlayers.size;

    if (finalSize < 3) {
      await interaction.editReply({
        content: `❌ **Recruitment Closed**\nNot enough players. (Min: 3, Current: ${finalSize})`
      });
    } else {
      await interaction.editReply({
        content: `✅ **Recruitment Closed!**\nTotal Players: **${finalSize}**\nMembers: ${formatPlayers(interaction.client, joinedPlayers)}\n\nUse \`/mafia start\` to begin!`
      });
    }
  }
};

function generateJoinText(timeLeft, client, players) {
  return "🕵️ **Mafia Game Recruitment!**\n" +
    "Type `/join` to participate.\n" +
    `⏱ Closing in **${timeLeft}** seconds...\n\n` +
    `Current Players (**${players.size}**): ${formatPlayers(client, players)}`;
}