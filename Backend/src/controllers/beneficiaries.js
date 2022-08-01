const plans = require('../../specifications/plans.json');
const prices = require('../../specifications/prices.json');

const beneficiaries = [];

exports.save = (req, res) => {
  const {
    beneficiariesAmount,
    beneficiariesAge,
    beneficiariesName,
    planType,
  } = req.body;

  const user = [];

  const RANGE1 = 17;
  const RANGE2 = 40;

  if (beneficiariesAmount > 1) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < beneficiariesAmount; i++) {
      user.push({
        name: beneficiariesName[i],
        age: beneficiariesAge[i],
      });
    }
  } else {
    user.push({
      name: beneficiariesName[0],
      age: beneficiariesAge[0],
    });
  }

  const planCod = plans.find((element) => planType === element.codigo);

  if (!planCod) { return res.status(404).json({ error: 'plan not found' }); }

  // eslint-disable-next-line max-len
  const pricesCheck = prices.find((price) => beneficiariesAmount >= price.minimo_vidas && price.codigo === planCod.codigo);

  let total = 0;

  user.forEach((element) => {
    if (element.age <= RANGE1) {
      total += pricesCheck.faixa1;
    } else if (element.age > RANGE1 && element.age < RANGE2) {
      total += pricesCheck.faixa2;
    } else {
      total += pricesCheck.faixa3;
    }
  });

  const obj = {
    ...planCod,
    beneficiariesAmount,
    user,
    planType,
    total,
  };

  beneficiaries.push(obj);

  return res.status(201).json(obj);
};

exports.list = (req, res) => res.status(200).json(beneficiaries);
