'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Checkbox from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogProps
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { emailRegex } from '@/lib/regex';
import { Controller, useForm } from 'react-hook-form';

interface BookingModal {
  modalProps: DialogProps;
  setOpenSuccessModal: (x: boolean) => void;
}

interface BookingForm {
  name: string;
  email: string;
  topics: string[];
  otherTopic: string;
}

const otherTopic = 'Other';
const topics = [
  'Health concern',
  'Life transition',
  'Finance concern',
  'Planning for myself',
  'Lifestyle concern',
  'Planning for loved one',
  'Housing concern',
  otherTopic
];

const BookingModal = (props: BookingModal) => {
  const { modalProps, setOpenSuccessModal } = props;
  const [error, setError] = React.useState<string | null>(null);

  const {
    reset,
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<BookingForm>({ defaultValues: { topics: [] } });

  const selectedTopics = watch('topics');
  const hasOther = selectedTopics?.includes(otherTopic);

  React.useEffect(() => {
    return () => {
      reset();
      setError(null);
    };
  }, [modalProps?.open, reset]);

  const onSubmit = async (data: BookingForm) => {
    setError(null);

    try {
      const hutk = typeof document !== 'undefined' ? document.cookie.split('; ').find(c => c.startsWith('hubspotutk='))?.split('=')[1] : undefined;
      const pageUri = window.location.href;
      const pageName = document.title;

      const payload = {
        ...data,    
        hutk,
        pageUri,
        pageName
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);

      reset();

      setTimeout(() => {
        modalProps?.onOpenChange && modalProps.onOpenChange(false);
        setOpenSuccessModal(true);
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <Dialog {...modalProps}>
      <DialogContent className="lg:space-y-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="font-normal">Request to Schedule an Appointment</DialogTitle>
          <DialogDescription>Provide some additional details to request your appointment.</DialogDescription>
        </DialogHeader>

        <form className="space-y-2 lg:space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-2">
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              {...register('name', {
                required: 'Name is required'
              })}
              className="py-0"
              error={errors?.name?.message?.toString()}
              showErrorOnField
            />

            <Input
              type="text"
              label="Email Address"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: emailRegex,
                  message: 'Please enter valid email'
                }
              })}
              className="py-0"
              error={errors?.email?.message?.toString()}
              showErrorOnField
            />
          </div>

          <div className="space-y-3 lg:space-y-4">
            <h3 className="tracking-wide text-sm lg:text-md">
              Select the topics you would like to discuss from the list below
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 lg:gap-y-3">
              {topics.map((topic, i) => (
                <div key={topic} className="flex items-center gap-3 lg:gap-4">
                  <Controller
                    name="topics"
                    control={control}
                    render={({ field }) => {
                      const isChecked = field.value?.includes(topic);

                      return (
                        <Checkbox
                          id={`check_${i}`}
                          checked={isChecked}
                          onCheckedChange={() => {
                            const newTopics = isChecked
                              ? field.value.filter(t => t !== topic)
                              : [...field.value, topic];
                            field.onChange(newTopics);
                          }}
                        />
                      );
                    }}
                  />

                  <label htmlFor={`check_${i}`} className="cursor-pointer tracking-tight text-sm">
                    {topic}
                  </label>
                  {topic === otherTopic && (
                    <Input
                      type="text"
                      label="Specify Topic"
                      hideLabel
                      placeholder="Please specify"
                      {...register('otherTopic', {
                        required: hasOther && 'Field is required'
                      })}
                      parentClassName="py-0"
                      className="py-0.5"
                      error={errors?.otherTopic?.message?.toString()}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-danger-shade border border-danger/30 rounded-md animate-in fade-in zoom-in-95 duration-400">
              <p className="text-sm text-danger/75">{error || 'Someting went wrong...'}</p>
            </div>
          )}

          <div className="mt-4 lg:mt-6 flex justify-end">
            <Button
              type="submit"
              isLoading={isSubmitting}
              loadingText="Submitting..."
              className="text-md px-10 py-2">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
