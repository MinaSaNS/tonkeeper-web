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
/**
 * 
 * @export
 * @interface TonConnectProofRequestProofDomain
 */
export interface TonConnectProofRequestProofDomain {
    /**
     * 
     * @type {number}
     * @memberof TonConnectProofRequestProofDomain
     */
    lengthBytes?: number;
    /**
     * 
     * @type {string}
     * @memberof TonConnectProofRequestProofDomain
     */
    value: string;
}

/**
 * Check if a given object implements the TonConnectProofRequestProofDomain interface.
 */
export function instanceOfTonConnectProofRequestProofDomain(value: object): boolean {
    if (!('value' in value)) return false;
    return true;
}

export function TonConnectProofRequestProofDomainFromJSON(json: any): TonConnectProofRequestProofDomain {
    return TonConnectProofRequestProofDomainFromJSONTyped(json, false);
}

export function TonConnectProofRequestProofDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonConnectProofRequestProofDomain {
    if (json == null) {
        return json;
    }
    return {
        
        'lengthBytes': json['length_bytes'] == null ? undefined : json['length_bytes'],
        'value': json['value'],
    };
}

export function TonConnectProofRequestProofDomainToJSON(value?: TonConnectProofRequestProofDomain | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'length_bytes': value['lengthBytes'],
        'value': value['value'],
    };
}

