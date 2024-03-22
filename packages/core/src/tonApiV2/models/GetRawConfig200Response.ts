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
import type { BlockRaw } from './BlockRaw';
import {
    BlockRawFromJSON,
    BlockRawFromJSONTyped,
    BlockRawToJSON,
} from './BlockRaw';

/**
 * 
 * @export
 * @interface GetRawConfig200Response
 */
export interface GetRawConfig200Response {
    /**
     * 
     * @type {number}
     * @memberof GetRawConfig200Response
     */
    mode: number;
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawConfig200Response
     */
    id: BlockRaw;
    /**
     * 
     * @type {string}
     * @memberof GetRawConfig200Response
     */
    stateProof: string;
    /**
     * 
     * @type {string}
     * @memberof GetRawConfig200Response
     */
    configProof: string;
}

/**
 * Check if a given object implements the GetRawConfig200Response interface.
 */
export function instanceOfGetRawConfig200Response(value: object): boolean {
    if (!('mode' in value)) return false;
    if (!('id' in value)) return false;
    if (!('stateProof' in value)) return false;
    if (!('configProof' in value)) return false;
    return true;
}

export function GetRawConfig200ResponseFromJSON(json: any): GetRawConfig200Response {
    return GetRawConfig200ResponseFromJSONTyped(json, false);
}

export function GetRawConfig200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawConfig200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'mode': json['mode'],
        'id': BlockRawFromJSON(json['id']),
        'stateProof': json['state_proof'],
        'configProof': json['config_proof'],
    };
}

export function GetRawConfig200ResponseToJSON(value?: GetRawConfig200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'mode': value['mode'],
        'id': BlockRawToJSON(value['id']),
        'state_proof': value['stateProof'],
        'config_proof': value['configProof'],
    };
}

