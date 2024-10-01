import { publicKeyPem, URL_BASE} from './constants';

const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);

export const fetchGlobalRanking = async (idSeasonActivity) => {
  const idSeason_Activity = forge.util.encode64(
    publicKey.encrypt(idSeasonActivity.toString(), 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: forge.mgf1.create(),
    })
  );

  const response = await fetch(URL_BASE + 'get-ranking-active',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idSeasonActivity: idSeason_Activity,
      }),
    }
  );

  if (!response.ok) {
    console.error('Error:', response.status);
    return {
      ok: false,
      data: null
    };
  }

  const data = await response.json();

  return {
    ok: true,
    data: data.result.data
  }
};

export const fetchUserDetail = async (idSeasonActivity) => {
  const token = localStorage.getItem('sessionToken')

  if (token == null || token == undefined || token?.trim() == '') {
    return {
      ok: false,
      data: null
    };
  }

  const idSeason_Activity = forge.util.encode64(
    publicKey.encrypt(idSeasonActivity.toString(), 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: forge.mgf1.create(),
    })
  );

  const response = await fetch(URL_BASE + 'get-ranking-active-user',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idSeasonActivity: idSeason_Activity,
      }),
    }
  );

  if (!response.ok) {
    console.error('Error:', response.status);
    
    return {
      ok: false,
      data: null
    };
  }

  const data = await response.json();

  if (data.errorCode !== 200) {
    return {
      ok: false,
      data: null
    };
  }

  const dataUser = data.result.data[0];

  if (dataUser == undefined || dataUser == null) {
    return {
      ok: false,
      data: null
    };
  }

  const totalSeconds = Number(dataUser.timeActivity2);

  const time = totalSeconds > 0
    ? {
      min: Math.floor(totalSeconds / 60).toString().padStart(2, '0'),
      seg: Math.floor(totalSeconds % 60).toString().padStart(2, '0'),
      cen: Math.floor((totalSeconds * 100) % 100).toString().padStart(2, '0'),
    }
    : {
      min: '00',
      seg: '00',
      cen: '00'
    }
  
  return {
    ok: true,
    data: {
      time,
      score: dataUser.scoreActivity,
      email: dataUser.email
    }
  }
};

export const fetchRakingList = async () => {
  try {
    const response = await fetch(URL_BASE + 'get-trivia-list',
      {
        method: 'GET',
        headers: {
          Authorization: ``,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errorCode !== 200) {
      return {
        ok: false,
        data: null
      };
    }

    return {
      ok: true,
      data: data.result.data
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export const fetchTriviaList = async () => {
  let token = localStorage.getItem('sessionToken');
  try {
    const response = await fetch(URL_BASE + 'get-trivia', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errorCode !== 200) {
      return {
        ok: false,
        data: data
      };
    }

    return {
      ok: true,
      data: data.result?.data[0]
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

export const fetchAwardsWinners = async () => {
  try {
    const response = await fetch(URL_BASE + 'get-winner', {
      method: 'GET',
      headers: {
        Authorization: ``,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errorCode !== 200) {
      return {
        ok: false,
        data: null
      };
    }

    return {
      ok: true,
      data: data.result.data
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export const fetchEmailNewPassword = async (form) => {

  const email_encrypted = forge.util.encode64(
    publicKey.encrypt(form.email, 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: forge.mgf1.create(),
    })
  );

  const response = await fetch(URL_BASE + 'send-code-password-user',
    {
      method: 'POST',
      headers: {
        Authorization: ``,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email_encrypted,
      }),
    }
  );

  if (!response.ok) {
    console.error('Error:', response.status);
    return {
      ok: false,
      data: null
    };
  }

  const data = await response.json();

  if (data.errorCode !== 200) {
    return {
      ok: false,
      data: null
    };
  }

  return {
    ok: true,
    data: data
  }
}

export const fetchCodeNewPassword = async (form) => {

  const code_encrypted = forge.util.encode64(
    publicKey.encrypt(form.pin, 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: forge.mgf1.create(),
    })
  );

  const response = await fetch(URL_BASE + 'get-code-password-user',
    {
      method: 'POST',
      headers: {
        Authorization: ``,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code_encrypted,
      }),
    }
  );

  if (!response.ok) {
    console.error('Error:', response.status);
    return {
      ok: false,
      data: null
    };
  }

  const data = await response.json();
  console.log(data);

  if (data.errorCode !== 200) {
    return {
      ok: false,
      data: null
    };
  }

  return {
    ok: true,
    data: data.result.data
  }
}

export const fetchNewPassword = async (form) => {
  console.log(form);

  let idUser = localStorage.getItem('userId')
  const id_encrypted = forge.util.encode64(
    publicKey.encrypt(idUser, 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: forge.mgf1.create(),
    })
  );

  const password_encrypted = forge.util.encode64(
    publicKey.encrypt(form.newPasswordRepeat, 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: forge.mgf1.create(),
    })
  );

  const response = await fetch(URL_BASE + 'change-password',
    {
      method: 'POST',
      headers: {
        Authorization: ``,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: id_encrypted,
        password: password_encrypted
      }),
    }
  );

  if (!response.ok) {
    console.error('Error:', response.status);
    return {
      ok: false,
      data: null
    };
  }

  const data = await response.json();
  console.log(data);

  if (data.errorCode !== 200) {
    return {
      ok: false,
      data: null
    };
  }

  return {
    ok: true,
    data: data.msg
  }
}

export const fetchProvince = async () => {
  try {
    const response = await fetch(URL_BASE + 'get-province',
      {
        method: 'GET',
        headers: {
          Authorization: ``,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errorCode !== 200) {
      return {
        ok: false,
        data: null
      };
    }

    return {
      ok: true,
      data: data.result.data
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export const fetchDistrict = async (valueId) => {
  const response = await fetch(URL_BASE + 'get-district-province',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idProvince: valueId,
      }),
    }
  );

  if (!response.ok) {
    console.error('Error:', response.status);
    return {
      ok: false,
      data: null
    };
  }

  const data = await response.json();

  return {
    ok: true,
    data: data.result.data
  }
}