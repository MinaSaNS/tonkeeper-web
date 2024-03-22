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
 * The reward in nanoTons for block creation in the TON blockchain.
 * @export
 * @interface BlockchainConfig15
 */
export interface BlockchainConfig15 {
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig15
     */
    validatorsElectedFor: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig15
     */
    electionsStartBefore: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig15
     */
    electionsEndBefore: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig15
     */
    stakeHeldFor: number;
}

/**
 * Check if a given object implements the BlockchainConfig15 interface.
 */
export function instanceOfBlockchainConfig15(value: object): boolean {
    if (!('validatorsElectedFor' in value)) return false;
    if (!('electionsStartBefore' in value)) return false;
    if (!('electionsEndBefore' in value)) return false;
    if (!('stakeHeldFor' in value)) return false;
    return true;
}

export function BlockchainConfig15FromJSON(json: any): BlockchainConfig15 {
    return BlockchainConfig15FromJSONTyped(json, false);
}

export function BlockchainConfig15FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig15 {
    if (json == null) {
        return json;
    }
    return {
        
        'validatorsElectedFor': json['validators_elected_for'],
        'electionsStartBefore': json['elections_start_before'],
        'electionsEndBefore': json['elections_end_before'],
        'stakeHeldFor': json['stake_held_for'],
    };
}

export function BlockchainConfig15ToJSON(value?: BlockchainConfig15 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'validators_elected_for': value['validatorsElectedFor'],
        'elections_start_before': value['electionsStartBefore'],
        'elections_end_before': value['electionsEndBefore'],
        'stake_held_for': value['stakeHeldFor'],
    };
}

