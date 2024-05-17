import { Schema } from 'mongoose';
import mongoose_connection from '../connection/index.js';

const PortfolioDataSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    message: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const PortfolioData = mongoose_connection.model('PortfolioData', PortfolioDataSchema);

export default PortfolioData;
