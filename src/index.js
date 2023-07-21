export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  if (type === 'Bowman' || type === 'Undead') {
    this.attack = 25;
    this.defense = 25;
  } else if (type === 'Swordsman' || type === 'Zombie') {
    this.attack = 40;
    this.defense = 10;
  } else if (type === 'Magician' || type === 'Daemon') {
    this.attack = 10;
    this.defense = 40;
  } else {
    this.attack = 1;
    this.defense = 1;
  }
  return undefined;
}

Character.prototype.damage = function (points) {
  this.health -= points * (1 - this.defense / 100);
};
