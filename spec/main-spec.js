const main = require('../main/main');

describe('taxi fee', function () {
    it("1.2km", function () {
        expect(main(1.2)).toBe(6);
    });
    it("1.5km, wait 12 minutes", function () {
        expect(main(1.5, 12)).toBe(Math.round(6 + 12 * 0.25));
    });
    it("3.7km", function () {
        expect(main(3.7)).toBe(Math.round(6 + (3.7-2) * 0.8));
    });
    it("4.6km, wait 34 minutes", function () {
        expect(main(4.6, 34)).toBe(Math.round(6 + (4.6-2) * 0.8 + 34 * 0.25));
    });
    it("10.1km", function () {
        expect(main(10.1)).toBe(Math.round(6 + (10.1-2) * 0.8 + (10.1-8) * (0.8 / 2)));
    });
    it("12.9km, wait 23 minutes", function () {
        expect(main(12.9, 23)).toBe(Math.round(6 + (12.9-2) * 0.8 + (12.9-8) * (0.8 / 2) + 23 * 0.25));
    });
});
