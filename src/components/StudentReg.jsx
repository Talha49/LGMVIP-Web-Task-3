import React, { useState } from "react";
import './style.css'

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    phoneNo: "",
    websiteLink: "",
    studentimage: null,
    gender: "",
    gmail: "",
  });

  const [registrations, setRegistrations] = useState([]);
  const handleChange = (e) => {
    const { value, name, type } = e.target;

    if (type === "file") {
      const imageFile = e.target.files[0];
      setFormData((prevData) => ({ ...prevData, [name]: imageFile }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRegistrations((prevRegistrations) => [...prevRegistrations, formData]);

    setFormData({
      name: "",
      rollNo: "",
      phoneNo: "",
      websiteLink: "",
      studentimage: null,
      gender: "",
      gmail: "",
    });
  };

  return (
    <div className="container">
        <div className="content">
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
     
        <label>Roll No:</label>
        <input
          type="text"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
        />

        <label>Phone No:</label>
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
        />

        <label>Website Link:</label>
        <input
          type="text"
          name="websiteLink"
          value={formData.websiteLink}
          onChange={handleChange}
        />

        <label>Student Image:</label>
        <input type="file" name="studentimage" onChange={handleChange} />
        
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option>Prefer not to say</option>
          <option value="other">Other</option>
        </select>
       
        <label>Gmail:</label>
        <input
          type="email"
          name="gmail"
          value={formData.gmail}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
      </div>
      <div className="content-map">
      {registrations.length > 0 && (
        <div className="map">
          <h2>Enrollments Details</h2>
          {registrations.map((data, index) => (
            <div className="map-data" key={index}>
              <p>Name : {data.name}</p>
              <p>Roll No : {data.rollNo}</p>
              <p>Phone No : {data.phoneNo}</p>
              <p>
          Website Link: <a href={data.websiteLink} target="_blank" rel="noopener noreferrer">{data.websiteLink}</a>
        </p>
              <p>Gender : {data.gender}</p>
              <p>G-mail : {data.gmail}</p>

              {data.studentimage && (
                <div>
                  <h2>Student Image</h2>
                  <img
                    src={URL.createObjectURL(data.studentimage)}
                    alt="Student Pic"
                    width="150px"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default App;
