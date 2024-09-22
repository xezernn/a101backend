const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv/config');

const { categoryRouter, imgRouter, loginRouter, productRouter, sliderRouter } = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');
app.use('/api-docs/static', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist')));

const { specs, swaggerUi } = require('./swagger');
app.use('/api-docs', cors(), swaggerUi.serve, swaggerUi.setup(specs));

app.use('/img', imgRouter);
app.use('/products', productRouter);
app.use('/slider', sliderRouter);
app.use('/categories', categoryRouter);
app.use('/auth', loginRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
