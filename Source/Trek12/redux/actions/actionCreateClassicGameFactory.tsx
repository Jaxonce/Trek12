import ClassicGameFactory from "../../Model/ClassicGameFactory";

export const CreateClassicGameFactory = (classicGameFactory: ClassicGameFactory) => {
    return {
        type: "CREATE_GAMEFACTORY",
        payload: classicGameFactory,
    };
}