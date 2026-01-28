// export const apiFetch = async (url, options = {}) => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(url, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//       ...options.headers,
//     },
//   });

//   if (!res.ok) {
//     // optional: backend error message bhi nikaal sakte ho
//     const errorData = await res.json().catch(() => null);
//     throw new Error(errorData?.message || "API Error");
//   }

//   return res.json();
// };


const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const apiFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  let data = null;

  try {
    data = await res.json(); // ✅ safe parse
  } catch (e) {
    data = null; // ✅ empty body allowed
  }

  if (!res.ok) {
    throw new Error(data?.message || "API Error");
  }

  return data; // ✅ NEVER call res.json() again
};
