var knight = {hp:1350, dmg:132};
var wizard = {hp:598, dmg:167};
var time = 0;

console.log("Begin attack");

while (knight.hp > 0 && wizard.hp > 0) {
  console.log(knight.hp = knight.hp - wizard.dmg, "Knight HP");
  console.log(wizard.hp = wizard.hp - knight.dmg, "Wizard HP");
  console.log(time++, "seconds" );
}
