/**
 * @class APIError
 * @param errorcode The Error Code of the created Error
 * @param description A brief description of the presented Error
 */
class APIError {
  constructor(errorcode, description) {
    this.errorcode = errorcode;
    this.description = description;
  }
}

export default APIError;
