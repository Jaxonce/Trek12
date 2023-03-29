import ClassicGameFactory from "../../Model/ClassicGameFactory";

export const GetGameFactory = (classicGameFactory: ClassicGameFactory) => {
    return {
        type: "CURRENT_GAMEFACTORY",
        payload: classicGameFactory,
    };
}