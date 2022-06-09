import Errors from '../../globals/Errors';

class SubnetMask {
  constructor(cidr) {
    this.cidr = cidr;
  }

  get netmask() {
    // eslint-disable-next-line prefer-const
    let mask = [];
    let bitCount = this.cidr;
    for (let i = 0; i < 4; i += 1) {
      const n = Math.min(bitCount, 8);
      mask.push(256 - 2 ** (8 - n));
      bitCount -= n;
    }
    return mask.join('.');
  }

  validate() {
    if (!(this.cidr >= 1 && this.cidr <= 32)) {
      return Errors.subnetNotInRange;
    }

    return true;
  }
}

export default SubnetMask;
