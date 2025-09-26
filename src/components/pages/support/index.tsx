'use client';
import React from 'react';
import SubscriptionModal from './BookingModal';
import { Button } from '@/components/ui/button';
import SuccessModal from './SuccessModal';

const SupportPage = () => {
  const [open, onOpenChange] = React.useState(false);
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => onOpenChange(true)} className="px-[37px] py-[13px] leading-[18px]">
        Book Now
      </Button>
      <SubscriptionModal modalProps={{ open, onOpenChange }} setOpenSuccessModal={setOpenSuccessModal} />
      <SuccessModal modalProps={{ open: openSuccessModal, onOpenChange: setOpenSuccessModal }} />
    </React.Fragment>
  );
};

export default SupportPage;
