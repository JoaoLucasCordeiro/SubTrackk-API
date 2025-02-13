import { Router } from 'express';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';
import authorize from '../middleware/auth.middleware.js';

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', (req, res) => res.send({title: 'GET all subscriptions'}))

subscriptionRoutes.get('/:id', (req, res) => res.send({title: 'GET subscriptions details'}))

subscriptionRoutes.post('/', authorize, createSubscription);

subscriptionRoutes.put('/:id', (req, res) => res.send({title: 'UPDATE subscriptions'}))

subscriptionRoutes.delete('/:id', (req, res) => res.send({title: 'DELETE subscriptions'}))

subscriptionRoutes.get('/user/:id', authorize, getUserSubscriptions)

subscriptionRoutes.put('/:id/cancel', (req, res) => res.send({title: 'CANCEL subscriptions'}))

subscriptionRoutes.put('/upcoming-renewals', (req, res) => res.send({title: 'GET upcoming renewals'}))


export default subscriptionRoutes;