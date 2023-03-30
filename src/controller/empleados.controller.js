import { pool } from '../db.js'

export const getempleados = async (req, res) => {
    const [rows] = await pool.query('SELECT *FROM empleados')
    res.send(rows)
}

export const getempleado = async (req, res) => {
    const [rows] = await pool.query('SELECT *FROM empleados WHERE id=?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Este empleado no existe'
    })

    res.send(rows[0])
}


export const postempleados = async (req, res) => {
    const { nombre, salario } = req.body
    const [rows] = await pool.query('INSERT INTO empleados(nombre, salario) VALUES(?, ?)', [nombre, salario])
    // eSTE DE AQUI MUESTRA EN EL EL THUNDER LOS DATOS COMPLETOS
    res.send({
        id: rows.insertId,
        nombre,
        salario,
    })
}


export const deleteempleados = async (req, res) => {
    const [result] = await pool.query('DELETE FROM empleados WHERE id=?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'empleado no encontrado'
    })
    console.log(result)
    res.sendStatus(204)
}



export const putempleados = (req, res) => {
    const { id } = req.params
    const { nombre, salario } = req.body
    console.log(id, nombre, salario)
    res.json('Datos actualizado ejecuta la opcion get')
   
}



