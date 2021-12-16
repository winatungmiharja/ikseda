import { StepOneType, StepThreeType, StepTwoType } from './type';

export const postDataToNotion = async (
  stepOne: StepOneType,
  stepTwo: StepTwoType,
  stepThree: StepThreeType,
  imageUrl: [string, string, string]
) => {
  const newData = {
    user: stepOne,
    kegiatan: {
      ...stepTwo,
      tim: stepTwo.keikutsertaan === 'Tim' ? stepTwo.tim : 'tidak ada',
      peserta:
        stepTwo.kategori === 'Nasional'
          ? stepTwo.pesertaNasional
          : stepTwo.pesertaInternasional,
    },
    data: {
      pencapaian: stepThree.pencapaian,
      tanggalMulai: stepThree.tanggalMulai,
      tanggalAkhir: stepThree.tanggalAkhir,
    },
    dokumen: {
      undangan: imageUrl[0],
      sertifikat: imageUrl[1],
      dokumentasi: imageUrl[2],
    },
  };

  const res = await fetch('http://localhost:3000/api/achievements', {
    method: 'POST',
    body: JSON.stringify(newData),
  });
  if (res.status === 201) {
    return { success: true };
  } else {
    return { success: false };
  }
};
