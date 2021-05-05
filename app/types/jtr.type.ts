/**
 * JSON Token Replace (Interface)
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

/**
 * JtrInterface
 * =====================
 *
 */
export interface JtrInterface {
	/**
	 * Input json
	 * =====================
	 *
	 * @param {Object} json - your json file with liquid variables
	 *
	 */
	json: JSON
	/**
	 * Tokens json
	 * =====================
	 *
	 * @param {Object} tokens - json with tokens, key/values (liquid variables)
	 *
	 */
	tokens: JSON
}

/**
 * ModuleResponseInterface
 * =====================
 *
 */
export interface JtrResponseInterface {
	/**
	 * Merged json
	 * =====================
	 * Input JSON with liquid variables replaced with tokens from second json
	 *
	 */
	json: JSON
	/**
	 * Error
	 * =====================
	 * Get error description from catch(err)
	 *
	 */
	error?: string
}
