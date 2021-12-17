/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { StepOneType } from '@/lib/type';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import SelectInput from '@/components/input/SelectInput';
import Step from '@/components/step/Step';

import useData from '@/store/data';

import { SectionType, stepDetail } from './InputPrestasi';

export default function StepOneSection({ setStep, step }: SectionType) {
  const store = useData();
  const methods = useForm<StepOneType>({
    defaultValues: store.stepOne,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, watch, getValues } = methods;

  const onSubmit = (data: StepOneType, step: number) => {
    store.setStepOne(data);
    setStep(step);
  };

  React.useEffect(() => {
    store.setStepOne(getValues());
  }, [
    watch('email'),
    watch('pengisi'),
    watch('nama'),
    watch('line'),
    watch('npm'),
    watch('hp'),
    watch('jurusan'),

    watch('kegiatan'),
  ]);

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data, step + 1))}
          className='flex flex-col flex-1 gap-2'
        >
          <Step current={step} detail={stepDetail} setStep={setStep} />

          <SelectInput
            id='pengisi'
            label='Pengisi Formulir'
            validation={{ required: true }}
          >
            {['Saya sendiri', 'Anggota Tim', 'Lainnya'].map((tahun) => (
              <option value={tahun} key={tahun}>
                {tahun}
              </option>
            ))}
          </SelectInput>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
            <Input id={'nama'} label={'Nama'} validation={{ required: true }} />
            <Input
              type='number'
              id={'npm'}
              label={'NPM'}
              validation={{ required: true }}
            />
          </div>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
            <Input
              type='email'
              id={'email'}
              label={'Email'}
              validation={{ required: true, pattern: /^\S+@\S+$/i }}
            />
            <Input
              id={'line'}
              label={'ID Line'}
              validation={{ required: true }}
            />

            <Input
              type='number'
              id={'hp'}
              label={'No.Hp'}
              validation={{ required: true, pattern: /^08\d{9,10}$/g }}
            />
          </div>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
            <SelectInput
              id='jurusan'
              label='Jurusan'
              validation={{ required: true }}
            >
              {[
                'Akuntansi',
                'Manajemen',
                'Ilmu Ekonomi',
                'Ilmu Ekonomi Islam',
                'Bisnis Islam',
              ].map((tahun) => (
                <option value={tahun} key={tahun}>
                  {tahun}
                </option>
              ))}
            </SelectInput>

            <SelectInput
              id='kegiatan'
              label='Bidang Kegiatan'
              validation={{ required: true }}
            >
              {['Ilmiah', 'Olahraga', 'Seni'].map((bidang) => (
                <option value={bidang} key={bidang}>
                  {bidang}
                </option>
              ))}
            </SelectInput>
          </div>

          <div className='mt-auto ml-auto'>
            <Button type='submit' icon={<AiOutlineArrowRight size={20} />}>
              Selanjutnya
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
