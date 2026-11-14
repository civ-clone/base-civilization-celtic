import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Celtic from '../Celtic';

export class Brennus extends Leader {
  static civilization(): typeof Civilization {
    return Celtic;
  }

  name(): string {
    return 'Brennus';
  }
}

export default Brennus;
