import { i18n } from "../utils/i18n.js";

export default {
  name: "qit",
  aliases: ["q"],
  description: i18n.__("quit.description"),
  execute(message) {
    
    process.exit(1);
  }
};
