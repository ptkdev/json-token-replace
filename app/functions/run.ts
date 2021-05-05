/**
 * Run
 * =====================
 *
 * Start module
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import jtr from "@app/functions/jtr";

(async () => {
	const { json } = await jtr({ text: "hello-world" });

	console.log(json());
})();
