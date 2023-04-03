//const ClassicTemplate = require("../Model/ClassicTemplate");
//const Grid = require("../Model/Grid");

import CalculatorClassic from "../Model/CalculatorClassic";
import ClassicTemplate from "../Model/ClassicTemplate";
import Grid from "../Model/Grid";

const classicTemplate = new ClassicTemplate()
const testGrid = new Grid(classicTemplate, new CalculatorClassic(classicTemplate))

testGrid.addCell(1,5)
testGrid.addCell(2,5)
testGrid.addCell(3,5)
testGrid.addCell(4,5)
testGrid.addCell(5,5)
testGrid.addCell(6,5)
testGrid.addCell(7,5)
testGrid.addCell(8,5)
testGrid.addCell(9,5)
testGrid.addCell(10,10)
testGrid.addCell(11,5)
testGrid.addCell(12,5)
testGrid.addCell(13,5)
testGrid.addCell(14,5)
testGrid.addCell(15,5)
testGrid.addCell(16,5)
testGrid.addCell(17,5)
testGrid.addCell(18,5)
testGrid.addCell(19,5)

describe("CalculAndFindScoreZone",() => {
    test("should return -1 because of dubloon ID", () => {
        const result = testGrid.getCalculatorScore().CalculAndFindScoreZone([1,2,5,7,3,1], testGrid)
        expect(result).toBe(-1)
    })

    test("should return -1 because of non adjacent cell", () => {
        const result = testGrid.getCalculatorScore().CalculAndFindScoreZone([1,2,5,7,3], testGrid)
        expect(result).toBe(-1)
    })

    // test("should return -1 because of non identical value", () => {
    //     const result = testGrid.getCalculatorScore().CalculAndFindScoreZone([1,2,3,7,4,10], testGrid)
    //     expect(result).toBe(-1)
    // })

    // test("should return 9 because of valid Grid", () => {
    //     const result = testGrid.getCalculatorScore().CalculAndFindScoreZone([1,3,2,7,4], testGrid)
    //     expect(result).toBe(9)
    // })
})