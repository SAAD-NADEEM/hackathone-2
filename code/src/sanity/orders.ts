export default {
    name: "orders",
    type: "document",
    title: "orders",
    fields: [
      {
        name: "userId",
        type: "string",
        title: "User ID",
      },
      {
        name: "orders",
        type: "array",
        title: "Orders",
        of: [
          {
            type: "object",
            fields: [
              { name: "carId", type: "string", title: "Car ID" },
              { name: "pickupDate", type: "datetime", title: "Pickup Date" },
              { name: "dropoffDate", type: "datetime", title: "Dropoff Date" }
            ]
          }
        ]
      }
    ]
  };
  