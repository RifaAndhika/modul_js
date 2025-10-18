function dataBase(data){
       return new Promise((resolve , reject)=>{
        console.log(`Database accessing...${data}`);


        //simulasi pemanggilan data dari database / api
        setTimeout(()=>{
            const datas  = {
                "kursi": 321,
                "bakso": 321,
                "rumah": 0,
                "motor": 45,
                "mobil": 87,
            
            }
            
            if (!datas.hasOwnProperty(data)) {
                return reject(new Error('Data tidak ditemukan'));
            }else if(datas[data] > 0){
                return resolve(`Sisa stok ${data} adalah ${datas[data]}`);
            }else{
                return reject(new Error(`${data} sudah habis`));
            }
        }, 2000);

       });
}

async function getData(){
    try {
        const result = await Promise.all([
            dataBase('rumah'),

        ]);
        console.log(result);
    } catch (error) {
        console.error(error);   
    }
}


getData();