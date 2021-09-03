import mongoose from 'mongoose';

const Schema = new mongoose.Schema({});

exports.default = mongoose.model('model', Schema);
