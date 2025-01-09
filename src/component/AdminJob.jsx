import React, { useState, useEffect } from "react";

export const JobForm = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [jobDescId, setJobDescId] = useState({
    jobName: "",
    jobBenefit: [],
    jobQualification: [],
  });
  const [jobDescEn, setJobDescEn] = useState({
    jobName: "",
    jobBenefit: [],
    jobQualification: [],
  });
  const [salary, setSalary] = useState("");
  const [regFee, setRegFee] = useState("");
  const [status, setStatus] = useState("Open");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch country data for dropdown
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/countries");
        const data = await response.json();
        if (data.success) {
          setCountries(data.data); // Assuming data.data contains the country array
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Handle country selection
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  // Handle changes in job description fields (ID or EN)
  const handleJobDescChange = (e, lang, field) => {
    const { name, value } = e.target;
    if (lang === "id") {
      setJobDescId({ ...jobDescId, [name]: value });
    } else {
      setJobDescEn({ ...jobDescEn, [name]: value });
    }
  };

  // Handle add/remove of job benefits or qualifications
  const handleAddJobBenefit = (lang) => {
    if (lang === "id") {
      setJobDescId({ ...jobDescId, jobBenefit: [...jobDescId.jobBenefit, ""] });
    } else {
      setJobDescEn({ ...jobDescEn, jobBenefit: [...jobDescEn.jobBenefit, ""] });
    }
  };

  const handleAddJobQualification = (lang) => {
    if (lang === "id") {
      setJobDescId({
        ...jobDescId,
        jobQualification: [...jobDescId.jobQualification, ""],
      });
    } else {
      setJobDescEn({
        ...jobDescEn,
        jobQualification: [...jobDescEn.jobQualification, ""],
      });
    }
  };

  // Handle input change for dynamic fields (e.g., jobBenefit, jobQualification)
  const handleDynamicChange = (e, lang, type, index) => {
    const { value } = e.target;
    if (lang === "id") {
      const updatedArray = [...jobDescId[type]];
      updatedArray[index] = value;
      setJobDescId({ ...jobDescId, [type]: updatedArray });
    } else {
      const updatedArray = [...jobDescEn[type]];
      updatedArray[index] = value;
      setJobDescEn({ ...jobDescEn, [type]: updatedArray });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty dynamic fields
    const hasEmptyField = [
      ...jobDescId.jobBenefit,
      ...jobDescEn.jobBenefit,
      ...jobDescId.jobQualification,
      ...jobDescEn.jobQualification,
    ].some((field) => field === "");

    if (hasEmptyField) {
      setErrorMessage("All dynamic fields must be filled.");
      return;
    }

    // Ensure that regFee and salary are numbers
    const jobData = {
      country: selectedCountry,
      jobDescId: {
        ...jobDescId,
      },
      jobDescEn: {
        ...jobDescEn,
      },
      salary: Number(salary) || 0, // Ensure it's a number
      regFee: Number(regFee) || 0, // Ensure it's a number
      status,
    };

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/job/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      const responseData = await response.json();
      setLoading(false);

      if (response.ok) {
        alert("Job posted successfully!");
        // Reset form after success
        setSelectedCountry("");
        setJobDescId({
          jobName: "",
          jobBenefit: [],
          jobQualification: [],
        });
        setJobDescEn({
          jobName: "",
          jobBenefit: [],
          jobQualification: [],
        });
        setSalary(""); // Reset salary
        setRegFee(""); // Reset regFee
        setStatus("Open"); // Reset status
        setErrorMessage(""); // Clear any previous error message
      } else {
        setErrorMessage(responseData.message || "Error posting job.");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Country Dropdown */}
        <div>
          <label htmlFor="country" className="block text-lg font-semibold mb-2">
            Select Country
          </label>
          <select
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country._id} value={country._id}>
                {country.nameEn} {/* Display the name in English */}
              </option>
            ))}
          </select>
        </div>

        {/* Job Name (Indonesian) */}
        <div>
          <label
            htmlFor="jobNameId"
            className="block text-lg font-semibold mb-2"
          >
            Job Name (ID)
          </label>
          <input
            type="text"
            id="jobNameId"
            name="jobName"
            value={jobDescId.jobName}
            onChange={(e) => handleJobDescChange(e, "id", "jobName")}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Job Name (English) */}
        <div>
          <label
            htmlFor="jobNameEn"
            className="block text-lg font-semibold mb-2"
          >
            Job Name (EN)
          </label>
          <input
            type="text"
            id="jobNameEn"
            name="jobName"
            value={jobDescEn.jobName}
            onChange={(e) => handleJobDescChange(e, "en", "jobName")}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Job Benefits (Indonesian) */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Job Benefits (ID)
          </label>
          {jobDescId.jobBenefit.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={benefit}
                onChange={(e) =>
                  handleDynamicChange(e, "id", "jobBenefit", index)
                }
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddJobBenefit("id")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Benefit (ID)
          </button>
        </div>

        {/* Job Benefits (English) */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Job Benefits (EN)
          </label>
          {jobDescEn.jobBenefit.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={benefit}
                onChange={(e) =>
                  handleDynamicChange(e, "en", "jobBenefit", index)
                }
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddJobBenefit("en")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Benefit (EN)
          </button>
        </div>

        {/* Job Qualifications (Indonesian) */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Job Qualifications (ID)
          </label>
          {jobDescId.jobQualification.map((qualification, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={qualification}
                onChange={(e) =>
                  handleDynamicChange(e, "id", "jobQualification", index)
                }
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddJobQualification("id")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Qualification (ID)
          </button>
        </div>

        {/* Job Qualifications (English) */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Job Qualifications (EN)
          </label>
          {jobDescEn.jobQualification.map((qualification, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={qualification}
                onChange={(e) =>
                  handleDynamicChange(e, "en", "jobQualification", index)
                }
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddJobQualification("en")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Qualification (EN)
          </button>
        </div>

        {/* Salary and Registration Fee */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Salary & Registration Fee (ID)
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="salaryId"
                className="block text-sm font-semibold mb-2"
              >
                Salary (ID)
              </label>
              <input
                type="number"
                id="salaryId"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="regFeeId"
                className="block text-sm font-semibold mb-2"
              >
                Registration Fee (ID)
              </label>
              <input
                type="number"
                id="regFeeId"
                value={regFee}
                onChange={(e) => setRegFee(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-lg font-semibold mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="text-red-600 text-sm">{errorMessage}</div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit Job"}
          </button>
        </div>
      </form>
    </div>
  );
};
