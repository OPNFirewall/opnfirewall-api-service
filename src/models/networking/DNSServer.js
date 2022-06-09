import Errors from '../../globals/Errors';
import RegexDB from '../../globals/RegexDB';

class DNSServer {
  constructor() {
    this.host = '';
    this.description = '';
  }

  validate() {
    if (!RegexDB.ipAddress.test(this.host)) {
      return Errors.invalidIPAddress;
    } if (RegexDB.hostnameRFC952.test(this.host)) {
      return Errors.invalidHostname;
    }

    return true;
  }
}

export default DNSServer;
