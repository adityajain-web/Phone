const rewire = require("rewire")
const products = rewire("./products")
const getProducts = products.__get__("getProducts")
// @ponicode
describe("getProducts", () => {
    test("0", async () => {
        let result = await getProducts()
        expect(result).toBe(undefined)
    })
})
