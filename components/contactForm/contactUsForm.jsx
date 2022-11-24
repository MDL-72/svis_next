import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    submittedData,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        contactNumber: "",
        eMailAddress: "",
        subject: "",
        message: "",
      });
    }
  }, [formState, submittedData, reset]);

  return (
    <div className="contact-us__cont">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-us-form__cont">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="contact-us__items">
          <div className="contact-us__item">
            <label className="contact-us__item__label">First Name</label>
            <input
              {...register("firstName", { required: true, maxLength: 20 })}
              placeholder="First Name*"
              className={`contact-us__item__input ${
                !errors.firstName ? "error_height" : ""
              }`}
            />
            {errors.firstName && (
              <small className="contact-us__item__error">
                This field is required
              </small>
            )}
          </div>
          <div className="contact-us__item">
            {/* include validation with required or other standard HTML validation rules */}
            <label className="contact-us__item__label">Last Name</label>
            <input
              {...register("lastName", { required: true, maxLength: 20 })}
              placeholder="Last Name*"
              className={`contact-us__item__input ${
                !errors.lastName ? "error_height" : ""
              }`}
            />
            {errors.lastName && (
              <small className="contact-us__item__error">
                This field is required
              </small>
            )}
          </div>
        </div>
        <div className="contact-us__items">
          <div className="contact-us__item">
            <label className="contact-us__item__label">Contact Number</label>
            <input
              {...register("contactNumber", {
                required: true,
                maxLength: 11,
                minLength: 7,
                pattern: /^[0-9]+$/,
              })}
              placeholder="Contact Number*"
              className={`contact-us__item__input ${
                !errors.contactNumber ? "error_height" : ""
              }`}
            />
            {errors.contactNumber && (
              <small className="contact-us__item__error">
                Enter a valid contact number
              </small>
            )}
          </div>
          <div className="contact-us__item">
            {/* include validation with required or other standard HTML validation rules */}
            <label className="contact-us__item__label">E-Mail Address</label>
            <input
              {...register("eMailAddress", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              placeholder="E-mail Address*"
              className={`contact-us__item__input ${
                !errors.eMailAddress ? "error_height" : ""
              }`}
            />
            {/* errors will return when field validation fails  */}
            {errors.eMailAddress && (
              <small className="contact-us__item__error">
                Enter a valid E-mail Address
              </small>
            )}
          </div>
        </div>
        <div className="contact-us__items">
          <div className="contact-us__item">
            {/* include validation with required or other standard HTML validation rules */}
            <label className="contact-us__item__label">Subject</label>
            <input
              {...register("subject", {
                required: true,
              })}
              placeholder="Subject*"
              className={`contact-us__item__input ${
                !errors.subject ? "error_height" : ""
              }`}
            />
            {/* errors will return when field validation fails  */}
            {errors.subject && (
              <small className="contact-us__item__error">
                This field is required
              </small>
            )}
          </div>
        </div>
        <div className="contact-us__items">
          <div className="contact-us__item">
            {/* include validation with required or other standard HTML validation rules */}
            <label className="contact-us__item__label">Message</label>
            <textarea
              {...register("message", {
                required: true,
              })}
              placeholder="Message*"
              className={`contact-us__item__input--text-area ${
                !errors.message ? "error_height" : ""
              }`}
              type="text"
            />
            {/* errors will return when field validation fails  */}
            {errors.message && (
              <small className="contact-us__item__error">
                This field is required
              </small>
            )}
          </div>
        </div>
        <div className="contact-us__cta__cont">
          <input type="submit" className="contact-us__cta" />
        </div>
      </form>
    </div>
  );
}
