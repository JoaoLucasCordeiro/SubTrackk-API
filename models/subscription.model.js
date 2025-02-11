import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLenght: 2,
        maxLength: 100
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: 0,
    },
    currency: {
        type: String,
        enum: ['USD', 'BRL'],
        default: 'BRL',
    },
    frequency: {
        type: String,
        enum: ['semanal', 'mensal', 'anual'],
        default: 'mensal',
    },
    category: {
        type: String,
        enum: ['streaming', 'musica', 'comida', 'outros'],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['ativo', 'cancelado', 'expirado'],
        default: 'ativo',
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: 'Data de início não pode ser no futuro',
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function (value) {
                return value > this.startDate
            },
            message: 'Data de renovação deve ser maior que a data de início',
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }


}, { timestamps: true });


subscriptionSchema.pre('save', function (next) {
    if (!renewalDate) {
        const renewalDate = {
            'semanal': 7,
            'mensal': 30,
            'anual': 365,
        }

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalDate[this.frequency]);
    }

    if (this.renewalDate < new Date()) {
        this.status = 'expirado';
    }

    next();
})

const subscription = mongoose.model('Subscription', subscriptionSchema);

export default subscription;