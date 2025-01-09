import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  nama: Yup.string().required("Nama wajib diisi."),
  telp: Yup.string()
    .matches(phoneRegExp, "Nomor telepon tidak valid")
    .required("Nomor telepon wajib diisi"),
  email: Yup.string()
    .email("Format email tidak valid.")
    .required("Email wajib diisi."),
  tujuan: Yup.string().required("Negara tujuan wajib dipilih."),
  pekerjaan: Yup.string().required("Pekerjaan wajib dipilih."),
  sumberInfo: Yup.string().required("Mendapat info dari medsos wajib dipilih"),
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
    .nullable()
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus PDF.", (value) => {
      return value && value.type === "application/pdf";
    }),
  skck: Yup.mixed()
    .nullable()
    .test("fileSize", "Ukuran file maksimal 200KB.", (value) => {
      return value && value.size <= 200 * 1024;
    })
    .test("fileType", "Format file harus PDF.", (value) => {
      return value && value.type === "application/pdf";
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
});

export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      nama: "",
      telp: "",
      email: "",
      tujuan: "",
      pekerjaan: "",
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

  return (
    <div className="bg-white rounded-lg shadow-lg h-full">
      <div className="overflow-auto h-full px-20 py-20">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Nama */}
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.nama && formik.touched.nama && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.nama}
              </div>
            )}
          </div>

          {/* Nomor Telepon */}
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          {/* Negara Tujuan */}
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
              onChange={formik.handleChange}
              value={formik.values.tujuan}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Pilih negara tujuan</option>
              <option value="indonesia">Indonesia</option>
              <option value="singapore">Singapura</option>
              <option value="japan">Jepang</option>
              <option value="usa">Amerika Serikat</option>
              <option value="germany">Jerman</option>
            </select>
            {formik.errors.tujuan && formik.touched.tujuan && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.tujuan}
              </div>
            )}
          </div>

          {/* Pekerjaan */}
          <div>
            <label
              htmlFor="pekerjaan"
              className="block text-sm font-medium text-gray-700"
            >
              Pekerjaan
            </label>
            <select
              id="pekerjaan"
              name="pekerjaan"
              onChange={formik.handleChange}
              value={formik.values.pekerjaan}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Pilih pekerjaan</option>
              <option value="engineer">Engineer</option>
              <option value="teacher">Guru</option>
              <option value="doctor">Dokter</option>
              <option value="designer">Desainer</option>
              <option value="developer">Developer</option>
            </select>
            {formik.errors.pekerjaan && formik.touched.pekerjaan && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.pekerjaan}
              </div>
            )}
          </div>

          {/* Sumber Informasi */}
          <div>
            <label
              htmlFor="sumberInfo"
              className="block text-sm font-medium text-gray-700"
            >
              Mendapat informasi dari
            </label>
            <select
              id="sumberInfo"
              name="sumberInfo"
              onChange={formik.handleChange}
              value={formik.values.sumberInfo}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Pilih sumber informasi</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
            </select>
            {formik.errors.sumberInfo && formik.touched.sumberInfo && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.sumberInfo}
              </div>
            )}
          </div>

          {/* Username Medsos */}
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.usernameMedsos && formik.touched.usernameMedsos && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.usernameMedsos}
              </div>
            )}
          </div>

          {/* CV */}
          <div>
            <label
              htmlFor="cv"
              className="block text-sm font-medium text-gray-700"
            >
              CV (PDF)
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept="application/pdf"
              onChange={(event) =>
                formik.setFieldValue("cv", event.currentTarget.files[0])
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.cv && formik.touched.cv && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.cv}
              </div>
            )}
          </div>

          {/* Berkas */}
          <div>
            <label
              htmlFor="berkas"
              className="block text-sm font-medium text-gray-700"
            >
              Berkas (PDF)
            </label>
            <input
              type="file"
              id="berkas"
              name="berkas"
              accept="application/pdf"
              onChange={(event) =>
                formik.setFieldValue("berkas", event.currentTarget.files[0])
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.berkas && formik.touched.berkas && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.berkas}
              </div>
            )}
          </div>

          {/* Passport */}
          <div>
            <label
              htmlFor="passport"
              className="block text-sm font-medium text-gray-700"
            >
              Passport (PDF)
            </label>
            <input
              type="file"
              id="passport"
              name="passport"
              accept="application/pdf"
              onChange={(event) =>
                formik.setFieldValue("passport", event.currentTarget.files[0])
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.passport && formik.touched.passport && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.passport}
              </div>
            )}
          </div>

          {/* SKCK */}
          <div>
            <label
              htmlFor="skck"
              className="block text-sm font-medium text-gray-700"
            >
              SKCK (PDF)
            </label>
            <input
              type="file"
              id="skck"
              name="skck"
              accept="application/pdf"
              onChange={(event) =>
                formik.setFieldValue("skck", event.currentTarget.files[0])
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.skck && formik.touched.skck && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.skck}
              </div>
            )}
          </div>

          {/* Pas Foto */}
          <div>
            <label
              htmlFor="pasFoto"
              className="block text-sm font-medium text-gray-700"
            >
              Pas Foto (JPG, JPEG, PNG)
            </label>
            <input
              type="file"
              id="pasFoto"
              name="pasFoto"
              accept="image/jpeg, image/png"
              onChange={(event) =>
                formik.setFieldValue("pasFoto", event.currentTarget.files[0])
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.pasFoto && formik.touched.pasFoto && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.pasFoto}
              </div>
            )}
          </div>

          {/* Foto Full Badan */}
          <div>
            <label
              htmlFor="fullFoto"
              className="block text-sm font-medium text-gray-700"
            >
              Foto Full Badan (JPG, JPEG, PNG)
            </label>
            <input
              type="file"
              id="fullFoto"
              name="fullFoto"
              accept="image/jpeg, image/png"
              onChange={(event) =>
                formik.setFieldValue("fullFoto", event.currentTarget.files[0])
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {formik.errors.fullFoto && formik.touched.fullFoto && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.fullFoto}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
