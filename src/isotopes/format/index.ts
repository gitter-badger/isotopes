/*
 * Copyright (c) 2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { flatten, unflatten } from "flat"
import { Dictionary, mapValues } from "lodash"

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

/**
 * Isotope dictionary
 */
export type IsotopeDictionary = Dictionary<string>

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Flatten data into a dictionary
 *
 * @template T - Data type
 *
 * @param data - Data to encode
 *
 * @return Encoded dictionary
 */
export function encode<T extends {}>(data: T): IsotopeDictionary {
  const dict = flatten(data, { safe: true })
  return mapValues(dict, JSON.stringify)
}

/**
 * Unflatten an encoded dictionary
 *
 * @template T - Data type
 *
 * @param dict - Dictionary to decode
 *
 * @return Decoded data
 */
export function decode<T extends {}>(dict: IsotopeDictionary): T {
  const data = mapValues(dict, JSON.parse)
  return unflatten(data)
}
