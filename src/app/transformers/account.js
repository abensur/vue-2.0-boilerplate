/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account
 */

import Transformer from './transformer';

export default class AccountTransformer extends Transformer {
  /**
   * Method used to transform a fetched account
   *
   * @param account The fetched account
   *
   * @returns {Object} The transformed account
   */
  static fetch(account) {
    return {
      email: account.email,
      firstName: account.first_name,
      lastName: account.last_name,
    };
  }

  /**
   * Method used to transform a send account
   *
   * @param account The account to be send
   *
   * @returns {Object} The transformed account
   */
  static send(account) {
    return {
      email: account.email,
      first_name: account.firstName,
      last_name: account.lastName,
    };
  }
}


// export const UsersResource = Vue.resource(API_ROOT + 'company{/id}', {}, {
//     users: {method: 'GET', url: API_ROOT + 'company{/id}/users'},
//     downloadReport: {method: 'GET', url: API_ROOT + 'company{/id}/report/utilization'},
//     unableUser: {method: 'POST', url: API_ROOT + 'company/{id}/user/{userId}/block'},
//     inviteUser: {method: 'POST', url: API_ROOT + 'company/{id}/user/invite'},
// })
// export const PartnersResource = Vue.resource(API_ROOT + 'company{/id}', {}, {
//     partners: {method: 'GET', url: API_ROOT + 'company{/id}/partner'},
//     partnersExclusive: {method: 'GET', url: API_ROOT + 'company{/id}/partner'},
// })

// export const ReportsResource = Vue.resource(API_ROOT + 'company{/id}', {}, {
//     exclusivePartners: {method: 'GET', url: API_ROOT + 'company{/id}/report/exclusive-partner'},
//     campaigns: {method: 'GET', url: API_ROOT + 'company{/id}/report/campaign'},
//     users: {method: 'GET', url: API_ROOT + 'company{/id}/report/user'},
//     utilization: {method: 'GET', url: API_ROOT + 'company{/id}/report/utilization'},
// })

// export const OrdersResource = Vue.resource(API_ROOT + 'company{/id}', {}, {
//     history: {method: 'GET', url: API_ROOT + '
// company{/id}/campaign/40258af0-94c4-11e6-acf4-372596db8fqs/history'},
//     partnersExclusive: {method: 'GET', url: API_ROOT + 'company{/id}/partner'},
// })
