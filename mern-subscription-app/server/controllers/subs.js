const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const prices = async (req, res) => {
  const prices = await stripe.prices.list();
  // console.log('prices', prices.data);

  res.json(prices.data.reverse());
};

export const createSubscription = async (req, res) => {
  console.log(req.body);
};
// export const createSubscription = async (req, res) => {
//   // console.log("create subscription", req.body);
//   const { priceId } = req.body;
//   // console.log("priceId", priceId);
//   const session = await stripe.checkout.sessions.create({
//     mode: "subscription",
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price: priceId,
//         quantity: 1,
//       },
//     ],
//     success_url: `${process.env.CLIENT_URL}/success`,
//     cancel_url: `${process.env.CLIENT_URL}/cancel`,
//   });
//   // console.log("session", session);
//   res.json(session.url);
// };