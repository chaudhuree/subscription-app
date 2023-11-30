export const getPlanName = (amount) => {
  const planArray = [
    { amount: 1000, planName: "basic" },
    { amount: 2000, planName: "standard" },
    { amount: 5000, planName: "premium" },
  ];
  const plan = planArray.find((plan) => plan.amount === amount);
  return plan.planName;
};
