export const deathStories = [
  (name) => `🌅 The sun rises to find **${name}**'s house eerily silent. They were found slumped over their morning coffee, which suspiciously smelled of bitter almonds.`,
  (name) => `🌅 A scream echoes through the village square. **${name}** has been discovered at the bottom of the well, clutching a single, mysterious playing card.`,
  (name) => `🌅 As the fog clears, the villagers find **${name}**'s hat resting on a pool of blood near the old clock tower. They are nowhere to be found, but the struggle was clearly immense.`,
  (name) => `🌅 It was a quiet night, too quiet. **${name}** didn't make it to the morning meeting. Their front door was found off its hinges, and their bed hasn't been slept in.`,
  (name) => `🌅 A trail of muddy footprints leads from the woods straight to **${name}**'s window. Inside, only a single red rose remains where they once slept.`,
  (name) => `🌅 The town crier goes to wake **${name}** for the morning vote, only to find them locked inside a heavy iron trunk in the town square. Static silence follows.`,
  (name) => `🌅 **${name}** always said they had a "killer" secret. Unfortunately, the Mafia found it first. They were found tied to the weather vane on top of the barn.`
];

export const saveStories = [
  () => `🏥 The Mafia struck last night, but the Doctor was one step ahead! They were found patching up a window screen just as the sun rose. Everyone survived.`,
  () => `🏥 Gunshots were heard near the bakery, but thanks to a perfectly timed medical intervention, no one died tonight. The smell of fresh bread and antiseptic lingers.`,
  () => `🏥 A shadowy figure was spotted entering a home, but a hero in a white coat drove them off with nothing but a very large syringe and a stern look!`,
  () => `🏥 Last night, a life-saving surgery was performed in total darkness. The Mafia's blade missed its mark thanks to the Doctor's steady hands.`,
  () => `🏥 The Mafia thought they had a clear shot, but the Doctor had swapped the bullets for blanks while the town slept. A miracle morning for all!`,
  () => `🏥 An anonymous tip led the Doctor to a certain doorstep just in time to stop a tragedy. The town breathes a collective sigh of relief.`,
  () => `🏥 The sound of a shattering window was quickly followed by the sound of a defibrillator. The Doctor refused to let another soul go tonight!`
];

export function getDeathStory(name) {
  const index = Math.floor(Math.random() * deathStories.length);
  return deathStories[index](name);
}

export function getSaveStory() {
  const index = Math.floor(Math.random() * saveStories.length);
  return saveStories[index]();
}