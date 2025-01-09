import { useState } from "react";
import { FaPray } from "react-icons/fa";

export function RegistrationForm() {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    passport: "",
    skck: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (form) => {
    const { name, value } = form.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form className="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-lg w-full h-auto max-h-screen overflow-y-auto space-y-6 shadow-lg transform transition-all duration-300 ease-in-out scale-100 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <span className="text-2xl">&times;</span>
        </button>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
          Register
        </h2>

        {/* Nama */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nama
          </label>
          <input
            type="text"
            required
            className="block w-full mt-2 rounded-md border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
            placeholder="Masukkan nama Anda"
          />
        </div>

        {/* Nomor Telepon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nomor Telepon
          </label>
          <input
            type="tel"
            className="block w-full mt-2 rounded-md border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
            placeholder="Masukkan nomor telepon"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="block w-full mt-2 rounded-md border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
            placeholder="Masukkan email Anda"
          />
        </div>

        {/* Username Medsos */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Username Medsos
          </label>
          <input
            type="text"
            className="block w-full mt-2 rounded-md border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
            placeholder="Masukkan username medsos Anda"
          />
        </div>

        {/* Negara Tujuan */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Negara Tujuan
          </label>
          <select className="block w-full mt-2 rounded-md border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 py-2 px-3">
            <option value="">Pilih negara tujuan</option>
            <option value="indonesia">Indonesia</option>
            <option value="singapore">Singapura</option>
            <option value="japan">Jepang</option>
            <option value="usa">Amerika Serikat</option>
            <option value="germany">Jerman</option>
          </select>
        </div>

        {/* Job */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Job
          </label>
          <select className="block w-full mt-2 rounded-md border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 py-2 px-3">
            <option value="">Pilih pekerjaan</option>
            <option value="engineer">Engineer</option>
            <option value="teacher">Guru</option>
            <option value="doctor">Dokter</option>
            <option value="designer">Desainer</option>
            <option value="developer">Developer</option>
          </select>
        </div>

        {/* Mengetahui Informasi Dari */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Mengetahui Informasi Dari
          </label>
          <select className="block w-full mt-2 rounded-md border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 py-2 px-3">
            <option value="">Pilih sumber informasi</option>
            <option value="media">Media Sosial</option>
            <option value="teman">Teman</option>
            <option value="iklan">Iklan</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>

        {/* CV */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah CV
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* Berkas */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah Berkas Lainnya
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* Passport */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah Passport
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* SKCK Polda */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah SKCK Polda
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* Foto Pasfoto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah Foto Pasfoto
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* Foto Satu Badan */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah Foto Satu Badan
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>
        {/* Unggah KK */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah Kartu Keluarga (KK)
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* Unggah KTP */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah KTP
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* Unggah Ijazah */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah Ijazah
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* Unggah Surat Izin */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Unggah Surat Izin
          </label>
          <input
            type="file"
            className="block w-full mt-2 text-gray-700 dark:text-gray-300"
          />
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Register
        </button>
      </form>
    </div>
  );
}
