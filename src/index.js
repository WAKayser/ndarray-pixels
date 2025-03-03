import { getPixelsInternal } from './browser-get-pixels.js';
import { savePixelsInternal } from './browser-save-pixels.js';

/**
 * Decodes image data to an `ndarray`.
 *
 * MIME type is optional when given a path or URL, and required when given a Uint8Array.
 *
 * Accepts `image/png` or `image/jpeg` in Node.js, and additional formats on browsers with
 * the necessary support in Canvas 2D.
 *
 * @param data
 * @param mimeType `image/jpeg`, `image/png`, etc.
 * @returns
 */
async function getPixels(data, mimeType) {
	return getPixelsInternal(data, mimeType);
}

/**
 * Encodes an `ndarray` as image data in the given format.
 *
 * If the source `ndarray` was constructed manually with default stride, use
 * `ndarray.transpose(1, 0)` to reshape it and ensure an identical result from getPixels(). For an
 * ndarray created by getPixels(), this isn't necessary.
 *
 * Accepts `image/png` or `image/jpeg` in Node.js, and additional formats on browsers with
 * the necessary support in Canvas 2D.
 *
 * @param pixels ndarray of shape W x H x 4.
 * @param mimeType `image/jpeg`, `image/png`, etc.
 * @returns
 */
async function savePixels(pixels, mimeType ) {
	return savePixelsInternal(pixels, mimeType);
}

export { getPixels, savePixels };
