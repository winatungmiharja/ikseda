/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineArrowLeft, AiOutlineSend } from 'react-icons/ai';

import { StepThreeType } from '@/lib/type';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import Step from '@/components/step/Step';

import useData from '@/store/data';

import { SectionType, stepDetail } from './InputPrestasi';

export default function StepOneSection({ setStep, step }: SectionType) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const store = useData();
  const methods = useForm<StepThreeType>({
    defaultValues: store.stepThree,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, watch, getValues } = methods;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const postData = async () => {
    const url = '';
    const { stepOne, stepTwo, stepThree } = store;
    const newData = {
      stepOne,
      stepTwo,
      stepThree,
    };
    const res = await fetch(url, {
      body: JSON.stringify(newData),
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resData = await res.json();
    return resData;
  };

  function dummyPromise(delay: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  }

  const onSubmit = (data: StepThreeType, step: number) => {
    store.setStepThree(data);
    setIsLoading(true);
    dummyPromise(4000).then(() => {
      setStep(step);
      setIsLoading(false);
    });
  };

  React.useEffect(() => {
    store.setStepThree(getValues());
  }, [
    watch('pencapaian'),
    watch('tanggalMulai'),
    watch('tanggalAkhir'),
    watch('undangan'),
    watch('sertifikat'),
    watch('dokumentasi'),
  ]);

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data, step + 1))}
          className='flex flex-col flex-1 gap-2'
        >
          <Step current={step} detail={stepDetail} setStep={setStep} />

          <div>
            <label className='text-primary-200'>Pencapaian Prestasi</label>
            <div className='flex overflow-y-scroll flex-col gap-2 p-2 mb-2 max-h-44 bg-primary-200 rounded-sm border border-primary-900'>
              {[
                'Juara 1',
                'Juara 2/Runner Up',
                'Juara 3/Second Runner Up',
                'Juara Harapan 1',
                'Juara Harapan 2',
                'Most Outstanding Delegate',
                'Best Delegate',
                'Best Position Paper',
                'Best Poster Presentation',
                'Best Category',
                'Best Paper',
                'National Champion',
                'Finalis',
                'Semi Finalis',
                'Other',
              ].map((input) => (
                <Input
                  key={input}
                  type='checkbox'
                  id={'pencapaian'}
                  label={input}
                  value={input}
                  checkId={input}
                />
              ))}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
            <Input
              type='date'
              id={'tanggalMulai'}
              label={'Tanggal Mulai Pelaksanaan'}
              validation={{ required: true }}
            />
            <Input
              type='date'
              id={'tanggalAkhir'}
              label={'Tanggal Akhir Pelaksanaan'}
              validation={{ required: true }}
            />
          </div>
          <div className='grid'>
            {/* <FileInput
              id='undangan'
              label={'Foto/Scan Undangan Lomba/Kompetisi/Penghargaan'}
            />
            <FileInput
              id='undangan'
              label={
                'Foto Asli Sertifikat/Piala/Medali yang Diberikan oleh Penyelenggara'
              }
            />
            <FileInput
              id='undangan'
              label={'Foto Dokumentasi Upacara Penyerahan Penghargaan/Awarding'}
            /> */}
          </div>

          <div className='flex justify-between mt-auto'>
            <Button onClick={() => setStep(step - 1)}>
              <AiOutlineArrowLeft size={20} />
            </Button>
            <Button
              isLoading={isLoading}
              type='submit'
              icon={<AiOutlineSend size={20} />}
            >
              Kirim Data
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
