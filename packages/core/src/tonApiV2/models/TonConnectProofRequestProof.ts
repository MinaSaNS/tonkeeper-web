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
import type { TonConnectProofRequestProofDomain } from './TonConnectProofRequestProofDomain';
import {
    TonConnectProofRequestProofDomainFromJSON,
    TonConnectProofRequestProofDomainFromJSONTyped,
    TonConnectProofRequestProofDomainToJSON,
} from './TonConnectProofRequestProofDomain';

/**
 * 
 * @export
 * @interface TonConnectProofRequestProof
 */
export interface TonConnectProofRequestProof {
    /**
     * 
     * @type {number}
     * @memberof TonConnectProofRequestProof
     */
    timestamp: number;
    /**
     * 
     * @type {TonConnectProofRequestProofDomain}
     * @memberof TonConnectProofRequestProof
     */
    domain: TonConnectProofRequestProofDomain;
    /**
     * 
     * @type {string}
     * @memberof TonConnectProofRequestProof
     */
    signature: string;
    /**
     * 
     * @type {string}
     * @memberof TonConnectProofRequestProof
     */
    payload: string;
    /**
     * 
     * @type {string}
     * @memberof TonConnectProofRequestProof
     */
    stateInit?: string;
}

/**
 * Check if a given object implements the TonConnectProofRequestProof interface.
 */
export function instanceOfTonConnectProofRequestProof(value: object): boolean {
    if (!('timestamp' in value)) return false;
    if (!('domain' in value)) return false;
    if (!('signature' in value)) return false;
    if (!('payload' in value)) return false;
    return true;
}

export function TonConnectProofRequestProofFromJSON(json: any): TonConnectProofRequestProof {
    return TonConnectProofRequestProofFromJSONTyped(json, false);
}

export function TonConnectProofRequestProofFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonConnectProofRequestProof {
    if (json == null) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'],
        'domain': TonConnectProofRequestProofDomainFromJSON(json['domain']),
        'signature': json['signature'],
        'payload': json['payload'],
        'stateInit': json['state_init'] == null ? undefined : json['state_init'],
    };
}

export function TonConnectProofRequestProofToJSON(value?: TonConnectProofRequestProof | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'timestamp': value['timestamp'],
        'domain': TonConnectProofRequestProofDomainToJSON(value['domain']),
        'signature': value['signature'],
        'payload': value['payload'],
        'state_init': value['stateInit'],
    };
}

