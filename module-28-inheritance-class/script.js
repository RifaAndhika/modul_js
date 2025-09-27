class Produk{
    constructor(nama, harga , stok){
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }
    infoProduct(){
        console.log(`produk ${this.nama} dengan harga ${this.harga} stok ${this.stok}`);
    }

    kurangiStok(jumlah){
        if(this.stok >= jumlah){
            this.stok -= jumlah
            console.log(`Stok terjual ${jumlah}, sisa stok ${this.stok}`);
        }else{
            console.log('stok tidak cukup');
        }
    }


}

class ProdukElektronik extends Produk{
    constructor(harga, kategori, garansi){
        super("elektronik", harga, 100);
        this.kategori = kategori;
        this.garansi = garansi;
    }

    infoProduct(){
        super.infoProduct();
        console.log(`kategori: ${this.kategori}, garansi: ${this.garansi}`);
    }
    
}

class ProdukMakanan extends Produk{
    constructor(harga, kadaluarsa){
        super("makanan", harga, 120);
        this.kadaluarsa = kadaluarsa;
    }
   infoProduct(){
        super.infoProduct();
        console.log(`kadaluarsa: ${this.kadaluarsa}`);
    }
}


const elektronik = new ProdukElektronik(10000000, "laptop",'1 tahun');
const makanan = new ProdukMakanan(1000,'1 minggu');


elektronik.infoProduct();
elektronik.kurangiStok(10);
makanan.infoProduct();