const cron = require('cron');
const SmartDevice = require('../models/SmartDevice');
const { processData } = require('../services/dataProcessingService');

const processSmartDeviceData = async () => {
  const devicesData = await SmartDevice.find({});
  for (const device of devicesData) {
    const data = device.settings.get('data');
    await processData(data);
  }
};

const smartDeviceDataCronJob = new cron.CronJob('0 * * * *', () => {
  console.log('Cron job started - processing smart device data');
  processSmartDeviceData().catch(console.error);
}, null, false, 'America/New_York');

module.exports = { smartDeviceDataCronJob };
