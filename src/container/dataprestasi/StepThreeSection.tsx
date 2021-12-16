/* eslint-disable react-hooks/exhaustive-deps */
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { motion } from 'framer-motion';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineArrowLeft, AiOutlineSend } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

import { postDataToNotion } from '@/lib/fetch';
import { StepThreeType } from '@/lib/type';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import Step from '@/components/step/Step';

import { storage } from '@/../firebase/initFirebase';
import useData from '@/store/data';

import { SectionType, stepDetail } from './InputPrestasi';

type UrlArrayType = [string, string, string];
export default function StepOneSection({ setStep, step }: SectionType) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<string>('');

  const store = useData();
  const methods = useForm<StepThreeType>({
    defaultValues: store.stepThree,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, watch, getValues } = methods;

  const uploadToFirebase = async (image: File, folder: string) => {
    const uploadTask = ref(storage, `${folder}/${image.name}`);
    const uploadImage = uploadBytes(uploadTask, image);
    const url = await uploadImage.then((snapshot) =>
      getDownloadURL(snapshot.ref)
    );
    return url;
  };

  const uploadAllImages = async () => {
    try {
      if (
        store.stepThree.undangan &&
        store.stepThree.sertifikat &&
        store.stepThree.dokumentasi
      ) {
        const undangan = await uploadToFirebase(
          store.stepThree.undangan[0],
          'undangan'
        );
        const sertifikat = await uploadToFirebase(
          store.stepThree.sertifikat[0],
          'sertifikat'
        );
        const dokumentasi = await uploadToFirebase(
          store.stepThree.dokumentasi[0],
          'dokumentasi'
        );

        const imagesUrl = await Promise.all([
          undangan,
          sertifikat,
          dokumentasi,
        ]);
        return { url: await imagesUrl, success: true };
      }
    } catch (error) {
      return { url: '', success: false, message: error };
    }
  };

  const onSubmit = async (data: StepThreeType) => {
    store.setStepThree(data);
    setIsLoading(true);
    const resImage = await uploadAllImages();
    if (resImage?.success) {
      setSuccess('Upload berhasil, Mengirimkan data ...');
      uploadToNotion(resImage.url as UrlArrayType);
    } else errorState();
  };

  const uploadToNotion = async (imageUrl: UrlArrayType) => {
    const res = await postDataToNotion(
      store.stepOne,
      store.stepTwo,
      store.stepThree,
      imageUrl
    );
    if (res.success) {
      successState('Data Berhasil Dikirimkan');
    } else {
      errorState();
    }
  };

  const successState = (msg: string) => {
    setSuccess(msg);
    resetState();
  };

  const errorState = () => {
    setError(true);
    resetState();
  };

  const resetState = () => {
    store.resetData();
    setIsLoading(false);
    setTimeout(() => {
      setStep(1);
      setError(false);
      setSuccess('');
    }, 2000);
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
          onSubmit={handleSubmit((data) => onSubmit(data))}
          className='flex flex-col flex-1 gap-2'
        >
          <Step
            current={step}
            detail={stepDetail}
            setStep={setStep}
            disabled={isLoading}
          />

          {success && (
            <motion.div
              initial={{ y: 20 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              }}
              className='absolute right-0 -bottom-12 p-1 text-center bg-primary-600 rounded-sm shadow-inner'
            >
              <div className='flex gap-1 items-center px-2 py-1 text-primary-200 rounded-sm border border-primary-900 border-dashed'>
                <p>{success}</p>
                <TiTickOutline size={25} />
              </div>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ y: 20 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              }}
              className='absolute right-0 -bottom-12 p-1 text-center bg-red-700 rounded-sm shadow-inner'
            >
              <div className='flex gap-1 items-center px-2 py-1 text-primary-200 rounded-sm border border-primary-900 border-dashed'>
                <p>An Error Occured :(</p>
              </div>
            </motion.div>
          )}
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

          <Input
            type='file'
            accept='image/*'
            id={'undangan'}
            label={'Foto/Scan Undangan Lomba/Kompetisi/Penghargaan'}
            validation={{ required: true }}
          />

          <Input
            type='file'
            accept='image/*'
            id={'sertifikat'}
            label={
              'Foto Asli Sertifikat/Piala/Medali yang Diberikan oleh Penyelenggara'
            }
            validation={{ required: true }}
          />
          <Input
            type='file'
            accept='image/*'
            id={'dokumentasi'}
            label={'Foto Dokumentasi Upacara Penyerahan Penghargaan/Awarding'}
            validation={{ required: true }}
          />

          <div className='flex justify-between mt-auto'>
            <Button onClick={() => setStep(step - 1)} disabled={isLoading}>
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
