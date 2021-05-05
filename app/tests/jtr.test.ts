/**
 * Jest Tests
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import jtr from "@app/functions/jtr";

test("show hello world", async () => {
	const { json } = await jtr({ text: "hello-world" });
	expect(json()).toBe("hello-world");
});
