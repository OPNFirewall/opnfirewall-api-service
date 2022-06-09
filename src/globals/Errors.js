import APIError from '../models/general/APIError';

class Errors {}

// Networking
Errors.subnetNotInRange = new APIError(1, "Error 001: The Subnetmask isn't in the correct range from 1 to 32.");

// DHCP
Errors.leaseTimeSmallerMaxLeaseTime = new APIError(101, 'Max default lease time must be smaller than the maximal lease time.');
Errors.minimumOfOneDNSServer = new APIError(102, 'There needs to be a minimum of one defined DNS Server.');

// DNS
Errors.invalidIPAddress = new APIError(201, 'Please supply a valid IP Address.');
Errors.invalidHostname = new APIError(202, 'Please supply a valid hostname as per');

export default Errors;
