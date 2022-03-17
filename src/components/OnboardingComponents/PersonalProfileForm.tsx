import React from "react";
import { Input } from "antd";
import {useNavigate} from 'react-router-dom'

const PersonalProfileForm = () => {
    const navigate = useNavigate()
    const handleSubmission = () => {
        navigate("/dashboard")
    }
  return (
    <div className="profile__form">
      <h5 className="mt-5 mb-3">Personal Profile</h5>
      <div className="form__groups row">
        <div className="col-md-6 mb-2">
          <div className="form__group">
            <label htmlFor="First Name">First Name</label>
            <Input size="large" type="text" placeholder="John" />
          </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="form__group">
                <label htmlFor="Last Name">Last Name</label>
                <Input type={"text"} size="large" placeholder="Doe" />
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="form__group">
                <label htmlFor="Email">Email Address</label>
                <Input type="email" size="large" placeholder="john.doe@mail.com" />
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="form__group">
                <label htmlFor="Date of Birth">Date of Birth</label>
                <Input type="date" />
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="form__group">
                <label htmlFor="Gender">Gender</label>
                <select name="gender">
                    <option hidden>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="form__group">
                <label htmlFor="phone">Phone Number</label>
                <Input type="text" size="large" placeholder="08012341234" />
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="form__group">
                <label htmlFor="nationality">Country of Residence</label>
                <Input type="text" size="large" placeholder="Nigerian" />
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="form__group">
                <label htmlFor="city">City</label>
                <Input type="text" size="large" placeholder="City of residence" />
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="form__group">
                <label htmlFor="state">State</label>
                <Input type="text" size="large" placeholder="State of residence" />
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="form__group">
                <label htmlFor="street">Street</label>
                <Input type="text" size="large" placeholder="Street" />
            </div>
        </div>
        <div className="form__group">
            <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfileForm;
