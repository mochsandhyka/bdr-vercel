// src/CountryForm.jsx
import React, { useState } from "react";

export const CountryForm = () => {
  const [nameId, setNameId] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [descId, setDescId] = useState([]);
  const [descEn, setDescEn] = useState([]);
  const [img, setImg] = useState(null);

  const handleAddDescId = () => {
    setDescId([...descId, ""]);
  };

  const handleAddDescEn = () => {
    setDescEn([...descEn, ""]);
  };

  const handleDescChange = (e, index, type) => {
    if (type === "id") {
      const updatedDescId = [...descId];
      updatedDescId[index] = e.target.value;
      setDescId(updatedDescId);
    } else if (type === "en") {
      const updatedDescEn = [...descEn];
      updatedDescEn[index] = e.target.value;
      setDescEn(updatedDescEn);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nameId", nameId);
    formData.append("nameEn", nameEn);
    formData.append("img", img);

    descId.forEach((desc, index) => {
      formData.append(`descId[${index}]`, desc);
    });

    descEn.forEach((desc, index) => {
      formData.append(`descEn[${index}]`, desc);
    });

    try {
      const response = await fetch("http://localhost:3000/api/country/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Country added successfully!");
        setNameId("");
        setNameEn("");
        setDescId([]);
        setDescEn([]);
        setImg(null);
      } else {
        alert("Error adding country.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add Country</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name ID */}
        <div>
          <label htmlFor="nameId" className="block text-lg font-semibold mb-2">
            Name (ID)
          </label>
          <input
            id="nameId"
            type="text"
            value={nameId}
            onChange={(e) => setNameId(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Name EN */}
        <div>
          <label htmlFor="nameEn" className="block text-lg font-semibold mb-2">
            Name (EN)
          </label>
          <input
            id="nameEn"
            type="text"
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Description ID */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Description (ID)
          </label>
          {descId.map((desc, index) => (
            <div key={index} className="mb-4">
              <textarea
                value={desc}
                onChange={(e) => handleDescChange(e, index, "id")}
                placeholder={`Description ID #${index + 1}`}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddDescId}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Description (ID)
          </button>
        </div>

        {/* Description EN */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Description (EN)
          </label>
          {descEn.map((desc, index) => (
            <div key={index} className="mb-4">
              <textarea
                value={desc}
                onChange={(e) => handleDescChange(e, index, "en")}
                placeholder={`Description EN #${index + 1}`}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddDescEn}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Description (EN)
          </button>
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="img" className="block text-lg font-semibold mb-2">
            Image
          </label>
          <input
            id="img"
            type="file"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CountryForm;
