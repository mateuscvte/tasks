const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const admin = require('firebase-admin');


admin.initializeApp();


app.use(cors({origin: true}));

app.get('/tasks', (req, res) => {
    getTaks(req, res);
});

app.post('/tasks/add', (req, res) => {
    const body = req.body
    addTask(req, res, body);
});

app.put('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    updateTask(req, res, id, body);
});

app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    deleteTask(req, res, id);
})


function getTaks(req, res) {
    return admin.firestore().collection('tasks').get()
        .then(data => {
            let snapshot = data.docs.map(tasks => {
                return tasks.data();
            });
            return res.status(200).send(snapshot);
        }).catch(error => {
            return res.status(400).send({message: error});
        });
}

function addTask(req, res, body) {
    body.id = admin.firestore().collection('tasks').doc().id
    return admin.firestore().collection('tasks').doc(body.id).set(body)
        .then(() => {
            return res.status(200).send({message: 'Tarefa adicionada'})
        }).catch(error => {
            return res.status(400).send({message: error});
        });
}

function updateTask(req, res, id, body) {
    return admin.firestore().collection('tasks').doc(id).update(body)
        .then(() => {
            return res.status(200).send({message: 'Tarefa alterada'})
        })
        .catch(error => {
            return res.status(400).send({message: error});
        });
}

function deleteTask(req, res, id) {
    return admin.firestore().collection('tasks').doc(id).delete()
        .then(() => {
            return res.status(200).send({message: 'Tarefa deletada'});
        })
        .catch(error => {
            return res.status(400).send({message: error});
        });
}

exports.api = functions.https.onRequest(app);