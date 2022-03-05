// eslint-disable-next-line import/no-anonymous-default-export
export default {
  shipments: [
    {
      _id: 1,
      createdAt: "2/20/2022",
      totalPrice: 42.9,
      user: {
        name: "Taylor",
      },
      isPaid: true,
      paidAt: "2/24/2022",
      isDelivered: true,
      deliverableData: null,
    },
    {
      _id: 2,
      createdAt: "2/23/2022",
      totalPrice: 42.9,
      user: {
        name: "Pedro",
      },
      isPaid: true,
      paidAt: "2/27/2022",
      isDelivered: false,
      deliverableData: null,
    },
    {
      _id: 3,
      createdAt: "2/24/2022",
      totalPrice: 42.9,
      user: {
        name: "Sanjay",
      },
      isPaid: true,
      paidAt: "2/26/2022",
      isDelivered: true,
      deliverableData: null,
    },
  ],
};
