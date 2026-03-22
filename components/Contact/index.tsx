"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import MapPin from "../MapPin";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    agreed: false,
  });
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const validateField = (name: string, value: string | boolean) => {
    if (name === "agreed") {
      return value ? "" : "You must agree to the terms";
    }
    if (typeof value !== "string") {
      return;
    }
    if (typeof value === "string" && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (name === "email" && typeof value === "string") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Invalid email address";
    }

    if (name === "phone" && typeof value === "string") {
      // Nepali Mobile number: Starts with 98 or 97 and has 10 digits
      const mobileRegex = /^(98|97)\d{8}$/;
      // Nepali Landline: starts with 0 and has 8 or 9 digits
      const landlineRegex = /^0\d{7,8}$/;
      if (!mobileRegex.test(value) && !landlineRegex.test(value)) {
        return "Invalid Nepali phone number";
      }
    }

    return "";
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));

    const error = validateField(name, fieldValue);
    if (error === undefined) return;

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      return;
    }
  };

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20 bg-secondary">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-[#a6cfff] to-[#e6f3ff] py-22.5 dark:bg-blacksection dark:bg-linear-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4"
            >
              <MapPin />

            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-primary dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-primary dark:text-white">
                  Our Loaction
                </h3>
                <p>D&D tower 6th floor, Global Bank-Mid Baneshwor</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-primary dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="mailto:divinelightglobalpathway@gmail.com">divinelightglobalpathway@gmail.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-primary dark:text-white">
                  Phone Number
                </h4>
                <p className="mb-1.5">
                  <a href="tel:+97714534477">+977 01 4534477</a>
                </p>
                <p className="mb-1.5">
                  <a href="tel:+9779705435655">+977 970 5435 655</a>
                </p>
              </div>
            </motion.div>

          </div>
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20 py-22.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/5 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-primary dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form
                action="https://formbold.com/s/oJ4Qn"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="w-full lg:w-1/2">
                    <input
                      type="text"
                      placeholder="Full name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full border-b ${errors.name ? "border-red-500" : "border-stroke"
                        } bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white`}
                    />
                    {errors.name && (
                      <span className="mt-1 block text-sm text-red-500">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="w-full lg:w-1/2">
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full border-b ${errors.email ? "border-red-500" : "border-stroke"
                        } bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white`}
                    />
                    {errors.email && (
                      <span className="mt-1 block text-sm text-red-500">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="w-full lg:w-1/2">
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full border-b ${errors.subject ? "border-red-500" : "border-stroke"
                        } bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white`}
                    />
                    {errors.subject && (
                      <span className="mt-1 block text-sm text-red-500">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="relative w-full lg:w-1/2">
                    <div
                      className={`flex items-center border-b ${errors.phone ? "border-red-500" : "border-stroke"
                        } bg-transparent pb-3.5 focus-within:border-waterloo dark:border-strokedark dark:focus-within:border-manatee`}
                    >
                      <span className="pr-2 text-primary dark:text-white">
                        +977
                      </span>
                      <input
                        type="text"
                        placeholder="Phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-transparent focus:placeholder:text-black focus-visible:outline-hidden dark:focus:placeholder:text-white"
                      />
                    </div>
                    {errors.phone && (
                      <span className="mt-1 block text-sm text-red-500">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-11.5 flex flex-col">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full border-b ${errors.message ? "border-red-500" : "border-stroke"
                      } bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white`}
                  ></textarea>
                  {errors.message && (
                    <span className="mt-1 block text-sm text-red-500">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <div className="mb-4 flex flex-col md:mb-0">
                    <label
                      htmlFor="default-checkbox"
                      className="flex cursor-pointer select-none items-center"
                    >
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleInputChange}
                        className="peer sr-only"
                      />
                      <span
                        className={`group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded-sm border ${errors.agreed ? "border-red-500" : "border-gray-300"
                          } bg-gray-100 text-blue-600 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700`}
                      >
                        <svg
                          className="opacity-0 in-[.group]:peer-checked:opacity-100"
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className="flex max-w-[425px] pl-5">
                        I agree to be contacted via email and phone using the information I have provided.
                      </span>
                    </label>
                    {errors.agreed && (
                      <span className="mt-1 block text-sm text-red-500">
                        {errors.agreed}
                      </span>
                    )}
                  </div>

                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
