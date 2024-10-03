const fetchRandomUser = async () => {
  const button = document.getElementById('generateButton');
  const buttonText = document.getElementById('buttonText');
  const loaderIcon = document.getElementById('loaderIcon');
  loaderIcon.style.display = 'inline-block';
  buttonText.style.display = 'none';

  try {
    const reponse = await fetch('https://randomuser.me/api/');
    const object = await reponse.json();
    const { results } = object;
    const user = results[0];
    document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('gender').textContent = user.gender;
    document.getElementById('age').textContent = user.dob.age;
    document.getElementById('location').textContent = `${user.location.city}, ${user.location.country}`;

  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
   // Hide loader icon and show button text back to default
   loaderIcon.style.display = 'none';
   buttonText.style.display = 'inline'; // Show button text again
  }
};
