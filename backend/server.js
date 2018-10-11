import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import weather from './models/weather'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/weatherpoints', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

//get all weather
router.route('/weather').get((req, res) => {
    weather.find((err, allWeather) => {
        if (err) {
            console.log(err);
        }
        else
            res.json(allWeather);
    });
});

//get weather by id
router.route('/weather/:id').get((req, res) => {
    weather.find((err, allWeather) => {
        weather.findById(req.params.id, (err, myWeather) => {
            if (err)
                console.log(err);
            else
                res.json(myWeather);
        });
    });
});

//add weather
router.route('/weather/add').post((req, res) => {
    let newWeather = new weather(req.body);
    newWeather.save()
        .then(myWeather => {
            res.status(200).json({ 'weather': 'Added Successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create a new record');
        });
});

// delete weather
router.route('/weather/delete/:id').get((req, res) => {
    weather.findByIdAndRemove({ _id: req.params.id }, (err, delWeather) => {
        if (err)
            res.json(err);
        else
            res.json('Remove Successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));
