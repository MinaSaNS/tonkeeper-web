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
 * @interface MsgForwardPrices
 */
export interface MsgForwardPrices {
    /**
     * 
     * @type {number}
     * @memberof MsgForwardPrices
     */
    lumpPrice: number;
    /**
     * 
     * @type {number}
     * @memberof MsgForwardPrices
     */
    bitPrice: number;
    /**
     * 
     * @type {number}
     * @memberof MsgForwardPrices
     */
    cellPrice: number;
    /**
     * 
     * @type {number}
     * @memberof MsgForwardPrices
     */
    ihrPriceFactor: number;
    /**
     * 
     * @type {number}
     * @memberof MsgForwardPrices
     */
    firstFrac: number;
    /**
     * 
     * @type {number}
     * @memberof MsgForwardPrices
     */
    nextFrac: number;
}

/**
 * Check if a given object implements the MsgForwardPrices interface.
 */
export function instanceOfMsgForwardPrices(value: object): boolean {
    if (!('lumpPrice' in value)) return false;
    if (!('bitPrice' in value)) return false;
    if (!('cellPrice' in value)) return false;
    if (!('ihrPriceFactor' in value)) return false;
    if (!('firstFrac' in value)) return false;
    if (!('nextFrac' in value)) return false;
    return true;
}

export function MsgForwardPricesFromJSON(json: any): MsgForwardPrices {
    return MsgForwardPricesFromJSONTyped(json, false);
}

export function MsgForwardPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MsgForwardPrices {
    if (json == null) {
        return json;
    }
    return {
        
        'lumpPrice': json['lump_price'],
        'bitPrice': json['bit_price'],
        'cellPrice': json['cell_price'],
        'ihrPriceFactor': json['ihr_price_factor'],
        'firstFrac': json['first_frac'],
        'nextFrac': json['next_frac'],
    };
}

export function MsgForwardPricesToJSON(value?: MsgForwardPrices | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lump_price': value['lumpPrice'],
        'bit_price': value['bitPrice'],
        'cell_price': value['cellPrice'],
        'ihr_price_factor': value['ihrPriceFactor'],
        'first_frac': value['firstFrac'],
        'next_frac': value['nextFrac'],
    };
}

