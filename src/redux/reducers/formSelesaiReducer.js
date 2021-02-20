import produce from 'immer';
import {
  FILL_FORM_N1,
  FILL_FORM_N2,
  FILL_FORM_N3,
  FILL_FORM_N4
} from "../actions/formSelesaiActions";

const initialState = {
  nomorSurat: '1424-4552-5225-6335-5225',
  lokasi: {
    kelurahan: 'Margorejo',
    kecamatan: 'Wonocolo',
    kota: 'Surabaya'
  },
  dataDiri: {
    namaLengkap: 'Imanuddin Ardian Hermawan',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Blitar',
    tanggalLahir: {
      hari: '17',
      bulan: '8',
      tahun: '2001'
    },
    warganegara: 'indonesia',
    agama: 'islam',
    pekerjaan: 'it developer',
    tempatTinggal: 'Margorejo 31 A, Surabaya',
    ayah: 'Fajar Hermawan',
    statusPerkawinan: 'perjaka',
    namaMantan: 'tidak ada'
  },
  ricianSurat: {
    tempatPembuatan: 'Surabaya',
    waktuPembuatan: '28 Desember 2020',
    kepalaDinas: 'Amer Al Barqawi'
  },
  formN1: {
    namaKeluargaPria: 'ardian',
    namaPanggilanPria: 'ardian',
    tanggalLahirPria : {
      day : 17,
      month: 8,
      year: 2001,
    },
    tempatLahirPria: 'Blitar',
    pekerjaanPria: 'a',
    tempatTinggalPria: 'a',
    tempatTinggalDahuluPria: 'a',
    mantanIstri: 'a',
    mantanAnakPria: 'a',

    //Wanita
    namaKeluargaWanita: 'yoshi',
    namaPanggilanWanita: 'password',
    tanggalLahirWanita : new Date(),
    tempatLahirWanita: 'a',
    pekerjaanWanita: 'a',
    tempatTinggalWanita: 'a',
    tempatTinggalDahuluWanita: 'a',
    mantanSuami: 'a',
    mantanAnakWanita: 'a',
  },
  //Data ayah
  formN2: {

  },
  //Data Ibu
  formN3: {

  },
  //Data Saksi
  formN4: {}
}

const formSelesaiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_FORM_N1: {
      const { data } = action.payload;
      const { tanggalLahirPria } = data;
      const day = tanggalLahirPria.date.getDate();
      const month = tanggalLahirPria.date.getMonth();
      const year = tanggalLahirPria.date.getFullYear();

      return produce(state, (draft) => {
        draft.formN1 = data;
      });
    }

    case FILL_FORM_N2: {
      const { data } = action.payload;
      const { tanggalLahirPria } = data;
      const day = tanggalLahirPria.date.getDate();
      const month = tanggalLahirPria.date.getMonth();
      const year = tanggalLahirPria.date.getFullYear();

      return produce(state, (draft) => {
        draft.formN2 = data;
        draft.formN2.tanggalLahirPria = {
          day,
          month,
          year
        }
      });
    }

    case FILL_FORM_N3: {
      const { data } = action.payload;
      const { tanggalLahirPria } = data;
      const day = tanggalLahirPria.date.getDate();
      const month = tanggalLahirPria.date.getMonth();
      const year = tanggalLahirPria.date.getFullYear();

      return produce(state, (draft) => {
        draft.formN3 = data;
        draft.formN3.tanggalLahirPria = {
          day,
          month,
          year
        }
      });
    }

    case FILL_FORM_N4: {
      const { data } = action.payload;
      const { tanggalLahirPria } = data;
      const day = tanggalLahirPria.date.getDate();
      const month = tanggalLahirPria.date.getMonth();
      const year = tanggalLahirPria.date.getFullYear();

      return produce(state, (draft) => {
        draft.formN4 = data;
        draft.formN4.tanggalLahirPria = {
          day,
          month,
          year
        }
      });
    }

    default : {
      return state;
    }
  }
}

export default formSelesaiReducer;
