import * as React from 'react';

import Button from '@/components/button/Button';

import useData from '@/store/data';

import StepOneSection from './StepOneSection';
import StepThreeSection from './StepThreeSection';
import StepTwoSection from './StepTwoSection';

export const stepDetail = [
  'Pendataan Mahasiswa',
  'Pendataan Kompetisi',
  'Finalisasi',
];

export type SectionType = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
};

export default function InputPrestasi() {
  const [step, setStep] = React.useState<number>(4);

  const store = useData();
  const resetData = () => {
    setStep(1);
    store.resetData();
  };

  return (
    <div className='layout grid py-8 min-h-screen'>
      {step === 1 && <StepOneSection setStep={setStep} step={step} />}
      {step === 2 && <StepTwoSection setStep={setStep} step={step} />}
      {step === 3 && <StepThreeSection setStep={setStep} step={step} />}
      {step === 4 && (
        <>
          <div className='overflow-x-scroll bg-primary-100'>
            <div className='p-4 text-left'>
              <p>{JSON.stringify({ stepOne: store.stepOne })}</p>
              <br />
              {JSON.stringify({ stepTwo: store.stepTwo })}
              <br />
              {JSON.stringify({ stepThree: store.stepThree })}
            </div>
          </div>
          <div className='mx-auto mt-4'>
            <Button onClick={resetData}>Start Over</Button>
          </div>
        </>
      )}
    </div>
  );
}
