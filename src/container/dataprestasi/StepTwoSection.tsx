/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { StepTwoType } from '@/lib/type';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import SelectInput from '@/components/input/SelectInput';
import Step from '@/components/step/Step';

import useData from '@/store/data';

import { SectionType, stepDetail } from './InputPrestasi';

export default function StepOneSection({ setStep, step }: SectionType) {
  const store = useData();
  const methods = useForm<StepTwoType>({
    defaultValues: store.stepTwo,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, watch, getValues } = methods;

  const onSubmit = (data: StepTwoType, step: number) => {
    store.setStepTwo(data);
    setStep(step);
  };
  React.useEffect(() => {
    store.setStepTwo(getValues());
  }, [
    watch('keikutsertaan'),
    watch('tim'),
    watch('kategori'),
    watch('pesertaNasional'),
    watch('pesertaInternasional'),
    watch('namaKegiatan'),
    watch('jumlahPeserta'),
    watch('penyelenggara'),
    watch('website'),
  ]);

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data, step + 1))}
          className='flex flex-col flex-1 gap-2'
        >
          <Step current={step} detail={stepDetail} setStep={setStep} />
          <Input
            id={'namaKegiatan'}
            label={'Nama Kegiatan'}
            validation={{ required: true }}
          />
          <div className='grid grid-flow-col gap-2'>
            <SelectInput
              id='keikutsertaan'
              label='Keikutsertaan Kegiatan'
              validation={{ required: true }}
            >
              {['Individu', 'Tim'].map((tahun) => (
                <option value={tahun} key={tahun}>
                  {tahun}
                </option>
              ))}
            </SelectInput>
            {getValues('keikutsertaan') === 'Tim' && (
              <Input
                id={'tim'}
                label={'Nama Anggota Tim Lainnya (Apabila Dilakukan dalam Tim)'}
                validation={{ required: true }}
              />
            )}
          </div>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
            <SelectInput
              id='kategori'
              label='Kategori Kegiatan'
              validation={{ required: true }}
            >
              {['Nasional', 'Internasional'].map((tahun) => (
                <option value={tahun} key={tahun}>
                  {tahun}
                </option>
              ))}
            </SelectInput>
            {getValues('kategori') === 'Nasional' && (
              <SelectInput
                id='pesertaNasional'
                label='Peserta Kegiatan Nasional'
                validation={{ required: true }}
              >
                {['10 - 30 Perguruan Tinggi', '> 30 Perguruan Tinggi'].map(
                  (tahun) => (
                    <option value={tahun} key={tahun}>
                      {tahun}
                    </option>
                  )
                )}
              </SelectInput>
            )}
            {getValues('kategori') === 'Internasional' && (
              <SelectInput
                id='pesertaInternasional'
                label='Peserta Kegiatan Internasional'
                validation={{ required: true }}
              >
                {['3 - 10 Negara', '11 - 19 Negara', '> 20 Negara'].map(
                  (tahun) => (
                    <option value={tahun} key={tahun}>
                      {tahun}
                    </option>
                  )
                )}
              </SelectInput>
            )}
            <SelectInput
              id='jumlahPeserta'
              label='Jumlah Peserta'
              validation={{ required: true }}
            >
              {['< 4', '4 - 9', '10 - 19', '20 - 29', '> 30'].map((tahun) => (
                <option value={tahun} key={tahun}>
                  {tahun}
                </option>
              ))}
            </SelectInput>
          </div>

          <Input
            id={'penyelenggara'}
            label={'Penyelenggara Kegiatan'}
            validation={{ required: true }}
          />
          <Input
            id={'website'}
            label={'Website / Link Media Sosial Kegiatan'}
            helperText='website harus berupa link/domain'
            validation={{
              required: true,
              pattern:
                /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
            }}
          />
          <div className='flex justify-between mt-auto'>
            <Button onClick={() => setStep(step - 1)}>
              <AiOutlineArrowLeft size={20} />
            </Button>
            <Button type='submit' icon={<AiOutlineArrowRight size={20} />}>
              Selanjutnya
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
