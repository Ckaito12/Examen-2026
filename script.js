const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

const enemyDefense = 50;
const spellCost = 30;
const isStunned = false;

function calculateDamage(attack, defense) {
  const damage = attack - defense;

  if (damage < 0) {
    return 0;
  }

  return damage;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) =>
  currentMana >= spellCost && !isStunned;

function getPresentation(name, characterClass, level) {
  return `${name} - ${characterClass} (Nivel ${level})`;
}

console.log("calculateDamage:", calculateDamage(attack, enemyDefense));
console.log("isAlive:", isAlive(health));
console.log("canCastSpell:", canCastSpell(mana, spellCost, isStunned));
console.log("getPresentation:", getPresentation(name, characterClass, level));