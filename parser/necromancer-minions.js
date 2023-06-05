let necromancerMinions = {
	"Skeletal Warriors": {
		"Skeletal Skirmishers": {
			"Description": `Sword-wielding damage dealers that deal 30% increased damage but have 15% reduced Life.`,
			"Sacrifice": `Your Critical Strike Chance is increased by +5%, but you can no longer raise Skeletal Warriors.`,
			"Upgrades": [
				`You can raise one additional Skirmisher Warrior.`,
				`Each time you Critically Strike, your Skirmishers Warriors' next attack Critically Strikes and deals x50% bonus Critical Strike damage. Can only happen every 3 seconds.`
			]
		},
		"Skeletal Defenders": {
			"Description": `Durable shield-bearers with 15% increased Life.`,
			"Sacrifice": `You gain 15% Non-Physical Resistance, but you can no longer raise Skeletal Warriors.`,
			"Upgrades": [
				`Every 6 seconds your Skeletal Defenders negate the next instance of Direct Damage they would take.`,
				`Increase the amount of Thorns that Defender Warriors inherit from you from 30% to 40%.`
			]
		},
		"Skeletal Reapers": {
			"Description": `Deals area damage with a slow and powerful scythe, and has a special wind-up attack, dealing heavy damage every 10 seconds.`,
			"Sacrifice": `You deal x15% increased Shadow Damage, but you can no longer raise Skeletal Warriors.`,
			"Upgrades": [
				`Reaper attacks against enemies who are Immobilized, Slowed, Stunned, or Vulnerable reduce the cooldown of their powerful wind-up attack by 2 seconds.`,
				`Reapers have a 15% chance to carve the flesh off enemies, forming a Corpse.`
			]
		}
	},
	"Skeletal Mages": {
		"Shadow Mages": {
			"Description": `Deals moderate Shadow Damage.`,
			"Sacrifice": `Your maximum Essence is increased by 15, but you can no longer raise Skeletal Mages.`,
			"Upgrades": [
				`Shadow Mage attacks have a 10% chance to Stun for 2 seconds. This cannot happen on the same enemy more than once every 5 seconds.`,
				`Shadow Mages fire an additional shadow bolt every 5th attack.`
			]
		},
		"Cold Mages": {
			"Description": `Chills and Freezes enemies.`,
			"Sacrifice": `You deal x15% increased damage to Vulnerable enemies, but you can no longer raise Skeletal Mages.`,
			"Upgrades": [
				`Each time your Cold Mages damage enemies with their primary attack, you gain 2 Essence.`,
				`Enemies who are Frozen by or damaged while Frozen by your Cold Mages' primary attack are made Vulnerable for 4 seconds.`
			]
		},
		"Bone Mages": {
			"Description": `Uses its own bones as projectiles, dealing heavy damage for a Life cost.`,
			"Sacrifice": `Your Overpower damage is increased by x40%, but you can no longer raise Skeletal Mages.`,
			"Upgrades": [
				`Reduce the Life cost of your Bone Mages' attacks from 15% to 10%. After being alive for 5 seconds, Bone Mages deal x40% increased damage.`,
				`Each time a Bone Mage dies from its own attack, they leave behind a Corpse and Fortify you for 11% of your Base Life.`
			]
		}
	},
	"Golem": {
		"Bone Golem": {
			"Description": `Active: Your Golem becomes Unstoppable and Taunts Nearby enemies and takes 30% reduced damage for the next 6 seconds. This has a 16 second cooldown.`,
			"Sacrifice": `You gain +10% increased Attack Speed, but you lose the ability to summon a Golem.`,
			"Upgrades": [
				`Each time your Bone Golem takes up to 20% of its Maximum Life as damage, it sheds a Corpse.`,
				`Your Bone Golem gains 10% Maximum Life and the amount of Thorns they inherit from you is increased from 30% to 50%.`
			]
		},
		"Blood Golem": {
			"Description": `Active: Your Golem becomes Unstoppable and drains the blood of enemies in the area, dealing 90% damage and healing 5% of its Life for each enemy drained. Damage and healing received are tripled if only one enemy is drained. This has a 10 second cooldown.`,
			"Sacrifice": `Your Maximum Life is increased by x10%, but you lose the ability to summon a Golem.`,
			"Upgrades": [
				`Your Blood Golem absorbs 15% of damage you would take.`,
				`While Healthy, your Blood Golem gains 25% Damage Reduction and x50% increased damage.`
			]
		},
		"Iron Golem": {
			"Description": `Active: Command your Golem to go to the targeted area, they become Unstoppable and slam their fists into the ground, dealing 175% damage and Stunning surrounding enemies for 3 seconds. This has a 16 second cooldown.`,
			"Sacrifice": `You deal x30% increased Critical Strike Damage, but you lose the ability to summon a Golem.`,
			"Upgrades": [
				`Every 5th Iron Golem attack causes a shockwave, dealing 40% damage to the primary enemy and to enemies behind them.`,
				`Your Iron Golem's slam attack also makes enemies Vulnerable for 3 seconds.`
			]
		}
	},
};

export { necromancerMinions };