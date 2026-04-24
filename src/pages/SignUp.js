const signup = async (e) => {
  e.preventDefault();

  const cleanFirstName = firstName.trim();
  const cleanLastName = lastName.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanPassword = password.trim();

  if (!cleanFirstName || !cleanLastName || !cleanEmail || !cleanPassword) {
    alert("Please fill all fields");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    alert("Enter a valid email");
    return;
  }

  try {
    const res = await axios.post(`${API}/signup`, {
      firstName: cleanFirstName,
      lastName: cleanLastName,
      email: cleanEmail,
      password: cleanPassword,
    });

    // ❗ No storing user yet (OTP verification pending)
    alert("Signup successful! OTP sent to your email.");
    navigate("/verify");
  } catch (err) {
    console.error(err);

    if (err.response && err.response.status === 503) {
      alert("Server is waking up... please wait 10 seconds and try again.");
      return;
    }

    if (err.response && err.response.data) {
      alert(err.response.data);
    } else {
      alert("Server error. Try again.");
    }
  }
};
