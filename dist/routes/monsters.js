"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MonsterController = __importStar(require("../controllers/monstersController"));
const router = express_1.default.Router();
router.get("/monsters", MonsterController.getAllMonsters);
router.get("/monsters/:id", MonsterController.getMonster);
router.get("/monsters/:id/habitat", MonsterController.getMonsterHabitat);
router.get("/monsters/:id/puntodebil", MonsterController.getMonsterWeakPoints);
router.get("/monsters/:id/materiales/:idRango/:idCorte", MonsterController.getMonsterMaterials);
router.get("/monsters/:id/materialeszona/:rango", MonsterController.getMonsterMaterialByZone);
exports.default = router;
