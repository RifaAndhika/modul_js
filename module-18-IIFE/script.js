//IIFE (immediately invoked function expression)
//iffe adalah function yang dipanggil langsung setelah dibuat, ini berguna untuk mengisolasi variable dan mencegah mengganggu kode lain

(function(){
    console.log('IFFE dipanggil');
})();


const appConfig = (function(){
    const apiKey = '12345';
    const apiUrl = 'https://example.com';
    
    return {
        getApiKey: function(){
            return apiKey;
        },
        getApiUrl: function(){
            return apiUrl;
        }
    }
})();

console.log(appConfig.getApiKey());
console.log(appConfig.getApiUrl());