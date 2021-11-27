const router = require("express").Router();
const stripe = require("stripe")('sk_test_51HedQGElZBtB5GSBZMghtWLboVHbAqBE09AzKDEoUt56CTVo0m1DskWmNCFgzwChoG7R0FyRkTnKY42bnRkLnkf800lzWRoRpk');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (stripeErr, stripeRes) => {
      console.log(stripeRes);
      console.log(stripeErr);
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
