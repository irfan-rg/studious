// Function to toggle the profile dropdown visibility
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Function to toggle the notification dropdown visibility
function toggleNotificationDropdown() {
    const dropdown = document.getElementById('notificationDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdowns when clicking outside of them
window.onclick = function(event) {
    const notificationDropdown = document.getElementById('notificationDropdown');
    const profileDropdown = document.getElementById('profileDropdown');
    
    // Hide profile dropdown if clicked outside
    if (!event.target.matches('.profile-pic') && !event.target.matches('#profileDropdown') && !event.target.matches('#profileDropdown a')) {
        profileDropdown.style.display = 'none'; 
    }
    // Hide notification dropdown if clicked outside
    if (!event.target.matches('.notification-icon') && !event.target.matches('#notificationDropdown') && !event.target.matches('#notificationDropdown a')) {
        notificationDropdown.style.display = 'none'; 
    }
};


function toggleProfileDropdown() {
    var dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function toggleNotificationDropdown() {
    var dropdown = document.getElementById("notificationDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// New JavaScript for account settings overlay
function openOverlay() {
    document.getElementById("accountSettingsOverlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("accountSettingsOverlay").style.display = "none";
}

function openTab(evt, tabName) {
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}


// account overlay 

function togglePasswordChange() {
    var passwordSection = document.getElementById('passwordChangeSection');
    passwordSection.style.display = passwordSection.style.display === 'none' ? 'block' : 'none';
}

function changePassword() {
    var newPassword = document.getElementById('newPassword').value;
    if (newPassword) {
        // Here you would typically send this to your server to update the password
        alert('Password updated successfully!');
        togglePasswordChange();
        document.getElementById('newPassword').value = '';
    } else {
        alert('Please enter a new password.');
    }
}

function closeOverlay() {
    document.getElementById('accountSettingsOverlay').style.display = 'none';
}

// Function to open the overlay (you'll need to call this when appropriate)
function openOverlay() {
document.getElementById('accountSettingsOverlay').style.display = 'flex';
}

//Settings Overlay
document.querySelector('.profile-dropdown a:nth-child(2)').onclick = function(e) {
    e.preventDefault();
    openSettingsOverlay();
    document.getElementById('profileDropdown').style.display = 'none';
};

function openSettingsOverlay() {
    document.getElementById('settingsOverlay').style.display = 'flex';
}

function closeSettingsOverlay() {
    document.getElementById('settingsOverlay').style.display = 'none';
} 

// Upload-Redirection Functionality
function goToAdminLogin() {
    // Redirect to the login page with parameters for admin login and redirect
    window.location.href = '/code/login/login.html?role=admin&redirect=' + encodeURIComponent('/code/admin/catalog.html');
}

// Actual Upload Functionality
let selectedFile = null;

function triggerFileUpload() {
    document.getElementById('fileUpload').click();
}

document.getElementById('fileUpload').addEventListener('change', function(e) {
    selectedFile = e.target.files[0];
    if (selectedFile) {
        // Auto-fill the title field with the file name (without extension)
        const fileName = selectedFile.name.replace(/\.[^/.]+$/, "");
        document.getElementById('title').value = fileName;
        
        // // Show success message
        // alert(`File "${selectedFile.name}" selected successfully!`);
    }
});

document.getElementById('add-resource-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    if (selectedFile) {
        formData.append('file', selectedFile);
    } else {
        alert('Please Select a File to Upload.');
        return;
    }
    
    // Here you would typically send the formData to your server
    // For demonstration, we'll simulate an upload
    simulateFileUpload(formData).then(() => {
        alert('Resource added Successfully!');
        this.reset();
        selectedFile = null;
        document.getElementById('fileUpload').value = '';
    }).catch(error => {
        alert('Error uploading file: ' + error);
    });
});

function simulateFileUpload(formData) {
    return new Promise((resolve, reject) => {
        // Simulate network request
        setTimeout(() => {
            // 90% chance of success
            if (Math.random() < 0.9) {
                resolve();
            } else {
                reject('Network error');
            }
        }, 2000); // Simulate 2 second upload time
    });
}
