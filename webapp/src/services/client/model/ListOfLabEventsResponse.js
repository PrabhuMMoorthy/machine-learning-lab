/**
 * ML Lab Service
 * Functionality to create and manage Lab projects, services, datasets, models, and experiments.
 *
 * OpenAPI spec version: 0.2.0-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LabEvent from './LabEvent';
import UnifiedErrorMessage from './UnifiedErrorMessage';
import ValueListFormatMetadata from './ValueListFormatMetadata';

/**
 * The ListOfLabEventsResponse model module.
 * @module model/ListOfLabEventsResponse
 * @version 0.2.0-SNAPSHOT
 */
export default class ListOfLabEventsResponse {
  /**
   * Constructs a new <code>ListOfLabEventsResponse</code>.
   * @alias module:model/ListOfLabEventsResponse
   * @class
   */

  constructor() {}

  /**
   * Constructs a <code>ListOfLabEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOfLabEventsResponse} obj Optional instance to populate.
   * @return {module:model/ListOfLabEventsResponse} The populated <code>ListOfLabEventsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListOfLabEventsResponse();

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ValueListFormatMetadata.constructFromObject(
          data['metadata']
        );
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [LabEvent]);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = UnifiedErrorMessage.constructFromObject(data['errors']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ValueListFormatMetadata} metadata
   */
  metadata = undefined;
  /**
   * @member {Array.<module:model/LabEvent>} data
   */
  data = undefined;
  /**
   * @member {module:model/UnifiedErrorMessage} errors
   */
  errors = undefined;
}
