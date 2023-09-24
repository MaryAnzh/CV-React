import { IDictionary } from "../../translator/dictionaries/interface";

export interface IGame {
    translateKey: keyof IDictionary,
    isActive: boolean
}