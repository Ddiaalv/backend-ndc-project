import express from 'express';
import * as MonsterController from '../controllers/monstersController';

const router = express.Router();

router.get('/monsters', MonsterController.getAllMonsters);
router.get('/monsters/:id', MonsterController.getMonster);
router.get('/monsters/:id/habitat', MonsterController.getMonsterHabitat);
router.get('/monsters/:id/weakpoints', MonsterController.getMonsterWeakPoints);
router.get(
  '/monsters/:id/materiales/:idRango/:idCorte',
  MonsterController.getMonsterMaterials,
);
router.get(
  '/monsters/:id/materialeszona/:rango',
  MonsterController.getMonsterMaterialByZone,
);

export default router;
