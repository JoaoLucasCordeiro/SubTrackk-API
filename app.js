import express from 'express';
import { PORT } from './config/env.js'

import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import subscriptionRoutes from './routes/subscription.routes.js';
import connectToDataBase from './database/mongodb.js';


const app = express();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/subscriptions', subscriptionRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to SubTrackk API');
})

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

     await connectToDataBase();
});

export default app;
