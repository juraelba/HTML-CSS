//Dummy Data
var jsondata = {
	"Fullname": "John A Doe",
	"address1": "123 Main St APT 1A",
	"address2": "Dallas TX 12345-2345",
	"datestart": "2019-06-19T00:00:00.000Z",
	"dateend": "2019-07-17T00:00:00.000Z",
	"accountnum": "000082085463164",
	"summary": [{
		"beginningbalance": "316.10",
		"depositsnadditions": "3390.34",
		"atmndebitwithdrawls": "-254.02",
		"electronicwithdrawls": "-3350.00",
		"checks": "0.00",
		"fees": "-12.00",
		"endingbalance": "90.42"

	}],
	
	"checks": [{
		"2310": {
			"datepaid": "06/13",
			"amount": "123.00"
		},
		"8372": {
			"datepaid": "06/15",
			"amount": "210.00"
		},
		"9236": {
			"datepaid": "06/25",
			"amount": "432.39"
		},
		"3213": {
			"datepaid": "07/05",
			"amount": "163.00"
		},
		"5532": {
			"datepaid": "07/11",
			"amount": "193.83"
		},
		"1793": {
			"datepaid": "07/15",
			"amount": "400.50"
		},
		"3446": {
			"datepaid": "07/21",
			"amount": "300.00"
		},
		"3447": {
			"datepaid": "07/21",
			"amount": "300.00"
		},
		"3448": {
			"datepaid": "07/21",
			"amount": "300.00"
		},
		"3449": {
			"datepaid": "07/21",
			"amount": "300.00"
		},
		"3450": {
			"datepaid": "07/21",
			"amount": "300.00"
		},
		"2845": {
			"datepaid": "07/25",
			"amount": "700.00"
		}
	}],
	"transactions": [{
		"date": "",
		"description": "Beginning Balance",
		"amount": "",
		"balance": "478.31"
	}, {
		"date": "05/10",
		"description": "ATM Cash Deposit  05/10 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "878.31"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/16",
		"description": "ATM Withdrawal 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "-400.00",
		"balance": "1237.45"
	}, {
		"date": "05/16",
		"description": "Home Depot Payment PPD ID: Citigpufdr",
		"amount": "-142.29",
		"balance": "1095.16"
	}, {
		"date": "05/17",
		"description": "ATM Withdrawal 05/17 8734 100St St Dallas NY Card 7293",
		"amount": "-140.00",
		"balance": "955.16"
	}, {
		"date": "05/17",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-90.00",
		"balance": "865.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 9823 E Main Ave El Paso NY Card 7293",
		"amount": "3100.00",
		"balance": "3965.16"
	}, {
		"date": "05/20",
		"description": "ATM Cash Deposit 05/20 8734 100St St Dallas NY Card 7293",
		"amount": "400.00",
		"balance": "4365.16"
	}, {
		"date": "05/20",
		"description": "Purchase Return 05/20 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "356.03",
		"balance": "4721.19"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 Bp#2564177Tce M East Oneida NY Card 7293",
		"amount": "-30.19",
		"balance": "4691.00"
	}, {
		"date": "05/20",
		"description": "Card Purchase With Pin 05/19 The Home Depot 6877 El Paso NY Card 7293",
		"amount": "-500.00",
		"balance": "4191.00"
	}, {
		"date": "05/20",
		"description": "Check # 2156",
		"amount": "-400.00",
		"balance": "3791.00"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/10",
		"description": "Con Ed of NY Intell Ck      PPD ID: 2462467002",
		"amount": "-192.37",
		"balance": "685.94"
	}, {
		"date": "05/10",
		"description": "Nat Ben Life CO Ins. Prem PPD ID: 1231618791",
		"amount": "-121.22",
		"balance": "564.72"
	}, {
		"date": "05/13",
		"description": "Transfer From Chk Xxxxxx1500",
		"amount": "500.00",
		"balance": "1064.72"
	}, {
		"date": "05/13",
		"description": "ATM Withdrawal 05/11 5702 99th St Dallas NY Card 7293",
		"amount": "-540.00",
		"balance": "524.72"
	}, {
		"date": "05/13",
		"description": "Card Purchase With Pin 05/13 Sanz Live Poultry L Dallas NY Card 7293",
		"amount": "-39.00",
		"balance": "485.72"
	}, {
		"date": "05/14",
		"description": "ATM Cash Deposit 05/14 8734 100St St Dallas NY Card 7293",
		"amount": "150.00",
		"balance": "635.72"
	}, {
		"date": "05/14",
		"description": "Con Ed of NY Intell Ck PPD ID: 2462467002",
		"amount": "-209.86",
		"balance": "425.86"
	}, {
		"date": "05/14",
		"description": "Check # 2151",
		"amount": "-117.83",
		"balance": "308.03"
	}, {
		"date": "05/14",
		"description": "Check # 2150",
		"amount": "-115.00",
		"balance": "193.03"
	}, {
		"date": "05/15",
		"description": "Card Purchase 05/14 Mta*ATM Machine New York NY Card 7293",
		"amount": "-33.00",
		"balance": "160.03"
	}, {
		"date": "05/15",
		"description": "Citi Autopay Payment 082961810553633 Tel ID: Citicardap",
		"amount": "-32.21",
		"balance": "127.82"
	}, {
		"date": "05/16",
		"description": "ATM Check Deposit 05/16 8734 100St St Dallas NY Card 7293",
		"amount": "1409.63",
		"balance": "1537.45"
	}, {
		"date": "05/16",
		"description": "ATM Cash Deposit 05/15 8734 100St St Dallas NY Card 7293",
		"amount": "100.00",
		"balance": "1637.45"
	}, {
		"date": "05/20",
		"description": "Citi Autopay Payment 082964402771169 Tel ID: Citicardap",
		"amount": "-76.76",
		"balance": "3714.24"
	}, {
		"date": "05/20",
		"description": "Labs Online ACH ACH Tran 2P-402482313 Tel ID: 3136002961",
		"amount": "-60.00",
		"balance": "3654.24"
	}]
};

$(document).ready(function(){
  var transactions=jsondata.transactions;
  drawPages(transactions);
});

function format(n, sep, decimals) {
    sep = sep || "."; // Default to period as decimal separator
    decimals = decimals || 2; // Default to 2 decimals
    if(n.length > 0)
       return parseFloat(n).toLocaleString().split(sep)[0]
        + sep
        + parseFloat(n).toFixed(decimals).split(sep)[1];
     else
       return "";
}

function drawPages(data){
	//Display checks paid
	var checkspaid=jsondata.checks[0];
	var checkrownum=0;
	for(var checknumber in checkspaid){
		var newRow = $('<tr class="checkrow" />');
		$(document.getElementsByClassName("checkstable")[checkrownum%2]).append(newRow);
		newRow.append($('<td class="checknumber">'+checknumber+' ^'+'</td>'));
		newRow.append($('<td class="datepaid">'+checkspaid[checknumber]["datepaid"]+'</td>'));
		newRow.append($('<td class="amount">'+'$'+checkspaid[checknumber]["amount"]+'</td>'));
		checkrownum++;
	}
	if(checkrownum == 1){
		document.getElementsByClassName("checkstable")[1].style.display="none";
		document.getElementsByClassName("checkstable")[0].style.width="580px";
		document.getElementsByClassName("div_totalchecks")[0].style.width="580px";
	}
	checkrownum=checkrownum/2;
	var countforfirst=12-checkrownum;

	var endingdata={
		"date": "",
		"description": "Ending Balance",
		"amount": "",
		"balance": jsondata.summary[0].endingbalance
	}
	data.push(endingdata);
  //Display first page.
  var currentRows;
  var pageIndex=0;
  if(data.length>countforfirst){
    currentRows=data.slice(0, countforfirst);
  }else{
    currentRows=data;
  }
  drawTable(currentRows, pageIndex);

  //Display middle pages
  for(var rowNum=countforfirst;rowNum<data.length;rowNum+=50){
    pageIndex++;
    currentRows=data.slice(rowNum, rowNum+50);
    drawMiddlePage(currentRows, pageIndex);
  }

  //Display extra datas such as header data, page numbers.
  
  document.getElementById("fullname").innerHTML=jsondata.Fullname;
  document.getElementById("address1").innerHTML=jsondata.address1;
  document.getElementById("address2").innerHTML=jsondata.address2;

  var pagenum_texts=$(".pagenumber");
  var dateranges=$(".daterange");
  var accountnums=$(".accountnum");

  var datestart = new Date(jsondata.datestart.substr(0, 10));
  var dateend = new Date(jsondata.dateend.substr(0, 10));
  var startmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][datestart.getMonth()];
  var endmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][dateend.getMonth()];
  var daterange=startmonth+" "+datestart.getDay()+", "+datestart.getFullYear()+" through "+endmonth+" "+dateend.getDay()+", "+dateend.getFullYear();
  var page_len=pagenum_texts.length-1;
  for(var i = 0;i<page_len;i++){
    pagenum_texts[i].innerHTML="Page "+(i+1)+" of "+page_len;
    dateranges[i].innerHTML=daterange;
    accountnums[i].innerHTML=jsondata.accountnum;
  }

  //Display summary
  var summary=jsondata.summary[0];
  document.getElementById("beginningbalance").innerHTML="$"+summary.beginningbalance;
  document.getElementById("depositsnadditions").innerHTML=summary.depositsnadditions;
  document.getElementById("atmndebitwithdrawls").innerHTML=summary.atmndebitwithdrawls;
  document.getElementById("electronicwithdrawls").innerHTML=summary.electronicwithdrawls;
  document.getElementById("checks").innerHTML=summary.checks;
  document.getElementById("fees").innerHTML=summary.fees;
  document.getElementById("endingbalance").innerHTML="$"+summary.endingbalance;

  $(".middlepage:last-child>.transactionTable>tbody>.ttab:last-child>.bal")[0].innerHTML="$"+summary.endingbalance;
  $(".firstpage>.transactionTable>tbody>.ttab:nth-child(2)>.bal")[0].innerHTML="$"+summary.beginningbalance;

  if(parseInt(summary.depositsnadditions)=="0"){
	$(".depositsnadditions")[0].style.display="none";
  }
  if(parseInt(summary.atmndebitwithdrawls)=="0"){
	$(".atmndebitwithdrawls")[0].style.display="none";
  }
  if(parseInt(summary.electronicwithdrawls)=="0"){
	$(".electronicwithdrawls")[0].style.display="none";
  }
  if(parseInt(summary.checks)=="0"){
	$(".checks")[0].style.display="none";
  }
  if(parseInt(summary.fees)=="0"){
	$(".fees")[0].style.display="none";
  }
  $(".firstpage>.transactionTable>tbody>.ttab:nth-child(2)").addClass("beginingbalance_row")
}

function drawMiddlePage(rows, pageIndex){
  var newPage=$(document.getElementById("middletemplate").innerHTML);
  $("#pages").append(newPage);
  drawTable(rows, pageIndex);
}

function drawTable(rows, pageIndex) {
  for (var i = 0; i < rows.length; i++) {
    drawRow(rows[i], pageIndex);
  }
}

function drawRow(rowData, pageIndex) {
  var newRow = $('<tr class="ttab" />');
  $(document.getElementsByClassName("transactionTable")[pageIndex]).append(newRow); //this will append tr element to table... keep its reference for a while since we will add cels into it
  var description=rowData.description;
  if(description.length>80){
	  description=description.substr(0, 80);
	  description+="...";
  }
  newRow.append($('<td class="date">' + rowData.date + '</td>'));
  newRow.append($('<td class="desc">' + description + '</td>'));
  newRow.append($('<td class="amt ' + ((rowData.amount < 0) ? '' : 'dep') + '">' + format(rowData.amount) + '</td>'));
  newRow.append($('<td class="bal">' + format(rowData.balance) + '</td>'));
}
