import Errors from "../../../globals/Errors";

class DHCPDConfig {
  constructor() {
    this.internalDomain = '';
    this.maxLeaseTime = 0;
    this.defaultLeaseTime = 0;
    this.dnsServers = [];
    this.routers = [];
    this.subnets = [];
    this.hosts = [];
    this.groups = [];
    this.pools = [];
  }

  validate() {
    if (this.defaultLeaseTime <= this.maxLeaseTime) {
      return Errors.leaseTimeSmallerMaxLeaseTime;
    }

    if (this.dnsServers.length === 0 || this.dnsServers === undefined) {
      return Errors.minimumOfOneDNSServer;
    }
    
    this.dnsServers.forEach(dnsServer => {
      let value = dnsServer.validate();   
      if(value != true) {
        return value;
      }
    });

    return true;
  }
}

export default DHCPDConfig;
