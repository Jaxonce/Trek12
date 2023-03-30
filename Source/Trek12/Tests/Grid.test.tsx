//const ClassicTemplate = require("../Model/ClassicTemplate");
//const Grid = require("../Model/Grid");

import ClassicTemplate from "../Model/ClassicTemplate";
import Grid from "../Model/Grid";

const testGrid = new Grid(new ClassicTemplate)

describe("CalculAndFindScoreZone",() => {
    test("should return -1 because of dubloon ID", () => {
        const result = testGrid.CalculAndFindScoreZone([1,2,5,7,3,1])
        expect(result).toBe(-1)
    })
})