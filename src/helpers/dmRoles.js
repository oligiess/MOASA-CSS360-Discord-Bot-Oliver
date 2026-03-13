import { ROLE_COMMANDS } from "../commands/roleCommands";
export const dmRoles = async (roles, client) => {
  const failed = [];

  for (const [userId, role] of roles.entries()) {
    try {
      const user = await client.users.fetch(userId);
      const description = ROLE_COMMANDS[role];

      await user.send({
        content: `🎭 **Your Role: ${role}**\n\n${description}\n\n*Use your abilities wisely. Good luck!*`
    });
    } catch (err) {
      console.error(`Failed to DM user ${userId}`, err.message);
      failed.push({ userId, role });
    }
  }

  return failed;
};
