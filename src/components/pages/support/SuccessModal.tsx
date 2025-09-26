'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogProps
} from '@/components/ui/dialog';

interface SuccessModal {
  modalProps: DialogProps;
}

const SuccessModal = (props: SuccessModal) => {
  const { modalProps } = props;

  return (
    <Dialog {...modalProps}>
      <DialogContent containerClassName="md:max-w-xl" className="lg:space-y-6">
        <DialogHeader className="space-y-3">
          <DialogTitle className="font-normal">Your form has been submitted.</DialogTitle>
          <DialogDescription className="pr-4 md:pr-12">
            We appreciate you taking a moment to request an appointment, we don’t have this feature live at
            the moment but will reach out once it is available.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
