import{Router}from'express'
import {getempleados} from '../controller/empleados.controller.js'
import { postempleados } from '../controller/empleados.controller.js'
import { putempleados } from '../controller/empleados.controller.js'
import { deleteempleados } from '../controller/empleados.controller.js'
import { getempleado } from '../controller/empleados.controller.js'


const router=Router()

router.get('/empleados',getempleados)
// Obtener un dato con el id ---el id se convierte en un parametro
router.get('/empleados/:id',getempleado)

router.post('/empleados',postempleados)

router.put('/empleados/:id',putempleados)

router.delete('/empleados/:id',deleteempleados)


export default router


