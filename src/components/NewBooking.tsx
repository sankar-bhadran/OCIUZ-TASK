import SectionWrapper from "../components/SectionWrapper";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { useState } from "react";

const NewBooking = () => {
  const [details, setDetails] = useState({
    senderName: "",
    senderPhoneNumber: "",
    senderEmail: "",
    reciverName: "",
    reciverAddress: "",
    packageWeight: "",
    packageRate: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handelDetails = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const totalShippingCost =
    Number(details.packageWeight) * Number(details.packageRate) || 0;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!details.senderName.trim()) {
      newErrors.senderName = "Sender name is required";
    }

    if (!/^\d{10}$/.test(details.senderPhoneNumber)) {
      newErrors.senderPhoneNumber = "Mobile number must be 10 digits";
    }

    if (!details.reciverName.trim()) {
      newErrors.reciverName = "Receiver name is required";
    }

    if (!details.reciverAddress.trim()) {
      newErrors.reciverAddress = "Address is required";
    }

    if (Number(details.packageWeight) <= 0) {
      newErrors.packageWeight = "Weight must be greater than 0";
    }

    if (Number(details.packageRate) <= 0) {
      newErrors.packageRate = "Rate must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    const payload = {
      ...details,
      totalShippingCost,
    };

    console.log(payload);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">New Booking Entry</h1>
      <form onSubmit={handleSubmit}>
        {/* Sender & Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionWrapper title="Sender Details">
            <div className="space-y-4">
              <FormInput
                label="Full Name"
                placeholder="Enter sender name"
                name="senderName"
                onChange={(e) => handelDetails(e)}
                error={errors.senderName}
              />
              <FormInput
                label="Mobile Number"
                placeholder="10-digit number"
                name="senderPhoneNumber"
                onChange={(e) => handelDetails(e)}
                error={errors.senderPhoneNumber}
              />
              <FormInput
                label="Email"
                type="email"
                placeholder="Optional"
                name="senderEmail"
                onChange={(e) => handelDetails(e)}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper title="Receiver Details">
            <div className="space-y-4">
              <FormInput
                label="Full Name"
                placeholder="Enter receiver name"
                name="reciverName"
                onChange={(e) => handelDetails(e)}
                error={errors.reciverName}
              />
              <FormTextArea
                label="Full Address"
                placeholder="Enter full address"
                name="reciverAddress"
                onChange={(e) => handelDetails(e)}
                error={errors.reciverName}
              />
            </div>
          </SectionWrapper>
        </div>

        {/* Package Details */}
        <div className="mt-6">
          <SectionWrapper title="Package Details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormInput
                label="Weight (kg)"
                type="number"
                name="packageWeight"
                onChange={(e) => handelDetails(e)}
                error={errors.packageWeight}
              />
              <FormInput
                label="Rate per kg (INR)"
                type="number"
                name="packageRate"
                onChange={(e) => handelDetails(e)}
                error={errors.packageRate}
              />
              <FormInput
                label="Total Shipping Cost"
                type="number"
                name="totalShippingCart"
                value={totalShippingCost}
              />
            </div>
          </SectionWrapper>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className=" bg-blue-600 text-white text-sm font-medium
      px-6 py-2 rounded-md
      hover:bg-blue-700
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      disabled:bg-gray-400 disabled:cursor-not-allowed
      transition
    "
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBooking;
