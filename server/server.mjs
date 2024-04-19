import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 5000;
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

app.get('/workouts', (req, res) => {
    const db = fs.readFileSync('./db.json', 'utf-8');
    let json = JSON.parse(db);
    res.send(json);
})

app.get('/workouts/:id', (req, res) => {
    const db = fs.readFileSync('./db.json', 'utf-8');
    let json = JSON.parse(db);
    const workout = json.find((item) => item.id == req.params.id)

    res.send(workout);
})

app.put('/workouts/:id/item/:itemId', (req, res) => {
    const db = fs.readFileSync('./db.json', 'utf-8');
    let json = JSON.parse(db);
    const index = json.findIndex(w => w.id == req.params.id);
    if (index < 0) {
        res.status(404)
        res.send('Não achei')
        return;
    }
        
    const workout = json[index]

    const itemIndex = workout.items.findIndex(item => item.id == req.body.id);
    if (itemIndex < 0) {
        res.status(404)
        res.send('Não achei')
        return;
    }
    workout.items[itemIndex] = req.body
    fs.writeFileSync('./db.json', JSON.stringify(json))

    res.send(json);
})

app.post('/workouts/:id/item', (req, res) => {
    const db = fs.readFileSync('./db.json', 'utf-8');
    let json = JSON.parse(db);
    const index = json.findIndex(w => w.id == req.params.id);
    if (index < 0) {
        res.status(404)
        res.send('Não achei')
        return;
    }
        
    const workout = json[index]

    var highestId = 0;
    if (workout.items && Array.isArray(workout.items) && workout.items.length > 0) {
        highestId = workout.items.reduce((highest, item) => highest = highest > item.id ? highest : item.id);
    }
    else {
        workout.items = [];
    }
    req.body.id = highestId + 1;

    workout.items.push(req.body)
    fs.writeFileSync('./db.json', JSON.stringify(json))

    res.send(json);
})

app.delete('/workouts/:id/item/:itemId', (req, res) => {
    const db = fs.readFileSync('./db.json', 'utf-8');
    let json = JSON.parse(db);
    const index = json.findIndex(w => w.id == req.params.id);
    if (index < 0) {
        res.status(404)
        res.send('Não achei')
        return;
    }
        
    const workout = json[index]
    workout.items = workout.items.filter(item => item.id != req.params.itemId)

    fs.writeFileSync('./db.json', JSON.stringify(json))

    res.send(json);
})

// Faça endpoints para adicionar, editar e excluir um workout
app.post('/workouts', (req, res) => {
    const db = fs.readFileSync('./db.json', 'utf-8');
    let json = JSON.parse(db);
    if (Array.isArray(json) && json.length > 0) {
        var highestId = json.reduce((highest, item) => highest = highest > item.id ? highest : item.id)
    }
    else {
        highestId = 0;
    }
    req.body.id = highestId + 1;
    json.push(req.body)
    fs.writeFileSync('./db.json', JSON.stringify(json))

    res.send(req.body);
})

app.put('/workouts/:id', (req, res) => {
    const db = fs.readFileSync('./db.json', 'utf-8');
    let json = JSON.parse(db);
    const index = json.findIndex(w => w.id == req.params.id);
    if (index < 0) {
        res.status(404)
        res.send('Não achei')
        return;
    }
    json[index] = req.body
    fs.writeFileSync('./db.json', JSON.stringify(json))

    res.send(json);
});

app.delete('/workouts/:id', (req, res) => {
    const db = fs.readFileSync('./db.json', 'utf-8');
    let json = JSON.parse(db);
    const index = json.findIndex(w => w.id == req.params.id);
    if (index < 0) {
        res.status(404)
        res.send('Não achei')
        return;
    }
    json = json.filter(w => w.id != req.params.id)
    fs.writeFileSync('./db.json', JSON.stringify(json))

    res.send(json);
})


app.listen(port, () => {
    console.log('Server online na porta: ' + port);
})