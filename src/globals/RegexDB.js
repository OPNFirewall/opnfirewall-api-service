/**
 * @class RegexDB
 * This is just a wrapper class for several static regex tests used often.
 */
class RegexDB {}

/**
 * Regex to see if the given string is a valid IP adress
 */
RegexDB.ipAddress = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * Regex to see if the given string is a valid RFC952 hostname
 */
RegexDB.hostnameRFC952 = /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/;

export default RegexDB;