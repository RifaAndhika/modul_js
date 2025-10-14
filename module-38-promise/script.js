function dataBase(data){
       return new Promise((resolve , reject)=>{
        console.log(`Database accessing...${data}`);


        //simulasi pemanggilan data dari database / api
        setTimeout(()=>{
            const datas  = {
                "kursi": 321,
                "bakso": 321,
                "rumah": 3,
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
        const datases = await Promise.allSettled([
           
            dataBase('kursi'),
        ]);

        datases.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log(result.value);
            }else{
                console.error(result.reason);
            }
        });

    }catch (error) {
        console.error(`Error: ${error.message}`);
    }
}


getData();