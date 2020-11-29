import { i18n } from "./betterrollssw5e.js";

const getBRSetting = setting => game.settings.get("betterrollssw5e", setting);

/**
 * Class type used to initialize and retrieve settings.
 */
class Settings {
    /**
     * Register better rolls settings
     */
    init() {
        game.settings.register("betterrollssw5e", "diceEnabled", {
            name: i18n("brsw5e.diceEnabled.name"),
            hint: i18n("brsw5e.diceEnabled.hint"),
            scope: "world",
            config: true,
            default: true,
            type: Boolean
        });

        game.settings.register("betterrollssw5e", "d20Mode", {
            name: i18n("brsw5e.d20Mode.name"),
            hint: i18n("brsw5e.d20Mode.hint"),
            scope: "world",
            config: true,
            default: 2,
            type: Number,
            choices: {
                1: i18n("brsw5e.d20Mode.choices.1"),
                2: i18n("brsw5e.d20Mode.choices.2"),
                3: i18n("brsw5e.d20Mode.choices.3")
            }
        });

        /**
         * Query roll type in Roll20 style
         */
        game.settings.register("betterrollssw5e", "queryAdvantageEnabled", {
            name: i18n("brsw5e.queryAdvantageEnabled.name"),
            hint: i18n("brsw5e.queryAdvantageEnabled.hint"),
            scope: "world",
            config: true,
            default: false,
            type: Boolean
        });

        /**
         * Register added roll buttons
         */
        game.settings.register("betterrollssw5e", "rollButtonsEnabled", {
            name: i18n("brsw5e.rollButtonsEnabled.name"),
            hint: i18n("brsw5e.rollButtonsEnabled.hint"),
            scope: "world",
            config: true,
            default: true,
            type: Boolean
        });

        /**
         * Register better roll for icon
         */
        game.settings.register("betterrollssw5e", "imageButtonEnabled", {
            name: i18n("brsw5e.imageButtonEnabled.name"),
            hint: i18n("brsw5e.imageButtonEnabled.hint"),
            scope: "world",
            config: true,
            default: true,
            type: Boolean
        });

        game.settings.register("betterrollssw5e", "altSecondaryEnabled", {
            name: i18n("brsw5e.altSecondaryEnabled.name"),
            hint: i18n("brsw5e.altSecondaryEnabled.hint"),
            scope: "world",
            config: true,
            default: true,
            type: Boolean
        });

        /**
         * Register quick roll defaults for description
         */
        game.settings.register(
            "betterrollssw5e",
            "quickDefaultDescriptionEnabled",
            {
                name: i18n("brsw5e.quickDefaultDescriptionEnabled.name"),
                hint: i18n("brsw5e.quickDefaultDescriptionEnabled.hint"),
                scope: "world",
                config: true,
                default: false,
                type: Boolean
            }
        );

        game.settings.register("betterrollssw5e", "defaultRollArt", {
            name: i18n("brsw5e.defaultRollArt.name"),
            hint: i18n("brsw5e.defaultRollArt.hint"),
            scope: "world",
            config: true,
            default: "actor",
            type: String,
            choices: {
                actor: i18n("Actor"),
                token: i18n("Token")
            }
        });

        /**
         * Register roll label options
         */
        game.settings.register("betterrollssw5e", "rollTitlePlacement", {
            name: i18n("brsw5e.rollTitlePlacement.name"),
            hint: i18n("brsw5e.rollTitlePlacement.hint"),
            scope: "world",
            config: true,
            default: "1",
            type: String,
            choices: {
                "0": i18n("brsw5e.damageRollPlacement.choices.0"),
                "1": i18n("brsw5e.damageRollPlacement.choices.1")
            }
        });

        const damagePlacementOptions = [
            "damageTitlePlacement",
            "damageContextPlacement",
            "damageRollPlacement"
        ];

        damagePlacementOptions.forEach(placementOption => {
            game.settings.register("betterrollssw5e", placementOption, {
                name: i18n(`brsw5e.${placementOption}.name`),
                hint: i18n(`brsw5e.${placementOption}.hint`),
                scope: "world",
                config: true,
                default: "1",
                type: String,
                choices: {
                    "0": i18n("brsw5e.damageRollPlacement.choices.0"),
                    "1": i18n("brsw5e.damageRollPlacement.choices.1"),
                    "2": i18n("brsw5e.damageRollPlacement.choices.2"),
                    "3": i18n("brsw5e.damageRollPlacement.choices.3")
                }
            });
        });

        const contextReplacementOptions = [
            "contextReplacesTitle",
            "contextReplacesDamage"
        ];

        contextReplacementOptions.forEach(contextOption => {
            game.settings.register("betterrollssw5e", contextOption, {
                name: i18n(`brsw5e.${contextOption}.name`),
                hint: i18n(`brsw5e.${contextOption}.hint`),
                scope: "world",
                config: true,
                default: false,
                type: Boolean
            });
        });

        game.settings.register("betterrollssw5e", "critBehavior", {
            name: i18n("brsw5e.critBehavior.name"),
            hint: i18n("brsw5e.critBehavior.hint"),
            scope: "world",
            config: true,
            default: "1",
            type: String,
            choices: {
                "0": i18n("brsw5e.critBehavior.choices.0"), // No Extra Damage
                "1": i18n("brsw5e.critBehavior.choices.1"), // Roll Critical Damage Dice
                "2": i18n("brsw5e.critBehavior.choices.2"), // Roll Base Damage, Max Critical
                "3": i18n("brsw5e.critBehavior.choices.3") // Max Base & Critical Damage
            }
        });

        game.settings.register("betterrollssw5e", "critString", {
            name: i18n("brsw5e.critString.name"),
            hint: i18n("brsw5e.critString.hint"),
            scope: "world",
            config: true,
            default: "Crit",
            type: String
        });

        game.settings.register("betterrollssw5e", "chatDamageButtonsEnabled", {
            name: i18n("brsw5e.chatDamageButtonsEnabled.name"),
            hint: i18n("brsw5e.chatDamageButtonsEnabled.hint"),
            scope: "world",
            config: true,
            default: true,
            type: Boolean
        });

        game.settings.register("betterrollssw5e", "playRollSounds", {
            name: i18n("brsw5e.playRollSounds.name"),
            hint: i18n("brsw5e.playRollSounds.hint"),
            scope: "world",
            config: true,
            default: true,
            type: Boolean
        });

        game.settings.register("betterrollssw5e", "hideDC", {
            name: i18n("brsw5e.hideDC.name"),
            hint: i18n("brsw5e.hideDC.hint"),
            scope: "world",
            config: true,
            default: "0",
            type: String,
            choices: {
                "0": i18n("brsw5e.hideDC.choices.0"),
                "1": i18n("brsw5e.hideDC.choices.1"),
                "2": i18n("brsw5e.hideDC.choices.2")
            }
        });
    }

    get playRollSounds() {
        return getBRSetting("playRollSounds");
    }

    get damageRollPlacement() {
        return getBRSetting("damageRollPlacement");
    }

    get rollTitlePlacement() {
        return getBRSetting("rollTitlePlacement");
    }

    get damageTitlePlacement() {
        return getBRSetting("damageTitlePlacement");
    }

    get damageContextPlacement() {
        return getBRSetting("damageContextPlacement");
    }

    get contextReplacesTitle() {
        return getBRSetting("contextReplacesTitle");
    }

    get contextReplacesDamage() {
        return getBRSetting("contextReplacesDamage");
    }

    get critString() {
        return getBRSetting("critString");
    }

    get critBehavior() {
        return getBRSetting("critBehavior");
    }

    get quickDefaultDescriptionEnabled() {
        return getBRSetting("quickDefaultDescriptionEnabled");
    }

    get altSecondaryEnabled() {
        return getBRSetting("altSecondaryEnabled");
    }

    get d20Mode() {
        return getBRSetting("d20Mode");
    }

    get hideDC() {
        return getBRSetting("hideDC");
    }

    get chatDamageButtonsEnabled() {
        return getBRSetting("chatDamageButtonsEnabled");
    }

    /**
     * Returns all config settings as an object with all data retrieved.
     * Internally this resolves all getters, returning their results.
     * @returns {BRSettings}
     */
    serialize() {
        const result = {};

        const proto = Object.getPrototypeOf(this);
        const descriptors = Object.getOwnPropertyDescriptors(proto);
        for (const [name, descriptor] of Object.entries(descriptors)) {
            const { get } = descriptor;
            if (get) {
                result[name] = get.call(this);
            }
        }

        return result;
    }
}

/**
 * Class instance that can be used to both initialize and retrieve settings
 */
export const BRSettings = new Settings();
