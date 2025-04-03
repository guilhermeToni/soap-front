function showLoading() {
  // document.getElementById('loading').classList.add('active');
}

function hideLoading() {
  // document.getElementById('loading').classList.remove('active');
  // document.getElementById('json-output').classList.add('visible');
}

function copyToClipboard() {
  const jsonContent = document.getElementById("json-content").textContent;
  navigator.clipboard.writeText(jsonContent).then(function() {
    // Exibe o notify (toast) no estilo Material Design
    M.toast({html: 'Conteúdo copiado para a área de transferência!', classes: 'rounded'});
  }, function(err) {
    M.toast({html: 'Erro ao copiar!', classes: 'rounded red'});
  });
}

async function getCpfData(user, password) {
  const API_URL = document.getElementById('base-url').value;

  if (!API_URL) {
    M.toast({ html: 'Por favor, insira uma base URL!', classes: 'rounded red' });
    return;
  }

  document.getElementById('json-content').textContent = '';
  try {
    const baseUrl = `${API_URL}/data/`;
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: 'g5-senior-services',
        wsdl: 'rubi_Synccom_senior_g5_rh_fp_consultarColaboradorPorCPF',
        method: 'ConsultarColaboradorPorCPF',
        params: {
          user,
          password,
          encryption: 0,
          parameters: {
            numCpf: '112.299.474-50',
          },
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Fail to send request');
    }
    const jsonResponse = await response.json();
    document.getElementById('json-content').textContent = JSON.stringify(jsonResponse, null, 2);
  } catch (error) {
    console.error('Erro ao enviar dados SOAP:', error);
    document.getElementById('json-content').textContent = JSON.stringify(error, null, 2);
  }
};

async function sendData(user, password) {
  const API_URL = document.getElementById('base-url').value;

  if (!API_URL) {
    M.toast({ html: 'Por favor, insira uma base URL!', classes: 'rounded red' });
    return;
  }

  document.getElementById('json-content').textContent = '';
  try {
    const baseUrl = `${API_URL}/send/`;
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: 'g5-senior-services',
        wsdl: 'rubi_Synccom_senior_g5_rh_fp_fichaBasica',
        method: 'FichaBasica_6',
        params: {
          user,
          password,
          encryption: 0,
          parameters: {
            numEmp: 25,
            datAdm: '24/03/2025',
            sitAfa: 1,
            codCar: '991',
            codEsc: 12,
            codFil: 1,
            indAdm: 1,
            numLoc: 'cod-loc',
            codEtb: 0,
            numCtp: 222222,
            codFicFmd: 'U',
            cateSo: 101,
            pagSin: 'N',
            codFicFmd: 'N',
            escVtr: 9,
            tipOpe: 'I',
            codVinHvi: 1,
            admeSo: 1,
            iniEtbHeb: '28/03/2025',
            serCtp: 1,
            conRho: 4,
            numCad: 0,
            apuPonApu: 1,
            codTmaHes: 1,
            tipAdmHfi: 2,
            conTovHlo: 'S',
            fimEtbHeb: '28/03/2025',
            conFinCcu: 1,
            digCar: 0,
            fimEvt: '29/03/2025',
            nomFun: 'Joao Joao',
            // artCltApu: 1,
            turInt: 1,
            conTovHfi: 'N',
            conTosHlo: 'N',
            dexCtp: '10/10/2020',
            modPag: 'P',
            ponEmb: 1,
            codMotHsa: 1,
            catAnt: 101,
            locTraHlo: 'Local 01',
            estCtp: 'RJ',
            tipCon: 1,
            codSinHsi: 1,
            natDesHna: 'A1',
            numCpf: '542.163.500-70',
            tipSex: 'M',
            socSinHsi: 'S',
            codEstHsa: 0,
            numPis: 1111111,
            tpcPix: '01',
            tpCtBa: 1,
            possBHHsi: 'N',
            claSalHsa: 'A',
            admAnt: '12/12/2020',
            dcdPis: '10/12/2020',
            chvPix: '21999999999',
            conBan: 11111,
            nivSalHsa: 'A',
            matAnt: 'a1a1a1',
            tipOpc: 'S',
            datNas: '10/10/2002',
            valSalHsa: 2000.00,
            onuSce: 1,
            datOpc: '10/12/2020',
            perPag: 'M',
            cplSalHsa: 100.00,
            resOnu: 'N',
            conFgt: 123456,
            tipApo: 0,
            perJur: 3,
            recAdi: 'N',
            rec13S: 'S',
            emiCar: 'S',
            codCha: 'a112',
            defFis: 'N',
            benRea: 'S',
            cotDef: 'N',
            racCor: 1,
            catSef: 1,
            datInc: '29/03/2025',
            horInc: '08:10',
          },
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Fail to send request');
    }
    const jsonResponse = await response.json();
    document.getElementById('json-content').textContent = JSON.stringify(jsonResponse, null, 2);
  } catch (error) {
    console.error('Erro ao enviar dados SOAP:', error);
    document.getElementById('json-content').textContent = JSON.stringify(error, null, 2);
  }
};

async function getApiStatus() {
  const API_URL = document.getElementById('base-url').value;

  if (!API_URL) {
    M.toast({ html: 'Por favor, insira uma base URL!', classes: 'rounded red' });
    return;
  }
  try {
    const baseUrl = `${API_URL}/status/`;
    const response = await fetch(baseUrl);
    const jsonResponse = await response.json();
    document.getElementById('json-content').textContent = JSON.stringify(jsonResponse, null, 2);

  } catch (error) {
    console.error('Erro ao enviar dados SOAP:', error);
    document.getElementById('json-content').textContent = JSON.stringify(error, null, 2);
  }
}

document.getElementById('send').addEventListener('click', async () => {
  showLoading();
  document.getElementById('json-content').classList.remove('visible');
  await getCpfData('docbrasil', '@Doc-Brasil1');
  document.getElementById('json-content').classList.add('visible');
  hideLoading();
}, false);

document.getElementById('send-data').addEventListener('click', async () => {
  showLoading();
  document.getElementById('json-content').classList.remove('visible');
  await sendData('docbrasil', '@Doc-Brasil1');
  document.getElementById('json-content').classList.add('visible');
  hideLoading();
}, false);

document.getElementById('status').addEventListener('click', async () => {
  showLoading();
  document.getElementById('json-content').classList.remove('visible');
  await getApiStatus();
  document.getElementById('json-content').classList.add('visible');
  hideLoading();
}, false);

document.getElementById('copy-content').addEventListener('click', () => {
  copyToClipboard();
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems); // Inicializa o select para funcionar corretamente
});