import React from 'react';
import Container from '../../../Component/Container/Container';
import tracking from '../../../assets/live-tracking.png'
import delivery from '../../../assets/safe-delivery.png'
import bookingIcon from '../../../assets/bookingIcon.png'
import FeatureHomeCard from './FeatureHomeCard';



const features = [
  {
    id: 1,
    img: tracking,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
  },
  {
    id: 2,
    img: bookingIcon,
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    id: 3,
    img: delivery,
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];
const FeatureHome = () => {
    return (
        <Container className='flex flex-col gap-8 my-20 '>
            {
                features?.map(feature=>(
                <FeatureHomeCard key={feature.id} feature={feature}></FeatureHomeCard>
                ))
            }
        </Container>
    );
};

export default FeatureHome;