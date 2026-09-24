// Keep the project-memory location configurable without changing the rest of the
// provider-agnostic prompt definition.
(() => {
  "use strict";
  const OLD_PATH = "game.ServerStorage.ZeroScript.Memory";
  const NEW_PATH = "game.ServerStorage.GoatRanji_w.memory";
  const replaceMemoryPath = (text) => typeof text === "string" ? text.split(OLD_PATH).join(NEW_PATH) : text;

  const originalBuildSystemPrompt = ZS.buildSystemPrompt;
  ZS.buildSystemPrompt = (opts) => replaceMemoryPath(originalBuildSystemPrompt(opts));

  const originalMemoryNudge = ZS.memoryNudge;
  ZS.memoryNudge = () => replaceMemoryPath(originalMemoryNudge());
})();
