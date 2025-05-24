"use client";
import { useFormStatus } from "react-dom";
export default function MealsFormSubmit(params) {
  const { status } = useFormStatus();

  return (
    <button disabled={status}>
      {status ? "Submitting...." : "Share meal"}
    </button>
  );
}
