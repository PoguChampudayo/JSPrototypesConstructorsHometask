import Character from '../src/index';

const characterCreationInput = [
  ['Bowman', 25, 25],
  ['Swordsman', 40, 10],
  ['Magician', 10, 40],
  ['Undead', 25, 25],
  ['Zombie', 40, 10],
  ['Daemon', 10, 40],
  ['some type', 1, 1],
];

const damageInput = [
  [40, 'Bowman'],
  [35, 'Swordsman'],
  [50, 'Magician'],
  [60, 'Undead'],
  [75, 'Zombie'],
  [90, 'Daemon'],
  [100, 'some type'],
];

test.each(characterCreationInput)(
  ('character with type %s has %i attack rate and %i defense rate'),
  (type, attack, defense) => {
    const character = new Character('randomname', type);
    const testAttack = character.attack;
    const testDefense = character.defense;

    expect(testAttack).toBe(attack);
    expect(testDefense).toBe(defense);
  },
);

test.each(damageInput)(
  ('character took %i damage'),
  (points, type) => {
    const character = new Character('randomname', type);
    const initialHealth = character.health;
    character.damage(points);
    const finalHealth = character.health;

    expect(initialHealth - finalHealth).toBe(points * (1 - character.defense / 100));
  },
);
