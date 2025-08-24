import React, { useState } from 'react';
import InputField from '../components/forms/InputField';
import RadioInput from '../components/forms/radioBtn';
import Button from '../components/forms/button';
import SelectInput from '../components/forms/SelectInput';
import TextAreaInput from '../components/forms/TextAreaInput';
import FileUploadInput from '../components/forms/FileUploadInput';
import { registerService } from '../services/blcEventService';
import Swal from 'sweetalert2';
import Modal from '../components/Modal';

const initialFormData = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  company_name: '',
  city: '',
  state: '',
  dob: '',
  logo: null,
  image: null,
  attendance_type: '',
  attendance_objective: '',
  attend_before: '',
  interested_session: '',
  want_to_volunteer: '',
  will_you_recommend_someone: '',
  topic_you_want_us_to_discuss: '',
  suggets_speaker: '',
  suggest_improvement_for_future_event: '',
  how_did_you_hear_about_us: '',
  interest_in_sponsorship: '',
  preferred_social_media: '',
  preferred_means_of_communication: '',
};

const preferredSocialMediaOptions = [
  'LinkedIn',
  'Twitter',
  'Facebook',
  'Instagram',
  'Youtube',
  'Tiktok',
  'Snapchat',
  'WhatsApp'
];

const howDidYouAboutUsOptions = [
  'Social Media',
  'Email Newsletter',
  'Website',
  'Colleague/Friend',
  'Online Advertisement',
  'Print Advertisement',
  'Other',
];

const attendanceObjectivesOptions = [
  'Networking',
  'Learning/Professional Development',
  'Business Opportunities',
  'Hearing Specific Speakers',
  'Other'
];

const RegisterPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? (files?.[0] || null) : value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setIsLoading(true);

    try {
      Swal.fire({
        icon: 'info',
        title: "Submitting!",
        text: "Submitting your registration, please wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      });

      const formDataToSend = new FormData();

      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== '') {
          formDataToSend.append(key, formData[key]);
        }
      });

      formDataToSend.append("state_and_town", `${formData.city}, ${formData.state}`);

      await registerService(formDataToSend);
      setFormData(initialFormData);

      Swal.fire({
        icon: "success",
        title: "Registration Successful 🎉",
        text: "Welcome onboard!",
      }).then(() => {
        setShowModal(true);
      });

    } catch (error) {
      console.log("Error submitting: ", error);
      Swal.fire({
        icon: 'error',
        title: "Error!",
        text: error.response.data.message ?? error.message ?? "Registration failed, contact support!"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <span>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Complete Your Registration"
        children={
          <>
            <p className="mb-3">
              🎉 Congratulations on successfully registering! To complete your
              registration, kindly make payment using the details below:
            </p>

            <div className="primary-bg-light text-white p-4 rounded-lg mb-4">
              <p>
                <strong>Account Name:</strong> SABI CORPORATE LIMITED

              </p>
              <p>
                <strong>Account Number:</strong> 0098645935
              </p>
              <p>
                <strong>Bank Name:</strong> STERLING BANK
              </p>
            </div>

            <p className="mb-2">Once you’ve made your payment, please send proof of payment via:</p>

            <ul className="list-disc ml-6 mb-4">
              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/2347069412942"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  +234 706 941 2942
                </a>
              </li>
              <li>
                Call:{" "}
                <span className="font-semibold">+234 706 941 2942</span>
              </li>
            </ul>

            <p className="text-sm text-gray-500">
              ⚠️ Ensure you keep your proof of payment safe until your registration is confirmed.
            </p>
          </>
        }
      ></Modal>

      <div className='flex justify-center md:space-x-10 space-x-2 md:p-0 p-5'>
        <Button
          text="Confirm Registration"
          bgClass="primary-bg-light"
        />

        <Button
          text="Account Information"
          onClick={() => setShowModal(true)}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="px-4 sm:px-6 py-10 bg-white shadow-lg rounded-lg space-y-10 mx-auto max-w-6xl"
      >
        <fieldset>
          <legend className=" primary-text-light text-2xl font-semibold mb-4">Basic Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <InputField label="First Name" name="firstname" value={formData.firstname} onChange={handleChange} required />
            <InputField label="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <InputField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
            <InputField label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <InputField label="Company/Business/Organization" name="company_name" value={formData.company_name} onChange={handleChange} />
            <InputField label="Town / City" name="city" value={formData.city} onChange={handleChange} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <InputField label="State" name="state" value={formData.state} onChange={handleChange} required />
            <InputField type="date" label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <FileUploadInput
              label="Corporate Picture"
              name="image"
              file={formData.image}
              setFormData={setFormData}
              onChange={handleChange}
              buttonText="Upload Picture"
              previewText="Upload Picture"
              className="mb-10 md:mb-0"
            />

            <FileUploadInput
              label="Company Logo"
              name="logo"
              file={formData.logo}
              setFormData={setFormData}
              onChange={handleChange}
              buttonText="Upload Logo"
              previewText="Upload Logo"
            />
          </div>
        </fieldset>

        {/* ================= EXPECTATIONS ================= */}
        <fieldset>
          <legend className="primary-text-light text-2xl font-semibold mb-4">Expectations and Feedback</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <RadioInput
              label="Are you attending onsite or online?"
              name="attendance_type"
              options={[
                { value: "online", label: 'Online' },
                { value: "onsite", label: 'Onsite' }
              ]}
              selectedValue={formData.attendance_type}
              onChange={handleChange}
              required
            />
            <RadioInput
              label="Have you attended our events before?"
              name="attend_before"
              options={[
                { value: 0, label: 'No' },
                { value: 1, label: 'Yes' }
              ]}
              selectedValue={formData.attend_before}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <RadioInput
              label="What Are Your Main Objectives for Attending this Event?"
              options={attendanceObjectivesOptions}
              name="attendance_objective"
              selectedValue={formData.attendance_objective}
              onChange={handleChange}
              required
            />

            <RadioInput
              label="Would you like to volunteer or speak at future events?"
              name="want_to_volunteer"
              options={['Yes', 'No', 'Not Sure']}
              selectedValue={formData.want_to_volunteer}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <RadioInput
              label="Would you recommend this event to someone?"
              name="will_you_recommend_someone"
              options={[
                { value: 0, label: "No" },
                { value: 1, label: "Yes" },
              ]}
              selectedValue={formData.will_you_recommend_someone}
              onChange={handleChange}
              required
            />

            <RadioInput
              label="Which Sessions Are You Most Interested In?"
              name="interested_session"
              options={
                ['Keynote Speakers’ Sessions', 'Panel Discussions', 'Workshops',
                  'Networking Sessions'
                ]}
              selectedValue={formData.interested_session}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <InputField
              label="Topic of Discourse"
              name="topic_you_want_us_to_discuss"
              value={formData.topic_you_want_us_to_discuss}
              onChange={handleChange}
              required
            />

            <InputField
              label="Speaker Suggestion"
              name="suggets_speaker"
              value={formData.suggets_speaker}
              onChange={handleChange}
              required
            />
          </div>

          <TextAreaInput
            label="Suggestions for Improvement"
            name="suggest_improvement_for_future_event"
            value={formData.suggest_improvement_for_future_event}
            onChange={handleChange}
            required
          />

        </fieldset>

        {/* ================= MARKETING ================= */}
        <fieldset>
          <legend className=" primary-text-light text-2xl font-semibold mb-4">Marketing and Outreach</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <RadioInput
              label="How Did You Hear About This Event?"
              name="how_did_you_hear_about_us"
              options={howDidYouAboutUsOptions}
              selectedValue={formData.how_did_you_hear_about_us}
              onChange={handleChange}
              required
            />
            <RadioInput
              label="Preferred Social Media Platform"
              name="preferred_social_media"
              options={preferredSocialMediaOptions}
              selectedValue={formData.preferred_social_media}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <RadioInput
              label="Interested in Sponsorship Opportunities?"
              name="interest_in_sponsorship"
              options={['Yes', 'No', 'Maybe']}
              selectedValue={formData.interest_in_sponsorship}
              onChange={handleChange}
              required
            />
            <RadioInput
              label="Preferred Method of Communication"
              name="preferred_means_of_communication"
              options={['Email', 'Phone', 'Text Message']}
              selectedValue={formData.preferred_means_of_communication}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>

        {/* ================= SUBMIT ================= */}
        <div className="text-center">
          <Button
            type="submit"
            bgClass="primary-bg-light"
            disabled={isLoading} text={isLoading ? 'Registering...' : 'Submit Registration'} />
        </div>
      </form>
    </span>
  );
};

export default RegisterPage;
