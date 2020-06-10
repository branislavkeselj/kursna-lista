const parser=require('./parser');

const service=require('./service');

exports.parser=()=>{

    const url='https://nbs.rs/kursnaListaModul/srednjiKurs.faces?lang=lat';

    parser(url)
        .then(rez=>{

            console.log(rez)

		/*
		
		[ '978,EMU,EUR,1,117.5821',
		  '36,Australija,AUD,1,72.5368',
		  '124,Kanada,CAD,1,77.5505',
		  '156,Kina,CNY,1,14.6963',
		  '191,Hrvatska,HRK,1,15.5388',
		  '203,Češka Republika,CZK,1,4.4161',
		  '208,Danska,DKK,1,15.7680',
		  '348,Mađarska,HUF,100,34.1967',
		  '392,Japan,JPY,100,95.1311',
		  '414,Kuvajt,KWD,1,338.1711',
		  '578,Norveška,NOK,1,11.2172',
		  '643,Ruska Federacija,RUB,1,1.5247',
		  '752,Švedska,SEK,1,11.3411',
		  '756,Švajcarska,CHF,1,108.1215',
		  '826,Velika Britanija,GBP,1,132.3229',
		  '840,SAD,USD,1,104.1563',
		  '933,Belorusija,BYN,1,43.7368',
		  '946,Rumunija,RON,1,24.3562',
		  '949,Turska,TRY,1,15.3839',
		  '975,Bugarska,BGN,1,60.1188',
		  '977,Bosna i Hercegovina,BAM,1,60.1188',
		  '985,Poljska,PLN,1,26.4795',
		  '40,Austrija,ATS,1,8.5450',
		  '56,Belgija,BEF,100,291.4784',
		  '246,Finska,FIM,1,19.7759',
		  '250,Francuska,FRF,1,17.9253',
		  '280,Nemačka,DEM,1,60.1188',
		  '300,Grčka,GRD,100,34.5069',
		  '372,Irska,IEP,1,149.2985',
		  '380,Italija,ITL,100,6.0726',
		  '442,Luksemburg,LUF,100,291.4784',
		  '620,Portugalija,PTE,100,58.6497',
		  '724,Španija,ESP,100,70.6683' ]
		  
		*/
		
		})
		.catch(err=>{
			console.log(err)
		})
}

exports.service=()=>{

    const date=new Date().toISOString().replace(/(\d+)-(\d+)-(\d+).*/,'$1$2$3');

    service(date) // DATE FORMAT -> YYYYMMDD
        .then(rez=>{

            for(let item of rez.diffgram.ExchangeRateDataSet.ExchangeRate){

                console.log(item.MiddleRate+'-'+item.CurrencyNameSerLat)
            }

            /*

            117.5821-Evro
            72.5368-Australijski dolar
            77.5505-Kanadski dolar
            14.6963-Juan
            15.5388-Hrvatska kuna
            4.4161-Češka kruna
            15.7680-Danska kruna
            34.1967-Forinta
            95.1311-Jen
            338.1711-Kuvajtski dinar
            11.2172-Norveška kruna
            1.5247-Ruska rublja
            11.3411-Švedska kruna
            108.1215-Švajcarski franak
            132.3229-Funta sterlinga
            104.1563-Američki dolar
            43.7368-Beloruska rublja
            24.3562-Lej
            15.3839-Turska lira
            60.1188-Bugarski lev
            60.1188-Konvertibilna marka
            26.4795-Zlot
            8.5450-Šiling
            291.4784-Belgijski franak
            19.7759-Finska marka
            17.9253-Francuski franak
            60.1188-Nemačka marka
            34.5069-Drahma
            149.2985-Irska funta
            6.0726-Italijanska lira
            291.4784-Luksemburški franak
            58.6497-Portugalski eskudo
            70.6683-Španska pezeta
            143.9065-SDR

            {
                attributes: { 'diffgr:id': 'ExchangeRate1', 'msdata:rowOrder': '0' },
                ExchangeRateListNumber: '153',
                Date: '11.08.2010',
                CreateDate: '11.08.2010',
                DateTo: '12.08.2010',
                ExchangeRateListTypeID: '3',
                CurrencyGroupID: '2',
                CurrencyCode: '978',
                CurrencyCodeNumChar: '978',
                CurrencyCodeAlfaChar: 'EUR',
                CurrencyNameSerCyrl: 'Евро',
                CurrencyNameSerLat: 'Evro',
                CurrencyNameEng: 'Euro',
                CountryNameSerCyrl: 'ЕМУ',
                CountryNameSerLat: 'EMU',
                CountryNameEng: 'EMU',
                Unit: '1',
                BuyingRate: '0.0000',
                MiddleRate: '105.0002',
                SellingRate: '0.0000',
                FixingRate: '0.000000'
            }

            */
        })
        .catch(err=>{
            console.log(err)
        })
}
