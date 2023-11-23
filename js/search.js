document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const resourceList = document.getElementById('resourceList');
    const resourceDetails = document.getElementById('resourceDetails');
  
    // Sample data - replace this with your actual data
    const resources = [
        { id: 3, title: 'Codecademy', link: 'https://www.codecademy.com/' },
        { id: 4, title: 'Code Avengers', link: 'https://www.codeavengers.com/' },
        { id: 5, title: 'Khan Academy', link: 'https://www.khanacademy.org/' },
        { id: 6, title: 'Treehouse', link: 'https://teamtreehouse.com/' },
        { id: 7, title: 'Udacity', link: 'https://www.udacity.com/' },
        { id: 8, title: 'Coursera', link: 'https://www.coursera.org/' },
        { id: 9, title: 'Pluralsight', link: 'https://www.pluralsight.com/' },
        { id: 10, title: 'Udemy', link: 'https://www.udemy.com/' },
        { id: 11, title: 'FreeCodeCamp', link: 'https://www.freecodecamp.org/' },
        { id: 12, title: 'W3Schools', link: 'https://www.w3schools.com/' },
    ];
  
    // Function to render resource items
    function renderResources(query = '') {
      resourceList.innerHTML = '';
      resources
        .filter(resource => resource.title.toLowerCase().includes(query.toLowerCase()))
        .forEach(resource => {
          const listItem = document.createElement('li');
          listItem.className = 'resource-item';
          listItem.textContent = resource.title;
          
          // Click event to show resource details
          listItem.addEventListener('click', () => {
            showResourceDetails(resource);
          });
  
          resourceList.appendChild(listItem);
        });
    }
  
    // Function to show resource details
    function showResourceDetails(resource) {
      resourceDetails.innerHTML = `
        <h2>${resource.title}</h2>
        <p><a href="${resource.link}" target="_blank">Open Resource</a></p>
      `;
  
      // Add your animations here, for example, fadeIn animation
      resourceDetails.style.display = 'block';
      resourceDetails.style.opacity = '0';
  
      setTimeout(() => {
        resourceDetails.style.opacity = '1';
      }, 100);
    }
  
    // Keypress event listener for search
    searchInput.addEventListener('input', function () {
      const query = this.value.trim();
      renderResources(query);
    });
  });
  