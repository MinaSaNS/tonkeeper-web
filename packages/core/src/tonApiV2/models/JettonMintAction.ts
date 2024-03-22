/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import type { JettonPreview } from './JettonPreview';
import {
    JettonPreviewFromJSON,
    JettonPreviewFromJSONTyped,
    JettonPreviewToJSON,
} from './JettonPreview';

/**
 * 
 * @export
 * @interface JettonMintAction
 */
export interface JettonMintAction {
    /**
     * 
     * @type {AccountAddress}
     * @memberof JettonMintAction
     */
    recipient: AccountAddress;
    /**
     * 
     * @type {string}
     * @memberof JettonMintAction
     */
    recipientsWallet: string;
    /**
     * amount in quanta of tokens
     * @type {string}
     * @memberof JettonMintAction
     */
    amount: string;
    /**
     * 
     * @type {JettonPreview}
     * @memberof JettonMintAction
     */
    jetton: JettonPreview;
}

/**
 * Check if a given object implements the JettonMintAction interface.
 */
export function instanceOfJettonMintAction(value: object): boolean {
    if (!('recipient' in value)) return false;
    if (!('recipientsWallet' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('jetton' in value)) return false;
    return true;
}

export function JettonMintActionFromJSON(json: any): JettonMintAction {
    return JettonMintActionFromJSONTyped(json, false);
}

export function JettonMintActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonMintAction {
    if (json == null) {
        return json;
    }
    return {
        
        'recipient': AccountAddressFromJSON(json['recipient']),
        'recipientsWallet': json['recipients_wallet'],
        'amount': json['amount'],
        'jetton': JettonPreviewFromJSON(json['jetton']),
    };
}

export function JettonMintActionToJSON(value?: JettonMintAction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'recipient': AccountAddressToJSON(value['recipient']),
        'recipients_wallet': value['recipientsWallet'],
        'amount': value['amount'],
        'jetton': JettonPreviewToJSON(value['jetton']),
    };
}

