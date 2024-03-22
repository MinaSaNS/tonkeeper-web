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
 * The configuration for the Catchain protocol.
 * @export
 * @interface BlockchainConfig28
 */
export interface BlockchainConfig28 {
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig28
     */
    mcCatchainLifetime: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig28
     */
    shardCatchainLifetime: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig28
     */
    shardValidatorsLifetime: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig28
     */
    shardValidatorsNum: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig28
     */
    flags?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BlockchainConfig28
     */
    shuffleMcValidators?: boolean;
}

/**
 * Check if a given object implements the BlockchainConfig28 interface.
 */
export function instanceOfBlockchainConfig28(value: object): boolean {
    if (!('mcCatchainLifetime' in value)) return false;
    if (!('shardCatchainLifetime' in value)) return false;
    if (!('shardValidatorsLifetime' in value)) return false;
    if (!('shardValidatorsNum' in value)) return false;
    return true;
}

export function BlockchainConfig28FromJSON(json: any): BlockchainConfig28 {
    return BlockchainConfig28FromJSONTyped(json, false);
}

export function BlockchainConfig28FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig28 {
    if (json == null) {
        return json;
    }
    return {
        
        'mcCatchainLifetime': json['mc_catchain_lifetime'],
        'shardCatchainLifetime': json['shard_catchain_lifetime'],
        'shardValidatorsLifetime': json['shard_validators_lifetime'],
        'shardValidatorsNum': json['shard_validators_num'],
        'flags': json['flags'] == null ? undefined : json['flags'],
        'shuffleMcValidators': json['shuffle_mc_validators'] == null ? undefined : json['shuffle_mc_validators'],
    };
}

export function BlockchainConfig28ToJSON(value?: BlockchainConfig28 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'mc_catchain_lifetime': value['mcCatchainLifetime'],
        'shard_catchain_lifetime': value['shardCatchainLifetime'],
        'shard_validators_lifetime': value['shardValidatorsLifetime'],
        'shard_validators_num': value['shardValidatorsNum'],
        'flags': value['flags'],
        'shuffle_mc_validators': value['shuffleMcValidators'],
    };
}

