const mongoose = require('mongoose');

const smartDeviceSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  settings: {
    type: Map,
    of: mongoose.Mixed
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const SmartDevice = mongoose.model('SmartDevice', smartDeviceSchema);

module.exports = SmartDevice;
