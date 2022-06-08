import Errors from "../../globals/Errors";
import RegexDB from "../../globals/RegexDB";

class IPRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  validate() {
    if(!RegexDB.ipAddress.test(from)) {
      return Errors.invalidIPAddress; 
    }

    if(!RegexDB.ipAddress.test(to)) {
      return Errors.invalidIPAddress;
    }

    return true;
  }
}

export default IPRange;
