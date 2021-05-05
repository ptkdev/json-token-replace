/**
 * JSON Token Replace
 * =====================
 *
 * Transform your json with liquid variables from another json
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import njk from "@app/functions/nunjucks";
import type { JtrInterface, JtrResponseInterface } from "@app/types/jtr.type";

/**
 * JSON Token Replace
 * =====================
 *
 * Transform your json with liquid variables from another json
 *
 * @param {string} {text} - input string
 *
 * @return {Promise<ModuleResponseInterface>} (async) app() function that return string
 *
 * @example
 * 1. In your node project run: `npm install @ptkdev/json-token-replace@latest --save`
 * 2. Usage (async):
 *
 * ```typescript
 * import jtr from "@ptkdev/json-token-replace";
 *
 * (async () => {
 * 	 const { json } = await jtr({ json: require("./input.json"), tokens: require("./tokens.json") });
 *
 *	 console.log(json());
 * })();
 *
 * ```
 *
 */
export const jtr = async ({ json, tokens }: JtrInterface): Promise<JtrResponseInterface> => {
	try {
		json = JSON.parse(njk.nunjucks.renderString(json, tokens));
	} catch (error) {
		return { json, error };
	}

	return {
		json
	};
};

export default jtr;
