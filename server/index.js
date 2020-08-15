const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const pool = require('./database');

// Middleware //
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors());
//app.use(express.json)());

// ROUTES //

// POST Requests

app.post('/students', async(req, res) => {
    try{
        const { full_name, school, grade, total_points } = req.body;
        const new_student = await pool.query("INSERT INTO students (full_name, school, grade, total_points) VALUES ($1, $2, $3, $4) RETURNING *",
            [full_name, school, grade , total_points]
        );
        res.json(new_student.rows[0])
    } catch(err) {
        console.error(error);
    }
})

app.post('/teachers', async(req, res) => {
    try {
        const { full_name, school } = req.body;
        const new_teacher = await pool.query("INSERT INTO teachers (full_name, school) VALUES ($1, $2) RETURNING *",
            [full_name, school]
        );
        res.json(new_teacher.rows[0])
    } catch(err) {
        console.error(error);
    }
})

app.post('/teachers/:teacher_id/classes', async(req, res) => {
    try {
        const teacher_id = parseInt(req.params.teacher_id);
        const { class_name, class_code, class_colour, total_points } = req.body;
        const new_class = await pool.query("INSERT INTO classes (class_name, class_code, class_colour, total_points, teacher_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [class_name, class_code, class_colour, total_points, teacher_id]
        );
        res.json(new_class.rows[0])
    } catch(err) {
        console.error(err);
    }
})

app.post('/students/:student_id/classes', async(req, res) => {
    try{
        const student_id = parseInt(req.params.student_id);
        const { class_id } = req.body;
        const new_student_class_item = await pool.query("INSERT INTO student_class_items (student_id, class_id) VALUES ($1, $2) RETURNING *",
            [student_id, class_id]
        );
        res.json(new_student_class_item.rows[0]);
    } catch (err) {
        console.error(err);
    }
});

app.post('/classes/:class_id/assignments', async(req, res) => {
    try {   
        const class_id = parseInt(req.params.class_id)
        const { assignment_name, assignment_details, due_date, assignment_points } = req.body;
        const new_assignment = await pool.query(
            "INSERT INTO assignments (assignment_name, assignment_details, due_date, assignment_points, class_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [assignment_name, assignment_details, due_date, assignment_points, class_id]
        );
        res.json(new_assignment.rows[0]);

        const new_assignment_delegations = await pool.query(
            `INSERT INTO assignment_delegation (assignment_id, student_id, status)
            SELECT assignments.id, student_id, 'To Do'
            FROM student_class_items
            INNER JOIN assignments
            ON student_class_items.class_id = assignments.class_id AND assignments.class_id = $1
            RETURNING *
            `, [class_id]
        );
    } catch (err) {
        console.error(err);
    }
})

// GET Requests //

app.get('/students/:student_id/assignments', async(req, res) => {
    try {   
        const student_id = req.params.student_id;
        const all_assignments = await pool.query(
            `SELECT * FROM assignments
            INNER JOIN assignment_delegation
            ON assignments.id = assignment_delegation.assignment_id
            WHERE assignment_delegation.student_id = $1`,
            [student_id]
        );
        res.json(all_assignments.rows);
    } catch (err) {
        console.error(err);
    }
})

app.get('/teachers/:teacher_id/assignments', async(req, res) => {
    try {   
        const teacher_id = req.params.teacher_id;
        const all_assignments = await pool.query(
            `SELECT * FROM assignments
            INNER JOIN classes
            ON assignments.class_id = classes.id
            WHERE classes.teacher_id = $1`,
            [teacher_id]
        );
        res.json(all_assignments.rows);
    } catch (err) {
        console.error(err);
    }
})

app.get('/classes/:class_id/assignments', async(req, res) => {
    try {   
        const class_id = req.params.class_id;
        const all_assignments = await pool.query(
            `SELECT * FROM assignments
            WHERE assignments.class_id = $1`,
            [class_id]
        );
        res.json(all_assignments.rows);
    } catch (err) {
        console.error(err);
    }
})

app.get('/teachers/:teacher_id/classes', async(req, res) => {
    try {   
        const teacher_id = req.params.teacher_id;
        const all_classes = await pool.query(
            `SELECT * FROM classes
            WHERE classes.teacher_id = $1`,
            [teacher_id]
        );
        res.json(all_classes.rows);
    } catch (err) {
        console.error(err);
    }
})

app.get('/classes/:class_id/students', async(req, res) => {
    try {   
        const class_id = req.params.class_id;
        const all_assignments = await pool.query(
            `SELECT * FROM students
            INNER JOIN student_class_items
            ON students.id = student_class_items.student_id
            WHERE class_id = $1`,
            [class_id]
        );
        res.json(all_assignments.rows);
    } catch (err) {
        console.error(err);
    }
})


// PATCH Requests //

app.patch('/students', async(req, res) => {
    try{
        const { full_name, school, grade, total_points } = req.body;
        const new_student = await pool.query("UPDATE students (full_name, school, grade, total_points) VALUES ($1, $2, $3, $4) WHERE full_name = $1 RETURNING *",
            [full_name, school, grade , total_points]
        );
        res.json(new_student.rows[0])
    } catch(err) {
        console.error(error);
    }
})

app.patch('/teachers', async(req, res) => {
    try {
        const { full_name, school } = req.body;
        const new_teacher = await pool.query("UPDATE teachers (full_name, school) VALUES ($1, $2) WHERE full_name = $1 RETURNING *",
            [full_name, school]
        );
        res.json(new_teacher.rows[0])
    } catch(err) {
        console.error(error);
    }
})

app.patch('/teachers/:teacher_id/classes', async(req, res) => {
    try {
        const teacher_id = parseInt(req.params.teacher_id);
        const { class_name, class_code, class_colour, total_points } = req.body;
        const new_class = await pool.query("UPDATE classes (class_name, class_code, class_colour, total_points, teacher_id) VALUES ($1, $2, $3, $4, $5) WHERE class_code = $5 RETURNING *",
            [class_name, class_code, class_colour, total_points, teacher_id]
        );
        res.json(new_class.rows[0])
    } catch(err) {
        console.error(err);
    }
})

app.patch('/classes/:class_id/assignments', async(req, res) => {
    try {   
        const class_id = parseInt(req.params.class_id)
        const { assignment_name, assignment_details, due_date, assignment_points } = req.body;
        const new_assignment = await pool.query(
            "INSERT INTO assignments (assignment_name, assignment_details, due_date, assignment_points, class_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [assignment_name, assignment_details, due_date, assignment_points, class_id]
        );
        res.json(new_assignment.rows[0]);

        const new_assignment_delegations = await pool.query(
            `INSERT INTO assignment_delegation (assignment_id, student_id, status)
            SELECT assignments.id, student_id, 'To Do'
            FROM student_class_items
            INNER JOIN assignments
            ON student_class_items.class_id = assignments.class_id AND assignments.class_id = $1
            RETURNING *
            `, [class_id]
        );
    } catch (err) {
        console.error(err);
    }
})


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})