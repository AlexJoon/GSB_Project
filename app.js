
// Arrow function to demonstrate the opening and closing of the aside bar.
const contentItemOpen = (evt, contentItemId) => {

    // Variables
    const contentBodies = document.querySelectorAll('.content-body');
    const asideItemLinks = document.querySelectorAll('.aside_item_link');
  
    // looping through each content body and assigning to display none.
    contentBodies.forEach((body) => {
      body.style.display = 'none';
    });
  
    // Looping through each content link and assigning to display none.
    asideItemLinks.forEach((link) => {
      link.classList.remove('active');
    });
  
    // Get the selected content body and assign it to display block.
    const selectedContentBody = document.getElementById(contentItemId);
    selectedContentBody.style.display = 'block';

    // Add the active class to the event current target.
    evt.currentTarget.classList.add('active');
  };
  
  // Get the initial element in the asidebar with id="initialItem" and click on it
  const initialItem = document.getElementById('initialItem');

  // If true, trigger the .click function.
  if (initialItem) {
    initialItem.click();
  }