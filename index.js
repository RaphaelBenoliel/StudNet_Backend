import express from 'express';
const app = express();
const port = process.env.PORT||3000;
app.get('/', (req, res) => {
    console.log('New request from HomePage.');
    res.send('Test');
});

app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`);
});