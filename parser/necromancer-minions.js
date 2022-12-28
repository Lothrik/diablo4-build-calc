let necromancerMinions = {
	"Skeletal Warriors": {
		"Skeletal Skirmishers": {
			"Description": `Sword-wielding damage dealers that deal 30% increased damage but have 15% reduced Life.`,
			"Sacrifice": `Your critical strike chance is increase by 5%, but you can no longer raise Skeletal Warriors.`,
			"Upgrades": [
				`You can raise an additional Skirmisher.`,
				`Each time you critically strike, your Skirmishers next attack critically strikes as well. Can only happen every 3 seconds.`
			]
		},
		"Skeletal Defenders": {
			"Description": `Durable shield-bearers with 15% increased Life.`,
			"Sacrifice": `You gain 15% non-physical resistance, but you can no longer raise Skeletal Warriors.`,
			"Upgrades": [
				`Every 8 seconds your Defenders negate the next instance of direct damage they would take.`,
				`Increase the amount of thorns that Defenders inherit from you from 30% to 50%.`
			]
		},
		"Skeletal Reapers": {
			"Description": `Deals area damage with a slow and powerful scythe, and has a special wind-up attack, dealing heavy damage every 10 seconds.`,
			"Sacrifice": `You deal x10% increased Shadow Damage but you can no longer raise Skeletal Warriors.`,
			"Upgrades": [
				`Reaper attacks against enemies who are Immobilized, Slowed, Stunned or Vulnerable reduce the cooldown of their powerful wind-up attack by 2 seconds.`,
				`Reapers have a 10% chance to carve the flesh off enemies, forming a corpse. This cannot happen on the same enemy more than once every 5 seconds.`
			]
		}
	},
	"Skeletal Mages": {
		"Shadow Mages": {
			"Description": `Deals moderate Shadow Damage.`,
			"Sacrifice": `Your maximum essence is increased by 15, but you can no longer raise Skeletal Mages.`,
			"Upgrades": [
				`Shadow Mage attacks have a 10% chance to Stun for 2.13 seconds. This cannot happen on the same enemy more than once every 5 seconds.`,
				`Shadow Mages fire an additional shadow bolt every 6th attack.`
			]
		},
		"Cold Mages": {
			"Description": `Chills and Freezes enemies.`,
			"Sacrifice": `You deal x15% increased damage to Vulnerable enemies, but you can no longer raise Skeletal Mages.`,
			"Upgrades": [
				`Each time your Cold Mages damage enemies with their primary attack, you gain 2 essence.`,
				`Enemies who are Frozen by or damaged while Frozen by your Cold Mages primary attack are made Vulnerable for 3 seconds.`
			]
		},
		"Bone Mages": {
			"Description": `Uses its own bones as projectiles, dealing heavy damage for a Life cost.`,
			"Sacrifice": `Your Overpower damage is increased by 30%, but you can no longer raise Skeletal Mages.`,
			"Upgrades": [
				`Reduce the life cost of your Bone Mages attacks from 15% to 10%. After being alive for 5 seconds, Bone Mages deal 40% increased damage.`,
				`Each time a Bone Mage dies from its own attack, they leave behind a corpse and Fortify you for #.`
			]
		}
	},
	"Golem": {
		"Bone Golem": {
			"Description": `Taunts enemies in a wide area.`,
			"Sacrifice": `You gain 10% increased attack speed, but you lose the ability to summon a Golem.`,
			"Upgrades": [
				`Each time your Golem takes up to 20% of its maximum Life as damage, it sheds a corpse.`,
				`Your Golem gains 10% maximum Life and the amount of thorns they inherit from you is increased from 30% to 50%.`
			]
		},
		"Blood Golem": {
			"Description": `Drains Life from nearby enemies.`,
			"Sacrifice": `Your maximum Life is increased by 10%, but you lose the ability to summon a Golem.`,
			"Upgrades": [
				`Your Golem absorbs 15% of the damage you would take.`,
				`While healthy, your Golem gains 25% damage reduction and x25% increased damage.`
			]
		},
		"Iron Golem": {
			"Description": `Slams the ground and Stuns enemies.`,
			"Sacrifice": `You deal x30% increased critical strike damage, but you lose the ability to summon a Golem.`,
			"Upgrades": [
				`Every 5th Golem attack causes a shockwave, dealing 16% damage to the primary enemy and to enemies behind them.`,
				`Your Golem slam attack also makes enemies Vulnerable for 3 seconds.`
			]
		}
	},
};

export { necromancerMinions };