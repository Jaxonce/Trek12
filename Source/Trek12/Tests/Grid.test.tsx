//const ClassicTemplate = require("../Model/ClassicTemplate");
//const Grid = require("../Model/Grid");

import CalculatorClassic from "../Model/CalculatorClassic";
import ClassicTemplate from "../Model/ClassicTemplate";
import Grid from "../Model/Grid";

const classicTemplate = new ClassicTemplate()
const testGrid = new Grid(classicTemplate, new CalculatorClassic(classicTemplate))

describe("CalculAndFindScoreZone",() => {
    test("should return -1 because of dubloon ID", () => {
        const result = testGrid.getCalculatorScore().CalculAndFindScoreZone([1,2,5,7,3,1], testGrid)
        expect(result).toBe(-1)
    })
})