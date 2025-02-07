import React, { useState } from "react";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  return (
    <div className="space-y-4 flex flex-col">
      <h2 className="text-xl font-semibold text-[--primary-500]">Payment Method</h2>
      <select
        className="p-3 bg-[--background-400] rounded appearance-none border border-[--border-500] text-second-300 w-3/4 m-auto"
        value={selectedMethod}
        onChange={(e) => setSelectedMethod(e.target.value)}
      >
        <option value="">Select Payment Method</option>
        <option value="JazzCash">JazzCash</option>
        <option value="Easypaisa">Easypaisa</option>
        <option value="COD">Cash on Delivery (COD)</option>
      </select>
    </div>
  );
};

export default PaymentMethod;
