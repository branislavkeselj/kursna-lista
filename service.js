const soap=require('soap');

module.exports=(date)=>{

    return new Promise(getClient)
        .then(getValue)      
        
    function getClient(resolve, reject){

        const url='https://webservices.nbs.rs/CommunicationOfficeService1_0/ExchangeRateService.asmx?WSDL';

        soap.createClient(url,(err,client)=> {

            if(err){
    
                reject('createClient | '+err.message);
            }
            else resolve(client)
        })
    }

    function getValue(client){

        return new Promise((resolve, reject)=>{

            const header=`<AuthenticationHeader xmlns="http://communicationoffice.nbs.rs">
                <UserName>username</UserName>
                <Password>password</Password>
                <LicenceID>licenceID</LicenceID>
            </AuthenticationHeader>`;

            const args={
                date:date,
                exchangeRateListTypeID:3 // srednji kurs
            };

            client.addSoapHeader(header);

            client.GetExchangeRateByDate(args,(err, rez)=> {

                if (err) {
                    
                    reject('GetExchangeRateByDate | '+err.message);
                }
                else resolve(rez.GetExchangeRateByDateResult);
            })
       })   
    }
}