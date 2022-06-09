/* eslint-disable consistent-return */
/* eslint-disable no-console */
import Errors from '../../../globals/Errors';

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
    // Validate that the defaultLeaseTime is smaller than the maxLeaseTime
    if (this.defaultLeaseTime <= this.maxLeaseTime) {
      return Errors.leaseTimeSmallerMaxLeaseTime;
    }

    // Validate if there is a minimum of one defined DNS Server
    if (this.dnsServers.length === 0 || this.dnsServers === undefined) {
      return Errors.minimumOfOneDNSServer;
    }

    // Validate DNS Servers
    this.dnsServers.forEach((dnsServer) => {
      const value = dnsServer.validate();

      if (value !== true) {
        return value;
      }
    });

    this.routers.forEach((router) => {
      const value = router.validate();

      if (value !== true) {
        return value;
      }
    });

    return true;
  }

  // TODO: Implement this
  readConfig(configString) {
    console.warn.log('readConfig not implemented.', configString, this.internalDomain);
    return undefined;
  }

  // TODO: Implement this
  saveConfig() {
    console.warn('saveConfig not implemented.', this.internalDomain);
    return undefined;
  }
}

export default DHCPDConfig;
