import create from 'zustand';

import { StepOneType, StepThreeType, StepTwoType } from '@/lib/type';

type DataStore = {
  stepOne: StepOneType;
  stepTwo: StepTwoType;
  stepThree: StepThreeType;
  setStepOne(data: StepOneType): void;
  setStepTwo(data: StepTwoType): void;
  setStepThree(data: StepThreeType): void;
  resetData(): void;
};

const initialValueStepOne: StepOneType = {
  email: '',
  pengisi: 'Saya sendiri',
  nama: '',
  line: '',
  npm: '',
  hp: '',
  jurusan: 'Akuntansi',
  angkatan: '2016',
  kegiatan: 'Ilmiah',
};

const initialValueStepTwo: StepTwoType = {
  keikutsertaan: 'Individu',
  tim: '',
  kategori: 'Nasional',
  pesertaNasional: '10 - 30 Perguruan Tinggi',
  pesertaInternasional: '3 - 10 Negara',
  namaKegiatan: '',
  jumlahPeserta: '4 - 9',
  penyelenggara: '',
  website: '',
};

const initialValueStepThree: StepThreeType = {
  pencapaian: '',
  tanggalMulai: null,
  tanggalAkhir: null,
  undangan: null,
  sertifikat: null,
  dokumentasi: null,
};

const useData = create<DataStore>((set) => ({
  stepOne: initialValueStepOne,
  stepTwo: initialValueStepTwo,
  stepThree: initialValueStepThree,
  setStepOne(data: StepOneType) {
    set((state) => ({ ...state, stepOne: data }));
  },
  setStepTwo(data: StepTwoType) {
    set((state) => ({ ...state, stepTwo: data }));
  },
  setStepThree(data: StepThreeType) {
    set((state) => ({ ...state, stepThree: data }));
  },
  resetData() {
    set((state) => ({
      ...state,
      stepOne: initialValueStepOne,
      stepTwo: initialValueStepTwo,
      stepThree: initialValueStepThree,
    }));
  },
}));

export default useData;
