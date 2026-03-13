import { ROLE_COMMANDS } from "../commands/roleCommands";

const ROLE_IMAGES = {
  Mafia: "Mafia.png",
  Doctor: "Doctor.png",
  "Fortune Teller": "FortuneTeller.png",
  Civilian: "Civilian.png",
};

export const dmRoles = async (roles, client) => {
  const failed = [];

  for (const [userId, role] of roles.entries()) {
    try {
      const user = await client.users.fetch(userId);
      const description = ROLE_COMMANDS[role];
      const imageFile = ROLE_IMAGES[role];

      await user.send({
        content: `🎭 **Your Role: ${role}**\n\n${description}\n\n*Use your abilities wisely. Good luck!*`,
        files: imageFile ? [`./src/images/${imageFile}`] : [],
    });
    } catch (err) {
      console.error(`Failed to DM user ${userId}`, err.message);
      failed.push({ userId, role });
    }
  }

  return failed;
};
