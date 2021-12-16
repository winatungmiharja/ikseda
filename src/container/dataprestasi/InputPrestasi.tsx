import * as React from 'react';

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
  const [step, setStep] = React.useState<number>(1);

  return (
    <div className='layout grid py-8 min-h-screen'>
      {step === 1 && <StepOneSection setStep={setStep} step={step} />}
      {step === 2 && <StepTwoSection setStep={setStep} step={step} />}
      {step === 3 && <StepThreeSection setStep={setStep} step={step} />}
    </div>
  );
}
