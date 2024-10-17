const fetchRandomUser = async () => {  // this fucntion will run on click only 
  const buttonText = document.getElementById('buttonText');
  const loaderIcon = document.getElementById('loaderIcon');
  loaderIcon.style.display = 'inline-block';
  buttonText.style.display = 'none'; // hides text after click and show loader

  try {
    const reponse = await fetch('https://randomuser.me/api/');
    const object = await reponse.json(); 
    const { results } = object;     // Destructured the object here
    const user = results[0];        // Stored user details in user variable
    document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('gender').textContent = user.gender;
    document.getElementById('age').textContent = user.dob.age;
    document.getElementById('location').textContent = `${user.location.city}, ${user.location.country}`;

  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
   loaderIcon.style.display = 'none';
   buttonText.style.display = 'inline'; // will show text after getting data
  }
};

// You can console log every variable in order to see whats going on, in each step!