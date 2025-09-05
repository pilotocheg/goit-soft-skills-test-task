import { useState } from "react";
import toast from "react-hot-toast";

import Input from "../common/Input";
import Button from "../common/Button";

import css from "./CamperBookingForm.module.css";

const initialState = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

export default function CamperBookingForm() {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.bookingDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    console.log("Booking Data:", formData);
    toast.success("Booking request sent successfully!");

    setFormData(initialState);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit} className={css.form}>
        <Input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <Input
          type="date"
          name="bookingDate"
          placeholder="Booking date*"
          value={formData.bookingDate}
          onChange={handleInputChange}
          required
        />

        <Input
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleInputChange}
          textArea
          className={css.textarea}
        />

        <Button type="submit" className={css.sendButton}>
          Send
        </Button>
      </form>
    </div>
  );
}
