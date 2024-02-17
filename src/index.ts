// Class untuk operasi dasar matematika
export class MatematikaDasar {
  /**
   * Menghitung rata-rata dari jumlah data dan banyak data
   */
  mean(jumlahData: number, banyakData: number): number {
    return jumlahData / banyakData;
  }

  /**
   * Menambahkan sejumlah angka
   */
  tambah(...angka: number[]): number {
    return angka.reduce((prevdata, currentData) => prevdata + currentData, 0);
  }

  /**
   * Mengurangi sejumlah angka
   */
  kurang(...angka: number[]): number {
    return angka.reduce((prevdata, currentData) => prevdata - currentData);
  }

  /**
   * Membagi dua angka
   */
  bagi(angka1: number, angka2: number): number {
    return angka1 / angka2;
  }

  /**
   * Mengalikan dua angka
   */
  kali(angka1: number, angka2: number): number {
    return angka1 * angka2;
  }
}

// Class untuk operasi fisika
export class Fisika {
  /**
   * Menghitung kecepatan dengan rumus jarak dibagi waktu
   */
  kecepatan(jarak: number, waktu: number): number {
    return jarak / waktu;
  }

  /**
   * Menghitung jarak dengan rumus kecepatan dikali waktu
   */
  jarak(kecepatan: number, waktu: number): number {
    return kecepatan * waktu;
  }

  /**
   * Menghitung waktu dengan rumus jarak dibagi kecepatan
   */
  waktuKecepatan(jarak: number, kecepatan: number): number {
    return jarak / kecepatan;
  }
}

// Class untuk operasi volume dan debit
export class VolumeDebit {
  /**
   * Menghitung debit dengan rumus volume dibagi waktu
   */
  debit(volume: number, waktu: number): number {
    return volume / waktu;
  }

  /**
   * Menghitung volume dengan rumus debit dikali waktu
   */
  volume(debit: number, waktu: number): number {
    return debit * waktu;
  }

  /**
   * Menghitung waktu dengan rumus volume dibagi debit
   */
  waktuDebit(debit: number, kecepatan: number): number {
    return debit / kecepatan;
  }
}

// Class untuk operasi pada peta dan skala
export class PetaSkala {
  /**
   * Menghitung skala peta
   */
  skala(jarakPadaPeta: number, jarakSebenarnya: number): string {
    return `${jarakPadaPeta} : ${jarakSebenarnya}`;
  }

  /**
   * Menghitung jarak sebenarnya dari skala peta
   */
  jarakSebenarnya(jarakPadaPeta: number, jarakSebenarnya: number): number {
    return jarakPadaPeta / (jarakPadaPeta / jarakSebenarnya);
  }

  /**
   * Menghitung jarak pada peta dari jarak sebenarnya
   */
  jarakPadaPeta(jarakPadaPeta: number, jarakSebenarnya: number): number {
    return (jarakPadaPeta / jarakSebenarnya) * jarakSebenarnya;
  }
}

// Class untuk operasi trigonometri
export class Trigonometri {
  /**
   * Menghitung nilai sinus dari sudut dalam derajat
   */
  sin(derajat: number): number {
    return Math.sin(derajat * (Math.PI / 180));
  }

  /**
   * Menghitung nilai cosinus dari sudut dalam derajat
   */
  cos(derajat: number): number {
    return Math.cos(derajat * (Math.PI / 180));
  }

  /**
   * Menghitung nilai tangen dari sudut dalam derajat
   */
  tan(derajat: number): number {
    return Math.tan(derajat * (Math.PI / 180));
  }

  /**
   * Menghitung nilai arcsin dari sebuah nilai
   */
  asin(nilai: number): number {
    return Math.asin(nilai) * (180 / Math.PI);
  }

  /**
   * Menghitung nilai arccos dari sebuah nilai
   */
  acos(nilai: number): number {
    return Math.acos(nilai) * (180 / Math.PI);
  }

  /**
   * Menghitung nilai arctan dari sebuah nilai
   */
  atan(nilai: number): number {
    return Math.atan(nilai) * (180 / Math.PI);
  }
}

// Class untuk operasi statistik
export class Statistik {
  /**
   * Menghitung rata-rata dari sebuah array angka
   */
  rataRataArray(arr: number[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  }
}
