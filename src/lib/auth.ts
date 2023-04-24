const API_URL = 'http://localhost:1337';

export async function login(email:string, password:string) {
  const response = await fetch(`${API_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      identifier: email,
      password
    })
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  const { jwt } = await response.json();

  localStorage.setItem('jwt', jwt);
}

export function logout() {
  localStorage.removeItem('jwt');
}

export function isAuthenticated() {
  return localStorage.getItem('jwt') !== null;
}
