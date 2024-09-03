//navbar dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu');
  const dropdownMenu = document.querySelector('.menu + ul');

  menuIcon.addEventListener('click', function() {
      if (dropdownMenu.classList.contains('hidden')) {
          dropdownMenu.classList.remove('hidden');
          dropdownMenu.classList.add('flex');
      } else {
          dropdownMenu.classList.remove('flex');
          dropdownMenu.classList.add('hidden');
      }
  });

  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener('click', function(event) {
      if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove('flex');
          dropdownMenu.classList.add('hidden');
      }
  });
});

//navbar transparent to colored
// Get the navbar element
const navbar = document.querySelector('nav');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Check the scroll position
  if (window.scrollY > 0) {
    // If the scroll position is greater than 0px, change the background color to blue
    navbar.classList.add('bg-blue-300');
    navbar.classList.remove('bg-transparent');
  } else {
    // If the scroll position is at the top (0px), make the background transparent
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-blue-300');
  }
});

//shoes carousel & display 
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.carousel input[type="image"]');
  const labels = document.querySelectorAll('.carousel label');
  let currentLabelIndex = 0;
  let intervalId;

  // Function to show label and focus input based on index
  function showLabel(index) {
      // Hide all labels and remove focus ring from all inputs
      labels.forEach(label => label.classList.add('hidden'));
      inputs.forEach(input => input.classList.remove('ring-2'));

      // Show the label associated with the given index
      labels[index].classList.remove('hidden');

      // Add focus ring to the corresponding input
      inputs[index].classList.add('ring-2');
  }

  // Event Listener for Inputs
  inputs.forEach((input, index) => {
      input.addEventListener('click', function() {
          // Clear the interval to stop auto-cycling when an input is clicked
          clearInterval(intervalId);

          // Show the clicked label and focus ring
          showLabel(index);

          // Reset the index to the clicked one
          currentLabelIndex = index;

          // Restart auto-cycling
          startAutoCycle();
      });
  });

  // Function to start auto-cycling labels and inputs every 10 seconds
  function startAutoCycle() {
      intervalId = setInterval(function() {
          currentLabelIndex = (currentLabelIndex + 1) % labels.length;
          showLabel(currentLabelIndex);
      }, 5000);
  }

  // Start auto-cycling when the page loads
  startAutoCycle();
});

//filter and sort dropdown
document.addEventListener('DOMContentLoaded', function() {
    const filterIcon = document.querySelector('.filter');
    const dropdownFilter = document.querySelector('.filter + .filter-menu');
  
    filterIcon.addEventListener('click', function() {
        if (dropdownFilter.classList.contains('hidden')) {
            dropdownFilter.classList.remove('hidden');
            dropdownFilter.classList.add('flex');
        } else {
            dropdownFilter.classList.remove('flex');
            dropdownFilter.classList.add('hidden');
        }
    });
  
    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!filterIcon.contains(event.target) && !dropdownFilter.contains(event.target)) {
            dropdownFilter.classList.remove('flex');
            dropdownFilter.classList.add('hidden');
        }
    });
  });

//filter item dropdown
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle dropdown toggling
    function toggleDropdown(typeClass) {
        const typeElement = document.querySelector(`.${typeClass}`);
        const typeList = document.querySelector(`.${typeClass} + ul`);

        typeElement.addEventListener('click', function() {
            if (typeList.classList.contains('hidden')) {
                typeList.classList.remove('hidden');
                typeList.classList.add('flex');
            } else {
                typeList.classList.remove('flex');
                typeList.classList.add('hidden');
            }
        });

        window.addEventListener('click', function(event) {
            if (!typeElement.contains(event.target) && !typeList.contains(event.target)) {
                typeList.classList.remove('flex');
                typeList.classList.add('hidden');
            }
        });
    }

    // Initialize dropdowns
    const dropdowns = ['type', 'size', 'price', 'color'];
    dropdowns.forEach(toggleDropdown);
});
