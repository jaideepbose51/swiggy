import { Router } from "express";
import { sample_foods,sample_tags } from "../data.js";

const router = Router();
router.get('/', (req, res) => {
    res.send(sample_foods);
});
router.get('/tags', (req, res) => {
    res.send(sample_tags);
});
 
router.get('/search/:searchTerm', (req, res) => {
    const { searchTerm } = req.params;
    const foods = sample_foods.filter(items =>
        items.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(foods);
});

router.get('/tags/:tag')

export default router;