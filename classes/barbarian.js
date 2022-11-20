let barbarian = {};

barbarian["Trunk Data"] = {
	["Basic"]: {
		connections: [ "Core" ],
		x: 0,
		y: 0,
	},
	["Core"]: {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: 2.166268,
		y: 1132.565,
	},
	["Defensive"]: {
		connections: [ "Brawling" ],
		requiredPoints: 6,
		x: -1245.302147,
		y: 2133.3050000000003,
	},
	["Brawling"]: {
		connections: [ "Weapon Mastery" ],
		requiredPoints: 11,
		x: -1248.402147,
		y: 3333.3145000000004,
	},
	["Weapon Mastery"]: {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 1248.0078529999998,
		y: 3331.9925000000003,
	},
	["Ultimate"]: {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: 2.626443,
		y: 4401.54,
	},
	["Capstone"]: {
		requiredPoints: 33,
		x: -2.742617,
		y: 5263.635,
	},
};

barbarian["Basic"] = {
	["Bash"]: {
		connections: [ "Basic", ],
		description: `{c_gold}Generate Fury:{/c_gold} {c_green}{Script Formula 0}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Bash the enemy with your weapon, dealing {c_yellow}{payload:MELEE_PAYLOAD}{/c} damage. Has a {c_yellow}[{SF_2}*100]%{/c} chance to Stun for {c_yellow}{buffduration:STUN}{/c} seconds.`,
		maxPoints: 5,
		x: -297.919147,
		y: -147.06500000000005,
	},
	["Enhanced Bash"]: {
		connections: [ "Bash", ],
		description: `Damaging an enemy with {c_white}Bash{/c} grants you {c_yellow}{fortified:FORTIFY_CASTER}{/c} {c_white}Fortify{/c}. Double this amount when using a Two-Handed weapon.`,
		maxPoints: 3,
		x: -534.132147,
		y: -273.12999999999965,
	},
	["Battle Bash"]: {
		connections: [ "Enhanced Bash", ],
		description: `Increases {c_white}Bash's{/c} Stun duration to {c_yellow}[{buffduration:STUN} + {SF_15}|2|]{/c} seconds, or to {c_yellow}[{buffduration:STUN} + {SF_16}|2|]{/c} seconds if using a Two-Handed weapon.`,
		maxPoints: 3,
		x: -804.282147,
		y: -298.61500000000024,
	},
	["Combat Bash"]: {
		connections: [ "Enhanced Bash", ],
		description: `{c_white}Bash{/c} deals {c_yellow}x[{SF_13}*100]%{/c} bonus {c_white}Overpower{/c} damage and grants {c_yellow}{SF_14}{/c} additional Fury when {c_white}Overpowering{/c} enemies.`,
		maxPoints: 3,
		x: -613.512147,
		y: -419.7849999999994,
	},
	["Lunging Strike"]: {
		connections: [ "Basic", ],
		description: `{c_gold}Generate Fury:{/c_gold} {c_green}{SF_3}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Lunge forward and strike an enemy for {c_yellow}{payload:DAMAGE}{/c} damage.`,
		maxPoints: 5,
		x: -280.46464699999996,
		y: 154.0300000000002,
	},
	["Enhanced Lunging Strike"]: {
		connections: [ "Lunging Strike", ],
		description: `Critical Strikes with {c_white}Lunging Strike{/c} grant you {c_white}Berserking{/c} for {c_yellow}[{SF_9}|1|]{/c} seconds.`,
		maxPoints: 3,
		x: -517.912147,
		y: 283.3050000000003,
	},
	["Combat Lunging Strike"]: {
		connections: [ "Enhanced Lunging Strike", ],
		description: `{c_white}Lunging Strike{/c} deals {c_yellow}x[{SF_15}*100]%{/c} increased damage and Heals you for {c_yellow}{heal:UPGRADEB_HEAL}{/c} Life when it damages a {c_white}Healthy{/c} enemy.`,
		maxPoints: 3,
		x: -797.217147,
		y: 315.34500000000025,
	},
	["Battle Lunging Strike"]: {
		connections: [ "Enhanced Lunging Strike", ],
		description: `When using a Slashing weapon, {c_white}Lunging Strike{/c} has a {c_yellow}[{SF_13}*100]%{/c} chance to make enemies {c_white}Vulnerable{/c} for {c_yellow}{SF_17}{/c} seconds.`,
		maxPoints: 3,
		x: -571.827147,
		y: 426.19000000000005,
	},
	["Frenzy"]: {
		connections: [ "Basic", ],
		description: `{c_gold}Generate Fury:{/c_gold} {c_green}{SF_0}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Unleash a rapid flurry of blows, dealing {c_yellow}{payload:TOOLTIP_DAMAGE}{/c} damage with each pair of hits. 

Dealing damage with {c_white}Frenzy{/c} increases {c_white}Frenzy's{/c} Attack Speed by {c_yellow}+[{SF_1}*100]%{/c} for {c_yellow}{buffduration:ATTACK_SPEED_INCREASE}{/c} seconds, up to {c_yellow}+[{SF_1} * {SF_3} * 100]%{/c}.`,
		maxPoints: 5,
		x: 295.291353,
		y: 155.45000000000027,
	},
	["Enhanced Frenzy"]: {
		connections: [ "Frenzy", ],
		description: `While {c_white}Frenzy{/c} is granting {c_yellow}+[{SF_1} * 3 * 100]%{/c} bonus Attack Speed, it also generates {c_yellow}1{/c} additional Fury.`,
		maxPoints: 3,
		x: 541.242853,
		y: 295.12000000000035,
	},
	["Battle Frenzy"]: {
		connections: [ "Enhanced Frenzy", ],
		description: `{c_white}Frenzy{/c} deals {c_yellow}x[{SF_14}*100]%{/c} increased damage while {c_white}Berserking{/c}.`,
		maxPoints: 3,
		x: 640.297853,
		y: 431.52,
	},
	["Combat Frenzy"]: {
		connections: [ "Enhanced Frenzy", ],
		description: `You gain {c_yellow}x[{SF_15}*100]%{/c} Damage Reduction for each stack of {c_white}Frenzy{/c} you currently have.`,
		maxPoints: 3,
		x: 829.407853,
		y: 308.18499999999995,
	},
	["Flay"]: {
		connections: [ "Basic", ],
		description: `{c_gold}Generate Fury:{/c_gold} {c_green}{SF_2}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:14}%{/c}
{/if}Flay the enemy, dealing {c_yellow}{payload:DAMAGE}{/c} damage. Inflicts {c_yellow}{dot:BLEEDING}{/c} Bleeding damage over {c_yellow}{buffduration:BLEEDING}{/c} seconds.`,
		maxPoints: 5,
		x: 291.231353,
		y: -150.54499999999962,
	},
	["Enhanced Flay"]: {
		connections: [ "Flay", ],
		description: `{c_white}Flay{/c} has a {c_yellow}[{SF_9}*100]%{/c} chance to make the enemy {c_white}Vulnerable{/c} for {c_yellow}2{/c} seconds. Double this chance when using a Two-Handed weapon.`,
		maxPoints: 3,
		x: 549.072853,
		y: -289.98,
	},
	["Battle Flay"]: {
		connections: [ "Enhanced Flay", ],
		description: `When {c_white}Flay{/c} deals direct damage to an enemy, they take {c_yellow}x[{SF_10}*100]%{/c} increased Bleeding damage for the next {c_yellow}{buffduration:AMPLIFY_BLEED_DEBUFF}{/c} seconds.`,
		maxPoints: 3,
		x: 604.227853,
		y: -437.0750000000003,
	},
	["Combat Flay"]: {
		connections: [ "Enhanced Flay", ],
		description: `While {c_white}Berserking{/c}, {c_white}Flay's{/c} Attack Speed is increased by {c_yellow}+[{SF_12}*100]%{/c}.`,
		maxPoints: 3,
		x: 839.657853,
		y: -320.86999999999944,
	},
};

barbarian["Core"] = {
	["Hammer of the Ancients"]: {
		connections: [ "Core", ],
		description: `{c_gold}Fury Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Slam your hammer down with the fury of the Ancients, dealing {c_yellow}{payload:DAMAGE}{/c} damage to a concentrated area.`,
		maxPoints: 5,
		x: -314.78191499999997,
		y: -203.48999999999978,
	},
	["Enhanced Hammer of the Ancients"]: {
		connections: [ "Hammer of the Ancients", ],
		description: `Gain {c_yellow}{SF_9}{/c} Fury when {c_white}Hammer of the Ancients{/c} damages {c_yellow}{SF_8}{/c} or more enemies.`,
		maxPoints: 3,
		x: -531.273415,
		y: -352.21000000000004,
	},
	["Violent Hammer of the Ancients"]: {
		connections: [ "Enhanced Hammer of the Ancients", ],
		description: `After {c_yellow}{SF_10}{/c} Critical Strikes with {c_white}Hammer of the Ancients{/c}, your next cast {c_white}Overpowers{/c} all enemies it damages.`,
		maxPoints: 3,
		x: -779.5584150000001,
		y: -413.5999999999999,
	},
	["Furious Hammer of the Ancients"]: {
		connections: [ "Enhanced Hammer of the Ancients", ],
		description: `Gain {c_white}Berserking{/c} for {c_yellow}{SF_11}{/c} seconds when hitting {c_yellow}{SF_12}{/c} or more enemies with {c_white}Hammer of the Ancients{/c}.`,
		maxPoints: 3,
		x: -552.233415,
		y: -498.5250000000001,
	},
	["Upheaval"]: {
		connections: [ "Core", ],
		description: `{c_gold}Fury Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Tear into the ground with your weapon and fling debris forward, dealing {c_yellow}{payload:SLAM_DAMAGE}{/c} damage.`,
		maxPoints: 5,
		x: -404.749415,
		y: 65.11500000000024,
	},
	["Enhanced Upheaval"]: {
		connections: [ "Upheaval", ],
		description: `{c_white}Upheaval{/c} has a {c_yellow}[{SF_7}  * 100]%{/c} chance to Stun all enemies it damages for {c_yellow}[{SF_8}|1|]{/c} seconds.`,
		maxPoints: 3,
		x: -736.9284150000001,
		y: 112.49499999999989,
	},
	["Violent Upheaval"]: {
		connections: [ "Enhanced Upheaval", ],
		description: `If {c_white}Upheaval{/c} deals damage to an enemy you gain {c_white}Berserking{/c} for {c_yellow}{SF_9}{/c} seconds, or {c_yellow}{SF_11}{/c} seconds if it deals damage to {c_yellow}{SF_10}{/c} or more enemies.`,
		maxPoints: 3,
		x: -1039.9934150000001,
		y: 90.58500000000004,
	},
	["Furious Upheaval"]: {
		connections: [ "Enhanced Upheaval", ],
		description: `Dealing direct damage to an enemy with a Skill that is not {c_white}Upheaval{/c} causes your next cast of {c_white}Upheaval{/c} to deal {c_yellow}x[{SF_12}  * 100]%{/c} increased damage, stacking up to {c_yellow}{SF_13}{/c} times.`,
		maxPoints: 3,
		x: -934.743415,
		y: 232.07500000000027,
	},
	["Double Swing"]: {
		connections: [ "Core", ],
		description: `{c_gold}Fury Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Sweep your weapons from opposite directions, dealing {c_yellow}{payload:DAMAGE}{/c} damage with each weapon. Enemies caught in the center are damaged by both.`,
		maxPoints: 5,
		x: 77.926085,
		y: 208.3699999999999,
	},
	["Enhanced Double Swing"]: {
		connections: [ "Double Swing", ],
		description: `If {c_white}Double Swing{/c} damages a Stunned or Knocked Down enemy, gain {c_yellow}{SF_8}{/c} Fury.`,
		maxPoints: 3,
		x: 145.45708499999998,
		y: 376.6400000000003,
	},
	["Furious Double Swing"]: {
		connections: [ "Enhanced Double Swing", ],
		description: `Casting {c_white}Double Swing{/c} while {c_white}Berserking{/c} grants {c_yellow}{SF_9}{/c} additional seconds of {c_white}Berserking{/c}.`,
		maxPoints: 3,
		x: 103.50508500000001,
		y: 509.21000000000004,
	},
	["Violent Double Swing"]: {
		connections: [ "Enhanced Double Swing", ],
		description: `Damaging an enemy with {c_white}Double Swing{/c} causes its next cast within {c_yellow}{SF_7}{/c} seconds to deal {c_yellow}x[{SF_6}*100]%{/c} increased damage.`,
		maxPoints: 3,
		x: 359.00408500000003,
		y: 454.19500000000016,
	},
	["Pressure Point"]: {
		connections: [ "Core", ],
		description: `{c_gold}Lucky Hit:{/c} Your {c_white}Core{/c} skills have up to a {c_yellow}{SF_0}%{/c} chance to make enemies {c_white}Vulnerable{/c} for {c_yellow}2{/c} seconds.`,
		maxPoints: 3,
		x: -756.088415,
		y: -117.27500000000009,
	},
	["Rend"]: {
		connections: [ "Core", ],
		description: `{c_gold}Fury Cost:{/c_gold} {c_green}{Resource Cost}{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:15}%{/c}
{/if}Cleave enemies in front of you, dealing {c_yellow}{payload:MELEE_PAYLOAD}{/c} damage and inflicting {c_yellow}{dot:BLEEDING}{/c} Bleeding damage over {c_yellow}{buffduration:BLEEDING}{/c} seconds.`,
		maxPoints: 5,
		x: 256.089085,
		y: -201.50999999999976,
	},
	["Enhanced Rend"]: {
		connections: [ "Rend", ],
		description: `Dealing direct damage with {c_white}Rend{/c} extends the duration of {c_white}Vulnerable{/c} on enemies by {c_yellow}{SF_5}{/c} seconds.`,
		maxPoints: 3,
		x: 455.85758500000003,
		y: -352.25,
	},
	["Violent Rend"]: {
		connections: [ "Enhanced Rend", ],
		description: `{c_white}Rend{/c} deals {c_yellow}x[{SF_9}*100]%{/c} increased Bleeding damage to enemies that are already Bleeding.`,
		maxPoints: 3,
		x: 462.360585,
		y: -500.13499999999976,
	},
	["Furious Rend"]: {
		connections: [ "Enhanced Rend", ],
		description: `Direct damage with {c_white}Rend{/c} grants {c_yellow}{SF_8}{/c} Fury per enemy hit, up to a maximum of {c_yellow}{SF_7}{/c} Fury.`,
		maxPoints: 3,
		x: 694.211585,
		y: -415.125,
	},
	["Whirlwind"]: {
		connections: [ "Core", ],
		description: `{c_gold}Fury Cost:{/c_gold} {c_green}{Resource Cost} per second{/c_green}
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Rapidly attack nearby enemies for {c_yellow}{payload:DAMAGE}{/c} damage.`,
		maxPoints: 5,
		x: 468.009585,
		y: 2.8350000000000364,
	},
	["Enhanced Whirlwind"]: {
		connections: [ "Whirlwind", ],
		description: `Gain {c_yellow}{SF_10}{/c} Fury each time {c_white}Whirlwind{/c} deals direct damage to an enemy, or {c_yellow}{SF_12}{/c} Fury if the enemy is Stunned.`,
		maxPoints: 3,
		x: 811.476585,
		y: 5.539999999999964,
	},
	["Furious Whirlwind"]: {
		connections: [ "Enhanced Whirlwind", ],
		description: `While using a Slashing weapon, {c_white}Whirlwind{/c} also inflicts {c_yellow}{Dot:DEBUFF_BLEED}{/c} Bleeding damage over {c_yellow}{SF_15}{/c} seconds.`,
		maxPoints: 3,
		x: 1019.471585,
		y: 79.94000000000005,
	},
	["Violent Whirlwind"]: {
		connections: [ "Enhanced Whirlwind", ],
		description: `After using {c_white}Whirlwind{/c} for {c_yellow}{SF_14}{/c} seconds, {c_white}Whirlwind{/c} deals {c_yellow}x[{SF_13}* 100]%{/c} increased damage until it is cancelled.`,
		maxPoints: 3,
		x: 1026.416585,
		y: -63.565000000000055,
	},
	["Endless Fury"]: {
		connections: [ "Core", ],
		description: `{c_white}Basic{/c} skills generate {c_yellow}x[{Script Formula 0}*100]%{/c} more Fury when using Two-Handed weapons.`,
		maxPoints: 3,
		x: 537.506585,
		y: 210.4050000000002,
	},
};

barbarian["Defensive"] = {
	["Challenging Shout"]: {
		connections: [ "Defensive", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
Taunt nearby enemies and gain {c_yellow}x[{SF_11} * 100]%{/c} Damage Reduction for {c_yellow}{buffduration:BUFF_TAUNT}{/c} seconds.`,
		maxPoints: 5,
		x: -352.93000000000006,
		y: -191.53999999999996,
	},
	["Enhanced Challenging Shout"]: {
		connections: [ "Challenging Shout", ],
		description: `While {c_white}Challenging Shout{/c} is active, gain {c_yellow}x[{SF_17} *100]%{/c} bonus Maximum Life.`,
		maxPoints: 3,
		x: -595.095,
		y: -328.05499999999984,
	},
	["Strategic Challenging Shout"]: {
		connections: [ "Enhanced Challenging Shout", ],
		description: `While {c_white}Challenging Shout{/c} is active, gain Thorns equal to {c_yellow}+[{SF_12} * 100]%{/c} of your Maximum Life.`,
		maxPoints: 3,
		x: -681.8199999999999,
		y: -477.1849999999997,
	},
	["Tactical Challenging Shout"]: {
		connections: [ "Enhanced Challenging Shout", ],
		description: `While {c_white}Challenging Shout{/c} is active you gain {c_yellow}{SF_4}{/c} Fury each time you take damage.`,
		maxPoints: 3,
		x: -891.53,
		y: -358.3449999999998,
	},
	["Iron Skin"]: {
		connections: [ "Defensive", ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c} seconds
Steel yourself, gaining a Barrier that absorbs {c_yellow}[{SF_0}*100]%{/c} of your missing Life for {c_yellow}{buffduration:BARRIER}{/c} seconds.`,
		maxPoints: 5,
		x: -340.56500000000005,
		y: 180.69500000000016,
	},
	["Enhanced Iron Skin"]: {
		connections: [ "Iron Skin", ],
		description: `{c_white}Iron Skin{/c} absorbs {c_yellow}+[{SF_3} * 100]%{/c} more Missing Life.`,
		maxPoints: 3,
		x: -560.645,
		y: 317.1200000000001,
	},
	["Tactical Iron Skin"]: {
		connections: [ "Enhanced Iron Skin", ],
		description: `While {c_white}Iron Skin{/c} is active, restore Life equal to {c_yellow}[{SF_7} * 100]%{/c} of the Barrier's original amount per second.`,
		maxPoints: 3,
		x: -879.405,
		y: 366.96500000000015,
	},
	["Strategic Iron Skin"]: {
		connections: [ "Enhanced Iron Skin", ],
		description: `{c_white}Iron Skin{/c} also grants {c_yellow}{fortified:PAYLOAD_FORTIFY_BASE}{/c} {c_white}Fortify{/c}. Double this amount if cast while below {c_yellow}[{SF_9}*100]%{/c} Life.`,
		maxPoints: 3,
		x: -628.23,
		y: 481.57500000000005,
	},
	["Outburst"]: {
		connections: [ "Defensive", ],
		description: `Gain {c_yellow}{SF_1}{/c} Thorns. Also gain {c_yellow}{SF_4}{/c} Thorns for each {c_yellow}{SF_5}{/c} bonus Maximum Life you have.`,
		maxPoints: 3,
		x: -523.9949999999999,
		y: -2.144999999999982,
	},
	["Tough as Nails"]: {
		connections: [ "Outburst", ],
		description: `Increase your Thorns by {c_yellow}+[{SF_0}*100]%{/c}.`,
		maxPoints: 3,
		x: -871.425,
		y: -1.7799999999999727,
	},
	["Ground Stomp"]: {
		connections: [ "Defensive", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Smash the ground, dealing {c_yellow}{payload:STOMP}{/c} damage and Stunning nearby enemies for {c_yellow}{buffduration:STUN}{/c_yellow} seconds.`,
		maxPoints: 5,
		x: -1.4500000000000455,
		y: -233.7199999999998,
	},
	["Enhanced Ground Stomp"]: {
		connections: [ "Ground Stomp", ],
		description: `Increase {c_white}Ground Stomp’s{/c} duration by {c_yellow}{SF_11}{/c} second.`,
		maxPoints: 3,
		x: -3.5399999999999636,
		y: -391.81999999999994,
	},
	["Tactical Ground Stomp"]: {
		connections: [ "Enhanced Ground Stomp", ],
		description: `{c_white}Ground Stomp{/c} generates {c_yellow}{SF_0}{/c} Fury.`,
		maxPoints: 3,
		x: -159.69499999999994,
		y: -536.3499999999997,
	},
	["Strategic Ground Stomp"]: {
		connections: [ "Enhanced Ground Stomp", ],
		description: `Reduce the Cooldown of your {c_white}Ultimate{/c} skill by {c_yellow}{SF_12}{/c} second for each enemy damaged by {c_white}Ground Stomp{/c}.`,
		maxPoints: 3,
		x: 146.68000000000006,
		y: -537.22,
	},
	["Rallying Cry"]: {
		connections: [ "Defensive", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
Bellow a rallying cry, granting allies {c_yellow}+[{SF_4}*100]%{/c} increased Movement Speed, and {c_yellow}x[{SF_7} * 100]%{/c} increased Resource Generation for {c_yellow}{buffduration:RESOURCE_GAIN}{/c} seconds.`,
		maxPoints: 5,
		x: 346.595,
		y: 186.03500000000008,
	},
	["Enhanced Rallying Cry"]: {
		connections: [ "Rallying Cry", ],
		description: `{c_white}Rallying Cry{/c} grants {c_white}Unstoppable{/c} while active.`,
		maxPoints: 3,
		x: 615.41,
		y: 336.7700000000002,
	},
	["Strategic Rallying Cry"]: {
		connections: [ "Enhanced Rallying Cry", ],
		description: `{c_white}Rallying Cry{/c} grants {c_yellow}{fortified:MOD_FORTIFY_BASE}{/c} {c_white}Fortify{/c}. While Rallying Cry is active, you gain an additional {c_yellow}{fortified:MOD_FORTIFY_PERHIT}{/c} {c_white}Fortify{/c} each time you take or deal direct damage.`,
		maxPoints: 3,
		x: 706.575,
		y: 510.30500000000006,
	},
	["Tactical Rallying Cry"]: {
		connections: [ "Enhanced Rallying Cry", ],
		description: `{c_white}Rallying Cry{/c} grants {c_yellow}{SF_13}{/c} Fury. You gain {c_yellow}+[{SF_8} * 100]%{/c} increased Resource Generation from {c_white}Rallying Cry{/c}`,
		maxPoints: 3,
		x: 975.688,
		y: 393.5,
	},
	["Imposing Presence "]: {
		connections: [ "Defensive", ],
		description: `Gain {c_yellow}x[{SF_0}*100]%{/c} additional Maximum Life.`,
		maxPoints: 3,
		x: 499.95500000000004,
		y: -0.5049999999998818,
	},
	["Martial Vigor"]: {
		connections: [ "Imposing Presence ", ],
		description: `Damage Reduction against Elites is increased by {c_yellow}x[({SF_0}*sLevel)*100]%{/c}.`,
		maxPoints: 3,
		x: 869.19,
		y: 0.6900000000000546,
	},
};

barbarian["Brawling"] = {
	["Charge"]: {
		connections: [ "Brawling", ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Become {c_white}Unstoppable{/c} and rush forward, pushing enemies with you then swinging through them for {c_yellow}{payload:SWING}{/c} damage and Knocking them Back.`,
		maxPoints: 5,
		x: -281.9350000000002,
		y: 182.90949999999998,
	},
	["Enhanced Charge"]: {
		connections: [ "Charge", ],
		description: `Enemies who are Knocked Back into terrain by {c_white}Charge{/c} take {c_yellow}{payload:TOOLTIP_IMPACT_WALL}{/c} damage and are Stunned for {c_yellow}{SF_11}{/c} seconds.`,
		maxPoints: 3,
		x: -520.5500000000002,
		y: 327.4595,
	},
	["Power Charge"]: {
		connections: [ "Enhanced Charge", ],
		description: `Reduce {c_white}Charge's{/c} Cooldown by {c_yellow}{SF_13}{/c} seconds if it Knocks Back an enemy into terrain.`,
		maxPoints: 3,
		x: -764.5050000000001,
		y: 388.4215,
	},
	["Mighty Charge"]: {
		connections: [ "Enhanced Charge", ],
		description: `Damaging enemies with {c_white}Charge{/c} makes them {c_white}Vulnerable{/c} for {c_yellow}[SF_18]{/c} seconds.`,
		maxPoints: 3,
		x: -545.135,
		y: 471.464155,
	},
	["War Cry"]: {
		connections: [ "Brawling", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
Bellow a mighty war cry. You and nearby allies deal {c_yellow}x[{SF_1}*100]%{/c} increased damage for {c_yellow}{buffduration:INCREASED_DAMAGE}{/c} seconds.`,
		maxPoints: 5,
		x: -233.83500000000004,
		y: -208.5045,
	},
	["Enhanced War Cry"]: {
		connections: [ "War Cry", ],
		description: `{c_white}War Cry{/c} grants you {c_white}Berserking{/c} for {c_yellow}{SF_10}{/c} seconds.`,
		maxPoints: 3,
		x: -396.1400000000001,
		y: -350.1295,
	},
	["Power War Cry"]: {
		connections: [ "Enhanced War Cry", ],
		description: `If at least {c_yellow}{SF_12}{/c} enemies are nearby when {c_white}War Cry{/c} is cast, its damage bonus is increased by {c_yellow}[{SF_9} *100]%{/c}.`,
		maxPoints: 3,
		x: -660.6500000000001,
		y: -395.69950000000006,
	},
	["Mighty War Cry"]: {
		connections: [ "Enhanced War Cry", ],
		description: `{c_white}War Cry{/c} grants {c_yellow}{fortified:MOD_FORTIFY_BASE}{/c} Fortify.`,
		maxPoints: 3,
		x: -462.6200000000001,
		y: -487.7645,
	},
	["Booming Voice"]: {
		connections: [ "Brawling", ],
		description: `{c_white}Shout{/c} skill durations are increased by {c_yellow}x[{SF_0}*100]%{/c}.`,
		maxPoints: 3,
		x: -537.6200000000001,
		y: -2.30600000000004,
	},
	["Raid Leader "]: {
		connections: [ "Booming Voice", ],
		description: `Your {c_white}Shouts{/c} also Heal allies for {c_yellow}{heal:PAYLOAD_HEAL}{/c} Life per second.`,
		maxPoints: 3,
		x: -888.4649999999999,
		y: -78.62450000000001,
	},
	["Guttural Yell"]: {
		connections: [ "Booming Voice", ],
		description: `Your {c_white}Shout{/c} Skills cause enemies to deal {c_yellow}x[{SF_2} * 100]%{/c} less damage for {c_yellow}{SF_0}{/c} seconds.`,
		maxPoints: 3,
		x: -880.6700000000003,
		y: 100.26599999999996,
	},
	["Leap"]: {
		connections: [ "Brawling", ],
		description: `{c_gold}Cooldown: {/c}{c_green}[{Cooldown Time}|1|]{/c} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Leap forward and then slam down, dealing {c_yellow}{payload:LANDING}{/c} damage and Knocking Back nearby enemies on impact.`,
		maxPoints: 5,
		x: 268.7599999999999,
		y: 178.71949999999998,
	},
	["Enhanced Leap"]: {
		connections: [ "Leap", ],
		description: `If {c_white}Leap{/c} doesn't damage any enemies, its Cooldown is reduced by {c_yellow}{SF_12}{/c} seconds.`,
		maxPoints: 3,
		x: 513.7649999999999,
		y: 326.8995,
	},
	["Mighty Leap"]: {
		connections: [ "Enhanced Leap", ],
		description: `Enemies damaged by {c_white}Leap{/c} are Slowed by {c_yellow}[{SF_16}*100]%{/c} for {c_yellow}{buffduration:UPGRADEB_SLOW}{/c} seconds.`,
		maxPoints: 3,
		x: 787.4754999999999,
		y: 357.779,
	},
	["Power Leap"]: {
		connections: [ "Enhanced Leap", ],
		description: `If {c_white}Leap{/c} damages at least one enemy, gain {c_yellow}{SF_11}{/c} Fury.`,
		maxPoints: 3,
		x: 615.905,
		y: 458.29665,
	},
	["Kick"]: {
		connections: [ "Brawling", ],
		description: `{c_gold}Charges:{/c} {c_green}{SF_4}{/c}
{c_gold}Charge Cooldown:{/c_gold} {c_green}[{Recharge Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Throw a powerful kick that deals {c_yellow}{payload:KICK_UPFRONT_DAMAGE}{/c} damage and Knocks Back enemies in front of you. Enemies who are Knocked Back into terrain take an additional {c_yellow}{payload:IMPACT_TERRAIN}{/c} damage and are Stunned for {c_yellow}{buffduration:IMPACTED_TERRAIN}{/c} seconds.`,
		maxPoints: 5,
		x: 214.56999999999994,
		y: -209.19450000000006,
	},
	["Enhanced Kick"]: {
		connections: [ "Kick", ],
		description: `{c_white}Kick{/c} makes enemies it damages {c_white}Vulnerable{/c} for {c_yellow}{SF_17}{/c} seconds.`,
		maxPoints: 3,
		x: 358.04999999999995,
		y: -349.6095,
	},
	["Mighty Kick"]: {
		connections: [ "Enhanced Kick", ],
		description: `{c_white}Kicked{/c} enemies deal {c_yellow}{payload:TOOLTIP_IMPACT_MOD}{/c} damage to enemies they collide with while being Knocked Back. Enemies damaged this way are Knocked Down for {c_yellow}{SF_5}{/c} seconds.`,
		maxPoints: 3,
		x: 396.3399999999999,
		y: -487.29949999999997,
	},
	["Power Kick"]: {
		connections: [ "Enhanced Kick", ],
		description: `If {c_white}Kick{/c} damages an enemy, it consumes all of your Fury and deals an additional {c_yellow}{payload:UPGRADEA_TOOLTIP}{/c} damage per {c_yellow}{SF_22}{/c} Fury spent. {c_white}Kick{/c} no longer Knocks Back enemies.`,
		maxPoints: 3,
		x: 660.1049999999999,
		y: -393.2395,
	},
	["Aggressive Resistance"]: {
		connections: [ "Brawling", ],
		description: `Gain {c_yellow}[{SF_0}*100]%{/c} Damage Reduction while {c_white}Berserking{/c}.`,
		maxPoints: 3,
		x: -0.3849999999999909,
		y: 314.173,
	},
	["Prolific Fury"]: {
		connections: [ "Aggressive Resistance", ],
		description: `While {c_white}Berserking{/c}, Fury Generation is increased by {c_yellow}x[{SF_0} * 100]%{/c}.`,
		maxPoints: 3,
		x: 165.2099999999998,
		y: 513.0139,
	},
	["Battle Frenzy"]: {
		connections: [ "Aggressive Resistance", ],
		description: `When a {c_white}Brawling{/c} Skill damages at least one enemy, gain {c_white}Berserking{/c} for {c_yellow}{SF_0}{/c} |4second.:seconds.`,
		maxPoints: 3,
		x: -166.52999999999997,
		y: 511.82025,
	},
	["Swiftness"]: {
		connections: [ "Brawling", ],
		description: `Movement Speed is increased by {c_yellow}+[{Script Formula 0}*sLevel*100]%{/c}.`,
		maxPoints: 3,
		x: 604.81,
		y: -113.27949999999998,
	},
	["Quick Impulses"]: {
		connections: [ "Swiftness", ],
		description: `Reduce the duration of Control Impairing Effects by {c_yellow}x[{SF_0}*100]%{/c}.`,
		maxPoints: 3,
		x: 951.1909999999999,
		y: -180.77949999999998,
	},
};

barbarian["Weapon Mastery"] = {
	["Steel Grasp"]: {
		connections: [ "Weapon Mastery", ],
		description: `{c_gold}Charges:{/c} {c_green}{SF_9}{/c}
{c_gold}Charge Cooldown:{/c_gold} {c_green}[{Recharge Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Throw out a trio of chains that deal {c_yellow}{payload:DAMAGE}{/c} damage and Pull In enemies.`,
		maxPoints: 5,
		x: 333.5350000000001,
		y: 169.019,
	},
	["Enhanced Steel Grasp"]: {
		connections: [ "Steel Grasp", ],
		description: `{c_white}Steel Grasp{/c} also makes enemies {c_white}Vulnerable{/c} for {c_yellow}[{SF_6}|1|]{/c} seconds.`,
		maxPoints: 3,
		x: 561.5550000000001,
		y: 293.289,
	},
	["Warrior's Steel Grasp"]: {
		connections: [ "Enhanced Steel Grasp", ],
		description: `{c_white}Steel Grasp{/c} gains {c_yellow}{SF_10}{/c} additional Charge.`,
		maxPoints: 3,
		x: 606.385,
		y: 458.8605,
	},
	["Fighter's Steel Grasp"]: {
		connections: [ "Enhanced Steel Grasp", ],
		description: `If {c_white}Steel Grasp{/c} damages an enemy, gain {c_white}Berserking{/c} for {c_yellow}{SF_7}{/c} seconds.`,
		maxPoints: 3,
		x: 884.7949999999998,
		y: 366.9145,
	},
	["Thick Skin"]: {
		connections: [ "Weapon Mastery", ],
		description: `Each time you take direct damage gain {c_yellow}{fortified:FORTIFY}{/c} {c_white}Fortify{/c}.`,
		maxPoints: 3,
		x: 0.22500000000013642,
		y: 334.476,
	},
	["Counteroffensive "]: {
		connections: [ "Thick Skin", ],
		description: `While {c_white}Fortified{/c} for over {c_yellow}[{SF_1}*100]%{/c} of your Maximum Life, you deal {c_yellow}x[{SF_0}*100]%{/c} increased damage.`,
		maxPoints: 3,
		x: 166.39499999999998,
		y: 533.6245,
	},
	["Defensive Posture"]: {
		connections: [ "Thick Skin", ],
		description: `Increase the Damage Reduction gained while you are {c_white}Fortified{/c} by an additional {c_yellow}+[{SF_0}*100]%{/c}.`,
		maxPoints: 3,
		x: -157.30999999999995,
		y: 535.2185,
	},
	["Death Blow"]: {
		connections: [ "Weapon Mastery", ],
		description: `{if:SF_6}{c_gold}Fury Cost:{/c} {c_green}{Resource Cost}{/c}
{/if}{if:SF_8}{c_gold}Charges:{/c} {c_green}{SF_10}{/c}
{c_gold}Charge Cooldown:{/c_gold} {c_green}[{Recharge Time}|1|]{/c} seconds
{/if}{if:SF_9}{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{/if}{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Attempt a killing strike, dealing {c_yellow}{payload:EXECUTE_IMPACT}{/c} damage to enemies in front of you.

{if:SF_9}If this kills an enemy, the Cooldown is reset.{/if}{if:SF_8}If this kills an enemy, a Charge is refunded.{/if}`,
		maxPoints: 5,
		x: -325.56499999999994,
		y: -166.53750000000002,
	},
	["Enhanced Death Blow"]: {
		connections: [ "Death Blow", ],
		description: `{c_white}Death Blow{/c} deals {c_yellow}x[{SF_12} * 100]%{/c} increased damage to bosses.`,
		maxPoints: 3,
		x: -568.68,
		y: -305.26250000000005,
	},
	["Warrior's Death Blow"]: {
		connections: [ "Enhanced Death Blow", ],
		description: `If {c_white}Death Blow{/c} damages at least one enemy, gain {c_white}Berserking{/c} for {c_yellow}{SF_16}{/c} seconds.`,
		maxPoints: 3,
		x: -865.5269999999999,
		y: -366.7125,
	},
	["Fighter's Death Blow"]: {
		connections: [ "Enhanced Death Blow", ],
		description: `If {c_white}Death Blow{/c} damages at least one enemy, gain {c_yellow}{SF_15}{/c} Fury.`,
		maxPoints: 3,
		x: -648.16,
		y: -468.7025,
	},
	["Pit Fighter"]: {
		connections: [ "Weapon Mastery", ],
		description: `You deal {c_yellow}x[{SF_3} * 100]%{/c} increased damage to Close enemies and gain {c_yellow}[{SF_1} * 100]%{/c} Distant Damage Reduction.`,
		maxPoints: 3,
		x: -2.0499999999999545,
		y: -332.97249999999997,
	},
	["Slaying Strike"]: {
		connections: [ "Pit Fighter", ],
		description: `You deal {c_yellow}x[{SF_1}*100]%{/c} increased damage against {c_white}Injured{/c} enemies.`,
		maxPoints: 3,
		x: 158.41000000000008,
		y: -504.9675,
	},
	["Expose Vulnerability"]: {
		connections: [ "Slaying Strike", ],
		description: `Dealing direct damage with a {c_white}Weapon Mastery{/c} skill causes your next {c_white}Core{/c} Skill to make enemies {c_white}Vulnerable{/c} for {c_yellow}[{SF_0}|1|]{/c} seconds.`,
		maxPoints: 3,
		x: 2.605000000000018,
		y: -667.2924999999999,
	},
	["No Mercy"]: {
		connections: [ "Expose Vulnerability", "Pit Fighter", ],
		description: `You deal {c_yellow}x[{SF_0}*sLevel*100]%{/c} increased damage against Immobilized, Stunned, or Slowed enemies.`,
		maxPoints: 3,
		x: -150.42999999999984,
		y: -504.2875,
	},
	["Rupture"]: {
		connections: [ "Weapon Mastery", ],
		description: `{if:SF_13}{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c} seconds
{/if}{if:SF_14}{c_gold}Charges:{/c} {c_green}{SF_15}{/c}
{c_gold}Charge Cooldown:{/c_gold} {c_green}[{Recharge Time}|1|]{/c} seconds
{/if}{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Skewer enemies in front of you, dealing {c_yellow}{payload:DAMAGE}{/c} damage, then rip your weapon out, damaging enemies for their total Bleeding amount and removing all Bleeding damage from them.`,
		maxPoints: 5,
		x: 327.83000000000015,
		y: -166.52250000000004,
	},
	["Enhanced Rupture"]: {
		connections: [ "Rupture", ],
		description: `If an enemy dies while being skewered by {c_white}Rupture{/c}, then reset its Cooldown. Enemies who survive take {c_yellow}x[{SF_26}*100]%{/c} increased Bleeding damage for the next {c_yellow}{buffduration:AMPLIFY_BLEED_DEBUFF}{/c} seconds.`,
		maxPoints: 3,
		x: 552.76,
		y: -304.59749999999997,
	},
	["Fighter's Rupture"]: {
		connections: [ "Enhanced Rupture", ],
		description: `Enemies killed by {c_white}Rupture{/c} Heal you for {c_yellow}{heal:UPGRADEA_HEAL}{/c}.`,
		maxPoints: 3,
		x: 880.2300000000002,
		y: -365.86250000000007,
	},
	["Warrior's Rupture"]: {
		connections: [ "Enhanced Rupture", ],
		description: `Killing enemies with {c_white}Rupture{/c} increases your Attack Speed by {c_yellow}+[{SF_23} * 100]%{/c} for{c_yellow}{buffduration:ATTACK_SPEED}{/c} seconds.`,
		maxPoints: 3,
		x: 585.94,
		y: -469.1775,
	},
	["Hamstring"]: {
		connections: [ "Weapon Mastery", ],
		description: `Your Bleeding effects Slow enemies by {c_yellow}[{SF_0}*100]%{/c}.`,
		maxPoints: 3,
		x: 632.7950000000001,
		y: 0.02949999999998454,
	},
	["Cut to the Bone"]: {
		connections: [ "Hamstring", ],
		description: `Your Bleeding effects deal {c_yellow}x[{SF_0} *100]%{/c} increased damage to {c_white}Vulnerable{/c} enemies.`,
		maxPoints: 3,
		x: 1008.4100000000001,
		y: -0.026999999999986812,
	},
};

barbarian["Ultimate"] = {
	["Call of the Ancients"]: {
		connections: [ "Ultimate", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Call upon 3 Ancients to aid you in battle for {c_yellow}{SF_0}{/c} seconds.

Korlic leaps at enemies, dealing {c_yellow}{payload:LEAP_TOOLTIP}{/c} damage and swings his weapons in a frenzy, dealing {c_yellow}{payload:FRENZY_TOOLTIP}{/c} damage per hit.

Talic spins in a whirlwind rapidly attacking enemies for {c_yellow}{payload:WHIRLWIND_TOOLTIP}{/c} damage.

Madawc upheaves the ground, dealing {c_yellow}{payload:UPHEAVAL_TOOLTIP}{/c} damage.`,
		maxPoints: 5,
		x: -51.58199,
		y: -242.09450000000004,
	},
	["Prime Call of the Ancients"]: {
		connections: [ "Call of the Ancients", ],
		description: `While {c_white}Call of the Ancients{/c} is active, gain {c_yellow}+[{SF_13}*100]%{/c} bonus Attack Speed and {c_yellow}x[{SF_14}*100]%{/c} increased damage.`,
		maxPoints: 3,
		x: 112.65991,
		y: -397.5255,
	},
	["Supreme Call of the Ancients"]: {
		connections: [ "Prime Call of the Ancients", ],
		description: `Each of the Ancients gains additional power:

{c_gold}Korlic:{/c} You gain {c_yellow}10{/c} Fury each time Korlic damages an enemy with {c_white}Frenzy{/c}.
{c_gold}Talic:{/c} Enemies are Slowed by {c_yellow}[{SF_16}*100]%{/c} for {c_yellow}{SF_17}{/c} second when damaged by his {c_white}Whirlwind{/c}.
{c_gold}Madawc:{/c} {c_yellow}[{SF_18}*100]%{/c} chance to Stun enemies for {c_yellow}{SF_19}{/c} seconds when using his {c_white}Upheaval{/c}.`,
		maxPoints: 3,
		x: -18.609440000000003,
		y: -547.1385,
	},
	["Iron Maelstrom"]: {
		connections: [ "Ultimate", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat_Effect_Chance_Script_Formula_Override:14}%{/c}
{/if}Activate to attach a chain to your Two-Handed Bludgeoning weapon and slam the ground, dealing {c_yellow}{payload:DAMAGE}{/c} damage and Stunning them for {c_yellow}{buffduration:STUN}{/c} seconds.

Reactivate a second time to attach a chain to your Two-Handed Slashing weapon and swipe it in front of you, dealing {c_yellow}{payload:TOOLTIP_DAMAGE_SLASH}{/c} damage and {c_yellow}{dot:TOOLTIP_DAMAGE_SLASH_BLEED}{/c} Bleeding damage over {c_yellow}{buffduration:TOOLTIP_DAMAGE_SLASH_BLEED}{/c} seconds.

Reactivate a final time to attach a chain to your Dual Wield weapons and swing them around you, dealing {c_yellow}{payload:TOOLTIP_DAMAGE_DUALWIELDING}{/c} damage per hit.`,
		maxPoints: 5,
		x: -409.81908999999996,
		y: -8.495000000000005,
	},
	["Prime Iron Maelstrom"]: {
		connections: [ "Iron Maelstrom", ],
		description: `{c_white}Iron Maelstrom{/c} gains {c_yellow}+[{SF_10}*100]%{/c} increased Critical Strike Chance and deals {c_yellow}x[{SF_11}*100]%{/c} increased Critical Strike Damage`,
		maxPoints: 3,
		x: -714.37859,
		y: -29.264999999999986,
	},
	["Supreme Iron Maelstrom"]: {
		connections: [ "Prime Iron Maelstrom", ],
		description: `Dealing direct damage to an enemy after swapping weapons reduces {c_white}Iron Maelstrom's{/c} Cooldown by {c_yellow}{SF_12}{/c} second.`,
		maxPoints: 3,
		x: -954.88859,
		y: 30.870000000000005,
	},
	["Duelist"]: {
		connections: [ "Ultimate", ],
		description: `Attack Speed is increased by {c_yellow}+[{Script Formula 0}*100]%{/c} while using One-Handed weapons.`,
		maxPoints: 3,
		x: -496.30208999999996,
		y: -261.70500000000004,
	},
	["Wrath of the Berserker"]: {
		connections: [ "Ultimate", ],
		description: `{c_gold}Cooldown:{/c_gold} {c_green}[{Cooldown Time}|1|]{/c_green} seconds
{if:ADVANCED_TOOLTIP}{c_gold}Lucky Hit Chance: {/c}{c_green}{Combat Effect Chance}%{/c}
{/if}Gain {c_white}Berserking{/c} and {c_white}Unstoppable{/c} for {c_yellow}{SF_13}{/c} seconds.  For the next {c_yellow}{buffduration:BUFF_MAIN}{/c} seconds, dealing direct damage with {c_white}Basic{/c} Skills grants {c_white}Berserking{/c} for {c_yellow}{SF_12}{/c} seconds.`,
		maxPoints: 5,
		x: 293.36041,
		y: 168.865,
	},
	["Supreme Wrath of the Berserker"]: {
		connections: [ "Wrath of the Berserker", ],
		description: `While {c_white}Wrath of the Berserker{/c} is active, gain {c_yellow}+[{SF_3} * 100]%{/c} increased Movement Speed and increase Fury Generation by {c_yellow}x[{SF_14} * 100]%{/c}`,
		maxPoints: 3,
		x: 438.82891,
		y: 328.3349999999999,
	},
	["Prime Wrath of the Berserker"]: {
		connections: [ "Supreme Wrath of the Berserker", ],
		description: `While {c_white}Wrath of the Berserker{/c} is active, every {c_yellow}{SF_5}{/c} Fury you spend increases {c_white}Berserk's{/c} damage bonus by {c_yellow}x[{SF_6}*100]%{/c}`,
		maxPoints: 3,
		x: 623.3914100000001,
		y: 426.1399999999999,
	},
	["Tempered Fury"]: {
		connections: [ "Ultimate", ],
		description: `Increase your Maximum Fury by {c_yellow}{SF_0}{/c}.`,
		maxPoints: 3,
		x: -490.70259,
		y: 263.36,
	},
	["Invigorating Fury"]: {
		connections: [ "Tempered Fury", ],
		description: `Heals you for {c_yellow}[{SF_0}*100]%{/c} of your Maximum Life for each {c_yellow}{SF_1}{/c} Fury spent.`,
		maxPoints: 3,
		x: -560.26859,
		y: 457.2049999999999,
	},
	["Furious Impulse"]: {
		connections: [ "Tempered Fury", ],
		description: `Each time you swap weapons, gain {c_yellow}{SF_0}{/c} Fury.`,
		maxPoints: 3,
		x: -869.83359,
		y: 330.92999999999995,
	},
	["Wallop"]: {
		connections: [ "Ultimate", ],
		description: `Your Skills using Bludgeoning weapons deal {c_yellow}x[{SF_0}*100]%{/c} increased damage if the enemy is Stunned or {c_white}Vulnerable{/c}.`,
		maxPoints: 3,
		x: 517.5064100000001,
		y: -164.6415,
	},
	["Brute Force"]: {
		connections: [ "Wallop", ],
		description: `Your {c_white}Overpower{/c} deals {c_yellow}x[{SF_0}*100]%{/c} increased damage when using a Two-Handed weapon`,
		maxPoints: 3,
		x: 960.61141,
		y: -108.57100000000003,
	},
	["Heavy Handed"]: {
		connections: [ "Brute Force", ],
		description: `While using Two-Handed weapons you deal {c_yellow}x[{SF_0}*100]%{/c} increased Critical Strike Damage.`,
		maxPoints: 3,
		x: 638.81641,
		y: 39.15499999999997,
	},
	["Concussion"]: {
		connections: [ "Wallop", ],
		description: `{c_gold}Lucky Hit:{/c} Skills using Bludgeoning weapons have up to a {c_yellow}{SF_0}%{/c} chance to Stun enemies for {c_yellow}{buffduration:STUN}{/c} seconds, or up to a {c_yellow}{SF_1}%{/c} chance when using a Two-Handed Bludgeoning weapon.`,
		maxPoints: 3,
		x: 821.7714100000001,
		y: -332.79400000000004,
	},
};

barbarian["Capstone"] = {
	["Unconstrained"]: {
		connections: [ "Capstone", ],
		description: `Increase {c_white}Berserk's{/c} maximum duration by {c_yellow}{SF_1}{/c} seconds and increase its damage bonus by {c_yellow}x[{SF_0}*100]%{/c}.`,
		maxPoints: 1,
		x: -562.65453,
		y: 314.66999999999985,
	},
	["Gushing Wounds"]: {
		connections: [ "Capstone", ],
		description: `Killing a Bleeding enemy creates an explosion that inflicts {c_yellow}{dot:BLEEDING}{/c} Bleeding damage over {c_yellow}{SF_3}{/c} seconds.`,
		maxPoints: 1,
		x: 559.85047,
		y: 314.9849999999999,
	},
	["Unbridled Rage"]: {
		connections: [ "Capstone", ],
		description: `{c_white}Core{/c} Skills deal {c_yellow}x[{SF_1}*100]%{/c} increased damage, but cost {c_yellow}x[{SF_0}*-1*100]%{/c} more.`,
		maxPoints: 1,
		x: 186.22847000000002,
		y: 314.52,
	},
	["Walking Arsenal"]: {
		connections: [ "Capstone", ],
		description: `Dealing direct damage with a Two-Handed Bludgeoning, Two-Handed Slashing, or Dual Wielded weapons grants {c_yellow}x[{SF_0}*100]%{/c} increased damage for {c_yellow}{buffduration:BUFF_BLUNT_DAMAGE}{/c} seconds.

While all three damage bonuses are active, you gain an additional {c_yellow}x[{SF_7}*100]%{/c} increased damage.`,
		maxPoints: 1,
		x: -188.06852999999998,
		y: 312.95000000000005,
	},
};

export { barbarian };