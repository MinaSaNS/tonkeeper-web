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
import type { GetRawBlockProof200ResponseStepsInner } from './GetRawBlockProof200ResponseStepsInner';
import {
    GetRawBlockProof200ResponseStepsInnerFromJSON,
    GetRawBlockProof200ResponseStepsInnerFromJSONTyped,
    GetRawBlockProof200ResponseStepsInnerToJSON,
} from './GetRawBlockProof200ResponseStepsInner';

/**
 * 
 * @export
 * @interface GetRawBlockProof200Response
 */
export interface GetRawBlockProof200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetRawBlockProof200Response
     */
    complete: boolean;
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawBlockProof200Response
     */
    from: BlockRaw;
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawBlockProof200Response
     */
    to: BlockRaw;
    /**
     * 
     * @type {Array<GetRawBlockProof200ResponseStepsInner>}
     * @memberof GetRawBlockProof200Response
     */
    steps: Array<GetRawBlockProof200ResponseStepsInner>;
}

/**
 * Check if a given object implements the GetRawBlockProof200Response interface.
 */
export function instanceOfGetRawBlockProof200Response(value: object): boolean {
    if (!('complete' in value)) return false;
    if (!('from' in value)) return false;
    if (!('to' in value)) return false;
    if (!('steps' in value)) return false;
    return true;
}

export function GetRawBlockProof200ResponseFromJSON(json: any): GetRawBlockProof200Response {
    return GetRawBlockProof200ResponseFromJSONTyped(json, false);
}

export function GetRawBlockProof200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawBlockProof200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'complete': json['complete'],
        'from': BlockRawFromJSON(json['from']),
        'to': BlockRawFromJSON(json['to']),
        'steps': ((json['steps'] as Array<any>).map(GetRawBlockProof200ResponseStepsInnerFromJSON)),
    };
}

export function GetRawBlockProof200ResponseToJSON(value?: GetRawBlockProof200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'complete': value['complete'],
        'from': BlockRawToJSON(value['from']),
        'to': BlockRawToJSON(value['to']),
        'steps': ((value['steps'] as Array<any>).map(GetRawBlockProof200ResponseStepsInnerToJSON)),
    };
}

