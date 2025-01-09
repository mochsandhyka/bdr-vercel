import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

// Regex untuk nomor telepon
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  nama: Yup.string().required("*Nama wajib diisi."),
  telp: Yup.string()
    .matches(phoneRegExp, "*Nomor telepon tidak valid")
    .required("*Nomor telepon wajib diisi"),
  email: Yup.string()
    .email("Format email tidak valid.")
    .required("Email wajib diisi."),
  tujuan: Yup.string().required("Negara tujuan wajib dipilih."),
  jenisPekerjaan: Yup.string().required("Pekerjaan wajib dipilih."),
  sumberInfo: Yup.string().required(
    "Mendapatkan info dari medsos wajib dipilih"
  ),
  usernameMedsos: Yup.string().required("Username Medsos wajib dipilih"),
  cv: Yup.mixed()
    .required("CV wajib diunggah.")
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus PDF.", (value) => {
      return value && value.type === "application/pdf";
    }),
  berkas: Yup.mixed()
    .required("Berkas wajib diunggah.")
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus PDF.", (value) => {
      return value && value.type === "application/pdf";
    }),
  passport: Yup.mixed()
    .nullable() // Menyatakan bahwa field bisa null
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      // Pastikan value ada, baru cek ukuran
      return !value || value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus PDF.", (value) => {
      // Pastikan value ada, baru cek tipe file
      return !value || value.type === "application/pdf";
    }),

  skck: Yup.mixed()
    .nullable() // Menyatakan bahwa field bisa null
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      // Pastikan value ada, baru cek ukuran
      return !value || value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus PDF.", (value) => {
      // Pastikan value ada, baru cek tipe file
      return !value || value.type === "application/pdf";
    }),
  pasFoto: Yup.mixed()
    .required("Pas foto wajib diunggah.")
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus JPG, JPEG, atau PNG.", (value) => {
      return !value || ["image/jpeg", "image/png"].includes(value.type);
    }),
  fullFoto: Yup.mixed()
    .required("Foto full badan wajib diunggah.")
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus JPG, JPEG, atau PNG.", (value) => {
      return !value || ["image/jpeg", "image/png"].includes(value.type);
    }),
  kartuKeluarga: Yup.mixed()
    .required("Kartu Keluarga wajib diunggah.")
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus JPG, JPEG, atau PNG.", (value) => {
      return !value || ["image/jpeg", "image/png"].includes(value.type);
    }),
  ktp: Yup.mixed()
    .required("KTP wajib diunggah.")
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus JPG, JPEG, atau PNG.", (value) => {
      return !value || ["image/jpeg", "image/png"].includes(value.type);
    }),
  ijazah: Yup.mixed()
    .required("Ijazah wajib diunggah.")
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus PDF.", (value) => {
      return value && value.type === "application/pdf";
    }),
  suratIzin: Yup.mixed()
    .required("Surat Izin wajib diunggah.")
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus PDF.", (value) => {
      return value && value.type === "application/pdf";
    }),
});

export const RegistrationForm = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [availableJobs, setAvailableJobs] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/jobcountries");
        const data = await response.json();

        // Check if the response is successful and contains data
        if (data.success && Array.isArray(data.data)) {
          setCountries(data.data); // Set the countries array to state
          console.log(countries);
        } else {
          console.error("No countries found or data format is incorrect");
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []); // Runs once on component mount

  const formik = useFormik({
    initialValues: {
      nama: "",
      telp: "",
      email: "",
      tujuan: "",
      jenisPekerjaan: "",
      sumberInfo: "",
      usernameMedsos: "",
      cv: null,
      berkas: null,
      passport: null,
      skck: null,
      pasFoto: null,
      fullFoto: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });
  const handleCountryChange = (e) => {
    const selectedCountryId = e.target.value;
    setSelectedCountry(selectedCountryId);

    // Find the country by id and set the jobs
    const country = countries.find(
      (country) => country.nameId === selectedCountryId
    );
    if (country) {
      setAvailableJobs(country.jobs || []); // Update available jobs based on selected country
    }
  };

  return (
    <div className="bg-white dark:bg-slate-200 rounded-lg  p-6 md:p-12 text-slate-500 text-sm">
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Nama   */}
        <div className="grid grid-cols-1 text-left md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              onChange={formik.handleChange}
              value={formik.values.nama}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.nama && formik.touched.nama && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.nama}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="telp"
              className="block text-sm font-medium text-gray-700"
            >
              Nomor Telepon
            </label>
            <input
              type="text"
              id="telp"
              name="telp"
              onChange={formik.handleChange}
              value={formik.values.telp}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.telp && formik.touched.telp && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.telp}
              </div>
            )}
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
        </div>
        {/* Negara tujuan*/}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {/* tujuan */}
          <div>
            <label
              htmlFor="tujuan"
              className="block text-sm font-medium text-gray-700"
            >
              Negara Tujuan
            </label>
            <select
              id="tujuan"
              name="tujuan"
              onChange={(e) => {
                handleCountryChange(e);
              }}
              value={selectedCountry}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Pilih Negara Tujuan
              </option>
              {countries.map((country) => (
                <option key={country._id} value={country.nameId}>
                  {country.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* Job Type Select */}
          <div>
            <label
              htmlFor="jenisPekerjaan"
              className="block text-sm font-medium text-gray-700"
            >
              Jenis Pekerjaan
            </label>
            <select
              id="jenisPekerjaan"
              name="jenisPekerjaan"
              onChange={(e) => formik.handleChange(e)} // Assuming you're using Formik for form handling
              value={formik.values.jenisPekerjaan}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Pilih Jenis Pekerjaan</option>
              {availableJobs.length > 0 ? (
                availableJobs.map((job) => (
                  <option key={job._id} value={job.jobDescId.jobName}>
                    {job.jobDescId.jobName}{" "}
                    {/* Assuming job name is part of jobDescId */}
                  </option>
                ))
              ) : (
                <option disabled>
                  No jobs available for the selected country
                </option>
              )}
            </select>
          </div>
          <div>
            <label
              htmlFor="sumberInfo"
              className="block text-sm font-medium text-gray-700"
            >
              Mendapatkan Informasi Dari
            </label>
            <select
              id="sumberInfo"
              name="sumberInfo"
              onChange={formik.handleChange}
              value={formik.values.sumberInfo}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Pilih Sumber Informasi</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
            </select>
            {formik.errors.sumberInfo && formik.touched.sumberInfo && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.sumberInfo}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="usernameMedsos"
              className="block text-sm font-medium text-gray-700"
            >
              Username Medsos
            </label>
            <input
              type="text"
              id="usernameMedsos"
              name="usernameMedsos"
              onChange={formik.handleChange}
              value={formik.values.usernameMedsos}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.usernameMedsos && formik.touched.usernameMedsos && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.usernameMedsos}
              </div>
            )}
          </div>
        </div>

        {/* Sumber Info dan Username Medsos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"></div>

        {/* Upload Files Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="cv"
              className="block text-sm font-medium text-gray-700"
            >
              Upload CV (PDF)
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={(event) =>
                formik.setFieldValue("cv", event.currentTarget.files[0])
              }
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {formik.errors.cv && formik.touched.cv && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.cv}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="berkas"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Berkas (KK, KTP, Ijazah, Surat Izin Keluarga) (PDF)
            </label>
            <input
              type="file"
              id="berkas"
              name="berkas"
              onChange={(event) =>
                formik.setFieldValue("berkas", event.currentTarget.files[0])
              }
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {formik.errors.berkas && formik.touched.berkas && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.berkas}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="passport"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Passport (PDF)
            </label>
            <input
              type="file"
              id="passport"
              name="passport"
              onChange={(event) =>
                formik.setFieldValue("passport", event.currentTarget.files[0])
              }
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {formik.errors.passport && formik.touched.passport && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.passport}
              </div>
            )}
          </div>
        </div>

        {/* skck */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="skck"
              className="block text-sm font-medium text-gray-700"
            >
              Upload SKCK POLDA (PDF)
            </label>
            <input
              type="file"
              id="skck"
              name="skck"
              accept=".pdf"
              onChange={(event) =>
                formik.setFieldValue("skck", event.currentTarget.files[0])
              }
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {formik.errors.skck && formik.touched.skck && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.skck}
              </div>
            )}
          </div>
          {/* Upload Pasfoto */}
          <div>
            <label
              htmlFor="pasFoto"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Pasfoto (JPG/PNG)
            </label>
            <input
              type="file"
              id="pasFoto"
              name="pasFoto"
              accept=".jpg,.jpeg,.png"
              onChange={(event) =>
                formik.setFieldValue("pasFoto", event.currentTarget.files[0])
              }
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {formik.errors.pasFoto && formik.touched.pasFoto && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.pasFoto}
              </div>
            )}
          </div>

          {/* Upload Foto 1 Badan */}
          <div>
            <label
              htmlFor="fullFoto"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Foto 1 Badan (JPG/PNG)
            </label>
            <input
              type="file"
              id="fullFoto"
              name="fullFoto"
              accept=".jpg,.jpeg,.png"
              onChange={(event) =>
                formik.setFieldValue("fullFoto", event.currentTarget.files[0])
              }
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {formik.errors.fullFoto && formik.touched.fullFoto && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.fullFoto}
              </div>
            )}
          </div>
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="submit"
            className="text-sm w-full md:w-auto py-3 px-40 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
