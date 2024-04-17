import React from 'react';
import './Services.css';
import { 
  AssignmentInd as AdmissionIcon,
  EventSeat as SeatIcon,
  School as CareerIcon,
  MonetizationOn as LoanIcon,
  Info as InfoIcon,
  EmojiObjects as GuidanceIcon
} from '@mui/icons-material';

function Services() {
  const servicesList = [
    {
      title: "Admission Assistance",
      description: "We provide expert assistance to help you navigate the admission process smoothly.",
      icon: <AdmissionIcon />
    },
    {
      title: "Seat Reservation",
      description: "Secure your seat in your desired college or university hassle-free with our reservation service.",
      icon: <SeatIcon />
    },
    {
      title: "Career Counseling",
      description: "Our experienced counselors will guide you to make informed decisions about your career path.",
      icon: <CareerIcon />
    },
    {
      title: "Loan Assistance",
      description: "Get help in obtaining financial aid and loans to support your education journey.",
      icon: <LoanIcon />
    },
    {
      title: "College Information",
      description: "Access comprehensive information about various colleges and universities to make the right choice.",
      icon: <InfoIcon />
    },
    {
      title: "Admission Guidance",
      description: "Receive personalized guidance and support throughout the admission process.",
      icon: <GuidanceIcon />
    }
  ];

  return (
    <div className="services-container">
      <div className="services-list">
        {servicesList.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-content">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
