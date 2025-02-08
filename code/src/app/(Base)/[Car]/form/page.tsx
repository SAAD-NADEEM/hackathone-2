"use client"

import { OrderFormData } from "@/app/Components/Utils/type";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export interface ExtendedOrderFormData extends OrderFormData {
  name: string;
  phone: string;
  address: string;
  city: string;
  pickupLocation: string;
  pickupTime: string;
  dropoffLocation: string;
  dropoffTime: string;
  paymentMethod: string;
}


const RentalCarForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ExtendedOrderFormData>();
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const handleSubmitForm = async (data: ExtendedOrderFormData) => {
    try {
      // 1. Add 'carId' to the data object:
      const { pickupDate, dropoffDate } = data;
      const orderData: OrderFormData = { pickupDate, dropoffDate, carId: id };

      // 2. Send the data to the API:
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': process.env.NEXT_PUBLIC_SECRET_KEY as string,
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log("Order created successfully:", await response.json());
        alert("Form submitted successfully!");
        reset();
      } else {
        console.log("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="bg-[--background-500] text-bg-500 p-8 flex-1 flex flex-col gap-8 max-w-[1016px] lg:mx-8 my-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-8">
        {/* Billing Info */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[--primary-500]">Billing Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your name"
              className="p-3 bg-[--background-400] rounded border border-[--border-500] text-second-300"
              required
            />
            <input
              type="text"
              placeholder="Phone number"
              {...register("phone", { required: "Phone number is required" })}
              className="p-3 bg-[--background-400] rounded border border-[--border-500] text-second-300"
              required
            />
            <input
              {...register("address", { required: "Address is required" })}
              type="text"
              placeholder="Address"
              className="p-3 bg-[--background-400] rounded border border-[--border-500] text-second-300"
              required
            />
            <input
              {...register("city", { required: "City is required" })}
              type="text"
              placeholder="Town / City"
              className="p-3 bg-[--background-400] rounded border border-[--border-500] text-second-300"
              required
            />
          </div>
        </section>

        {/* Rental Info */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[--primary-500]">Rental Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-[--secondary-300]">Pick-Up Location</label>
              <select
                {...register("pickupLocation")}
                className="p-3 bg-[--background-400] appearance-none rounded border border-[--border-500] text-second-300"
              >
                <option value="Lahore">Defence Branch</option>
                <option value="Karachi">North Karachi Branch</option>
                <option value="Islamabad">Nazimabad Branch</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[--secondary-300]">Date</label>
              <input
                {...register("pickupDate", { required: "Pick-Up Date is required" })}
                type="date"
                className="p-3 bg-[--background-400] rounded border border-[--border-500] text-second-300"
                required
              />
            </div>
            {errors.pickupDate && <p className="text-red-600 font-bold">{errors.root?.message}</p>}

            <div className="space-y-2">
              <label className="block text-[--secondary-300]">Time</label>
              <input
                {...register("pickupTime", { required: "Pick-Up Time is required" })}
                type="time"
                className="p-3 bg-[--background-400] rounded border border-[--border-500] text-second-300"
                required
              />
            </div>
          </div>
          {errors.pickupTime && <p className="text-red-600 font-bold">{errors.root?.message}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-[--secondary-300]">Drop-Off Location</label>
              <select
                {...register("dropoffLocation")}
                className="p-3 bg-[--background-400] appearance-none rounded border border-[--border-500]  text-second-300"
              >
                <option value="Lahore">Defence Branch</option>
                <option value="Karachi">North Karachi Branch</option>
                <option value="Islamabad">Nazimabad Branch</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[--secondary-300]">Date</label>
              <input
                type="date"
                {...register("dropoffDate", { required: "Drop-Off Date is required" })}
                className="p-3 bg-[--background-400] rounded border border-[--border-500] text-second-300"
                required
              />
            </div>
            {errors.dropoffDate && <p className="text-red-600 font-bold">{errors.root?.message}</p>}

            <div className="space-y-2">
              <label className="block text-[--secondary-300]">Time</label>
              <input
                type="time"
                {...register("dropoffTime", { required: "Drop-Off Time is required" })}
                className="p-3 bg-[--background-400] rounded border border-[--border-500] text-second-300"
                required
              />
              {errors.dropoffTime && <p className="text-red-600 font-bold">{errors.root?.message}</p>}
            </div>
          </div>
        </section>

        <div className="space-y-4 flex flex-col">
          <h2 className="text-xl font-semibold text-[--primary-500]">Payment Method</h2>
          <select
            {...register("paymentMethod", { required: "Payment method is required" })}
            className="p-3 bg-[--background-400] rounded appearance-none border border-[--border-500] text-second-300 w-3/4 m-auto"
          >
            <option value="JazzCash">JazzCash</option>
            <option value="Easypaisa">Easypaisa</option>
            <option value="COD">Cash on Delivery (COD)</option>
          </select>
          {errors.paymentMethod && <p className="text-red-600">Please Select a Payment Method</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-[--primary-500] text-second-300 font-semibold rounded hover:bg-[--information-500] transition"
          >
            Rent Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentalCarForm;