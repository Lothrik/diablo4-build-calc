let druid = {};

druid["Trunk Data"] = {
	["Basic"]: {
		connections: [ "Spirit" ],
		x: 0,
		y: 0,
	},
	["Spirit"]: {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: 5.146,
		y: 1132.94,
	},
	["Defensive"]: {
		connections: [ "Companion" ],
		requiredPoints: 6,
		x: -1248.81,
		y: 2232.505,
	},
	["Companion"]: {
		connections: [ "Wrath" ],
		requiredPoints: 11,
		x: 1251.46,
		y: 2231.245,
	},
	["Wrath"]: {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: -1242.16,
		y: 3763.334,
	},
	["Ultimate"]: {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 1240.835,
		y: 3765.088,
	},
	["Capstone"]: {
		requiredPoints: 33,
		x: 8.196,
		y: 4695.885,
	},
};

druid["Basic"] = {
	["Earthspike"]: {
		connections: [ "Basic", "Enhanced Earthspike" ],
		description: `{if:SF_15}{c_gold}Cooldown:{/c_gold} {c_green}[{SF_16}|1|]{/c} seconds
{/if}{c_gold}Generate Spirit:{/c_gold} {c_green}{SF_5}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Sunder the earth, impaling the first enemy hit for {c_yellow}{payload:DAMAGE}{/c} damage.`,
		id: 0,
		maxPoints: 5,
		x: -348.701,
		y: -67.625,
	},
	["Enhanced Earthspike"]: {
		connections: [ "Earthspike", "Wild Earthspike", "Fierce Earthspike" ],
		description: `{c_white}Earth Spike{/c} has an {c_yellow}[{SF_11}*100]%{/c} chance to Stun for {c_yellow}[{buffduration:MOD_RANK_STUN}|1|]{/c} seconds.`,
		id: 1,
		maxPoints: 1,
		x: -677.445,
		y: -139.94,
	},
	["Wild Earthspike"]: {
		connections: [ "Enhanced Earthspike" ],
		description: `{c_white}Earthspike{/c} generates {c_yellow}{SF_4}{/c} additional Spirit.`,
		id: 2,
		maxPoints: 1,
		x: -804.45,
		y: -293.3,
	},
	["Fierce Earthspike"]: {
		connections: [ "Enhanced Earthspike" ],
		description: `{c_white}Fortify{/c} for {c_yellow}{fortified:MOD_A_FORTIFY}{/c} whenever {c_white}Earth Spike{/c} damages enemies who are Stunned, Immobilized, or Knocked Back.`,
		id: 3,
		maxPoints: 1,
		x: -1023.235,
		y: -145.735,
	},
	["Maul"]: {
		connections: [ "Basic", "Enhanced Maul" ],
		description: `{c_gold}Generate Spirit:{/c_gold} {c_green}{SF_0}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werebear and maul nearby enemies, dealing {c_yellow}{payload:MELEE_PAYLOAD}{/c} damage.`,
		id: 4,
		maxPoints: 5,
		x: -262.904,
		y: 151.445,
	},
	["Enhanced Maul"]: {
		connections: [ "Maul", "Wild Maul", "Fierce Maul" ],
		description: `If an enemy is hit by {c_white}Maul{/c}, then {c_white}Fortify{/c} for {fortified:FORTIFY_CASTER}.`,
		id: 5,
		maxPoints: 1,
		x: -513.505,
		y: 282.48,
	},
	["Wild Maul"]: {
		connections: [ "Enhanced Maul" ],
		description: `{c_white}Maul{/c} slows enemies by {c_yellow}[{SF_6}*100]%{/c} for {c_yellow}{buffduration:MOD_B_SLOW}{/c} seconds.`,
		id: 6,
		maxPoints: 1,
		x: -827.765,
		y: 318.3,
	},
	["Fierce Maul"]: {
		connections: [ "Enhanced Maul" ],
		description: `While {c_white}Healthy{/c}, {c_white}Maul{/c} grants {c_yellow}{SF_4}{/c} additional Spirit.`,
		id: 7,
		maxPoints: 1,
		x: -578.085,
		y: 450.045,
	},
	["Wind Shear"]: {
		connections: [ "Basic", "Enhanced Wind Shear" ],
		description: `{c_gold}Generate Spirit:{/c_gold} {c_green}{SF_5}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Conjure a piercing blade of wind, dealing {c_yellow}{Payload:DAMAGE}{/c} damage.`,
		id: 8,
		maxPoints: 5,
		x: -2.291,
		y: -199.935,
	},
	["Enhanced Wind Shear"]: {
		connections: [ "Wind Shear", "Fierce Wind Shear", "Wild Wind Shear" ],
		description: `{c_white}Wind Shear{/c} has a {c_yellow}[{SF_18}*100]%{/c} chance to make enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_17}{/c} seconds.`,
		id: 9,
		maxPoints: 1,
		x: 0.368,
		y: -368.37,
	},
	["Fierce Wind Shear"]: {
		connections: [ "Enhanced Wind Shear" ],
		description: `Each enemy hit by {c_white}Wind Shear{/c} increases your movement speed by {c_yellow}[{SF_6} * 100]%{/c} for {c_yellow}{buffduration:BUFF_MOVE_SPEED}{/c} seconds, up to {c_yellow}[{SF_6} * {SF_8} * 100]%{/c}.`,
		id: 10,
		maxPoints: 1,
		x: -126.703,
		y: -500.785,
	},
	["Wild Wind Shear"]: {
		connections: [ "Enhanced Wind Shear" ],
		description: `{c_white}Wind Shear{/c} grants {c_yellow}{SF_4}{/c} additional Spirit for each enemy hit beyond the first.`,
		id: 11,
		maxPoints: 1,
		x: 130.379,
		y: -501.09,
	},
	["Storm Strike"]: {
		connections: [ "Basic", "Enhanced Storm Strike" ],
		description: `{c_gold}Generate Spirit:{/c_gold} {c_green}{SF_2}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Electricity gathers around your weapon, dealing {c_yellow}{payload:MELEE_DAMAGE}{/c} damage split between your target and up to {c_yellow}{SF_3}{/c} nearby enemies.`,
		id: 12,
		maxPoints: 5,
		x: 346.71,
		y: -68.24,
	},
	["Enhanced Storm Strike"]: {
		connections: [ "Storm Strike", "Fierce Storm Strike", "Wild Storm Strike" ],
		description: `Dealing damage with {c_white}Storm Strike{/c} reduces your damage taken by {c_yellow}[{SF_9}*100]%{/c} for {c_yellow}{buffduration:DAMAGE_REDUCTION}{/c} seconds.`,
		id: 13,
		maxPoints: 1,
		x: 671.83,
		y: -141.815,
	},
	["Fierce Storm Strike"]: {
		connections: [ "Enhanced Storm Strike" ],
		description: `{c_white}Storm Strike{/c} has a {c_yellow}[{SF_12} * 100]%{/c} chance to make enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_13}{/c} seconds.`,
		id: 14,
		maxPoints: 1,
		x: 812.63,
		y: -296.275,
	},
	["Wild Storm Strike"]: {
		connections: [ "Enhanced Storm Strike" ],
		description: `{c_white}Storm Strike{/c} has a {c_yellow}[{SF_10}*100]%{/c} chance to {c_white}Immobilize{/c} all enemies hit for {c_yellow}[{buffduration:IMMOBILIZE}|1|]{/c} seconds.`,
		id: 15,
		maxPoints: 1,
		x: 1027.3,
		y: -150.99,
	},
	["Claw"]: {
		connections: [ "Basic", "Enhanced Claw" ],
		description: `{c_gold}Generate Spirit:{/c_gold} {c_green}{SF_3}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werewolf and claw at an enemy for {c_yellow}{payload:MELEE_DAMAGE}{/c} damage.`,
		id: 16,
		maxPoints: 5,
		x: 274.729,
		y: 154.92,
	},
	["Enhanced Claw"]: {
		connections: [ "Claw", "Fierce Claw", "Wild Claw" ],
		description: `{c_white}Claw's{/c} Attack Speed is increased by {c_yellow}+[{SF_12}*100]%{/c}.`,
		id: 17,
		maxPoints: 1,
		x: 528.355,
		y: 288.635,
	},
	["Fierce Claw"]: {
		connections: [ "Enhanced Claw" ],
		description: `{c_white}Claw{/c} poisons enemies for {c_yellow}{dot:POISON_DOT}{/c} over {c_white}{buffduration:POISON_DOT}{/c} seconds.`,
		id: 18,
		maxPoints: 1,
		x: 586.595,
		y: 458.08,
	},
	["Wild Claw"]: {
		connections: [ "Enhanced Claw" ],
		description: `{c_white}Claw{/c} has an additional {c_yellow}+[{SF_9}*100]%{/c} Critical Strike Chance and deals {c_yellow}x[{SF_10}*100]%{/c} increased Critical Strike Damage.`,
		id: 19,
		maxPoints: 1,
		x: 844.165,
		y: 323.69,
	},
};

druid["Spirit"] = {
	["Landslide"]: {
		connections: [ "Spirit", "Enhanced Landslide" ],
		description: `{c_gold}Spirit Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Crush enemies between {c_yellow}3{/c} pillars of earth, dealing up to {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage.`,
		id: 20,
		maxPoints: 5,
		x: -225.944,
		y: -166.79,
	},
	["Enhanced Landslide"]: {
		connections: [ "Landslide", "Raging Landslide", "Primal Landslide" ],
		description: `Enemies hit by all {c_yellow}3{/c} {c_white}Landslide{/c} pillars have a {c_yellow}[{SF_9}*100]%{/c} chance to be Immobilized for {c_yellow}{buffduration:IMMOBILIZE}{/c} seconds by the final hit.`,
		id: 21,
		maxPoints: 1,
		x: -405.12,
		y: -322.47,
	},
	["Raging Landslide"]: {
		connections: [ "Enhanced Landslide" ],
		description: `For {c_yellow}{buffduration:SKILL_RANK_COST_REDUCTION}{/c} seconds after {c_white}Landslide{/c} is cast, the Spirit cost is reduced by {c_yellow}{SF_11}{/c}.`,
		id: 22,
		maxPoints: 1,
		x: -453.53,
		y: -483.315,
	},
	["Primal Landslide"]: {
		connections: [ "Enhanced Landslide" ],
		description: `{c_white}Landslide{/c} has a {c_yellow}[{SF_8}*100]%{/c} increased Critical Strike Chance and deals {c_yellow}x[{SF_7}*100]%{/c} increased Critical Strike Damage against enemies who are Stunned, Immobilized or Knocked Back.`,
		id: 23,
		maxPoints: 1,
		x: -690.516,
		y: -360.81,
	},
	["Pulverize"]: {
		connections: [ "Spirit", "Enhanced Pulverize" ],
		description: `{c_gold}Spirit Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werebear and slam the ground, dealing {c_yellow}{payload:DAMAGE}{/c} damage to nearby enemies.`,
		id: 24,
		maxPoints: 5,
		x: -370.985,
		y: 43.955,
	},
	["Enhanced Pulverize"]: {
		connections: [ "Pulverize", "Primal Pulverize", "Raging Pulverize" ],
		description: `{c_white}Pulverize{/c} deals {c_yellow}x[{SF_13}*100]%{/c} increased bonus damage when hitting {c_yellow}{SF_14}{/c} or more enemies.`,
		id: 25,
		maxPoints: 1,
		x: -709.316,
		y: 76.73,
	},
	["Primal Pulverize"]: {
		connections: [ "Enhanced Pulverize" ],
		description: `Enemies hit with {c_white}Pulverize{/c} deal {c_yellow}[{SF_10}*100]%{/c} reduced damage for {c_yellow}{buffduration:MOD_DAMAGE_REDUCTION}{/c} seconds.`,
		id: 26,
		maxPoints: 1,
		x: -880.426,
		y: 214.1,
	},
	["Raging Pulverize"]: {
		connections: [ "Enhanced Pulverize" ],
		description: `{c_white}Pulverize{/c} has a {c_yellow}[{SF_11}*100]%{/c} chance to Immobilize all enemies hit for {c_yellow}{buffduration:IMMOBILIZE}{/c} seconds.`,
		id: 27,
		maxPoints: 1,
		x: -1043.241,
		y: 59.665,
	},
	["Tornado"]: {
		connections: [ "Spirit", "Enhanced Tornado" ],
		description: `{c_gold}Spirit Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Conjure a swirling tornado that deals {c_yellow}{PAYLOAD:TOOLTIP_DAMAGE}{/c} damage.`,
		id: 28,
		maxPoints: 5,
		x: 256.877,
		y: -173.905,
	},
	["Enhanced Tornado"]: {
		connections: [ "Tornado", "Raging Tornado", "Primal Tornado" ],
		description: `Each time you cast {c_white}Tornado{/c}, you have a {c_yellow}[{SF_17}*100]%{/c} chance to spawn an additional {c_white}Tornado{/c}.`,
		id: 29,
		maxPoints: 1,
		x: 467.705,
		y: -314.8,
	},
	["Raging Tornado"]: {
		connections: [ "Enhanced Tornado" ],
		description: `Each time an enemy is damaged by a {c_white}Tornado{/c}, they take {c_yellow}x[{SF_19}*100]%{/c} increased damage from {c_white}Tornado{/c} for {c_yellow}{buffduration:MOD_STACKING_BONUS_DAMAGE_TAKEN}{/c} seconds, stacking up to {c_yellow}x[{SF_19} * {SF_20} * 100]%{/c} increased damage.`,
		id: 30,
		maxPoints: 1,
		x: 523.809,
		y: -473.39,
	},
	["Primal Tornado"]: {
		connections: [ "Enhanced Tornado" ],
		description: `Enemies damaged by {c_white}Tornado{/c} are Slowed by {c_yellow}[{SF_22}*100]%{/c} for {c_yellow}{buffduration:RANK_SLOW}{/c} seconds, stacking up to {c_yellow}[{SF_22}*{SF_23}*100]%{/c}.`,
		id: 31,
		maxPoints: 1,
		x: 793.079,
		y: -357,
	},
	["Wild Impulses"]: {
		connections: [ "Spirit" ],
		description: `Your {c_white}Core{/c} skills cost {c_yellow}[{SF_0} * 100]%{/c} more Spirit but deal {c_yellow}x[{SF_1} * 100]%{/c} increased damage.`,
		id: 32,
		maxPoints: 3,
		x: -741.431,
		y: -147.59,
	},
	["Shred"]: {
		connections: [ "Spirit", "Enhanced Shred" ],
		description: `{c_gold}Spirit Cost: {/c}{c_green}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werewolf and leap onto an enemy slashing them {c_yellow}3{/c} times for {c_yellow}{payload:SLASH}{/c} damage per slash.`,
		id: 33,
		maxPoints: 5,
		x: 44.547,
		y: 225.17,
	},
	["Enhanced Shred"]: {
		connections: [ "Shred", "Primal Shred", "Raging Shred" ],
		description: `Each slash with {c_white}Shred{/c} heals you for {c_yellow}[{SF_8}*100]%{/c} of your maximum Life when it deals damage.`,
		id: 34,
		maxPoints: 1,
		x: 77.78,
		y: 395.08,
	},
	["Primal Shred"]: {
		connections: [ "Enhanced Shred" ],
		description: `{c_white}Shred{/c} deals {c_yellow}x[{SF_5}*100]%{/c} increased damage to {c_white}Injured{/c} enemies.`,
		id: 35,
		maxPoints: 1,
		x: -31.192,
		y: 569.605,
	},
	["Raging Shred"]: {
		connections: [ "Enhanced Shred" ],
		description: `{c_white}Shred{/c} has an additional {c_yellow}+[{SF_7}*100]%{/c} Critical Strike Chance against Poisoned enemies.`,
		id: 36,
		maxPoints: 1,
		x: 311.864,
		y: 543.51,
	},
	["Lightning Storm"]: {
		connections: [ "Spirit", "Enhanced Lightning Storm" ],
		description: `{c_gold}Spirit Cost:{/c} {c_green}{Resource Cost} per strike{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Conjure a growing lightning storm that deals {c_yellow}{payload:DAMAGE}{/c} damage per strike and increases the number of strikes the longer it is channeled up to a maximum of {c_yellow}[{SF_16}+1]{/c}.`,
		id: 37,
		maxPoints: 5,
		x: 405.825,
		y: -0.32,
	},
	["Enhanced Lightning Storm"]: {
		connections: [ "Lightning Storm", "Primal Lightning Storm", "Raging Lightning Storm" ],
		description: `The size of your {c_white}Lightning Storm{/c} is preserved for {c_yellow}{SF_10}{/c} seconds after channeling.`,
		id: 38,
		maxPoints: 1,
		x: 781.119,
		y: 1.31,
	},
	["Primal Lightning Storm"]: {
		connections: [ "Enhanced Lightning Storm" ],
		description: `{c_white}Lightning Storm{/c} has a {c_yellow}[{SF_8}*100]%{/c} chance to {c_white}Immobilize{/c} enemies hit for {c_yellow}{buffduration:IMMOBILIZE}{/c} seconds.`,
		id: 39,
		maxPoints: 1,
		x: 1120.469,
		y: -87.425,
	},
	["Raging Lightning Storm"]: {
		connections: [ "Enhanced Lightning Storm" ],
		description: `{c_white}Lightning Storm{/c} gains {c_yellow}1{/c} additional lightning strike.`,
		id: 40,
		maxPoints: 1,
		x: 1109.434,
		y: 97.72,
	},
	["Abundance"]: {
		connections: [ "Spirit", "Heart of the Wild" ],
		description: `{c_white}Basic{/c} skills generate {c_yellow}[{SF_1}*100]%{/c} more Spirit.`,
		id: 41,
		maxPoints: 3,
		x: 572.129,
		y: 264.47,
	},
	["Heart of the Wild"]: {
		connections: [ "Abundance" ],
		description: `Maximum Spirit is increased by {c_yellow}{SF_0}{/c}.`,
		id: 42,
		maxPoints: 3,
		x: 824.294,
		y: 385.21,
	},
};

druid["Defensive"] = {
	["Earthen Bulwark"]: {
		connections: [ "Defensive", "Enhanced Earthen Bulwark" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Rocks surround you for {c_yellow}{buffduration:BUFF_SHIELD}{/c} seconds, absorbing {c_yellow}{shield:BUFF_SHIELD}{/c} damage.`,
		id: 43,
		maxPoints: 5,
		x: -371.465,
		y: -166.005,
	},
	["Enhanced Earthen Bulwark"]: {
		connections: [ "Earthen Bulwark", "Innate Earthen Bulwark", "Preserving Earthen Bulwark" ],
		description: `{c_white}Earthen Bulwark{/c} makes you {c_white}Unstoppable{/c} while active.`,
		id: 44,
		maxPoints: 1,
		x: -614.835,
		y: -283.58,
	},
	["Innate Earthen Bulwark"]: {
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Upon expiration, {c_white}Earthen Bulwark{/c} shatters, dealing {c_yellow}[{SF_2} * 100]%{/c} of the remaining shield amount to nearby enemies.`,
		id: 45,
		maxPoints: 1,
		x: -906.825,
		y: -302.41,
	},
	["Preserving Earthen Bulwark"]: {
		connections: [ "Enhanced Earthen Bulwark" ],
		description: `Casting {c_white}Earthen Bulwark{/c} grants {c_yellow}{fortified:MOD_FORTIFY}{/c} {c_white}Fortify{/c}.`,
		id: 46,
		maxPoints: 1,
		x: -683.695,
		y: -438.695,
	},
	["Debilitating Roar"]: {
		connections: [ "Defensive", "Enhanced Debilitating Roar" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
Shapeshift into a Werebear and bellow a mighty roar, reducing damage dealt of nearby enemies by {c_yellow}[{SF_2} * 100]%{/c} for {c_yellow}{buffduration:BUFF_DAMAGE_DEALT_REDUCTION}{/c} seconds.`,
		id: 47,
		maxPoints: 5,
		x: -374.945,
		y: 169.89,
	},
	["Enhanced Debilitating Roar"]: {
		connections: [ "Debilitating Roar", "Preserving Debilitating Roar", "Innate Debilitating Roar" ],
		description: `{c_white}Debilitating Roar{/c} also {c_white}Fortifies{/c} you for {c_yellow}{fortified:MOD_FORTIFY}{/c}.`,
		id: 48,
		maxPoints: 1,
		x: -604.84,
		y: 279.69,
	},
	["Preserving Debilitating Roar"]: {
		connections: [ "Enhanced Debilitating Roar" ],
		description: `{c_white}Debilitating Roar{/c} also heals you for {c_yellow}[{SF_8}*100]%{/c} of your maximum Life each second for its duration.`,
		id: 49,
		maxPoints: 1,
		x: -691.605,
		y: 443.5,
	},
	["Innate Debilitating Roar"]: {
		connections: [ "Enhanced Debilitating Roar" ],
		description: `{c_white}Debilitating Roar{/c} also slows enemies by {c_yellow}[{SF_9}*100]%{/c} for its duration.`,
		id: 50,
		maxPoints: 1,
		x: -918.365,
		y: 307.475,
	},
	["Ancestral Fortitude"]: {
		connections: [ "Defensive", "Vigilance" ],
		description: `Increase your non-physical resistances by {c_yellow}[{SF_1} * 100]%{/c}.`,
		id: 51,
		maxPoints: 3,
		x: -816.55,
		y: 1.025,
	},
	["Vigilance"]: {
		connections: [ "Ancestral Fortitude" ],
		description: `You take {c_yellow}[{SF_0} * 100]%{/c} reduced damage for {c_yellow}{buffduration:DAMAGE_REDUCTION}{/c} seconds after using a {c_white}Defensive{/c} skill.`,
		id: 52,
		maxPoints: 3,
		x: -1188.24,
		y: 0.39,
	},
	["Blood Howl"]: {
		connections: [ "Defensive", "Enhanced Blood Howl" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}{if:Mod.GrantSpirit}
{c_gold}Generate Spirit:{/c_gold} {c_green}{SF_2}{/c_green}{/if}
Shapeshift into a Werewolf and howl furiously, restoring {c_yellow}[{SF_0} * 100|1|]%{/c} Life.`,
		id: 53,
		maxPoints: 5,
		x: 0.085,
		y: 234.29,
	},
	["Enhanced Blood Howl"]: {
		connections: [ "Blood Howl", "Innate Blood Howl", "Preserving Blood Howl" ],
		description: `Kills reduce the cooldown of {c_white}Blood Howl{/c} by {c_yellow}{SF_5}{/c} second.`,
		id: 54,
		maxPoints: 1,
		x: 1.245,
		y: 400.21,
	},
	["Innate Blood Howl"]: {
		connections: [ "Enhanced Blood Howl" ],
		description: `{c_white}Blood Howl{/c} also generates {c_yellow}{SF_2}{/c} Spirit.`,
		id: 55,
		maxPoints: 1,
		x: -131.31,
		y: 545.905,
	},
	["Preserving Blood Howl"]: {
		connections: [ "Enhanced Blood Howl" ],
		description: `{c_white}Blood Howl{/c} also increases your Attack Speed by {c_yellow}[{SF_3}*100]%{/c} for {c_yellow}{buffduration:MOD_ATTACK_SPEED_BONUS}{/c} seconds.`,
		id: 56,
		maxPoints: 1,
		x: 135.885,
		y: 542.49,
	},
	["Cyclone Armor"]: {
		connections: [ "Defensive", "Enhanced Cyclone Armor" ],
		description: `{c_gold}Cooldown:{/c} {c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}{c_gold}Passive:{/c} Powerful winds surround you, granting {c_yellow}[{SF_0}*100|1|]%{/c} non-Physical damage reduction.  

{c_gold}Active:{/c} The winds rapidly expand, Knocking Back enemies and dealing {c_yellow}{payload:KNOCKBACK}{/c} damage.`,
		id: 57,
		maxPoints: 5,
		x: -1.22,
		y: -265.385,
	},
	["Enhanced Cyclone Armor"]: {
		connections: [ "Cyclone Armor", "Preserving Cyclone Armor", "Innate Cyclone Armor" ],
		description: `Enemies who are Knocked Back by {c_white}Cyclone Armor{/c} are also Slowed by {c_yellow}[{SF_8}*100]%{/c} for {c_yellow}{buffduration:MOD_SLOW}{/c} seconds.`,
		id: 58,
		maxPoints: 1,
		x: 0.115,
		y: -425.535,
	},
	["Preserving Cyclone Armor"]: {
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Every {c_yellow}{SF_6}{/c} seconds, {c_white}Cyclone Armor{/c} intensifies, reducing the next instance of non-Physical damage by an additional {c_yellow}[{SF_5}*100]%{/c}.`,
		id: 59,
		maxPoints: 1,
		x: -136.745,
		y: -576.38,
	},
	["Innate Cyclone Armor"]: {
		connections: [ "Enhanced Cyclone Armor" ],
		description: `Enemies Knocked Back by {c_white}Cyclone Armor{/c} become {c_white}Vulnerable{/c} for {c_yellow}2{/c} seconds.`,
		id: 60,
		maxPoints: 1,
		x: 126.12,
		y: -573.495,
	},
	["Predatory Instinct"]: {
		connections: [ "Defensive" ],
		description: `Critical Strike Chance against nearby enemies is increased by {c_yellow}[{Script Formula 1} * 100]%{/c}.`,
		id: 61,
		maxPoints: 3,
		x: 646.66,
		y: 246.385,
	},
};

druid["Companion"] = {
	["Ravens"]: {
		connections: [ "Companion", "Enhanced Ravens" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:18}%{/c}
{/if}{if:Mod.PassiveAttacks}
{c_gold}Passive:{/c} {c_yellow}{SF_1}{/c} Raven{if:SF_21}s{/if} fly above you and periodically attack your enemies for {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage every {c_yellow}{SF_2}{/c} seconds.
{/if}{c_gold}Active{/c}: The target area is swarmed with ravens, dealing {c_yellow}{payload:POOL_TOOLTIP_DAMAGE}{/c} damage over {c_yellow}{SF_4}{/c} seconds.`,
		id: 62,
		maxPoints: 5,
		x: -1.05,
		y: 231.07,
	},
	["Enhanced Ravens"]: {
		connections: [ "Ravens", "Brutal Ravens", "Ferocious Ravens" ],
		description: `{c_gold}Passive:{/c} Ravens fly above you and periodically attack your enemies for {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage every {c_yellow}{SF_2}{/c} seconds.`,
		id: 63,
		maxPoints: 1,
		x: -0.065,
		y: 380.99,
	},
	["Brutal Ravens"]: {
		connections: [ "Enhanced Ravens" ],
		description: `{c_yellow}{SF_14}{/c} additional {c_white}Ravens{/c} appear when they periodically attack enemies.`,
		id: 64,
		maxPoints: 1,
		x: -150.32,
		y: 549.535,
	},
	["Ferocious Ravens"]: {
		connections: [ "Enhanced Ravens" ],
		description: `Enemies inside the swarm of {c_white}Ravens{/c} when it is activated become {c_white}Vulnerable{/c} for {c_yellow}{SF_11}{/c} seconds.`,
		id: 65,
		maxPoints: 1,
		x: 132.97,
		y: 548.405,
	},
	["Call of the Wild"]: {
		connections: [ "Companion" ],
		description: `You deal {c_yellow}x[{SF_1}  * 100]%{/c} increased critical strike damage against your {c_white}Wolves'{/c} focus target.

{c_white}Raven{/c} attacks deal {c_yellow}x[{SF_7} * 100]%{/c} increased damage to {c_white}Vulnerable{/c} enemies.

{c_white}Vine Creeper's{/c} poison duration is increased by {c_yellow}[{SF_5} * 100]%{/c}.`,
		id: 66,
		maxPoints: 3,
		x: 548.33,
		y: 313.155,
	},
	["Vine Creeper"]: {
		connections: [ "Companion", "Enhanced Vine Creeper" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:19}%{/c}
{/if}{c_gold}Passive:{/c} A vine creeper periodically emerges from the ground every {c_yellow}{SF_0}{/c} seconds and poisons a nearby enemy for {c_yellow}{dot:TOOLTIP_PET_POISON}{/c} damage over {c_yellow}{buffduration:TOOLTIP_PET_POISON}{/c} seconds.

{c_gold}Active:{/c} Vines strangle all nearby enemies, Immobilizing them for {c_yellow}{buffduration:BUFF_STRANGLE}{/c} seconds and poisoning them for {c_yellow}{dot:ACTIVE_POISON}{/c} damage over {c_yellow}{buffduration:ACTIVE_POISON}{/c} seconds.`,
		id: 67,
		maxPoints: 5,
		x: -0.085,
		y: -233.405,
	},
	["Enhanced Vine Creeper"]: {
		connections: [ "Vine Creeper", "Ferocious Vine Creeper", "Brutal Vine Creeper" ],
		description: `{c_white}Vine Creeper's{/c} Immobilize duration is increased by {c_yellow}{SF_13}{/c} second.`,
		id: 68,
		maxPoints: 1,
		x: -1.25,
		y: -382.875,
	},
	["Ferocious Vine Creeper"]: {
		connections: [ "Enhanced Vine Creeper" ],
		description: `{c_white}Vine Creeper's{/c} active poison duration is increased by {c_yellow}{SF_14}{/c} seconds.`,
		id: 69,
		maxPoints: 1,
		x: -139.98,
		y: -563.965,
	},
	["Brutal Vine Creeper"]: {
		connections: [ "Enhanced Vine Creeper" ],
		description: `Your chance to Critically Strike is increased by {c_yellow}+[{SF_16}*100]%{/c} against enemies strangled by {c_white}Vine Creeper{/c}.`,
		id: 70,
		maxPoints: 1,
		x: 116.36,
		y: -566.07,
	},
	["Wolves"]: {
		connections: [ "Companion", "Enhanced Wolf Pack" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:16}%{/c}
{/if}{c_gold}Passive:{/c} Summon {c_yellow}{SF_0}{/c} wolf companions that bite enemies for {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage.

{c_gold}Active{/c}: Direct the wolves to focus an enemy, leaping to them and striking for {c_yellow}{payload:TOOLTIP_DAMAGE_LEAP}{/c} damage.`,
		id: 71,
		maxPoints: 5,
		x: 438.495,
		y: 1.855,
	},
	["Enhanced Wolf Pack"]: {
		connections: [ "Wolves", "Ferocious Wolf Pack", "Brutal Wolf Pack" ],
		description: `{c_white}Wolves{/c} deal {c_yellow}x[{SF_13}*100]%{/c} increased damage to Immobilized, Stunned, Slowed, or poisoned enemies.`,
		id: 72,
		maxPoints: 1,
		x: 742.125,
		y: 2.585,
	},
	["Ferocious Wolf Pack"]: {
		connections: [ "Enhanced Wolf Pack" ],
		description: `You deal {c_yellow}x[{SF_12}*100]%{/c} increased damage to your {c_white}Wolves'{/c} focus target.`,
		id: 73,
		maxPoints: 1,
		x: 1030.955,
		y: -73.505,
	},
	["Brutal Wolf Pack"]: {
		connections: [ "Enhanced Wolf Pack" ],
		description: `Your {c_white}Wolves'{/c} first attack against a focused enemy makes them {c_white}Vulnerable{/c} for {c_yellow}{SF_11}{/c} seconds.`,
		id: 74,
		maxPoints: 1,
		x: 1032.485,
		y: 73.84,
	},
	["Nature's Reach"]: {
		connections: [ "Companion" ],
		description: `Deal {c_yellow}x[{SF_0} * 100]%{/c} increased damage to Distant enemies.  Double this bonus if they are also Slowed, Stunned, Immobilized, or Knocked Back.`,
		id: 75,
		maxPoints: 3,
		x: 542.1,
		y: -263.42,
	},
	["Clarity"]: {
		connections: [ "Companion" ],
		description: `Gain {c_yellow}{SF_0}{/c} Spirit when transforming into Human form.`,
		id: 76,
		maxPoints: 3,
		x: -535.33,
		y: -264.37,
	},
};

druid["Wrath"] = {
	["Lycanthropic Speed"]: {
		connections: [ "Wrath", "Toxic Claws", "Neurotoxin" ],
		description: `While in Werewolf form, your Movement Speed is increased by {c_yellow}[{SF_2} * 100]%{/c}.

This bonus persists for {c_yellow}{buffduration:BUFF_SPEED_TEMP}{/c} seconds after leaving Werewolf form.`,
		id: 77,
		maxPoints: 3,
		x: 662.93,
		y: 143.57,
	},
	["Toxic Claws"]: {
		connections: [ "Lycanthropic Speed" ],
		description: `Critical strikes with {c_white}Werewolf{/c} skills deal {c_yellow}[{SF_0} * 100]%{/c} of their base damage as Poison damage over {buffduration:DEBUFF_POISON} seconds.`,
		id: 78,
		maxPoints: 3,
		x: 1039.079,
		y: 123.16,
	},
	["Neurotoxin"]: {
		connections: [ "Lycanthropic Speed" ],
		description: `Poisoned enemies are slowed by {c_yellow}[{SF_0}*100]%{/c}.`,
		id: 79,
		maxPoints: 3,
		x: 942.632,
		y: 274.21,
	},
	["Elemental Exposure"]: {
		connections: [ "Charged Atmosphere", "Wrath", "Endless Tempest" ],
		description: `{c_gold}Lucky Hit:{/c} Your {c_white}Storm{/c} skills have up to a {c_yellow}{SF_0}%{/c} chance to make enemies {c_white}Vulnerable{/c} for {c_yellow}[{SF_1}|1|]{/c} seconds.`,
		id: 80,
		maxPoints: 3,
		x: -283.195,
		y: -294.575,
	},
	["Charged Atmosphere"]: {
		connections: [ "Elemental Exposure", "Electric Shock", "Bad Omen" ],
		description: `Every {c_yellow}{SF_0}{/c} seconds, a {c_white}Lightning Strike{/c} hits a nearby enemy dealing {c_yellow}{payload:DAMAGE_TOOLTIP}{/c} damage.`,
		id: 81,
		maxPoints: 3,
		x: -649.87,
		y: -377.85,
	},
	["Electric Shock"]: {
		connections: [ "Charged Atmosphere", "Bad Omen" ],
		description: `{c_gold}Lucky Hit:{/c} Dealing Lightning damage to enemies has a {c_yellow}{SF_1}%{/c} chance to Immobilize them for {c_yellow}{buffduration:BUFF_IMMOBILIZE}{/c} seconds.

If the target is already Immobilized, the Lightning damage dealt to them is increased by {c_yellow}x[{SF_3} * 100]%{/c} instead.`,
		id: 82,
		maxPoints: 3,
		x: -979.275,
		y: -645.395,
	},
	["Bad Omen"]: {
		connections: [ "Charged Atmosphere", "Electric Shock", "Endless Tempest" ],
		description: `{c_gold}Lucky Hit:{/c} Up to a {c_yellow}{SF_0}%{/c} chance when dealing damage to a Vulnerable, Immobilized or Stunned enemy that a {c_white}Lightning Strike{/c} also hits dealing {c_yellow}{payload:DAMAGE_TOOLTIP_ONLY}{/c} damage.`,
		id: 83,
		maxPoints: 3,
		x: -504.05,
		y: -698.569,
	},
	["Endless Tempest"]: {
		connections: [ "Elemental Exposure", "Bad Omen" ],
		description: `Increase the duration of {c_white}Hurricane{/c} and {c_white}Cataclysm{/c} by {c_yellow}[{SF_1} * 100]%{/c}.`,
		id: 84,
		maxPoints: 3,
		x: -257.265,
		y: -509.659,
	},
	["Boulder"]: {
		connections: [ "Wrath", "Enhanced Boulder" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Unearth a large rolling boulder that Knocks Back and crushes enemies, dealing {c_yellow}{payload:IMPACT}{/c} damage with each hit.`,
		id: 85,
		maxPoints: 5,
		x: -415.96,
		y: -81.885,
	},
	["Enhanced Boulder"]: {
		connections: [ "Boulder", "Natural Boulder", "Savage Boulder" ],
		description: `Enemies are slowed by {c_yellow}[{SF_22}*100]%{/c} for {c_yellow}{buffduration:BUFF_MOD_SLOW}{/c} seconds after being hit with {c_white}Boulder{/c}.`,
		id: 86,
		maxPoints: 1,
		x: -787.38,
		y: -150.56,
	},
	["Natural Boulder"]: {
		connections: [ "Enhanced Boulder" ],
		description: `Your {c_white}Basic{/c} skills grant {c_yellow}[{SF_18}*100]%{/c} bonus Spirit while damaging enemies who are Knocked Back by {c_white}Boulder{/c}.`,
		id: 87,
		maxPoints: 1,
		x: -1043.1,
		y: -302.409,
	},
	["Savage Boulder"]: {
		connections: [ "Enhanced Boulder" ],
		description: `The first enemy damaged by {c_white}Boulder{/c} is made {c_white}Vulnerable{/c} for {c_yellow}{SF_19}{/c} seconds.`,
		id: 88,
		maxPoints: 1,
		x: -1165.425,
		y: -135.355,
	},
	["Trample"]: {
		connections: [ "Wrath", "Enhanced Trample" ],
		description: `{if:Mod.Spirit}{c_gold}Generates Spirit:{/c} {c_green}{SF_11}{/c}
{/if}{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Shapeshift into a Werebear and charge forward, dealing {c_yellow}{payload:PAYLOAD_DAMAGE}{/c} damage and Knocking Back enemies.

Enemies who are Knocked Back into terrain take an additional {c_yellow}{payload:TERRAIN_IMPACT_DAMAGE}{/c} damage and are stunned for {c_yellow}{buffduration:TERRAIN_IMPACT}{/c} seconds.`,
		id: 89,
		maxPoints: 5,
		x: -283.24,
		y: 180.74,
	},
	["Enhanced Trample"]: {
		connections: [ "Trample", "Natural Trample", "Savage Trample" ],
		description: `You are {c_white}Unstoppable{/c} during {c_white}Trample{/c}.`,
		id: 90,
		maxPoints: 1,
		x: -483,
		y: 312.295,
	},
	["Natural Trample"]: {
		connections: [ "Enhanced Trample" ],
		description: `Casting {c_white}Trample{/c} grants {c_yellow}{fortified:MOD_FORTIFY}{/c} {c_white}Fortify{/c}.`,
		id: 91,
		maxPoints: 1,
		x: -782.485,
		y: 380.895,
	},
	["Savage Trample"]: {
		connections: [ "Enhanced Trample" ],
		description: `Casting {c_white}Trample{/c} grants {c_yellow}{SF_11}{/c} Spirit.`,
		id: 92,
		maxPoints: 1,
		x: -557.04,
		y: 471.43,
	},
	["Crushing Earth"]: {
		connections: [ "Wrath", "Safeguard", "Stone Guard" ],
		description: `{c_white}Earth{/c} skills deal {c_yellow}x[{SF_1} * 100]%{/c} increased damage to Slowed, Stunned, Immobilized or Knocked Back enemies.`,
		id: 93,
		maxPoints: 3,
		x: -703.3,
		y: 97.49,
	},
	["Safeguard"]: {
		connections: [ "Crushing Earth" ],
		description: `Critical Strikes with {c_white}Earth{/c} skills {c_white}Fortifies{/c} you for {c_yellow}{fortified:PAYLOAD_FORTIFY}{/c}.`,
		id: 94,
		maxPoints: 3,
		x: -1037.34,
		y: 275.51,
	},
	["Stone Guard"]: {
		connections: [ "Crushing Earth" ],
		description: `While {c_white}Fortified{/c} over [{SF_1}*100]% of your maximum Life, your {c_white}Earth{/c} skills deal  {c_yellow}x[{SF_0} * 100]%{/c} increased damage.`,
		id: 95,
		maxPoints: 3,
		x: -1129.275,
		y: 79.23,
	},
	["Iron Fur"]: {
		connections: [ "Wrath", "Mending", "Provocation" ],
		description: `While in Werebear form, damage reduction is increased by {c_yellow}[{SF_2} * 100]%{/c}.

This bonus persists for {c_yellow}{buffduration:BUFF_MITIGATION_TEMP}{/c} seconds after leaving Werebear form.`,
		id: 96,
		maxPoints: 3,
		x: -56.585,
		y: 358.055,
	},
	["Mending"]: {
		connections: [ "Iron Fur" ],
		description: `While in Werebear form, you receive {c_yellow}[{SF_0} * 100]%{/c} additional healing from all sources.`,
		id: 97,
		maxPoints: 3,
		x: -229.985,
		y: 556.851,
	},
	["Provocation"]: {
		connections: [ "Iron Fur" ],
		description: `Your next {c_white}Werebear{/c} skill every {c_yellow}{SF_0}{/c} seconds is guaranteed to {c_white}Overpower{/c}.`,
		id: 98,
		maxPoints: 3,
		x: 88.595,
		y: 567.92,
	},
	["Hurricane"]: {
		connections: [ "Wrath", "Enhanced Hurricane" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:18}%{/c}
{/if}Form a hurricane around you that deals {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage to nearby enemies over {c_yellow}{SF_4}{/c} seconds.`,
		id: 99,
		maxPoints: 5,
		x: 113.005,
		y: -268.023,
	},
	["Enhanced Hurricane"]: {
		connections: [ "Hurricane", "Natural Hurricane", "Savage Hurricane" ],
		description: `Enemies who are damaged by {c_white}Hurricane{/c} are Slowed by {c_yellow}[{SF_12}*100]%{/c} for {c_yellow}{buffduration:MOD_SLOW}{/c} seconds.`,
		id: 100,
		maxPoints: 1,
		x: 205.48,
		y: -454.768,
	},
	["Natural Hurricane"]: {
		connections: [ "Enhanced Hurricane" ],
		description: `{c_white}Hurricane{/c} has a {c_yellow}[{SF_9} * 100]%{/c} chance to make enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_10}{/c} seconds.`,
		id: 101,
		maxPoints: 1,
		x: 123.565,
		y: -639.983,
	},
	["Savage Hurricane"]: {
		connections: [ "Enhanced Hurricane" ],
		description: `Enemies who are in {c_white}Hurricane's{/c} radius have their damage reduced by {c_yellow}[{SF_11}*100]%{/c}.`,
		id: 102,
		maxPoints: 1,
		x: 462.075,
		y: -597.113,
	},
	["Rabies"]: {
		connections: [ "Wrath", "Enhanced Rabies" ],
		description: `{if:SF_13}{c_gold}Recharge:{/c_gold} {c_green}[{Recharge Time}|1|]{/c} seconds{else}{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green}{/if}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:18}%{/c}
{/if}Shapeshift into a Werewolf and perform an infectious bite on the target dealing {c_yellow}{PAYLOAD:INITIAL_DAMAGE}{/c} damage, and an additional {c_yellow}{dot:BUFF_OHNORABIES}{/c} damage over {c_yellow}{buffduration:BUFF_OHNORABIES}{/c} seconds. 

Infected enemies spread {c_white}Rabies{/c} to other nearby targets.`,
		id: 103,
		maxPoints: 5,
		x: 202.015,
		y: 186.695,
	},
	["Enhanced Rabies"]: {
		connections: [ "Rabies", "Natural Rabies", "Savage Rabies" ],
		description: `Once {c_white}Rabies{/c} infects {c_yellow}{SF_14}{/c} targets, it deals {c_yellow}x[{SF_15}*100]%{/c} increased Poison damage against all targets.`,
		id: 104,
		maxPoints: 1,
		x: 371.195,
		y: 333.44,
	},
	["Natural Rabies"]: {
		connections: [ "Enhanced Rabies" ],
		description: `The initial bite of {c_white}Rabies{/c} heals you for {c_yellow}[{SF_3}*100]%{/c} of your maximum Life.`,
		id: 105,
		maxPoints: 1,
		x: 392.865,
		y: 515.555,
	},
	["Savage Rabies"]: {
		connections: [ "Enhanced Rabies" ],
		description: `The initial bite of {c_white}Rabies{/c} deals {c_yellow}x[{SF_4}*100]%{/c} increased damage against enemies who are Immobilized or Stunned.`,
		id: 106,
		maxPoints: 1,
		x: 690.495,
		y: 442.976,
	},
};

druid["Ultimate"] = {
	["Grizzly Rage"]: {
		connections: [ "Ultimate", "Prime Grizzly Rage" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
Shapeshift into {if:Mod.Upgrade1}an {c_white}Unstoppable{/c}{else}a{/if} Dire Werebear for {c_yellow}{buffduration:BUFF_MAIN_BEAR}{/c} seconds gaining {c_yellow}x[{SF_10}*100]%{/c} bonus damage and {c_yellow}x[{SF_11}*100]%{/c} damage reduction{/if}. Damage bonus is increased by {c_yellow}+[{SF_15}*100]%{/c} each second while in this form.

Kills extend the duration by {c_yellow}{SF_16}{/c} second up to {c_yellow}+{SF_17}{/c} additional seconds.{if:Mod.DELETEME}

Casting {c_white}Grizzly Rage{/c} causes nearby enemies to take {c_yellow}{payload:TOOLTIP_MOD_CAST_IMPACT}{/c} damage and be Slowed by {c_yellow}[{SF_8}*100]%{/c} for {c_yellow}{buffduration:CAST_SLOW}{/c} seconds.{/if}`,
		id: 107,
		maxPoints: 5,
		x: 430.055,
		y: 63.605,
	},
	["Prime Grizzly Rage"]: {
		connections: [ "Supreme Grizzly Rage", "Grizzly Rage" ],
		description: `You are {c_white}Unstoppable{/c} while {c_white}Grizzly Rage{/c} is active.`,
		id: 108,
		maxPoints: 1,
		x: 819.815,
		y: 96.38,
	},
	["Supreme Grizzly Rage"]: {
		connections: [ "Prime Grizzly Rage" ],
		description: `Gain {c_yellow}{fortified:MOD_2_FORTIFY_PER_SECOND}{/c} {c_white}Fortified{/c} Life per second while {c_white}Grizzly Rage{/c} is active.`,
		id: 109,
		maxPoints: 1,
		x: 878.345,
		y: 266.63,
	},
	["Petrify"]: {
		connections: [ "Ultimate", "Prime Petrify" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
Petrify all nearby enemies, Stunning them for {c_yellow}{buffduration:BUFF_PETRIFIED}{/c} seconds. You deal {c_yellow}x[{SF_2}*100]%{/c} increased Critical Strike Damage to Petrified enemies.`,
		id: 110,
		maxPoints: 5,
		x: 209.315,
		y: -196.232,
	},
	["Prime Petrify"]: {
		connections: [ "Supreme Petrify", "Petrify" ],
		description: `{c_white}Petrify's{/c} duration is increased by {c_yellow}{SF_6}{/c} second.`,
		id: 111,
		maxPoints: 1,
		x: 368.4,
		y: -377.659,
	},
	["Supreme Petrify"]: {
		connections: [ "Prime Petrify" ],
		description: `Killing a {c_white}Petrified{/c} enemy grants {c_yellow}{SF_5}{/c} Spirit.`,
		id: 112,
		maxPoints: 1,
		x: 216,
		y: -520.98,
	},
	["Defensive Posture"]: {
		connections: [ "Ultimate", "Thick Hide", "Nature's Resolve" ],
		description: `Increases the amount of {c_white}Fortify{/c} you gain from all sources by {c_yellow}[{SF_0} * 100]%{/c}.`,
		id: 113,
		maxPoints: 3,
		x: 635.525,
		y: -116.355,
	},
	["Thick Hide"]: {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `Whenever you are Stunned, Immobilized, or Knocked Down, {c_white}Fortify{/c} for {c_yellow}{fortified:PAYLOAD_FORTIFY}{/c}.`,
		id: 114,
		maxPoints: 3,
		x: 765.5,
		y: -322.625,
	},
	["Unrestrained"]: {
		connections: [ "Thick Hide", "Nature's Resolve" ],
		description: `Reduce the duration of control impairing effects by {c_yellow}[{SF_0} * 100]%{/c}.  Triple this effect while you are {c_white}Fortified{/c} for over {c_yellow}[{SF_2}*100]%{/c} of your maximum Life.`,
		id: 115,
		maxPoints: 3,
		x: 1124.05,
		y: -229.587,
	},
	["Nature's Resolve"]: {
		connections: [ "Unrestrained", "Defensive Posture" ],
		description: `{c_yellow}[{SF_0}*100]%{/c} chance when struck to Fortify you for {c_yellow}{Fortified:FORTIFY_HEALTH}{/c}.`,
		id: 116,
		maxPoints: 3,
		x: 1015.865,
		y: -13.34,
	},
	["Quickshift"]: {
		connections: [ "Ultimate", "Natural Fortitude", "Heightened Senses" ],
		description: `When a {c_white}Shapeshifting{/c} skill transforms you into a different form, it deals {c_yellow}x[{SF_1} * 100]%{/c} increased damage.`,
		id: 117,
		maxPoints: 3,
		x: 344.6,
		y: 287.59,
	},
	["Natural Fortitude"]: {
		connections: [ "Quickshift" ],
		description: `Shapeshifting {c_white}Fortifies{/c} you for {c_yellow}{fortified:FORTIFY_CASTER}{/c}.`,
		id: 118,
		maxPoints: 3,
		x: 340.775,
		y: 457.657,
	},
	["Heightened Senses"]: {
		connections: [ "Quickshift" ],
		description: `Upon shapeshifting into a Werewolf or Werebear, gain {c_yellow}[{SF_0} * 100]%{/c} damage reduction against Elites for {c_yellow}{buffduration:BUFF_DAMAGE_REDUCTION}{/c} seconds.`,
		id: 119,
		maxPoints: 3,
		x: 649.085,
		y: 366.088,
	},
	["Lacerate"]: {
		connections: [ "Ultimate", "Prime Lacerate" ],
		description: `{c_gold}Cooldown:{/c} {c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}[{Combat Effect Chance}]%{/c}
{/if}Shapeshift into a Werewolf, become {c_white}Immune{/c} and quickly dash {c_yellow}{SF_6}{/c} times between nearby enemies dealing up to {c_yellow}{PAYLOAD:TOOLTIP_DAMAGE}{/c} damage.`,
		id: 120,
		maxPoints: 5,
		x: -5.075,
		y: 234.915,
	},
	["Prime Lacerate"]: {
		connections: [ "Supreme Lacerate", "Lacerate" ],
		description: `Each time {c_white}Lacerate{/c} deals a Critical Strike, heal for {c_yellow}[{SF_14}*100]%{/c} of your maximum Life.`,
		id: 121,
		maxPoints: 1,
		x: -192.17,
		y: 412.833,
	},
	["Supreme Lacerate"]: {
		connections: [ "Prime Lacerate" ],
		description: `{c_white}Lacerate's{/c} final strike deals {c_yellow}x[{SF_15}*100]%{/c} increased damage.`,
		id: 122,
		maxPoints: 1,
		x: 30.06,
		y: 540.783,
	},
	["Cataclysm"]: {
		connections: [ "Ultimate", "Prime Cataclysm" ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:28}%{/c}
{/if}A massive storm follows you for {c_yellow}{buffduration:TORNADO_SPAWNING}{/c} seconds. Tornadoes knock back enemies, and lightning strikes wildly dealing {c_yellow}{payload:LIGHTNING_STRIKE}{/c} damage.`,
		id: 123,
		maxPoints: 5,
		x: -397.415,
		y: -109.56,
	},
	["Prime Cataclysm"]: {
		connections: [ "Supreme Cataclysm", "Cataclysm" ],
		description: `{c_white}Cataclysm's{/c} duration is increased by {c_yellow}{SF_23}{/c} seconds.`,
		id: 124,
		maxPoints: 1,
		x: -793.645,
		y: -256.893,
	},
	["Supreme Cataclysm"]: {
		connections: [ "Prime Cataclysm" ],
		description: `Lightning strikes from {c_white}Cataclysm{/c} make enemies {c_white}Vulnerable{/c} for {c_yellow}2{/c} seconds.`,
		id: 125,
		maxPoints: 1,
		x: -819.245,
		y: -418.923,
	},
	["Defiance"]: {
		connections: [ "Ultimate", "Circle of Life", "Natural Disaster" ],
		description: `{c_white}Nature Magic{/c} skills deal {c_yellow}x[{SF_0}*100]%{/c} increased damage to Elites.`,
		id: 126,
		maxPoints: 3,
		x: -184.37,
		y: -290.31,
	},
	["Circle of Life"]: {
		connections: [ "Defiance", "Resonance" ],
		description: `{c_white}Nature Magic{/c} skills that consume Spirit restore {c_yellow}[{Script Formula 1} * 100]%{/c} of your maximum Life.`,
		id: 127,
		maxPoints: 3,
		x: -505.765,
		y: -446.596,
	},
	["Resonance"]: {
		connections: [ "Natural Disaster", "Circle of Life" ],
		description: `{c_white}Nature Magic{/c} skills deal {c_yellow}x[{SF_1} * 100]%{/c} increased damage. Triple this bonus if an {c_white}Earth{/c} skill is the next skill cast after a {c_white}Storm{/c} skill, or a  {c_white}Storm{/c} skill is the next skill cast after an  {c_white}Earth{/c} skill.`,
		id: 128,
		maxPoints: 3,
		x: -392.905,
		y: -653.792,
	},
	["Natural Disaster"]: {
		connections: [ "Defiance", "Resonance" ],
		description: `Your {c_white}Earth{/c} skills deal {c_yellow}x[{SF_1}*100]%{/c} increased damage to {c_white}Vulnerable{/c} enemies.

Your {c_white}Storm{/c} skills deal {c_yellow}x[{SF_4}*100]%{/c} increased damage to enemies that are Stunned, Immobilized, or Knocked Back.`,
		id: 129,
		maxPoints: 3,
		x: -103.945,
		y: -508.076,
	},
};

druid["Capstone"] = {
	["Nature's Fury"]: {
		connections: [ "Capstone" ],
		description: `Casting an {c_white}Earth{/c} skill has a {c_yellow}{SF_0}%{/c} chance to trigger a free {c_white}Storm{/c} skill of the same category. 

In addition, casting a {c_white}Storm{/c} skill has a {c_yellow}{SF_0}%{/c} chance to trigger a free {c_white}Earth{/c} skill of the same category. `,
		id: 130,
		maxPoints: 1,
		x: 559.134,
		y: 367.52,
	},
	["Earthen Might"]: {
		connections: [ "Capstone" ],
		description: `{c_gold}Lucky Hit:{/c} Damaging enemies with {c_white}Earth{/c} skills has up to a {c_yellow}{SF_0}%{/c} chance to grant Earthen Might.

This chance is increased by {c_yellow}{SF_3}%{/c} for Critical Strikes, and is further increased by {c_yellow}{SF_4}%{/c} if the target is Stunned, Immobilized, or Knocked Back. 

Earthen Might restores all of your Spirit & grants you {c_yellow}[{SF_1} * 100]%{/c} Critical Strike Chance for {c_yellow}{buffduration:CRIT_CHANCE_BONUS}{/c} seconds.`,
		id: 131,
		maxPoints: 1,
		x: 186.284,
		y: 368.005,
	},
	["Lupine Ferocity"]: {
		connections: [ "Capstone" ],
		description: `Every 6th {c_white}Werewolf{/c} skill hit Critically Strikes and deals {c_yellow}x[{SF_0}*100]%{/c} increased damage.`,
		id: 132,
		maxPoints: 1,
		x: -191.047,
		y: 366.455,
	},
	["Bestial Rampage"]: {
		connections: [ "Capstone" ],
		description: `After being a Werewolf for {c_yellow}{buffduration:TIMER_WOLF}{/c} seconds, gain {c_yellow}[{SF_1} * 100]%{/c} Attack Speed for {c_yellow}{buffduration:BUFF_ATTACK_SPEED}{/c} seconds. 

After being a Werebear for {c_yellow}{buffduration:TIMER_BEAR}{/c} seconds, deal {c_yellow}x[{SF_2} * 100]%{/c} increased damage for {c_yellow}{buffduration:BUFF_ATTACK_DAMAGE}{/c} seconds.`,
		id: 133,
		maxPoints: 1,
		x: -567.981,
		y: 365.85,
	},
	["Perfect Storm"]: {
		connections: [ "Capstone" ],
		description: `Your {c_white}Storm{/c} skills grant {c_yellow}{SF_4}{/c} Spirit and deal {c_yellow}x[{SF_1} * 100]%{/c} increased damage when damaging a {c_white}Vulnerable{/c}, immobilized or slowed enemy.`,
		id: 134,
		maxPoints: 1,
		x: 932.943,
		y: 367.865,
	},
	["Ursine Strength"]: {
		connections: [ "Capstone" ],
		description: `Gain {c_yellow}[{SF_0} * 100]%{/c} additional maximum Life while in Werebear form and for {c_yellow}{buffduration:BONUS_MAX_HEALTH}{/c} seconds after leaving Werebear form.

While {c_white}Healthy{/c}, deal {c_yellow}x[{SF_1} * 100]%{/c} increased damage.`,
		id: 135,
		maxPoints: 1,
		x: -943.646,
		y: 367.035,
	},
};

export { druid };